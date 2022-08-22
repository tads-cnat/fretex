from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required, user_passes_test
from django.views import View
from django.contrib.auth import login, logout
from .models import Endereco, Freteiro, Pedido, Proposta, Status, Produto, TipoVeiculo, Cliente, Veiculo
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import redirect

def freteiro_check(user):
    return hasattr(user, 'freteiro')

def cliente_check(user):
    return hasattr(user, 'cliente')

class EmailBackend(ModelBackend):
    def authenticate(request, username=None, password=None, **kwargs):
        UserModel = get_user_model()
        try:
            user = UserModel.objects.get(email=username)
        except UserModel.DoesNotExist:
            return None
        else:
            if user.check_password(password):
                return user
        return None


class Login(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'login-cadastros/login.html')

    def post(self, request, *args, **kwargs):
        email = request.POST['email']
        senha = request.POST['senha']
        user = EmailBackend.authenticate(
            request, username=email, password=senha)
        if user is not None:
            login(request, user)
            if hasattr(request.user, 'cliente'):
                return HttpResponseRedirect(reverse('dashboardcliente'))
            else:
                return HttpResponseRedirect(reverse('fretes_index'))
        else:
            erro = 'Email e senha inválidas!'

            return render(request, 'login-cadastros/login.html', {'erro': erro})


def logoutView(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))

@method_decorator(user_passes_test(cliente_check, login_url='/login/'), name='dispatch')
class CadastroDeFrete(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'pedidoDeFrete/cadastroFrete.html')

    def post(self, request, *args, **kwargs):
        cep_origem = request.POST.get('cepOrigem')
        rua_origem = request.POST['ruaOrigem']
        numero_origem = request.POST['numeroOrigem']
        estado_origem = request.POST['estadoOrigem']
        cidade_origem = request.POST['cidadeOrigem']
        bairro_origem = request.POST['bairroOrigem']
        complemento_origem = request.POST['complemento-origem']

        cep_destino = request.POST.get('cepDestino')
        rua_destino = request.POST['ruaDestino']
        numero_destino = request.POST['numeroDestino']
        estado_destino = request.POST['estadoDestino']
        cidade_destino = request.POST['cidadeDestino']
        bairro_destino = request.POST['bairroDestino']
        complemento_destino = request.POST['complemento-destino']

        imagem = request.FILES['imagem']
        produto = request.POST['produto']
        observacao = request.POST['observacao']

        nomedestinatario = request.POST['nomedestinatario']
        data_coleta = request.POST.get('dataColeta')
        data_entrega = request.POST.get('dataEntrega')
        turno_entrega = request.POST.get('turnoEntrega')
        turno_coleta = request.POST.get('turnoColeta')

        if (cep_origem and rua_origem and numero_origem and estado_origem and cidade_origem and bairro_origem and
            cep_destino and rua_destino and numero_destino and estado_destino and cidade_destino and bairro_destino and
                produto and nomedestinatario and data_coleta and data_entrega and turno_entrega and turno_coleta):

            endereco_origem = Endereco(rua=rua_origem, CEP=cep_origem, numero=numero_origem,
                                    bairro=bairro_origem, estado=estado_origem, cidade=cidade_origem, complemento=complemento_origem)
            endereco_origem.save()

            endereco_destino = Endereco(rua=rua_destino, CEP=cep_destino, numero=numero_destino,
                                        bairro=bairro_destino, estado=estado_destino, cidade=cidade_destino, complemento=complemento_destino)
            endereco_destino.save()

            status = Status(descricao="Em espera")
            status.save()

            produto = Produto(nome=produto, imagem_url=imagem)
            produto.save()

            if hasattr(request.user, 'cliente'):
                pedido = Pedido(cliente=request.user.cliente, status=status, produto=produto,
                                observacao=observacao, nomeDestinatario=nomedestinatario, origem=endereco_origem,
                                destino=endereco_destino, data_coleta=data_coleta, data_entrega=data_entrega,
                                turno_entrega=turno_entrega, turno_coleta=turno_coleta)
                pedido.save()

                try:
                    TipoVeiculo.objects.get(descricao="carro")
                except ObjectDoesNotExist:
                    carro = TipoVeiculo(descricao="carro")
                    carro.save()
                    moto = TipoVeiculo(descricao="moto")
                    moto.save()
                    caminhao = TipoVeiculo(descricao="caminhao")
                    caminhao.save()
                    bicicleta = TipoVeiculo(descricao="bicicleta")
                    bicicleta.save()

                tipo_veiculo = request.POST.getlist('tipoveiculos')
                for tipoveiculos in tipo_veiculo:
                    r = TipoVeiculo.objects.get(descricao=tipoveiculos)
                    pedido.tipo_veiculo.add(r)

                return HttpResponseRedirect(reverse('dashboardcliente'))
            else:
                erro = 'Usuario não logado!'
                return render(request, 'login', {'erro': erro})
        else:
            erro = 'Informe corretamente os parâmetros necessários!'
            return render(request, 'pedidoDeFrete/cadastroFrete.html', {'erro': erro})


