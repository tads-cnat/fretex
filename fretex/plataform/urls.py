from django.urls import path
from django.shortcuts import redirect
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
    path('dashboardcliente/detalhes/', views.detalhesMeusFretesCliente, name='detalhesMeusFretesCliente'),
]
