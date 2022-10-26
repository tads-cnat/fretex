from rest_framework_extensions.routers import ExtendedSimpleRouter
from plataform.api import views

router = ExtendedSimpleRouter(trailing_slash=False)

router.register(r"endereco", views.EnderecoViewSet, basename="endereco")
router.register(r"freteiro", views.FreteiroViewSet, basename="freteiro")
router.register(r"cliente", views.ClienteViewSet, basename="cliente")
router.register(r"pedido", views.PedidoViewSet, basename="pedido")