def landing(request):
    return render(request, 'landing.html')


def escolhaCadastro(request):
    return render(request, 'login-cadastros/escolhaCadastro.html')


class CadastroCliente(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'login-cadastros/cadastroCliente.html')

    def post(self, request, *args, **kwargs):
        nome = request.POST['nome']
        email = request.POST['email']
        cpf = request.POST['cpf']
        senha = request.POST['senha']
        if nome and email and cpf and senha:
            user = User.objects.create_user(
                username=nome, password=senha, email=email)
            Cliente.objects.create(user=user, cpf=cpf)
            return HttpResponseRedirect(reverse('login'))
        else:
            erro = 'Informe corretamente os parâmetros necessários!'

            return render(request, 'login-cadastros/cadastroCliente.html', {'erro': erro})


class CadastroFreteiro(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'login-cadastros/cadastroFreteiro.html')

    def post(self, request, *args, **kwargs):
        nome = request.POST['nome']
        email = request.POST['email']
        cpf = request.POST['cpf']
        senha = request.POST['senha']
        cep = request.POST['cep']
        rua = request.POST['rua']
        numero = request.POST['numero']
        estado = request.POST['estado']
        cidade = request.POST['cidade']
        bairro = request.POST['bairro']
        complemento = request.POST['complemento']
        if nome and email and cpf and senha and cep and rua and numero and estado and cidade and bairro:
            user = User.objects.create_user(
                username=nome, password=senha, email=email)
            endereco = Endereco.objects.create(
                CEP=cep, rua=rua, numero=numero, bairro=bairro, cidade=cidade, estado=estado, complemento=complemento)
            Freteiro.objects.create(user=user, cpf=cpf, endereco=endereco)
            return HttpResponseRedirect(reverse('login'))
        else:
            erro = 'Informe corretamente os parâmetros necessários!'

            return render(request, 'login-cadastros/cadastroFreteiro.html', {'erro': erro})


@user_passes_test(freteiro_check, login_url='/login/')
def dashboardFreteiro(request):
    pedidosEspera = Pedido.objects.filter(proposta__usuario=request.user).filter(status__descricao = "Em espera").distinct()
    pedidosAndamento = Pedido.objects.filter(proposta__usuario=request.user).filter(status__descricao = "Em andamento").distinct()
    pedidosEncerrados = Pedido.objects.filter(proposta__usuario=request.user).filter(status__descricao = "Encerrado").distinct()
    contexto = {'pedidosEspera': pedidosEspera, 'pedidosAndamento': pedidosAndamento, 'pedidosEncerrados': pedidosEncerrados}
    return render(request, 'dashboards/dashboardFreteiro.html', contexto)


@user_passes_test(cliente_check, login_url='/login/')
def dashboardCliente(request):
    pedidosEspera = Pedido.objects.filter(cliente__user=request.user).filter(status__descricao = "Em espera")
    pedidosAndamento = Pedido.objects.filter(cliente__user=request.user).filter(status__descricao = "Em andamento")
    pedidosEncerrados = Pedido.objects.filter(cliente__user=request.user).filter(status__descricao = "Encerrado")
    contexto = {'pedidosEspera': pedidosEspera ,'pedidosAndamento': pedidosAndamento, 'pedidosEncerrados': pedidosEncerrados}
    return render(request, 'dashboards/dashboardCliente.html', contexto)


