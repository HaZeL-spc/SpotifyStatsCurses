from django.db import models

class Artist(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100)

class Album(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=300)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)

class Song(models.Model):
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=300)
    lyrics = models.CharField(max_length=100000)
    album = models.ForeignKey(Album, on_delete=models.CASCADE)