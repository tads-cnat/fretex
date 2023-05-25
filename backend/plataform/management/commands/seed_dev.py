from django.core.management.base import BaseCommand

from plataform.models import Cliente, Endereco, Freteiro


class Command(BaseCommand):
    help = "Seed the database"

    def handle(self, *args, **options):
        self.create_cliente("arthur", "123.456.789-00")
        self.create_cliente("lucas", "123.456.789-01")

        self.create_freteiro("italo", "123.456.789-02")
        self.create_freteiro("tonny", "123.456.789-03")
        self.create_freteiro("dantas", "123.456.789-04")
        self.create_freteiro("sávio", "123.456.789-05")

    def create_cliente(self, name, cpf):
        data = {
            "first_name": name,
            "last_name": "Sobr",
            "cpf": cpf,
            "username": f"{name}@gmail.com",
            "email": f"{name}@gmail.com",
        }
        cliente, created = Cliente.objects.update_or_create(cpf=data["cpf"], defaults=data)
        cliente.set_password("123456")
        cliente.save()

        self.stdout.write(self.style.SUCCESS(f"Successfully created cliente '{cliente.username}' 123456"))
        return cliente

    def create_freteiro(self, name, cpf):
        data = {
            "first_name": name,
            "last_name": "Freteiro",
            "cpf": cpf,
            "username": f"{name}@gmail.com",
            "email": f"{name}@gmail.com",
        }
        endereco_data = {
            "rua": "Rua do Freteiro",
            "CEP": "12345-678",
            "numero": "123",
            "bairro": "Bairro do Freteiro",
            "cidade": "Cidade do Freteiro",
            "estado": "Estado do Freteiro",
        }
        endereco = Endereco.objects.create(**endereco_data)

        freteiro, created = Freteiro.objects.update_or_create(cpf=data["cpf"], defaults={**data, "endereco": endereco})
        freteiro.set_password("123456")
        freteiro.save()

        self.stdout.write(self.style.SUCCESS(f"Successfully created freteiro '{freteiro.username}' 123456"))
        return freteiro
