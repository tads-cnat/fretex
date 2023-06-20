from django.urls import get_resolver, reverse
from plataform.models import Freteiro
from rest_framework import status
from rest_framework.test import APITestCase


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
