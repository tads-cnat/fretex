from django.contrib.auth.models import User
from django.urls import reverse
from plataform.models import Endereco, Freteiro
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
        freteiro = Freteiro.objects.create(
            username="ArthurPaiva",
            first_name="Arthur",
            last_name="Paiva",
            cpf="1234567",
            email="testea@gmail.com",
            endereco=endereco,
        )

        self.cliente = freteiro
        self.client.force_authenticate(user=self.cliente)
        
        return super().setUp()

    def test_create_freteiro(self):
        """
        Ensure we can create a new freteiro.
        """
        url = reverse("auth-register-freteiro")
        url_list = reverse("freteiro-list")
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

        response_list = self.client.get(url_list)
        
        exists = False
        for item in response_list.data["results"]:
            if item["cpf"] == data["cpf"]:
                exists = True
                break
        
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(exists, True)

    def test_update_freteiro(self):
        freteiro_inicial = Freteiro.objects.get(username="ArthurPaiva")
        url = reverse("freteiro-detail", kwargs={"pk": freteiro_inicial.id})
        url_list = reverse("freteiro-list")
        self.client.force_authenticate(user=User.objects.get(username="ArthurPaiva"))
        post_data = {"email": "novoemail@gmail.com"}
        response = self.client.patch(url, post_data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

        response_list = self.client.get(url_list)
        exists = False
        for item in response_list.data["results"]:
            if item["email"] == post_data["email"]:
                exists = True
                break
        self.assertEqual(exists, True)

    def test_delete_freteiro(self):
        freteiro_inicial = Freteiro.objects.get(username="ArthurPaiva")
        url = reverse("freteiro-detail", kwargs={"pk": freteiro_inicial.id})
        url_list = reverse("freteiro-list")
        self.client.force_authenticate(user=User.objects.get(username="ArthurPaiva"))
        response = self.client.delete(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)

        response_list = self.client.get(url_list)
        exists = False
        for item in response_list.data["results"]:
            if item["username"] == "ArthurPaiva":
                exists = True
                break
        self.assertEqual(exists, False)