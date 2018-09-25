from django.contrib import admin

from .models import Exposure, CCD

@admin.register(Exposure)
class ExposureAdmin(admin.ModelAdmin):
    list_display = ('id', 'nite', 'expnum', 'band', 'radeg', 'decdeg', 'filename', 'filetype', 'exptime', 'airmass', 'humidity', 'pressure',)
    search_fields = ('expnum', 'ccdnum', 'filename',)

@admin.register(CCD)
class CCDAdmin(admin.ModelAdmin):
    list_display = ('id', 'nite', 'expnum', 'ccdnum', 'band', 'filename',)
    search_fields = ('expnum', 'ccdnum', 'filename',)