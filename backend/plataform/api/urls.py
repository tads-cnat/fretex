from rest_framework.routers import DefaultRouter
from plataform.api.views import (
    EnderecoViewSet
)

router = DefaultRouter(trailing_slash=False)

router.register(r"endereco", EnderecoViewSet, basename="endereco")