from django.core.management.base import BaseCommand, CommandError
from django.core.management import call_command

class Command(BaseCommand):
    help = 'Seed the database'

    def handle(self, *args, **options):
        call_command('loaddata', 'tipo_veiculo.json')