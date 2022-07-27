from django.urls import path
from . import views

urlpatterns = [
    path('', views.landing, 
        name='index'),

    path('login/', views.Login.as_view(), 
        name='login'),

    path('logout/', views.logoutView, 
        name='logout'),

    path('escolhacadastro/', views.escolhaCadastro, 
        name='escolhacadastro'),

    path('cadastrocliente/', views.CadastroCliente.as_view(), 
        name='cadastrocliente'),

    path('cadastrofreteiro/', views.CadastroFreteiro.as_view(),
        name='cadastrofreteiro'),

    path('fretes/', views.fretes_index, 
        name='fretes_index'),

    path('fretes/<int:pedido_id>/', views.Fretes_show.as_view(), 
        name='fretes_show'),

    path('proposta/<int:proposta_id>/', views.AceitaProposta.as_view(), #É necessário msm fazer uma view só para aceitar?
        name='aceita_prop'),

    path('dashboardfreteiro/', views.dashboardFreteiro, 
        name='dashboardfreteiro'),

    #path('dashboardfreteiro/detalhes/<int:pedido_id>/', views.detalhesMeusFretesFreteiro.as_view(),
    #    name='detalhesMeusFretesFreteiro'),

    path('dashboardcliente/', views.dashboardCliente, 
        name='dashboardcliente'),

    path('dashboardcliente/detalhes/', views.detalhesMeusFretesCliente,
        name='detalhesMeusFretesCliente'),

    path('perfilCliente/', views.perfilCliente, 
        name="perfilCliente"),

    path('perfilFreteiro/', views.perfilFreteiro, 
        name="perfilFreteiro"),

    path('editarPerfilCliente/', views.EditarPerfilCliente.as_view(),
        name="editarPerfilCliente"),

    path('editarPerfilFreteiro/', views.EditarPerfilFreteiro.as_view(),
        name="editarPerfilFreteiro"),

    path('meusVeiculos/', views.meusVeiculos,
        name="meusVeiculos"),

    path('adicionarVeiculo/', views.AdicionarVeiculo.as_view(),
        name="adicionarVeiculo"),

    path('cadastrofrete/', views.CadastroDeFrete.as_view(), 
        name="cadastrodefrete"),
]
