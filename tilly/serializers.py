from rest_framework import serializers

from .models import Species, Tillandsia, TillyPic


class SpeciesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Species
        fields = ('id', 'name',)


class TillyPicSerializer(serializers.ModelSerializer):

    class Meta:
        model = TillyPic
        fields = ('id', 'image', 'tillandsia')


class TillandsiaSerializer(serializers.ModelSerializer):
    pics = TillyPicSerializer(source='tillypic_set', many=True, required=False)

    class Meta:
        model = Tillandsia
        fields = ('id', 'name', 'pics')
