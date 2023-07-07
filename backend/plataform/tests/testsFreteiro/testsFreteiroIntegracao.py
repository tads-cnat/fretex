from plataform.models import Endereco, Freteiro
from rest_framework.test import APITestCase


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