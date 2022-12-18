from plataform.api import views
from rest_framework_extensions.routers import ExtendedSimpleRouter

router = ExtendedSimpleRouter(trailing_slash=False)

router.register(r"auth", views.AuthViewSet, basename="auth")
router.register(r"endereco", views.EnderecoViewSet, basename="endereco")
router.register(r"freteiro", views.FreteiroViewSet, basename="freteiro")
router.register(r"cliente", views.ClienteViewSet, basename="cliente")
router.register(r"pedido", views.PedidoViewSet, basename="pedido")
router.register(r"produto", views.PedidoViewSet, basename="produto")
router.register(r"tipodeveiculo", views.TipoVeiculoViewSet, basename="tipodeveiculo")
router.register(r"veiculo", views.VeiculoViewSet, basename="veiculo")
router.register(r"proposta", views.PropostaViewSet, basename="proposta")
router.register(r"avaliacao-usuario", views.AvaliacaoUsuarioViewSet, basename="avaliacao-usuario")
