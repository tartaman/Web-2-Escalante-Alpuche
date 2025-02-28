from django.http import HttpResponse
from django.shortcuts import render
from .models import eventos

# Create your views here.
def index(request):
    Eventos = eventos.objects.all()
    data = {
        "eventos": Eventos
    }
    return render(request, "examen/index.html", data)