from rest_framework_extensions.routers import ExtendedSimpleRouter
from plataform.api.views import (
    EnderecoViewSet
)

router = ExtendedSimpleRouter(trailing_slash=False)

router.register(r"endereco", EnderecoViewSet, basename="endereco")