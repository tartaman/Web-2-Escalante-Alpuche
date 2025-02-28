from django.db import models

# Create your models here.
class localidad(models.Model):
    name = models.CharField(max_length=50)
    estatus = models.CharField(max_length=50)
    def __str__(self):
        return self.name
class productos(models.Model):
    name = models.CharField(max_length=50)
    precio = models.FloatField()
    localidad_id = models.ForeignKey(localidad, on_delete=models.CASCADE)
    def __str__(self):
        return self.name

class eventos(models.Model):
    name = models.CharField(max_length=50)
    descripcion = models.CharField(max_length=500)
    imagen_url = models.CharField(max_length=500)
    fechaInicio = models.DateField()
    fechafin = models.DateField()
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

