from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from .models import *
from rest_framework.response import Response
from .serializer import *


# Create your views here.

class Lyrics(APIView):
    def get(self, request):
        response = Response(searchLyrics(), status=status.HTTP_200_OK)
        return response

