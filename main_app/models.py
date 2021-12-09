from django.db import models


class User(models.Model):
    username = models.CharField(max_length=64)
    created = models.DateField(auto_now_add=True)
    group = models.ForeignKey(to='Group', on_delete=models.CASCADE, related_name='users')

    def __str__(self):
        return self.username


class Group(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=64)
    description = models.TextField(max_length=1000)

    def __str__(self):
        return self.name
