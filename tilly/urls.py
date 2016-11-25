from rest_framework import routers
from .viewsets import (
    ShopViewSet, SpeciesViewSet, TillandsiaViewSet, TillyPicViewSet
)

router = routers.DefaultRouter()

router.register(r'shops', ShopViewSet)
router.register(r'species', SpeciesViewSet)
router.register(r'tillandsias', TillandsiaViewSet)
router.register(r'species', TillyPicViewSet)

urlpatterns = []
urlpatterns += router.urls
