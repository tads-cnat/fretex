from rest_framework import viewsets

from core.api.renders import CustomRenderer

from plataform.api.serializers import EnderecoSerializer
from plataform.models import Endereco

class EnderecoViewSet(viewsets.ModelViewSet):
    permission_classes = []
    serializer_class = EnderecoSerializer
    queryset = Endereco.objects.all()
    renderer_classes = [CustomRenderer]
