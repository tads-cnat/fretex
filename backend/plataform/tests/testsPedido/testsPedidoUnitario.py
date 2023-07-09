import unittest
from datetime import date

from plataform.models import Cliente, Endereco, Pedido, Produto


class PedidoTestUnitario(unittest.TestCase):
    def setUp(self):
        # Configuração inicial para os testes
        endereco_origem = Endereco(rua="Rua A", CEP="12345-678", numero="123", bairro="Bairro A", cidade="Cidade A", estado="Estado A")
        endereco_destino = Endereco(rua="Rua B", CEP="98765-432", numero="456", bairro="Bairro B", cidade="Cidade B", estado="Estado B")
        produto = Produto(nome="Produto A")

        self.cliente = Cliente(username="cliente1", cpf="12345678901")
        self.pedido = Pedido(
            cliente=self.cliente,
            origem=endereco_origem,
            destino=endereco_destino,
            status="EN",
            produto=produto,
            observacao="Observação do pedido",
            nomeDestinatario="Destinatário do pedido",
            data_coleta=date.today(),
            data_entrega=date.today(),
            turno_entrega="TA",
            turno_coleta="MA",
            data_criacao=date.today(),
        )

    def test_pedido_data_criacao(self):
        # Teste para verificar se a data de criação do pedido é definida corretamente
        self.assertEqual(self.pedido.data_criacao, date.today())

    def test_pedido_status_choices(self):
        # Teste para verificar se o status do pedido está entre as opções válidas
        status_choices = [choice[0] for choice in self.pedido.STATUS_CHOICES]
        self.assertIn(self.pedido.status, status_choices)

    def test_pedido_turno_choices(self):
        # Teste para verificar se o turno do pedido está entre as opções válidas
        turno_choices = [choice[0] for choice in self.pedido.TURNO]
        self.assertIn(self.pedido.turno_entrega, turno_choices)
        self.assertIn(self.pedido.turno_coleta, turno_choices)
