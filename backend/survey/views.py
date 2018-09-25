from django.shortcuts import render

from rest_framework import viewsets
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import AllowAny
from .models import Exposure, CCD
from .serializers import ExposureSerializer, CCDSerializer



class ExposureViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (AllowAny,)
    queryset = Exposure.objects.order_by('expnum')
    serializer_class = ExposureSerializer
    filter_fields = ('id', 'expnum', 'nite',)
    search_fields = ('id', 'expnum', 'nite')
    ordering_fields = ('nite', 'expnum','band')
    ordering = ('-nite','expnum', 'band')


class CCDViewSet(viewsets.ModelViewSet):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (AllowAny,)
    queryset = CCD.objects.all()
    serializer_class = CCDSerializer
    filter_fields = ('id', 'expnum', 'nite',)
    search_fields = ('id', 'expnum', 'nite')
    ordering_fields = ('nite', 'expnum','ccdnum')
    ordering = ('-nite','expnum', 'ccdnum')