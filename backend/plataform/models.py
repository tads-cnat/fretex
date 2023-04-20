from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models


class Endereco(models.Model):
    rua = models.CharField(max_length=100)
    CEP = models.CharField(max_length=9)
    numero = models.CharField(max_length=100)
    bairro = models.CharField(max_length=100)
    cidade = models.CharField(max_length=100)
    estado = models.CharField(max_length=100)
    complemento = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return f"{self.rua}, {self.numero}, {self.bairro}. {self.cidade}"


class Freteiro(User):
    url_foto = models.ImageField(
        upload_to="usuarios/freteiro/%Y/%m/%d/", blank=True, null=True
    )
    cpf = models.CharField(max_length=15)
    endereco = models.OneToOneField(Endereco, on_delete=models.CASCADE)
    capa_foto = models.ImageField(
        upload_to="usuarios/freteiro/%Y/%m/%d/", blank=True, null=True
    )

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return f"Nome: {self.user_ptr.username} - CPF: {self.cpf} "


class Cliente(User):
    url_foto = models.ImageField(
        upload_to="usuarios/cliente/%Y/%m/%d/", blank=True, null=True
    )
    cpf = models.CharField(max_length=15)
    capa_foto = models.ImageField(
        upload_to="usuarios/cliente/%Y/%m/%d/", blank=True, null=True
    )

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return f"Nome: {self.user_ptr.username} - CPF: {self.cpf} "


class Produto(models.Model):
    nome = models.CharField(max_length=200)
    imagem_url = models.ImageField(upload_to="produto/%Y/%m/%d/", blank=True, null=True)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.nome


class TipoVeiculo(models.Model):
    descricao = models.CharField(max_length=50)

    class Meta:
        ordering = ["-id"]

    def __str__(self):
        return self.descricao


class Pedido(models.Model):
    STATUS = [
        ("CA", "Cancelado"),
        ("EN", "Em negociação"),
        ("AG", "Aguardando coleta"),
        ("TR", "Em trânsito"),
        ("CO", "Concluído"),
    ]
    TURNO = [("TA", "Tarde"), ("MA", "Manhã"), ("NO", "Noite")]

    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    origem = models.ForeignKey(
        Endereco, on_delete=models.CASCADE, related_name="pedido_endereco_origem"
    )
    destino = models.ForeignKey(
        Endereco, on_delete=models.CASCADE, related_name="pedido_endereco_destino"
    )
    status = models.CharField(max_length=2, choices=STATUS, default="EN")
    produto = models.ForeignKey(Produto, on_delete=models.CASCADE)
    tipo_veiculo = models.ManyToManyField(TipoVeiculo)
    observacao = models.CharField(max_length=300, blank=True, null=True)
    nomeDestinatario = models.CharField(max_length=200)
    data_criacao = models.DateField(auto_now_add=True)
    data_coleta = models.DateField()
    data_entrega = models.DateField()
    turno_entrega = models.CharField(max_length=2, choices=TURNO)
    turno_coleta = models.CharField(max_length=2, choices=TURNO)
    criado_em = models.DateField(auto_now_add=True)

    class Meta:
        ordering = ["-id"]


class Veiculo(models.Model):
    freteiro = models.ForeignKey(Freteiro, on_delete=models.CASCADE)
    url_foto = models.ImageField(upload_to="veiculo", blank=True, null=True)
    tipo_veiculo = models.ForeignKey(TipoVeiculo, on_delete=models.CASCADE)
    placa = models.CharField(max_length=20)
    cor = models.CharField(max_length=20)
    marca = models.CharField(max_length=30)
    modelo = models.CharField(max_length=30)
    ano = models.CharField(max_length=4)

    class Meta:
        ordering = ["-id"]


class Proposta(models.Model):
    usuario = models.ForeignKey(User, on_delete=models.CASCADE)
    pedido = models.ForeignKey(
        Pedido, on_delete=models.CASCADE, related_name="proposta_set"
    )
    veiculo = models.ForeignKey(Veiculo, on_delete=models.CASCADE)
    valor = models.DecimalField(max_digits=10, decimal_places=2)
    data_criacao = models.DateTimeField(auto_now_add=True)
    eh_aceita = models.BooleanField(default=False)
    is_contraproposta = models.BooleanField(default=False)
    is_esperandoFreteiro = models.BooleanField(default=True)
    is_esperandoCliente = models.BooleanField(default=False)
    contraproposta = models.ForeignKey(
        "self", on_delete=models.CASCADE, null=True, blank=True
    )
    ehNegada = models.BooleanField(default=False)

    class Meta:
        ordering = ["-id"]

    def eh_contraprosta(self, obj):
        return obj.contraproposta is not None


class AvaliacaoUsuario(models.Model):
    avaliador = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="avaliador"
    )
    avaliado = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="avaliado"
    )
    nota = models.IntegerField(validators=[MaxValueValidator(5), MinValueValidator(0)])
    observacao = models.TextField()


class Log(models.Model):
    data = models.DateTimeField(auto_now_add=True)
