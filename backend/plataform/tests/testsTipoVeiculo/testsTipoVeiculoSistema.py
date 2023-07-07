
from django.contrib.auth.models import User
from django.urls import reverse
from plataform.models import TipoVeiculo
from rest_framework import status
from rest_framework.test import APITestCase


class TipoVeiculoTestsSistema(APITestCase):
    def setUp(self):

        #CRIANDO FRETEIRO
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
        #RECUPERA O USER CONTIDO NO FRETEIRO
        user = User.objects.get(username='teste@gmail.com')
        #AUTENTICA O USER DO FRETEIRO
        self.client.force_authenticate(user=user)
        #CRIA O TIPO VEICULO PARA TESTES DE DELETE E UPDATE
        urlTipoVeiculo = reverse("tipodeveiculo-list")
        dataTipoVeiculo = {
            "descricao": "Caminhão 3/4",
        }

        self.client.post(urlTipoVeiculo, dataTipoVeiculo, format="json")
        self.tipo_veiculo = TipoVeiculo.objects.get(descricao="Caminhão 3/4")


    def test_create_tipo_veiculo(self):

        urlTipoVeiculo = reverse("tipodeveiculo-list")
        dataTipoVeiculo = {
          "descricao": "Carro 4 portas",
        }

        response = self.client.post(urlTipoVeiculo, dataTipoVeiculo, format="json")

        response_list = self.client.get(urlTipoVeiculo)

        exists = False
        for item in response_list.data["results"]:
            if item["descricao"] == dataTipoVeiculo["descricao"]:
                exists = True
                break   



        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(exists, True)


    def test_delete_tipo_veiculo(self):

        url = reverse("tipodeveiculo-detail", kwargs={"pk": self.tipo_veiculo.id})
        response = self.client.delete(url, format="json")

        urlTipoVeiculo = reverse("tipodeveiculo-list")
        response_list = self.client.get(urlTipoVeiculo)

        exists = False
        for item in response_list.data["results"]:
            print (item)
            if item["id"] == self.tipo_veiculo.id:
                exists = True
                break   

        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertEqual(exists, False)



    def test_update_tipo_veiculo(self):
            
        url = reverse("tipodeveiculo-detail", kwargs={"pk": self.tipo_veiculo.id})
        dataTipoVeiculo = {
            "descricao": "Moto",
        }
        response = self.client.put(url, dataTipoVeiculo, format="json")

        urlTipoVeiculo = reverse("tipodeveiculo-list")
        response_list = self.client.get(urlTipoVeiculo)

        exists = False
        for item in response_list.data["results"]:
            if item["descricao"] == dataTipoVeiculo["descricao"]:
                exists = True
                break   
    
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(exists, True)