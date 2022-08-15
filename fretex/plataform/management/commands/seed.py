from django.core.management.base import BaseCommand, CommandError
from plataform.models import Cliente, Endereco, Freteiro, TipoVeiculo, Status, Pedido, Produto
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Seed the database'

    def handle(self, *args, **options):
        TipoVeiculo.objects.create(descricao='Carro')
        TipoVeiculo.objects.create(descricao='Moto')
        TipoVeiculo.objects.create(descricao='Caminhão')
        TipoVeiculo.objects.create(descricao='Outros')

        sEspera = Status.objects.create(descricao='Em espera')
        Status.objects.create(descricao='Em andamento')
        Status.objects.create(descricao='Concluído')

        userCliente = User.objects.create(username='Arthurmed', first_name='Arthur', last_name='Medeiros', email='arthur@gmail.com')
        userCliente.set_password('123')
        userCliente.save()
        cliente = Cliente.objects.create(cpf='103.948.454-98',user=userCliente, url_foto='')

        userFreteiro = User.objects.create(username='Lucasoli', first_name='Lucas', last_name='Oliveira', email='lucaso@gmail.com')
        userFreteiro.set_password('123')
        userFreteiro.save()
        enderecoFreteiro = Endereco.objects.create(rua='Avenida Éneas Cavalcante', 
        CEP='59570-000', 
        numero=22, 
        bairro='Santa Agueda', 
        cidade='Ceará-Mirim', 
        estado='RN',
        complemento='casa')
        freteiro = Freteiro.objects.create(cpf='123.456.789-12', url_foto='', user=userFreteiro, endereco=enderecoFreteiro)


        enderecoEntrega = Endereco.objects.create(rua='Avenida prudente de morais', 
        CEP='59020-510', 
        numero=321, 
        bairro='Tirol', 
        cidade='Natal', 
        estado='RN',
        complemento='casa')

        enderecoOrigem = Endereco.objects.create(rua='Avenida roberto freire', 
        CEP='59094-410', 
        numero=102, 
        bairro='Capim Macio', 
        cidade='Natal', 
        estado='RN',
        complemento='casa')

        produto = Produto.objects.create(nome='Cadeira', imagem_url='')

        Pedido.objects.create(cliente=cliente, origem=enderecoOrigem, destino=enderecoEntrega, status=sEspera, produto=produto)