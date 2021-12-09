from rest_framework import routers
from api.views import UserViewSet, GroupViewSet

router = routers.SimpleRouter()
router.register('api/users', UserViewSet, basename='users')
router.register('api/groups', GroupViewSet, basename='users')

urlpatterns = []
urlpatterns += router.urls
