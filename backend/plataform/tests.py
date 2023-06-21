from django.contrib.auth.models import User
from django.urls import get_resolver, reverse
from plataform.models import Cliente, Freteiro
from rest_framework import status
from rest_framework.test import APIClient, APITestCase

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
        print('JSON:', response.json())
        print('STATUS: ', response.status_code)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Cliente.objects.filter(cpf=data["cpf"]).exists(), True)

        user = User.objects.get(username='cliente@hotmail.com')
        # print(user)
        # client2 = APIClient()
        self.client.force_authenticate(user=user)

        url2 = reverse("cliente-list")
        response = self.client.get(url2, data=None, format=None)
        print('CLIENTES: ',response.json())

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
        print(updated_cliente.email)
        self.assertEqual(updated_cliente.email, "cliente2@hotmail.com")

    def test_delete_cliente(self):
        cliente = Cliente.objects.get(email="cliente@hotmail.com")
        cliente.delete()

        self.assertEqual(Cliente.objects.filter(email="cliente@hotmail.com").exists(), False)