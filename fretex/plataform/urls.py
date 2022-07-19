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
        name='fretes.index'),

    path('fretes/detalhes/', views.detalhesFretesDisponiveis,
        name='detalhesFretesDisponiveis'),

    path('dashboardfreteiro/', views.dashboardFreteiro, 
        name='dashboardfreteiro'),

    path('dashboardfreteiro/detalhes/', views.detalhesMeusFretesFreteiro,
        name='detalhesMeusFretesFreteiro'),

    path('dashboardcliente/', views.dashboardCliente, 
        name='dashboardcliente'),
    path('dashboardcliente/detalhes/', views.detalhesMeusFretesCliente,

        name='detalhesMeusFretesCliente'),

    path('perfilCliente/', views.perfilCliente, 
        name="perfilCliente"),

    path('perfilFreteiro/', views.perfilFreteiro, 
        name="perfilFreteiro"),

    path('editarPerfilCliente/', views.editarPerfilCliente,
        name="editarPerfilCliente"),

    path('editarPerfilFreteiro/', views.editarPerfilFreteiro,
        name="editarPerfilFreteiro"),

    path('meusVeiculos/', views.meusVeiculos, 
        name="meusVeiculos"),
        
    path('adicionarVeiculo/', views.adicionarVeiculo, 
        name="adicionarVeiculo"),

    path('cadastrofrete/', views.CadastroDeFrete.as_view(), 
        name="cadastrodefrete"),
]
