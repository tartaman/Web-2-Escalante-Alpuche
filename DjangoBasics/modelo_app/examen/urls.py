from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("boletos", views.boletos_view, name="boletos"),
    path("boletos/<int:evento_id>", views.boletos_view_especifica, name="boletos_especifica"),
    path("eventos", views.eventos_view, name="eventos"),
    path("addEvento", views.addEventoView, name="addEvento"),
    path("createUserByFetch", views.createUserByFetch, name="createUserByFetch"),
    path("returnLocalidades", views.returnLocalidades, name="returnLocalidades"),
    path("eliminarEvento", views.eliminarEventoView, name="eliminarEvento"),
    path("productos", views.productosView, name="productos"),
    path("addProducto", views.addProductoView, name="addProducto"),
    path("createProductoByFetch", views.createProductoByFetch, name="createProductoByFetch"),
    path("eliminarProducto", views.eliminarProductoView, name="eliminarProducto"),
]