import uuid
from datetime import datetime
from django.db import models
from versatileimagefield.fields import VersatileImageField


class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    create_date = models.DateTimeField(default=datetime.now)
    update_date = models.DateTimeField(default=datetime.now)

    def save(self, *args, **kwargs):
        self.update_date = datetime.now()
        super(BaseModel, self).save(*args, **kwargs)

    class Meta:
        abstract = True


class Species(BaseModel):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Tillandsia(BaseModel):
    name = models.CharField(max_length=255)
    species = models.ForeignKey(Species, null=True, blank=True)
    description = models.TextField(default='')

    def __str__(self):
        return self.name


class TillyPic(BaseModel):
    tillandsia = models.ForeignKey(Tillandsia)
    image = VersatileImageField(upload_to='tillys/%y/%m')
