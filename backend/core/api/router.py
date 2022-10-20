from rest_framework_extensions.routers import ExtendedSimpleRouter
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions

from plataform.api.router import router as plataform_router

router = ExtendedSimpleRouter()
router.registry.extend(plataform_router.registry)

schema_view = get_schema_view(
    openapi.Info(
        title="Fretex API",
        default_version="v1",
        description="API do Sistema de Fretex",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)
