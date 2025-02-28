from django.http import HttpResponse
from django.shortcuts import render
from .models import eventos, boletos

# Create your views here.
def index(request):
    Eventos = eventos.objects.all()
    data = {
        "eventos": Eventos
    }
    return render(request, "examen/index.html", data)
def boletos_view(request):
    BoletosObjects = boletos.objects.all()
    data = {
        "boletos": BoletosObjects
    }
    return render(request, "examen/boletos.html", data)

def eventos_view(request):
    Eventos = eventos.objects.all()
    data = {
        "eventos": Eventos
    }
    return render(request, "examen/eventos.html", data)