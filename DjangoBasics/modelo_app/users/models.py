from django.db import models

# Create your models here.
class user (models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(max_length=50)
    age = models.IntegerField()
    rfc = models.CharField(max_length=13)
    photo = models.CharField(max_length=1000)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name
class user_address(models.Model):
    user = models.ForeignKey(user, on_delete=models.CASCADE)
    street = models.CharField(max_length=50)
    zip_code = models.IntegerField()
    city = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    created_date = models.DateTimeField(auto_now_add=True)
    updated_date = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.country