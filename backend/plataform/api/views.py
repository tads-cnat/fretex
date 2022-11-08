from core.api.renders import CustomRenderer
from django.contrib.auth.models import User
from plataform.api.serializers import (ClienteSerializer, EnderecoSerializer, FreteiroSerializer, PedidoSerializer, ProdutoSerializer, PropostaSerializer, TipoVeiculoSerializer, VeiculoSerializer)
from plataform.models import (Cliente, Endereco, Freteiro, Pedido, Produto, Proposta, TipoVeiculo, Veiculo)
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action

from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from core.api.helpers import open_api_parameter

class AuthViewSet(viewsets.ViewSet):
    permission_classes = []

    @swagger_auto_schema(method='post', manual_parameters=[open_api_parameter('email', 'string'), open_api_parameter('password', 'string')], responses={200: ''})
    @action(detail=False, methods=['post'])
    def login(self, request):
        email = request.data.get('email')
        print(User.objects.all())
        user = User.objects.filter(email=email)
        if len(user) == 0:
            return Response({'detail': 'Credenciais incorretas 0'})
        user = user[0]
        success = user.check_password()
        if not success:
            return Response({'detail': 'Credenciais incorretas 1'})
        return Response({'sucesso': 'hello'})

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
    permission_classes = []
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


class ProdutoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = ProdutoSerializer
    queryset = Produto.objects.all()
    renderer_classes = [CustomRenderer]


class TipoVeiculoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = TipoVeiculoSerializer
    queryset = TipoVeiculo.objects.all()
    renderer_classes = [CustomRenderer]


class VeiculoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = VeiculoSerializer
    queryset = Veiculo.objects.all()
    renderer_classes = [CustomRenderer]


class PropostaViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PropostaSerializer
    queryset = Proposta.objects.all()
    renderer_classes = [CustomRenderer]

