from rest_framework import serializers

from plataform.models import Endereco

class EnderecoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Endereco
        fields = ("rua", "CEP", "numero", "bairro", "cidade", "estado", "complemento")

