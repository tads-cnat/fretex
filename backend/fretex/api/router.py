from rest_framework import routers
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework import permissions
from plataform.api.urls import router as plataform_router

router = routers.SimpleRouter()
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
