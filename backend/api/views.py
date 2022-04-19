from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from .models import *
from rest_framework.response import Response
from .serializer import *
from .getSongs import getArtistSong


# Create your views here.

class ArtistView(APIView):
    def get(self, request,id, token, * args, **kwargs):
        obj, created = Artist.objects.get_or_create(id=id)
        # if created:
        songs = getArtistSong(id, token)
        response = Response(searchLyrics(), status=status.HTTP_200_OK)
        return response

