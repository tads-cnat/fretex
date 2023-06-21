
from django.contrib.auth.models import User
from django.urls import reverse
from plataform.models import Cliente, Freteiro, TipoVeiculo
from rest_framework import status
from rest_framework.test import APITestCase

class CadastroTipoVeiculoTestsSistema(APITestCase):
    def test_create_tipo_veiculo(self):

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
        freteiro = Freteiro.objects.get(username='teste@gmail.com')

        #AUTENTICA O USER DO FRETEIRO
        self.client.force_authenticate(user=user)

        #CRIA O TIPO VEICULO
        urlTipoVeiculo = reverse("tipodeveiculo-list")
        dataTipoVeiculo = {
          "descricao": "Caminhão 3/4",
        }

        response = self.client.post(urlTipoVeiculo, dataTipoVeiculo, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(TipoVeiculo.objects.filter(descricao=dataTipoVeiculo["descricao"]).exists(), True)

class CadastroTipoVeiculoTestsIntegração(APITestCase):
    def test_create_tipo_veiculo(self):

        TipoVeiculo.objects.create(
            descricao = "caminhao 3/4"
        )

        print('TipoVeiculo: ', TipoVeiculo.objects.filter(descricao='caminhao 3/4').first())

        tipoDeVeiculoExists = TipoVeiculo.objects.filter(descricao='caminhao 3/4').exists()
        self.assertEqual(tipoDeVeiculoExists, True)
