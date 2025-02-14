from django.urls import path

from . import views

urlpatterns = [
    path("", views.indexUsers, name="indexUsers"),
    path("create", views.createUsersView, name="createUsersView"),
    path("createUser", views.createUser, name="createUser"),
    path("details/<int:id>", views.userDetail, name="userDetail")
]