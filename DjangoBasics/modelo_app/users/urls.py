from django.urls import path

from . import views

urlpatterns = [
    path("all", views.indexUsers, name="indexUsers"),
    path("create", views.createUsersView, name="createUsersView"),
    path("createUser", views.createUser, name="createUser"),
    path("details/<int:id>", views.userDetail, name="userDetail"),
    path("createUser-by-fetch", views.createUserByFetch, name="createUser-by-fetch"),
    path("", views.landing, name="landing"),
    path("update/<int:id>", views.updateUser, name="updateUser")
]