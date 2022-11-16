from django.db import transaction
from plataform.models import (Cliente, Endereco, Freteiro, Pedido, Produto,
                              Proposta, TipoVeiculo, Veiculo)
from rest_framework import serializers


class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ("__all__")


class FreteiroSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer(read_only=False)

    class Meta:
        model = Freteiro
        fields = ("id", "username", "first_name", "last_name", 
                 "email", "cpf", "url_foto", "endereco")

    @transaction.atomic
    def create(self, validated_data):
        if self.is_valid():
            endereco = validated_data['endereco']
            del validated_data['endereco']

            end = Endereco.objects.create(**endereco)
            end.save()

            freteiro = Freteiro.objects.create_user(
                **validated_data, endereco=end
            )
            freteiro.set_password(validated_data.get("password"))
            freteiro.save()

            return freteiro


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


class TipoVeiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = TipoVeiculo
        fields = ("__all__")

        
class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = ("nome", "imagem_url")

        
class PedidoSerializer(serializers.ModelSerializer):
    origem = EnderecoSerializer()
    destino = EnderecoSerializer()
    produto = ProdutoSerializer()
    cliente = serializers.ReadOnlyField(source="cliente.id")
    status = serializers.ReadOnlyField(source="status.id")
    
    class Meta:
        model = Pedido
        fields = ("cliente", "produto", "origem", "destino", "status", "tipo_veiculo", "observacao", "nomeDestinatario", "data_coleta", "data_entrega", "turno_entrega", "turno_coleta")
        
    # @transaction.atomic
    # def create(self, validated_data):
    #     print(validated_data)
    #     origem = validated_data['origem']
    #     del validated_data['origem']
    #     origem1 = Endereco.objects.create(**origem)
    #     origem1.save()
            
    #     destino = validated_data['destino']
    #     del validated_data['destino']
    #     destino1 = Endereco.objects.create(**destino)
    #     destino1.save()
            
    #     produto = validated_data['produto']
    #     del validated_data['produto']
    #     produto1 = Produto.objects.create(**produto)
    #     produto1.save()       

    #     tipos_veiculos = validated_data['tipo_veiculo']
    #     del validated_data['tipo_veiculo']

    #     pedido = Pedido.objects.create(
    #         **validated_data, origem=origem1, 
    #         destino=destino1, produto=produto1
    #     )
    #     pedido.tipo_veiculo.set(tipos_veiculos)
    #     pedido.save()

    #     return pedido
        


class VeiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Veiculo
        fields = ("__all__")


class PropostaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proposta
        fields = ("__all__")
