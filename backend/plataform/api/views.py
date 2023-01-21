from core.api.renders import CustomRenderer
from django.contrib.auth.models import User
from plataform.api.serializers import (
    RegisterClienteSerializer,
    RegisterFreteiroSerializer,
    LoginSerializer,
    AvaliacaoUsuarioSerializer,
    UserSerializer,
    ClienteSerializer,
    EnderecoSerializer,
    FreteiroSerializer,
    PedidoSerializer,
    ProdutoSerializer,
    PropostaSerializer,
    TipoVeiculoSerializer,
    VeiculoSerializer,
)
from plataform.models import (
    Cliente,
    Endereco,
    Freteiro,
    Pedido,
    Produto,
    Proposta,
    TipoVeiculo,
    Veiculo,
    AvaliacaoUsuario,
)
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework import status

from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from core.api.helpers import open_api_request_body
from drf_yasg import openapi
from rest_framework.authtoken.models import Token


class AuthViewSet(viewsets.GenericViewSet):
    permission_classes = []
    renderer_classes = [CustomRenderer]
    serializer_class = None

    @action(detail=False, methods=["post"], serializer_class=LoginSerializer)
    def login(self, request):
        email = request.data.get("email")
        password = request.data.get("password")
        user = User.objects.filter(email=email)

        if len(user) == 0:
            return Response({"detail": "Credenciais incorretas"})
        user = user[0]
        success = user.check_password(password)
        if not success:
            return Response({"detail": "Credenciais incorretas"})

        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "user": UserSerializer(user).data})

    @action(detail=False, methods=["get"])
    def user(self, request):
        return Response({"user": UserSerializer(request.user).data})

    @action(detail=False, methods=["post"], serializer_class=RegisterFreteiroSerializer)
    def register_freteiro(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        freteiro = serializer.save()
        return Response(
            UserSerializer(freteiro.user_ptr).data, status=status.HTTP_201_CREATED
        )

    @action(detail=False, methods=["post"], serializer_class=RegisterClienteSerializer)
    def register_cliente(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        cliente = serializer.save()
        return Response(
            UserSerializer(cliente.user_ptr).data, status=status.HTTP_201_CREATED
        )

    @action(detail=False, methods=["get"])
    def logout(self, request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class EnderecoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = EnderecoSerializer
    queryset = Endereco.objects.all()
    renderer_classes = [CustomRenderer]

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer
    queryset = User.objects.all()
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
    queryset = Pedido.objects.all().distinct()
    renderer_classes = [CustomRenderer]
    filterset_fields = ["status", "cliente", "tipo_veiculo", "proposta_set__usuario"]

    def create(self, request, *args, **kwargs):
        request.data["cliente"] = Cliente.objects.get(user_ptr=self.request.user)
        request.data["status"] = "EN"
        return super().create(request, *args, **kwargs)


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
    filterset_fields = ["id"]


class VeiculoViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = VeiculoSerializer
    queryset = Veiculo.objects.all()
    renderer_classes = [CustomRenderer]
    filterset_fields = ["freteiro"]


class PropostaViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = PropostaSerializer
    queryset = Proposta.objects.all()
    renderer_classes = [CustomRenderer]
    filterset_fields = ["usuario", "pedido"]


class AvaliacaoUsuarioViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = AvaliacaoUsuarioSerializer
    queryset = AvaliacaoUsuario.objects.all()
    renderer_classes = [CustomRenderer]

    def create(self, request, *args, **kwargs):
        request.data["avaliador"] = Cliente.objects.get(user_ptr=self.request.user)
        return super().create(request, *args, **kwargs)
