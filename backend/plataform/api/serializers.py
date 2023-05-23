from django.contrib.auth.models import User
from django.db import transaction
from plataform.models import (
    AvaliacaoUsuario,
    Cliente,
    Endereco,
    Freteiro,
    Log,
    Pedido,
    Produto,
    Proposta,
    TipoVeiculo,
    Veiculo,
)
from rest_framework import serializers
from rest_framework.exceptions import MethodNotAllowed
from rest_framework.validators import UniqueValidator


class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = "__all__"

    def create(self, validated_data):
        raise MethodNotAllowed("POST")

    def update(self, instance, validated_data):
        raise MethodNotAllowed("PUT")


class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def create(self, validated_data):
        raise MethodNotAllowed("POST")

    def update(self, instance, validated_data):
        raise MethodNotAllowed("PUT")


class RegisterClienteSerializer(serializers.Serializer):
    full_name = serializers.CharField(required=True)
    cpf = serializers.CharField(validators=[UniqueValidator(queryset=Cliente.objects.all())])
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField()
    capa_foto = serializers.ImageField(required=False)

    @transaction.atomic
    def create(self, validated_data):
        full_name_sp = validated_data.pop("full_name").split(" ")
        validated_data["first_name"] = full_name_sp.pop(0)
        validated_data["last_name"] = " ".join(full_name_sp)

        validated_data["username"] = validated_data["email"]
        cliente = Cliente.objects.create(**validated_data)
        cliente.set_password(validated_data.get("password"))
        cliente.save()
        return cliente

    def update(self, instance, validated_data):
        raise MethodNotAllowed("PUT")


class RegisterFreteiroSerializer(serializers.Serializer):
    full_name = serializers.CharField(required=True)
    cpf = serializers.CharField(validators=[UniqueValidator(queryset=Freteiro.objects.all())])
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField()
    endereco = EnderecoSerializer()
    capa_foto = serializers.ImageField(required=False)
    url_foto = serializers.ImageField(required=False)

    @transaction.atomic
    def create(self, validated_data):
        full_name_sp = validated_data.pop("full_name").split(" ")
        validated_data["first_name"] = full_name_sp.pop(0)
        validated_data["last_name"] = " ".join(full_name_sp)

        validated_data["username"] = validated_data["email"]
        endereco = validated_data.pop("endereco")

        end = Endereco.objects.create(**endereco)
        end.save()

        freteiro = Freteiro.objects.create_user(**validated_data, endereco=end)
        freteiro.set_password(validated_data.get("password"))
        freteiro.save()

        return freteiro

    def update(self, instance, validated_data):
        raise MethodNotAllowed("PUT")


class UserSerializer(serializers.ModelSerializer):
    extra_data = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = ("id", "username", "first_name", "email", "last_name", "extra_data")

    def get_extra_data(self, obj):
        freteiro = Freteiro.objects.filter(user_ptr=obj).first()
        cliente = Cliente.objects.filter(user_ptr=obj).first()
        return {
            "freteiro": freteiro.id if freteiro else None,
            "cliente": cliente.id if cliente else None,
        }


class FreteiroSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer(read_only=False)
    password = serializers.CharField(write_only=True)
    url_foto = serializers.ImageField(required=False)

    class Meta:
        model = Freteiro
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "password",
            "email",
            "cpf",
            "url_foto",
            "endereco",
            "capa_foto",
        )

    @transaction.atomic
    def create(self, validated_data):
        if self.is_valid():
            endereco = validated_data["endereco"]
            del validated_data["endereco"]

            end = Endereco.objects.create(**endereco)
            end.save()

            freteiro = Freteiro.objects.create_user(**validated_data, endereco=end)
            freteiro.set_password(validated_data.get("password"))
            freteiro.save()

            return freteiro

    def update(self, instance, validated_data):
        address_data = validated_data.pop("endereco", None)
        if address_data:
            instance.endereco.cep = address_data.get("cep", instance.endereco.CEP)
            instance.endereco.rua = address_data.get("rua", instance.endereco.rua)
            instance.endereco.numero = address_data.get("numero", instance.endereco.numero)
            instance.endereco.bairro = address_data.get("bairro", instance.endereco.bairro)
            instance.endereco.cidade = address_data.get("cidade", instance.endereco.cidade)
            instance.endereco.estado = address_data.get("estado", instance.endereco.estado)
            instance.endereco.complemento = address_data.get("complemento", instance.endereco.complemento)
            instance.endereco.save()
        instance.username = validated_data.get("username", instance.username)
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        instance.email = validated_data.get("email", instance.email)
        instance.cpf = validated_data.get("cpf", instance.cpf)
        instance.url_foto = validated_data.get("url_foto", instance.url_foto)
        instance.capa_foto = validated_data.get("capa_foto", instance.capa_foto)
        password = validated_data.get("password", None)
        if password:
            instance.set_password(password)
        instance.save()
        return instance


