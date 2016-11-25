from rest_framework import viewsets
from rest_framework.pagination import LimitOffsetPagination

from .models import Shop, Species, Tillandsia, TillyPic

from .serializers import (
    ShopSerializer, SpeciesSerializer, TillandsiaSerializer, TillyPicSerializer
)


class ShopViewSet(viewsets.ModelViewSet):
    queryset = Shop.objects.all()
    serializer_class = ShopSerializer
    pagination_class = LimitOffsetPagination


class SpeciesViewSet(viewsets.ModelViewSet):
    queryset = Species.objects.all()
    serializer_class = SpeciesSerializer
    pagination_class = LimitOffsetPagination


class TillandsiaViewSet(viewsets.ModelViewSet):
    queryset = Tillandsia.objects.all()
    serializer_class = TillandsiaSerializer
    pagination_class = LimitOffsetPagination


class TillyPicViewSet(viewsets.ModelViewSet):
    queryset = TillyPic.objects.all()
    serializer_class = TillyPicSerializer
    pagination_class = LimitOffsetPagination
