from datetime import datetime

from django.contrib.auth.models import User
from django.urls import reverse
from plataform.models import Cliente, Endereco, Freteiro, Pedido, Produto, TipoVeiculo
from rest_framework import status
from rest_framework.test import APITestCase


class FreteiroTestsSistema(APITestCase):
    def setUp(self) -> None:
        endereco = Endereco.objects.create(
            rua="Rua Teste",
            CEP="12345678",
            numero="123",
            bairro="Bairro Teste",
            cidade="Cidade Teste",
            estado="Estado Teste",
            complemento="Complemento Teste",
        )
        Freteiro.objects.create(
            username="ArthurPaiva",
            first_name="Arthur",
            last_name="Paiva",
            cpf="1234567",
            email="testea@gmail.com",
            endereco=endereco,
        )
        return super().setUp()

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

    def test_update_freteiro(self):
        freteiro_inicial = Freteiro.objects.get(username="ArthurPaiva")
        url = reverse("freteiro-detail", kwargs={"pk": freteiro_inicial.id})
        self.client.force_authenticate(user=User.objects.get(username="ArthurPaiva"))
        post_data = {"email": "novoemail@gmail.com"}
        response = self.client.patch(url, post_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Freteiro.objects.filter(email=post_data["email"]).exists(), True)

    def test_delete_freteiro(self):
        freteiro_inicial = Freteiro.objects.get(username="ArthurPaiva")
        url = reverse("freteiro-detail", kwargs={"pk": freteiro_inicial.id})
        self.client.force_authenticate(user=User.objects.get(username="ArthurPaiva"))
        response = self.client.delete(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(Freteiro.objects.filter(username="ArthurPaiva").exists(), False)


class FreteiroTestsIntegracao(APITestCase):
    def test_create_freteiro_integracao(self):
        endereco = Endereco.objects.create(
            rua="Rua Teste",
            CEP="12345678",
            numero="123",
            bairro="Bairro Teste",
            cidade="Cidade Teste",
            estado="Estado Teste",
            complemento="Complemento Teste",
        )
        Freteiro.objects.create(
            username="ArthurPaiva",
            first_name="Arthur",
            last_name="Paiva",
            cpf="12345678910",
            email="teste@gmail.com",
            endereco=endereco,
        )
        freteiro_created = Freteiro.objects.filter(username="ArthurPaiva").exists()
        self.assertEqual(freteiro_created, True)


class ClienteTestsSistema(APITestCase):
    def test_create_cliente(self):
        url = reverse("auth-register-cliente")
        data = {
            "full_name": "Mathews Dantas Bezerra dos Santos",
            "email": "cliente@hotmail.com",
            "cpf": "11945011614",
            "password": "Tads.d.b.s123",
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Cliente.objects.filter(cpf=data["cpf"]).exists(), True)

        user = User.objects.get(username="cliente@hotmail.com")
        # print(user)
        # client2 = APIClient()
        self.client.force_authenticate(user=user)

        url2 = reverse("cliente-list")
        response = self.client.get(url2, data=None, format=None)


class ClienteTestsIntegracao(APITestCase):
    def setUp(self):
        data = {
            "username": "MathewsDantas",
            "first_name": "Mathews",
            "last_name": "Santos",
            "email": "cliente@hotmail.com",
            "cpf": "11945011614",
            "password": "Tads.d.b.s123",
        }
        self.cliente = Cliente.objects.create_user(**data)

    def test_update_cliente(self):
        cliente = Cliente.objects.get(email="cliente@hotmail.com")
        cliente.email = "cliente2@hotmail.com"
        cliente.save()

        updated_cliente = Cliente.objects.get(id=self.cliente.id)
        self.assertEqual(updated_cliente.email, "cliente2@hotmail.com")

    def test_delete_cliente(self):
        cliente = Cliente.objects.get(email="cliente@hotmail.com")
        cliente.delete()

        self.assertEqual(Cliente.objects.filter(email="cliente@hotmail.com").exists(), False)


class CadastroTipoVeiculoTestsSistema(APITestCase):
    def test_create_tipo_veiculo(self):
        # CRIANDO FRETEIRO
        urlFreteiro = reverse("auth-register-freteiro")
        dataFreteiro = {
            "full_name": "Italo Gabriel Teste",
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
        self.client.post(urlFreteiro, dataFreteiro, format="json")
        # RECUPERA O USER CONTIDO NO FRETEIRO
        user = User.objects.get(username="teste@gmail.com")
        freteiro = Freteiro.objects.get(username="teste@gmail.com")

        # AUTENTICA O USER DO FRETEIRO
        self.client.force_authenticate(user=user)

        # CRIA O TIPO VEICULO
        urlTipoVeiculo = reverse("tipodeveiculo-list")
        dataTipoVeiculo = {
            "descricao": "Caminhão 3/4",
        }

        response = self.client.post(urlTipoVeiculo, dataTipoVeiculo, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TipoVeiculo.objects.filter(descricao=dataTipoVeiculo["descricao"]).exists(), True)


class CadastroTipoVeiculoIntegracao(APITestCase):
    def setUp(self):
        self.tipo_veiculo = TipoVeiculo.objects.create(descricao="caminhao 3/4")

    def test_update_tipo_veiculo(self):
        tipo_veiculo = TipoVeiculo.objects.get(descricao="caminhao 3/4")
        tipo_veiculo.descricao = "moto"
        tipo_veiculo.save()

        updated_tipo_veiculo = TipoVeiculo.objects.get(pk=self.tipo_veiculo.pk)
        self.assertEqual(updated_tipo_veiculo.descricao, "moto")

    def test_delete_tipo_veiculo(self):
        tipo_veiculo = TipoVeiculo.objects.get(descricao="caminhao 3/4")
        tipo_veiculo.delete()

        tipo_veiculo_exists = TipoVeiculo.objects.filter(descricao="caminhao 3/4").exists()
        self.assertFalse(tipo_veiculo_exists)


# class EnderecoTests(APITestCase):
#     def test_create_endereco(self):
#         data = {
#             'data_coleta' : '2023-06-22',
#             'data_entrega' : '2023-06-23',
#             'turno_coleta' : 'TA',
#             'turno_entrega' : 'NO'
#         }
#         Endereco.objects.create(**data)
#         self.assertEqual(Endereco.objects.filter(CEP="12345678").exists(), True)


class PedidoTests(APITestCase):
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
