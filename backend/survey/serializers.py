from rest_framework import serializers
from .models import Exposure, CCD

class ExposureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exposure
        fields = (
            'id', 
            'date_obs', 
            'nite', 
            'expnum', 
            'band', 
            'radeg', 
            'decdeg', 
            'filename', 
            'filetype', 
            'exptime', 
            'airmass',
            'humidity',
            'pressure',
        )

class CCDSerializer(serializers.ModelSerializer):
    class Meta:
        model = CCD
        fields = (
            'id',
            'pfw_attempt_id',
            'nite',
            'expnum',
            'ccdnum',
            'band',
            'exptime',
            'crossra0',
            'racmin',
            'racmax',
            'deccmin',
            'deccmax',
            'ra_cent',
            'dec_cent',
            'rac1',
            'rac2',
            'rac3',
            'rac4',
            'decc1',
            'decc2',
            'decc3',
            'decc4',
            'path',
            'filename',
            'downloaded',
        )        