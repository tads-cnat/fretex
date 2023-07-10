from datetime import datetime

from plataform.models import Cliente, Endereco, Pedido, Produto, TipoVeiculo
from rest_framework.test import APITestCase


class PedidoTestsIntegracao(APITestCase):  

    def setUp(self):
        self.cliente = Cliente.objects.create_user(
            username="stark", email="tonny@stark.com", password="senha123S", cpf="123456789"
        )
        self.endereco_origem = Endereco.objects.create(
            rua="Rua Origem",
            CEP="12345678",
            numero="10",
            bairro="Bairro Origem",
            cidade="Cidade Origem",
            estado="Estado Origem",
        )
        self.endereco_destino = Endereco.objects.create(
            rua="Rua Destino",
            CEP="98765432",
            numero="20",
            bairro="Bairro Destino",
            cidade="Cidade Destino",
            estado="Estado Destino",
        )
        self.produto = Produto.objects.create(nome="Mesa Gamer")
        self.tipo_veiculo = TipoVeiculo.objects.create(descricao="Caminhão")
        # Modelo Principal
        self.pedido = Pedido.objects.create(
            cliente=self.cliente,
            origem=self.endereco_origem,
            destino=self.endereco_destino,
            produto=self.produto,
            nomeDestinatario="Destinatário",
            data_coleta="2023-06-21",
            data_entrega="2023-06-22",
            turno_entrega="MA",
            turno_coleta="TA",
        )
        self.pedido.tipo_veiculo.add(self.tipo_veiculo)

    def test_create_pedido(self):
        self.assertEqual(Pedido.objects.all().count(), 1)  # Verifique se um novo pedido foi criado
        self.assertEqual(Pedido.objects.last().nomeDestinatario, "Destinatário")

    def test_update_pedido(self):
        data = {"data_coleta": "2023-06-22", "data_entrega": "2023-06-23", "turno_coleta": "TA", "turno_entrega": "NO"}
        Pedido.objects.filter(id=self.pedido.id).update(**data)
        updated_pedido = Pedido.objects.get(id=self.pedido.id)
        expected_data_coleta = datetime.strptime("2023-06-22", "%Y-%m-%d").date()
        self.assertEqual(updated_pedido.data_coleta, expected_data_coleta)

    def test_delete_pedido(self):
        Pedido.objects.filter(id=self.pedido.id).delete()
        pedidos_restantes = Pedido.objects.all()
        self.assertEqual(pedidos_restantes.count(), 0)