from drf_yasg import openapi


def open_api_request_body(parameters):
    o_parameters = {}
    for parameter in parameters.keys():
        o_parameters[parameter] = openapi.Schema(type=openapi.TYPE_STRING)
    return openapi.Schema(type=openapi.TYPE_OBJECT, properties=o_parameters)
