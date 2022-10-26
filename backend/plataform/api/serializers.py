from rest_framework import serializers
from django.db import transaction

from plataform.models import Endereco, Freteiro, Cliente, Pedido

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ("__all__")

class FreteiroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Freteiro
        fields = ("__all__")

    @transaction.atomic
    def create(self, validated_data):
        # cria endereco
        # criar o endereco
        # metodo set password do endereco set_password
        # retorna endereco
        pass

# TODO - VErificar fotos nos serializers
class ClienteSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = Cliente
        fields = ("username", "first_name", "last_name", "password", "email", "url_foto")

    @transaction.atomic
    def create(self, validated_data):
        # criar o cliente
        # metodo set password do cliente set_password
        # retorna Cliente
        pass

class PedidoSerializer(serializers.ModelSerializer):
    origem = EnderecoSerializer()
    destino = EnderecoSerializer()
    cliente = serializers.ReadOnlyField()
    status = serializers.ReadOnlyField()

    class Meta:
        model = Pedido
        fields = ("cliente", "origem", "destino", "status", "tipo_veiculo", "observacao", "nomeDestinatario", "data_coleta", "data_entrega", "turno_entrega", "turno_coleta")