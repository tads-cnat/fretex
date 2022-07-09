from django.shortcuts import render

# Create your views here.
def landing(request):
    return render(request, 'landing.html')

def login(request):
    return render(request, 'login-cadastros/login.html')

def escolhaCadastro(request):
    return render(request, 'login-cadastros/escolhaCadastro.html')

def cadastroCliente(request):
    return render(request, 'login-cadastros/cadastroCliente.html')

def cadastroFreteiro(request):
    return render(request, 'login-cadastros/cadastroFreteiro.html')

def dashboardFreteiro(request):
    return render(request, 'dashboards/dashboardFreteiro.html')

def dashboardCliente(request):
    return render(request, 'dashboards/dashboardCliente.html')

def fretes_index(request):
    return render(request, 'fretes/index.html')

def detalhesFretesDisponiveis(request):
    return render(request, 'fretes/detalhesFretesDisponiveis.html')

def detalhesMeusFretesFreteiro(request):
    return render(request, 'fretes/detalhesMeusFretesFreteiro.html')

def detalhesMeusFretesCliente(request):
    return render(request, 'fretes/detalhesMeusFretesCliente.html')

def cadastroDeFrete(request):
    return render(request, 'pedidoDeFrete/cadastroFrete.html')

def perfilCliente(request):
    return render(request, 'perfis/perfilCliente.html')

def perfilFreteiro(request):
    return render(request, 'perfis/perfilFreteiro.html')

def editarPerfilCliente(request):
    return render(request, 'perfis/editarPerfilCliente.html')

def editarPerfilFreteiro(request):
    return render(request, 'perfis/editarPerfilFreteiro.html')

def meusVeiculos(request):
    return render(request, 'perfis/meusVeiculos.html')

def adicionarVeiculo(request):
    return render(request, 'perfis/adicionarVeiculo.html')