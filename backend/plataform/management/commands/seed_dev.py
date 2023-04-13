from django.core.management.base import BaseCommand, CommandError
from django.core.management import call_command
from plataform.models import Cliente, Endereco, Freteiro

class Command(BaseCommand):
    help = 'Seed the database'

    def handle(self, *args, **options):
        full_name_sp = validated_data.pop("full_name").split(' ')
        validated_data["first_name"] = full_name_sp.pop(0)
        validated_data["last_name"] = " ".join(full_name_sp)

        validated_data["username"] = validated_data["email"]
        cliente = Cliente.objects.create(**validated_data)
        cliente.set_password(validated_data.get("password"))
        cliente.save()
        return cliente

    def create_cliente(self):
        data = {
            "first_name": "Arthur",
            "last_name": "Paiva",
            "full_name": "Arthur Medeiros Paiva",
            "cpf": "103.948.454-98",
            "username": "arthur@gmail.com",
            "email": "arthur@gmail.com",
        }
        cliente.objects.create()