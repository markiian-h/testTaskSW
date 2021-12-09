from rest_framework import serializers

from api.serializers.group import GroupSerializer
from main_app.models import User
import datetime


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class UserListRetrieveSerializer(serializers.ModelSerializer):
    group = GroupSerializer()

    class Meta:
        model = User
        fields = '__all__'
