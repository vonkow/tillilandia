from rest_framework import serializers
from versatileimagefield.serializers import VersatileImageFieldSerializer

from .models import Species, Tillandsia, TillyPic


class SpeciesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Species
        fields = ('id', 'name', 'create_date', 'update_date')


class TillyPicSerializer(serializers.ModelSerializer):
    height = serializers.IntegerField(source='image.height', read_only=True)
    width = serializers.IntegerField(source='image.width', read_only=True)

    class Meta:
        model = TillyPic
        fields = ('id', 'image', 'height', 'width', 'tillandsia')


class TillandsiaSerializer(serializers.ModelSerializer):
    pics = TillyPicSerializer(source='tillypic_set', many=True, required=False)
    species = serializers.StringRelatedField()

    class Meta:
        model = Tillandsia
        fields = (
            'id', 'create_date', 'update_date',
            'name', 'species', 'description', 'pics'
        )
