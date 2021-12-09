from rest_framework import viewsets

from api.serializers.group import GroupSerializer
from api.serializers.user import UserSerializer, UserListRetrieveSerializer
from main_app.models import User, Group


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    action_to_serializer = {
        'list': UserListRetrieveSerializer,
        'retrieve': UserListRetrieveSerializer
    }

    def get_serializer_class(self):
        return self.action_to_serializer.get(
            self.action,
            self.serializer_class
        )


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
