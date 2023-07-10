
from plataform.models import TipoVeiculo
from rest_framework.test import APITestCase


class TipoVeiculoTestsIntegracao(APITestCase):
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