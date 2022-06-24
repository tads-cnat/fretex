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

def fretes_index(request):
    return render(request, 'fretes/index.html')

def detalhesFreteFreteiro(request):
    return render(request, 'fretes/detalhesFretesDisponiveis.html')