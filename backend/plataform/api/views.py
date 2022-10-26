from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from core.api.renders import CustomRenderer

from plataform.api.serializers import EnderecoSerializer, FreteiroSerializer, ClienteSerializer, PedidoSerializer
from plataform.models import Endereco, Freteiro, Cliente, Pedido

class EnderecoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = EnderecoSerializer
    queryset = Endereco.objects.all()
    renderer_classes = [CustomRenderer]

class FreteiroViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = FreteiroSerializer
    queryset = Freteiro.objects.all()
    renderer_classes = [CustomRenderer]

class ClienteViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ClienteSerializer
    queryset = Cliente.objects.all()
    renderer_classes = [CustomRenderer]

class PedidoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PedidoSerializer
    queryset = Pedido.objects.all()
    renderer_classes = [CustomRenderer]

    def perform_create(self, serializer):
        serializer.save(
            cliente=None,
            status='EN',
        )
