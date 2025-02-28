from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("boletos", views.boletos_view, name="boletos"),
    path("eventos", views.eventos_view, name="eventos")
]