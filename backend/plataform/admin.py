from django.contrib import admin

from .models import (
    Cliente,
    Endereco,
    Freteiro,
    Pedido,
    Produto,
    Proposta,
    TipoVeiculo,
    Veiculo,
)

admin.site.register(Cliente)
admin.site.register(Freteiro)
admin.site.register(Pedido)
admin.site.register(Proposta)
admin.site.register(Veiculo)
admin.site.register(TipoVeiculo)
admin.site.register(Produto)
admin.site.register(Endereco)
