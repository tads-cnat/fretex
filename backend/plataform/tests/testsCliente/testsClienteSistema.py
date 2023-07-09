from django.urls import reverse
from plataform.models import Cliente
from rest_framework import status
from rest_framework.test import APITestCase


class ClienteTestsSistema(APITestCase):
    def setUp(self):

        url = reverse("auth-register-cliente")
        data = {
            "full_name": "Mathews Dantas Bezerra dos Santos",
            "email": "cliente@hotmail.com",
            "cpf": "11945011614",
            "password": "Tads.d.b.s123",
        }
        self.responsePost = self.client.post(url, data, format="json")
        # print('JSON:', responsePost.json())
        # print('STATUS: ', responsePost.status_code)

        self.cliente = Cliente.objects.get(username=data["email"])
        self.client.force_authenticate(user=self.cliente)

    def test_create_cliente(self):
        
        self.assertEqual(self.responsePost.status_code, status.HTTP_201_CREATED)
        
        url_list = reverse("cliente-list")
        response_list = self.client.get(url_list)
        exists = False
        for item in response_list.data["results"]:
            if item["email"] == self.cliente.email:
                exists = True
                break
        self.assertEqual(exists, True)

    def test_update_cliente(self):
        
        url = reverse("cliente-detail", args=[self.cliente.id])

        self.cliente.email = "novoemail@hotmail.com"
        self.cliente.password = "NovaSenha123"
        data = {
            "full_name": f"{self.cliente.first_name} {self.cliente.last_name}",
            "email": self.cliente.email,
            "cpf": self.cliente.cpf,
            "password": self.cliente.password,
        }
        response = self.client.patch(url, data, format="json")

        url_list = reverse("cliente-list")
        response_list = self.client.get(url_list)
        exists = False
        for item in response_list.data["results"]:
            if item["email"] == data["email"]:
                exists = True
                break
        self.assertEqual(exists, True)

    def test_delete_cliente(self):

        url = reverse("cliente-detail", args=[self.cliente.id])
        response = self.client.delete(url)
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        url_list = reverse("cliente-list")
        response_list = self.client.get(url_list)
        exists = False
        for item in response_list.data["results"]:
            if item["email"] == self.cliente.email:
                exists = True
                break
        self.assertEqual(exists, False)  