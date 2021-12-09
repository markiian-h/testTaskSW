from rest_framework import serializers

from main_app.models import Group


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        # fields = ['id', 'name', 'description']
        fields = '__all__'
