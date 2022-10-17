from rest_framework import serializers
from drf_writable_nested.serializers import WritableNestedModelSerializer

from plataform.models import Endereco

class EnderecoSerializer(CustomSerializer):
    class Meta:
        model = Endereco
        fields = ("rua", "CEP", "numero", "bairro", "cidade", "estado", "complemento")

