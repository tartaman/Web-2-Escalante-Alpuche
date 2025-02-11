from django.contrib import admin
from .models import user, user_address
# Register your models here.

admin.site.register(user)
admin.site.register(user_address)
