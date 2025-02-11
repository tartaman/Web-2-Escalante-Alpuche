from django.urls import path

from . import views

urlpatterns = [
    path("", views.indexUsers, name="indexUsers")
]