# TODO - VErificar fotos nos serializers


class ClienteSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Cliente
        fields = (
            "id",
            "username",
            "first_name",
            "last_name",
            "password",
            "email",
            "cpf",
            "url_foto",
            "capa_foto",
        )

    @transaction.atomic
    def create(self, validated_data):
        if self.is_valid():
            cliente = Cliente.objects.create_user(**validated_data)
            cliente.set_password(validated_data.get("password"))
            cliente.save()
            return cliente


class TipoVeiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoVeiculo
        fields = "__all__"


class ProdutoSerializer(serializers.ModelSerializer):
    imagem_url = serializers.ImageField(required=False)

    class Meta:
        model = Produto
        fields = "__all__"


class PedidoSerializer(serializers.ModelSerializer):
    origem = EnderecoSerializer()
    destino = EnderecoSerializer()
    produto = ProdutoSerializer()
    tipo_veiculo = serializers.PrimaryKeyRelatedField(many=True, queryset=TipoVeiculo.objects.all())
    cliente_first_name = serializers.CharField(source="cliente.first_name", read_only=True)
    cliente_last_name = serializers.CharField(source="cliente.last_name", read_only=True)

    def to_internal_value(self, data):
        data["status"] = "EN"
        data["cliente"] = self.context["request"].user.cliente
        return super().to_internal_value(data)

    class Meta:
        model = Pedido
        fields = (
            "id",
            "cliente",
            "cliente_first_name",
            "cliente_last_name",
            "produto",
            "origem",
            "destino",
            "status",
            "tipo_veiculo",
            "observacao",
            "nomeDestinatario",
            "data_coleta",
            "data_entrega",
            "turno_entrega",
            "turno_coleta",
            "criado_em",
        )

    @transaction.atomic
    def create(self, validated_data):
        origem = validated_data.pop("origem")
        origem = Endereco.objects.create(**origem)

        destino = validated_data.pop("destino")
        destino = Endereco.objects.create(**destino)

        produto = validated_data.pop("produto")
        produto = Produto.objects.create(**produto)

        tipos_veiculos = validated_data.pop("tipo_veiculo")
        tipos_veiculos = self.context["request"].data.get("tipo_veiculo[]")

        if tipos_veiculos is None or tipos_veiculos.strip() == "":
            raise serializers.ValidationError({"tipo_veiculo": "tipo_veiculo field is missing"})

        tipos_veiculos = list(map(int, tipos_veiculos.split(",")))

        pedido = Pedido.objects.create(**validated_data, origem=origem, destino=destino, produto=produto)
        pedido.tipo_veiculo.set(tipos_veiculos)

        return pedido

    def update(self, instance, validated_data):
        instance.status = validated_data.get("status", instance.status)
        instance.save()
        return instance


class VeiculoSerializer(serializers.ModelSerializer):
    url_foto = serializers.ImageField(required=True)

    class Meta:
        model = Veiculo
        fields = "__all__"


class PropostaSerializer(serializers.ModelSerializer):
    usuarioDetail = UserSerializer(read_only=True)

    class Meta:
        model = Proposta
        fields = (
            "id",
            "pedido",
            "usuario",
            "usuarioDetail",
            "veiculo",
            "valor",
            "data_criacao",
            "eh_aceita",
            "is_contraproposta",
            "is_esperandoFreteiro",
            "is_esperandoCliente",
            "contraproposta",
            "ehNegada",
        )


class AvaliacaoUsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = AvaliacaoUsuario
        fields = "__all__"


class TriggerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Log
        fields = "__all__"
