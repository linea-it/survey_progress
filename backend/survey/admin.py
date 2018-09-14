from django.contrib import admin

from .models import Exposure

@admin.register(Exposure)
class ExposureAdmin(admin.ModelAdmin):
    list_display = ('id', 'nite', 'expnum', 'ccdnum', 'band', 'filename',)
    search_fields = ('expnum', 'ccdnum', 'filename',)