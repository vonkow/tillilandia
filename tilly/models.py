import uuid
from django.db import models
from versatileimagefield.fields import VersatileImageField


class UUIDModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)

    class Meta:
        abstract = True


class Species(UUIDModel):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Tillandsia(UUIDModel):
    name = models.CharField(max_length=255)
    species = models.ForeignKey(Species, null=True, blank=True)
    description = models.TextField(default='')

    def __str__(self):
        return self.name


class TillyPic(UUIDModel):
    tillandsia = models.ForeignKey(Tillandsia)
    image = VersatileImageField(upload_to='tillys/%y/%m')
