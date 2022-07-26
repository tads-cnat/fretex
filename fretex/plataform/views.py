from genericpath import exists
from django.shortcuts import get_object_or_404, render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.contrib.auth.decorators import login_required
from django.views import View
from django.contrib.auth import login, logout
from .models import Endereco, Freteiro, Pedido, Proposta, Status, Produto, TipoVeiculo, Cliente, Veiculo
from django.contrib.auth import get_user_model
from django.contrib.auth.backends import ModelBackend
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist


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
            # inserir condições de next no template
            return render(request, 'login-cadastros/login.html', {'erro': erro})


def logoutView(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))


@method_decorator(login_required(login_url="/login/"), name='dispatch')
class CadastroDeFrete(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'pedidoDeFrete/cadastroFrete.html')

    def post(self, request, *args, **kwargs):
        cep_origem = request.POST.get('cep-origem')
        rua_origem = request.POST['rua-origem']
        numero_origem = request.POST['numero-origem']
        estado_origem = request.POST['estado-origem']
        cidade_origem = request.POST['cidade-origem']
        bairro_origem = request.POST['bairro-origem']
        complemento_origem = request.POST['complemento-origem']

        cep_destino = request.POST.get('cep-destino')
        rua_destino = request.POST['rua-destino']
        numero_destino = request.POST['numero-destino']
        estado_destino = request.POST['estado-destino']
        cidade_destino = request.POST['cidade-destino']
        bairro_destino = request.POST['bairro-destino']
        complemento_destino = request.POST['complemento-destino']

        imagem = request.POST['imagem']
        produto = request.POST['produto']
        observacao = request.POST['observacao']

        nomedestinatario = request.POST['nomedestinatario']
        data_coleta = request.POST.get('data-coleta')
        data_entrega = request.POST.get('data-entrega')
        turno_entrega = request.POST.get('turno-entrega')
        turno_coleta = request.POST.get('turno-coleta')

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
            status.save() #criar apenas uma vez no banco

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
        # posteriormente verificar se já existe conta com o msm email,cpf.
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
            # inserir condição de error no template
            return render(request, 'login-cadastros/cadastroCliente.html', {'erro': erro})


class CadastroFreteiro(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'login-cadastros/cadastroFreteiro.html')

    def post(self, request, *args, **kwargs):
        nome = request.POST['nome']
        # posteriormente verificar se já existe conta com o msm email,cpf.
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
            # inserir condição de error no template
            return render(request, 'login-cadastros/cadastroFreteiro.html', {'erro': erro})


def dashboardFreteiro(request):
    pedidos = Pedido.objects.filter(proposta__usuario=request.user).distinct()
    contexto = {'pedidos': pedidos}
    return render(request, 'dashboards/dashboardFreteiro.html', contexto)


def dashboardCliente(request):
    pedidos = Pedido.objects.filter(cliente__user=request.user)
    contexto = {'pedidos': pedidos}
    return render(request, 'dashboards/dashboardCliente.html', contexto)


def fretes_index(request):
    pedidos = Pedido.objects.all() #Limitar por página.
    return render(request, 'fretes/index.html', {'pedidos': pedidos})


class fretes_show(View):
    def get(self, request, pedido_id):
        pedido = get_object_or_404(Pedido, pk=pedido_id)
        return render(request, 'fretes/show.html', {'pedido': pedido})

    def post(self, request, pedido_id):
        pedido = get_object_or_404(Pedido, pk=pedido_id)
        veiculo = get_object_or_404(Veiculo, pk=request.POST.get('veiculo_id'))
        Proposta.objects.create(usuario=request.user, pedido=pedido,
                                veiculo=veiculo, valor=request.POST.get('valor'))
        return render(request, 'fretes/show.html', {'pedido': pedido})


