from rest_framework import serializers
from .models import *
from .searchLyrics import searchLyrics

# class LyricsSerializer(serializers.ModelSerializer):
#     lyrics = serializers.SerializerMethodField()
#
#     def get_lyrics(self):
#         return searchLyrics()
#
#     class Meta:
#         model = Lyrics
#         fields = ['name', 'detail','lyrics']