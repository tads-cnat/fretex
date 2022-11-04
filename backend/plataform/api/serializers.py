from django.db import transaction
from plataform.models import Cliente, Endereco, Freteiro, Pedido
from rest_framework import serializers


class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ("__all__")


class FreteiroSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer(write_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Freteiro
        fields = ("username", "first_name", "last_name",
                  "password", "email", "cpf", "url_foto", "endereco")
#        read_only_fields = ['endereco']

    @transaction.atomic
    def create(self, validated_data):
        """   if self.is_valid():
            endereco1 = Endereco.objects.create(validated_data.get("endereco"))
            endereco1.save()

            url_foto = validated_data.get("url_foto")
            cpf = validated_data.get("cpf")
            username = validated_data.get("username")
            first_name = validated_data.get("first_name")
            last_name = validated_data.get("last_name")

            freteiro = Freteiro.objects.create(
                username=username, first_name=first_name,
                last_name=last_name, url_foto=url_foto,
                cpf=cpf, endereco=endereco1
            )

            freteiro.set_password(validated_data.get("password"))
            freteiro.save()
            return freteiro"""
        pass

        # cria endereco
        # criar o endereco
        # metodo set password do endereco set_password
        # retorna endereco


# TODO - VErificar fotos nos serializers


class ClienteSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Cliente
        fields = ("id", "username", "first_name", "last_name",
                  "password", "email", "cpf", "url_foto")

    @transaction.atomic
    def create(self, validated_data):
        if self.is_valid():
            cliente = Cliente.objects.create_user(**validated_data)
            cliente.set_password(validated_data.get("password"))
            cliente.save()
            return cliente

        # criar o cliente
        # metodo set password do cliente set_password
        # retorna Cliente


class PedidoSerializer(serializers.ModelSerializer):
    origem = EnderecoSerializer()
    destino = EnderecoSerializer()
    cliente = serializers.ReadOnlyField()
    status = serializers.ReadOnlyField()

    class Meta:
        model = Pedido
        fields = ("cliente", "origem", "destino", "status", "tipo_veiculo", "observacao",
                  "nomeDestinatario", "data_coleta", "data_entrega", "turno_entrega", "turno_coleta")
