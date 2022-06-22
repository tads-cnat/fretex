from django.urls import path
from django.shortcuts import redirect
from . import views

urlpatterns = [
    path('', views.landing),
    path('login/', views.login, name='login'),
    path('escolhacadastro/', views.escolhaCadastro, name='escolhacadastro'),
    path('cadastrocliente/', views.cadastroCliente, name='cadastrocliente'),
    path('cadastrofreteiro/', views.cadastroFreteiro, name='cadastrofreteiro')
]