from django.http import HttpResponse
from .models import user, user_address
from django.shortcuts import render


def indexUsers(request):
    users = user.objects.all()
    data = {
        "users": users,
        "title": "Users List"
    }
    return render(request, "users/index.html", data)