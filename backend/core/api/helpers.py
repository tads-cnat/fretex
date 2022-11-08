from drf_yasg import openapi

def open_api_parameter(name, type):
    return openapi.Parameter(name, openapi.IN_QUERY, type=openapi.TYPE_STRING)