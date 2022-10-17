from rest_framework import viewsets

class ViaAdministracaoViewSet(viewsets.ModelViewSet):
    permission_classes = []
    serializer_class = EnderecoSerializer
    queryset = Endereco.objects.all()
    renderer_classes = [CustomRenderer]
