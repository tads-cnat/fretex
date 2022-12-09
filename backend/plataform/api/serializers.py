from django.db import transaction
from django.contrib.auth.models import User
from rest_framework.validators import UniqueValidator
from plataform.models import (Cliente, Endereco, Freteiro, Pedido, Produto,
                              Proposta, TipoVeiculo, Veiculo)
from rest_framework import serializers

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ("__all__")
class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

class RegisterClienteSerializer(serializers.Serializer):
    username = serializers.CharField(validators=[UniqueValidator(queryset=User.objects.all())])
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    cpf = serializers.CharField(validators=[UniqueValidator(queryset=Cliente.objects.all())])
    email = serializers.EmailField(validators=[UniqueValidator(queryset=User.objects.all())])
    password = serializers.CharField()

    @transaction.atomic
    def create(self, validated_data):
       cliente = Cliente.objects.create(**validated_data)
       cliente.set_password(validated_data.get("password"))
       cliente.save()
       return cliente

class RegisterFreteiroSerializer(serializers.Serializer):
    username = serializers.CharField()
    first_name = serializers.CharField()
    last_name = serializers.CharField()
    cpf = serializers.CharField()
    email = serializers.EmailField()
    password = serializers.CharField()
    endereco = EnderecoSerializer()

    @transaction.atomic
    def create(self, validated_data):
        endereco = validated_data.pop('endereco')

        end = Endereco.objects.create(**endereco)
        end.save()

        freteiro = Freteiro.objects.create_user(**validated_data, endereco=end)
        freteiro.set_password(validated_data.get("password"))
        freteiro.save()

        return freteiro

class UserSerializer(serializers.ModelSerializer):
    extra_data = serializers.SerializerMethodField()
    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'email', 'last_name', 'extra_data')

    def get_extra_data(self, obj):
        try:
            freteiro = Freteiro.objects.get(user_ptr=obj)
        except:
            freteiro = None
        try:
            cliente = Cliente.objects.get(user_ptr=obj)
        except: 
            cliente = None
        return {
            'freteiro': freteiro.id if freteiro else None,
            'cliente': cliente.id if cliente else None,
        }

class FreteiroSerializer(serializers.ModelSerializer):
    endereco = EnderecoSerializer(read_only=False)
    password = serializers.CharField(write_only=True)
    url_foto = serializers.ImageField(required=False)

    class Meta:
        model = Freteiro
        fields = ("id", "username", "first_name", "last_name", "password",
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
    imagem_url = serializers.ImageField(required=False)

    class Meta:
        model = Produto
        fields = ("__all__")

        
class PedidoSerializer(serializers.ModelSerializer):
    origem = EnderecoSerializer()
    destino = EnderecoSerializer()
    produto = ProdutoSerializer() 
    clienteName = serializers.CharField(source="cliente.username", read_only=True)
    
    class Meta:
        model = Pedido
        fields = ("id", "cliente", "clienteName","produto", "origem", "destino", "status", "tipo_veiculo", "observacao", "nomeDestinatario", "data_coleta", "data_entrega", "turno_entrega", "turno_coleta")
        
    @transaction.atomic
    def create(self, validated_data):
        origem = validated_data.pop('origem')
        origem = Endereco.objects.create(**origem)
            
        destino = validated_data.pop('destino')
        destino = Endereco.objects.create(**destino)
            
        produto = validated_data.pop('produto')
        produto = Produto.objects.create(**produto)    

        tipos_veiculos = validated_data.pop('tipo_veiculo')

        pedido = Pedido.objects.create(
            **validated_data, origem=origem, 
            destino=destino, produto=produto
        )
        pedido.tipo_veiculo.set(tipos_veiculos)

        return pedido
        


class VeiculoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Veiculo
        fields = ("__all__")


class PropostaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Proposta
        fields = ("__all__")
