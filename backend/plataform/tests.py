from django.urls import get_resolver, reverse
from plataform.models import Cliente, Freteiro, Endereco, Produto, TipoVeiculo, Pedido
from rest_framework import status
from rest_framework.test import APITestCase, TestCase


class FreteiroTests(APITestCase):
    def test_create_freteiro(self):
        """
        Ensure we can create a new freteiro.
        """
        url = reverse("auth-register-freteiro")
        data = {
            "full_name": "Arthur Paiva Teste",
            "cpf": "12345678910",
            "email": "teste@gmail.com",
            "password": "123456",
            "endereco": {
                "rua": "Rua Teste",
                "CEP": "12345678",
                "numero": "123",
                "bairro": "Bairro Teste",
                "cidade": "Cidade Teste",
                "estado": "Estado Teste",
                "complemento": "Complemento Teste",
            },
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Freteiro.objects.filter(cpf=data["cpf"]).exists(), True)

class ClienteTests(APITestCase):
    def test_create_cliente(self):

        url = reverse("auth-register-cliente")
        data = {
            "full_name": "Mathews Dantas Bezerra dos Santos",
            "email": "cliente@hotmail.com",
            "cpf": "11945011614",
            "password": "Tads.d.b.s123",
        }
        response = self.client.post(url, data, format="json")
        print('status test_create_cliente:',response.status_code)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Cliente.objects.filter(cpf=data["cpf"]).exists(), True)


class PedidoTests(TestCase):  
    
    def setUp(self):
        self.cliente = Cliente.objects.create_user(
            username='stark',
            email='tonny@stark.com',
            password='senha123S',
            cpf='123456789'
        )
        self.endereco_origem = Endereco.objects.create(
            rua='Rua Origem',
            CEP='12345678',
            numero='10',
            bairro='Bairro Origem',
            cidade='Cidade Origem',
            estado='Estado Origem'
        )
        self.endereco_destino = Endereco.objects.create(
            rua='Rua Destino',
            CEP='98765432',
            numero='20',
            bairro='Bairro Destino',
            cidade='Cidade Destino',
            estado='Estado Destino'
        )
        self.produto = Produto.objects.create(
            imagem_url = 'https://images.tcdn.com.br/img/img_prod/732240/mesa_gamer_escrivaninha_compact_escritorio_quarto_preta_com_vermelho_1099_1_6708b590c22603ffd21bad2066be6c1b.png',
            nome='Mesa Gamer'
        )
        self.tipo_veiculo = TipoVeiculo.objects.create(
            descricao='Caminhão'
        )
        #Modelo Principal
        self.pedido = Pedido.objects.create(
            cliente=self.cliente,
            origem=self.endereco_origem,
            destino=self.endereco_destino,
            produto=self.produto,
            tipo_veiculo = [self.tipo_veiculo],
            nomeDestinatario='Destinatário',
            data_coleta='2023-06-21',
            data_entrega='2023-06-22',
            turno_entrega='MA',
            turno_coleta='TA'
        )
    
    def test_create_pedido(self):
        self.assertEqual(Pedido.objects.all().count(), 1)  # Verifique se um novo pedido foi criado
        self.assertEqual(Pedido.objects.last().nomeDestinatario, 'Novo Destinatário')
    
    def test_update_pedido(self):
        data = {
            'data_coleta' : '2023-06-22', 
            'data_entrega' : '2023-06-23',
            'turno_coleta' : 'TA',
            'turno_entrega' : 'NO'
        }
        Pedido.objects.filter(id=self.pedido.id).update(**data)
        pedido_atualizado = Pedido.objects.get(id=self.pedido.id)
        self.assertEqual(pedido_atualizado.data_coleta, '2023-06-22')
        
    def test_delete_pedido(self):
        Pedido.objects.filter(id=self.pedido.id).delete()
        pedidos_restantes = Pedido.objects.all()
        self.assertEqual(pedidos_restantes.count(), 0)
    