@user_passes_test(freteiro_check, login_url='/login/')
def fretes_index(request):
    filtered = {}
    for param in request.GET:
        filtered[param] = request.GET[param]

    pedidos = Pedido.objects.filter(**filtered)
    return render(request, 'fretes/index.html', {'pedidos': pedidos})


def fretes_show(request, pedido_id):
    pedido = get_object_or_404(Pedido, pk=pedido_id)
    contexto = {'pedido': pedido}
    if hasattr(request.user, 'freteiro'):
        for proposta in pedido.proposta_set.all().reverse():
            if request.user == proposta.usuario:
                proposta_usuario = proposta
                contexto = {'pedido': pedido, 'propostafreteiro': proposta_usuario}
    return render(request, 'fretes/show.html', contexto)


def proposta_create(request):
    pedido = get_object_or_404(Pedido, pk=request.POST.get('pedido_id'))
    if request.POST.get('ehContraproposta'):
        proposta_inicial = get_object_or_404(Proposta, pk=request.POST.get('proposta_id'))
        Proposta.objects.create(pedido=pedido,
        usuario=request.user,
        ehContraproposta=True,
        valor=request.POST.get('valor'),
        veiculo=proposta_inicial.veiculo,
        contraproposta_id=proposta_inicial.id)
        proposta_inicial.ehNegada = True
        proposta_inicial.save()
    else:
        veiculo = get_object_or_404(Veiculo, pk=request.POST.get('veiculo_id'))
        Proposta.objects.create(usuario=request.user, pedido=pedido, veiculo=veiculo, valor=request.POST.get('valor'))
    return HttpResponseRedirect(reverse( 'fretes_show', args=(request.POST.get('pedido_id'),)))


def proposta_aceitar(request, proposta_id):
    proposta = get_object_or_404(Proposta, pk=proposta_id)
    proposta.ehAceita = True
    proposta.save()
    pedido = get_object_or_404(Pedido, pk=proposta.pedido.id)
    pedido.status = Status.objects.get(descricao='Em andamento')
    pedido.save()

    for proposta in pedido.proposta_set.all():
        if proposta.ehAceita == False:
            proposta.ehNegada = True
            proposta.save()

    if hasattr(request.user, 'freteiro'):
        return HttpResponseRedirect(reverse('dashboardfreteiro'))
    else:
        return HttpResponseRedirect(reverse('dashboardcliente'))


def entrega_concluida(request, pedido_id):
    pedido = get_object_or_404(Pedido, pk=pedido_id)
    pedido.status = Status.objects.get(descricao='Encerrado')
    pedido.save()
    return HttpResponseRedirect(reverse('dashboardfreteiro'))


@user_passes_test(cliente_check, login_url='/login/')
def perfilCliente(request):
    cliente = request.user.cliente
    contexto = {'cliente': cliente}
    return render(request, 'perfis/perfilCliente.html', contexto)


@user_passes_test(freteiro_check, login_url='/login/')
def perfilFreteiro(request):
    freteiro = request.user.freteiro
    contexto = {'freteiro': freteiro}
    return render(request, 'perfis/perfilFreteiro.html', contexto)


@method_decorator(user_passes_test(cliente_check, login_url='/login/'), name='dispatch')
class EditarPerfilCliente(View):
    def get(self, request, *args, **kwargs):
        cliente = request.user.cliente
        contexto = {'cliente': cliente}
        return render(request, 'perfis/editarPerfilCliente.html', contexto)

    def post(self, request, *args, **kwargs):
        nome = request.POST['nome']
        email = request.POST['email']
        cpf = request.POST['cpf']
        imagem = request.FILES['imagem']
        if nome and email and cpf:
            if hasattr(request.user, 'cliente'):
                cliente = request.user.cliente
                cliente.user.username = nome
                cliente.user.email = email
                request.user.save()
                cliente.url_foto = imagem
                cliente.cpf = cpf
                cliente.save()
                return HttpResponseRedirect(reverse('perfilCliente'))
            else:
                erro = 'Usuario não logado!'
                return render(request, 'login', {'erro': erro})
        else:
            erro = 'Informe corretamente os parâmetros necessários!'
            return render(request, 'login-cadastros/cadastroFreteiro.html', {'erro': erro})



