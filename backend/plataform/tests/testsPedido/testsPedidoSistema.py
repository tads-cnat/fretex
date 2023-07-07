
from django.contrib.auth.models import User
from django.urls import reverse
from plataform.models import Cliente, TipoVeiculo
from rest_framework import status
from rest_framework.test import APITestCase


class PedidoTestsSistema(APITestCase):
    
    def setUp(self):
        # Criando o cliente
        urlCliente = reverse("auth-register-cliente")
        data = {
            "full_name": "Tonny Weslley Silva de Souza",
            "email": "tonny@cliente.com",
            "cpf": "12312312311",
            "password": "404401402",
        }

        tipo_veiculo = TipoVeiculo.objects.create(descricao="caminhao 3/4")
        tipo_veiculo2 = TipoVeiculo.objects.create(descricao="bike eletrica")

        response = self.client.post(urlCliente, data, format="json")
        user = User.objects.get(username='tonny@cliente.com')
        cliente = Cliente.objects.get(username='tonny@cliente.com')

        self.client.force_authenticate(user=user)

        self.data = {
            'cliente': cliente.id,
            'origem': {
                "rua": "Rua Teste2",
                "CEP": "12345679",
                "numero": "123",
                "bairro": "Bairro Teste",
                "cidade": "Cidade Teste",
                "estado": "Estado Teste",
                "complemento": "Complemento Teste",
            },
            'tipo_veiculo' : [tipo_veiculo.id, tipo_veiculo2.id],
            'destino': {
                "rua": "Rua Teste3",
                "CEP": "12345670",
                "numero": "123",
                "bairro": "Bairro Teste",
                "cidade": "Cidade Teste",
                "estado": "Estado Teste",
                "complemento": "Complemento Teste",
            },
            'produto': {
                "nome" : "cadeira gammer"    
            },
            'nomeDestinatario': 'Destinatário',
            'data_coleta': '2023-06-21',
            'data_entrega': '2023-06-22',
            'turno_entrega': 'MA',
            'turno_coleta': 'TA',
        }

    def test_create_pedido(self):
        urlPedido = reverse("pedido-list")
        response = self.client.post(urlPedido, self.data, format="json")
        pedido_id = response.data.get("id")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)  # Verifica se o pedido foi criado com sucesso
        response_list = self.client.get(urlPedido)

        exists = False
        for item in response_list.data["results"]:
            if item['id'] == pedido_id:
                exists = True
                break
        self.assertEqual(exists, True)

    def test_delete_pedido(self):
        #create pedido
        urlList = reverse("pedido-list")
        response = self.client.post(urlList, self.data, format="json")
        pedido_id = response.data.get("id")        

        urlPedido = reverse("pedido-detail", kwargs={"pk":pedido_id})
        response = self.client.delete(urlPedido, format="json")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        response_list = self.client.get(urlList)

        exists = False
        for item in response_list.data["results"]:
            if item['id'] == pedido_id:
                exists = True
                break
        self.assertEqual(exists, False)