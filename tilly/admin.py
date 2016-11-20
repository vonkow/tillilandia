from django.contrib import admin

from .models import Species, Tillandsia, TillyPic


class TillyPicInline(admin.StackedInline):
    model = TillyPic
    extra = 1


class TillandsiaAdmin(admin.ModelAdmin):
    inlines = [TillyPicInline]

admin.site.register(Species)
admin.site.register(Tillandsia, TillandsiaAdmin)
admin.site.register(TillyPic)
