from django.db import models
from django.contrib.auth.models import User

#class Usuario(models.Model):
#    nome = models.CharField(max_length=200)
#    url_foto = models.ImageField(upload_to = None, blank=True, null=True)
#    email = models.EmailField('Email')
#    cpf = models.CharField(max_length=15)
#    senha = models.CharField(max_length=30)
#    ehModerador = models.BooleanField(default=False)
#
#    def __str__(self):
#        return f"Nome: {self.nome} - CPF: {self.cpf} - ehModerador: {self.ehModerador}"


class Endereco(models.Model):
    rua = models.CharField(max_length=100)
    CEP = models.CharField(max_length=9)
    numero = models.CharField(max_length=100)
    bairro = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    complemento = models.CharField(max_length=200)


class Freteiro(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    url_foto = models.ImageField(upload_to = None, blank=True, null=True)
    cpf = models.CharField(max_length=15)
    endereco = models.OneToOneField(
        Endereco, on_delete=models.CASCADE)  # pk ?#

    def __str__(self):
        return f"Nome: {self.user.username} - CPF: {self.cpf} "


class Cliente(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    url_foto = models.ImageField(upload_to = None, blank=True, null=True)
    cpf = models.CharField(max_length=15)
    def __str__(self):
        return f"Nome: {self.user.username} - CPF: {self.cpf} "


class Status(models.Model):
    descricao = models.CharField(max_length=15)


class Produto(models.Model):
    nome = models.CharField(max_length=200)
    imagem_url = models.ImageField(upload_to = None, blank=True, null=True)


class TipoVeiculo(models.Model):
    descricao = models.CharField(max_length=50)


class Pedido(models.Model):
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    freteiro = models.ForeignKey(Freteiro, on_delete=models.CASCADE, blank=True, null=True)
    #origem = models.ForeignKey(Endereco, on_delete=models.CASCADE, related_name='pedido_endereco_origem')
    #destino = models.ForeignKey(Endereco, on_delete=models.CASCADE, related_name='pedido_endereco_destino')
    status = models.ForeignKey(Status, on_delete=models.CASCADE)
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    tipo_veiculo = models.ManyToManyField(TipoVeiculo)  # <--------#
    observacao = models.CharField(max_length=300)
    nomeDestinatario = models.CharField(max_length=200)
    #data_turno_Coleta = models.DateField()
    #data_turno_Entrega = models.DateField()


class Veiculo(models.Model):
    tipo_veiculo = models.ForeignKey(TipoVeiculo, on_delete=models.CASCADE)
    placa = models.CharField(max_length=20)
    cor = models.CharField(max_length=20)
    marca = models.CharField(max_length=30)
    modelo = models.CharField(max_length=30)
    ano = models.CharField(max_length=4) # ????????????#


class Proposta(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    veiculo = models.ForeignKey(Veiculo, on_delete=models.CASCADE)
    #cont_proposta_id =#
    valor = models.DecimalField(max_digits=10,decimal_places=2)
    data_criacao = models.DateField(auto_now_add=True)
    ehAceita = models.BooleanField(default=False)
    ehContraproposta = models.BooleanField(default=False)