@method_decorator(user_passes_test(freteiro_check, login_url='/login/'), name='dispatch')
class EditarPerfilFreteiro(View):
    def get(self, request, *args, **kwargs):
        freteiro = request.user.freteiro
        contexto = {'freteiro': freteiro}
        return render(request, 'perfis/editarPerfilFreteiro.html', contexto)

    def post(self, request, *args, **kwargs):
        nome = request.POST['nome']
        email = request.POST['email']
        cpf = request.POST['cpf']
        cep = request.POST['cep']
        rua = request.POST['rua']
        numero = request.POST['numero']
        estado = request.POST['estado']
        bairro = request.POST['bairro']
        complemento = request.POST['complemento']
        imagem = request.FILES['imagem']
        if nome and email and cpf and cep and rua and numero and estado and bairro and imagem:
            if hasattr(request.user, 'freteiro'):
                freteiro = request.user.freteiro
                freteiro.user.username = nome
                freteiro.user.email = email
                request.user.save()
                freteiro.endereco.CEP = cep
                freteiro.endereco.rua = rua
                freteiro.endereco.numero = numero
                freteiro.endereco.estado = estado
                freteiro.endereco.bairro = bairro
                freteiro.endereco.complemento = complemento
                freteiro.endereco.save()
                freteiro.url_foto = imagem
                freteiro.cpf = cpf
                freteiro.save()
                return HttpResponseRedirect(reverse('perfilFreteiro'))
            else:
                erro = 'Usuario não logado!'
                return render(request, 'login', {'erro': erro})
        else:
            erro = 'Informe corretamente os parâmetros necessários!'

            return render(request, 'login-cadastros/cadastroFreteiro.html', {'erro': erro})


@user_passes_test(freteiro_check, login_url='/login/')
def meusVeiculos(request):
    veiculos = Veiculo.objects.filter(freteiro__user=request.user)
    contexto = {'veiculos': veiculos}
    return render(request, 'perfis/meusVeiculos.html', contexto)



@method_decorator(user_passes_test(freteiro_check, login_url='/login/'), name='dispatch')
class AdicionarVeiculo(View):
    def get(self, request, *args, **kwargs):
        freteiro = request.user.freteiro
        contexto = {'freteiro': freteiro}
        return render(request, 'perfis/adicionarVeiculo.html', contexto)

    def post(self, request, *args, **kwargs):
        marca = request.POST['marca']
        modelo = request.POST['modelo']
        ano = request.POST['ano']
        placa_veiculo = request.POST['placaVeiculo']
        cor_veiculo = request.POST['corVeiculo']
        tipo_veiculo = request.POST['tipoVeiculo']
        imagem = request.FILES['imagemveiculo']
        if marca and modelo and ano and placa_veiculo and cor_veiculo and imagem:
            if hasattr(request.user, 'freteiro'):
                tipoveiculo = TipoVeiculo.objects.get(descricao= tipo_veiculo)
                veiculo = Veiculo(freteiro=request.user.freteiro, url_foto=imagem, tipo_veiculo=tipoveiculo, marca=marca, modelo=modelo, ano=ano, placa=placa_veiculo, cor=cor_veiculo)
                veiculo.save()
                return HttpResponseRedirect(reverse('meusVeiculos'))
            else:
                erro = 'Usuario não logado!'
                return render(request, 'login', {'erro': erro})
        else:
            erro = 'Informe corretamente os parâmetros necessários!'
            return render(request, 'perfis/adicionarVeiculo.html', {'erro': erro})


login_required(login_url="/login/")
def DeletarVeiculo(request, veiculo_id):
    veiculo = Veiculo.objects.get(id = veiculo_id)
    veiculo.delete()
    return redirect('meusVeiculos')


login_required(login_url="/login/")
def DeletarPedido(request, pedido_id):
    pedido = Pedido.objects.get(id = pedido_id)
    pedido.delete()
    return redirect('dashboardcliente')