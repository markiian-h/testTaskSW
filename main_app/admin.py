from django.contrib import admin

# Register your models here.
from main_app.models import User, Group

admin.site.register(User)
admin.site.register(Group)
