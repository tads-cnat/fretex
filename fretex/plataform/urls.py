from django.urls import path
from django.shortcuts import redirect
from django.views.generic import TemplateView
from . import views

urlpatterns = [
    path('', views.landing),
   
    path('login/', views.login, name='login'),
    path('escolhacadastro/', views.escolhaCadastro, name='escolhacadastro'),
    path('cadastrocliente/', views.cadastroCliente, name='cadastrocliente'),
    path('cadastrofreteiro/', views.cadastroFreteiro, name='cadastrofreteiro'),

    path('fretes/', views.fretes_index, name='fretes.index'),
    path('fretes/detalhes/', views.detalhesFretesDisponiveis, name='detalhesFretesDisponiveis'),

    path('dashboardfreteiro/', views.dashboardFreteiro, name='dashboardfreteiro'),
    path('dashboardfreteiro/detalhes/', views.detalhesMeusFretesFreteiro, name='detalhesMeusFretesFreteiro'),

    path('dashboardcliente/', views.dashboardCliente, name='dashboardcliente'),
    path('dashboardcliente/detalhes/', views.detalhesMeusFretesCliente, name='detalhesMeusFretesCliente'),

<<<<<<< Updated upstream
    path('perfilCliente/', views.perfilCliente, name="perfilCliente"),
    path('perfilFreteiro/', views.perfilFreteiro, name="perfilFreteiro"),

    path('editarPerfilCliente/', views.editarPerfilCliente, name="editarPerfilCliente"),
    path('editarPerfilFreteiro/', views.editarPerfilFreteiro, name="editarPerfilFreteiro"),

    path('meusVeiculos/', views.meusVeiculos, name="meusVeiculos"),
    path('adicionarVeiculo/', views.adicionarVeiculo, name="adicionarVeiculo"),

    path('cadastrofrete/', views.cadastroDeFrete, name="cadastrodefrete"),
=======
    path('cadastrofrete/', views.CadastroDeFrete.as_view(), name="cadastrodefrete"),
>>>>>>> Stashed changes
]
