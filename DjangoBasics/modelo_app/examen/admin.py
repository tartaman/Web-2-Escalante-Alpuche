from django.contrib import admin

from .models import eventos, localidad, productos, tipoBoleto, boletos

admin.site.register(eventos)
admin.site.register(localidad)
admin.site.register(productos)
admin.site.register(tipoBoleto)
admin.site.register(boletos)