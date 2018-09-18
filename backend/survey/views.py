from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import Exposure
from .serializers import ExposureSerializer



class ExposureViewSet(viewsets.ModelViewSet):

    permission_classes = (AllowAny,)
    queryset = Exposure.objects.all()
    serializer_class = ExposureSerializer
    filter_fields = ('id', 'expnum', 'nite',)
    search_fields = ('id', 'expnum', 'nite')
    ordering_fields = ('nite', 'expnum',)
    ordering = ('-nite',)
