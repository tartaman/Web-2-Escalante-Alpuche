from django.http import HttpResponse
from .models import user, user_address
from django.shortcuts import render, get_object_or_404

def indexUsers(request):
    users = user.objects.all()
    data = {
        "users": users,
        "title": "Users List"
    }
    return render(request, "users/index.html", data)

def createUsersView(request):
    return render(request, "users/create.html")

def createUser(request):
    data = {}
    try:
        if request.method == "POST":
            name = request.POST["name"]
            email = request.POST["email"]
            age = request.POST["age"] 
            rfc = request.POST["rfc"]
            photo = request.POST.get("photo")

            User = user(
                name=name,
                email=email,
                age=age,
                rfc=rfc,
                photo=photo
            )
            User.save()
            data["user"] = User
            data["message"] = "User created successfully"
            data["status"] = "success"
    except Exception as e:
        data["message"] = str(e)
        data["status"] = "error"

    return render(request, "users/create.html", data)

def userDetail(request, id):
    User = get_object_or_404(user,id=id)
    data = {
        "user": User
    }
    return render(request, "users/detail.html", data)