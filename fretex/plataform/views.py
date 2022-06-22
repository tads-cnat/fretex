from django.shortcuts import render

# Create your views here.
def landing(request):
    return render(request, 'landing.html')

def login(request):
    return render(request, 'login.html')

def escolhaCadastro(request):
    return render(request, 'escolhaCadastro.html')

def cadastroCliente(request):
    return render(request, 'cadastroCliente.html')

def cadastroFreteiro(request):
    return render(request, 'cadastroFreteiro.html')