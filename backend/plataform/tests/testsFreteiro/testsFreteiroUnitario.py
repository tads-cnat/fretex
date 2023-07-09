import unittest

from plataform.models import Endereco, Freteiro


class FreteiroTest(unittest.TestCase):

    def test_capa_foto_blank_or_null(self):
        freteiro = Freteiro()
        self.assertTrue(freteiro.capa_foto.field.blank)
        self.assertTrue(freteiro.capa_foto.field.null)

    def test_url_foto_upload_to_configured_correctly(self):
        freteiro = Freteiro()
        upload_to = freteiro.url_foto.field.upload_to
        self.assertEqual(upload_to, "usuarios/freteiro/%Y/%m/%d/")

    def test_cpf_max_length(self):
        freteiro = Freteiro()
        max_length = freteiro._meta.get_field("cpf").max_length
        self.assertEqual(max_length, 15)

    def test_endereco_instance_of_endereco_class(self):
        endereco = Endereco()
        freteiro = Freteiro(endereco=endereco)
        self.assertIsInstance(freteiro.endereco, Endereco)