from rest_framework import serializers
from .models import Exposure

class ExposureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exposure
        fields = (
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