class detalhesMeusFretesFreteiro(View):
    def get(self, request, pedido_id):
        pedido = get_object_or_404(Pedido, pk=pedido_id)
        contexto = {'pedido': pedido}
        return render(request, 'fretes/detalhesMeusFretesFreteiro.html', contexto)
    def post(self, request, proposta_id):
        proposta = get_object_or_404(Proposta, pk=proposta_id)
        proposta.ehAceita = True
        proposta.save()
        pedido = get_object_or_404(Pedido, pk=proposta.pedido.id)
        pedido.status = "Em andamento"
        pedido.save()
        return HttpResponseRedirect(reverse('dashboardfreteiro'))

def detalhesMeusFretesCliente(request):
    return render(request, 'fretes/detalhesMeusFretesCliente.html')


def perfilCliente(request):
    cliente = request.user.cliente
    contexto = {'cliente': cliente}
    return render(request, 'perfis/perfilCliente.html', contexto)


def perfilFreteiro(request):
    freteiro = request.user.freteiro
    contexto = {'freteiro': freteiro}
    return render(request, 'perfis/perfilFreteiro.html', contexto)


@method_decorator(login_required(login_url="/login/"), name='dispatch')
class EditarPerfilCliente(View):
    def get(self, request, *args, **kwargs):
        cliente = request.user.cliente
        contexto = {'cliente': cliente}
        return render(request, 'perfis/editarPerfilCliente.html', contexto)

    def post(self, request, *args, **kwargs):
        nome = request.POST['nome']
        email = request.POST['email']
        cpf = request.POST['cpf']
        if nome and email and cpf:
            if hasattr(request.user, 'cliente'):
                cliente = request.user.cliente
                cliente.user.username = nome
                cliente.user.email = email
                request.user.save()
                cliente.cpf = cpf
                cliente.save()
                return HttpResponseRedirect(reverse('perfilCliente'))
            else:
                erro = 'Usuario não logado!'
                return render(request, 'login', {'erro': erro})
        else:
            erro = 'Informe corretamente os parâmetros necessários!'
            # inserir condição de error no template
            return render(request, 'login-cadastros/cadastroFreteiro.html', {'erro': erro})


@method_decorator(login_required(login_url="/login/"), name='dispatch')
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
        if nome and email and cpf and cep and rua and numero and estado and bairro:
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
                freteiro.cpf = cpf
                freteiro.save()
                return HttpResponseRedirect(reverse('perfilFreteiro'))
            else:
                erro = 'Usuario não logado!'
                return render(request, 'login', {'erro': erro})
        else:
            erro = 'Informe corretamente os parâmetros necessários!'
            # inserir condição de error no template
            return render(request, 'login-cadastros/cadastroFreteiro.html', {'erro': erro})


def meusVeiculos(request):
    veiculos = Veiculo.objects.filter(freteiro__user=request.user)
    contexto = {'veiculos': veiculos}
    return render(request, 'perfis/meusVeiculos.html', contexto)


@method_decorator(login_required(login_url="/login/"), name='dispatch')
class AdicionarVeiculo(View):
    def get(self, request, *args, **kwargs):
        freteiro = request.user.freteiro
        contexto = {'freteiro': freteiro}
        return render(request, 'perfis/adicionarVeiculo.html', contexto)

    def post(self, request, *args, **kwargs):
        marca = request.POST['marca']
        modelo = request.POST['modelo']
        ano = request.POST['ano']
        placa_veiculo = request.POST['placa-veiculo']
        cor_veiculo = request.POST['cor-veiculo']
        tipo_veiculo = request.POST['tipo-veiculo']

        if marca and modelo and ano and placa_veiculo and cor_veiculo:
            if hasattr(request.user, 'freteiro'):
                tipoveiculo = TipoVeiculo(descricao=tipo_veiculo)
                tipoveiculo.save()
                veiculo = Veiculo(freteiro=request.user.freteiro, tipo_veiculo=tipoveiculo, marca=marca, modelo=modelo,
                                ano=ano, placa=placa_veiculo, cor=cor_veiculo)
                veiculo.save()
                return HttpResponseRedirect(reverse('meusVeiculos'))
            else:
                erro = 'Usuario não logado!'
                return render(request, 'login', {'erro': erro})
        else:
            erro = 'Informe corretamente os parâmetros necessários!'
            return render(request, 'pedidoDeFrete/cadastroFrete.html', {'erro': erro})
