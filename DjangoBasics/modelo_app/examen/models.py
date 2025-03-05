from django.db import models
from django.utils import timezone
# Create your models here.
class localidad(models.Model):
    name = models.CharField(max_length=50)
    estatus = models.CharField(max_length=50)
    def __str__(self):
        return self.name
class productos(models.Model):
    name = models.CharField(max_length=50)
    precio = models.FloatField()
    created_at = models.DateField(auto_now_add=True)
    localidad_id = models.ForeignKey(localidad, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class eventos(models.Model):
    name = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=500, default="No hay descripción", blank=True, null=True)
    imagen_url = models.CharField(max_length=500, default="https://img.freepik.com/vector-gratis/carnaval-brasileno-plano-creativo_23-2148404612.jpg?t=st=1741162794~exp=1741166394~hmac=01fa8f924797fe3952a086af7d70843819d9594470aa83abb3f2c20081f18117&w=900")
    fechaInicio = models.DateTimeField()
    fechafin = models.DateTimeField()
    localidad_id = models.ForeignKey(localidad, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class tipoBoleto(models.Model):
    name = models.CharField(max_length=50)
    def __str__(self):
        return self.name

class boletos(models.Model):
    name = models.CharField(max_length=50)
    precio = models.FloatField()
    eventos_id = models.ForeignKey(eventos, on_delete=models.CASCADE)
    tipo_boleto_id = models.ForeignKey(tipoBoleto, on_delete=models.CASCADE)
    def __str__(self):
        return self.name
