from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings
from . import views
from django.urls import path, include


urlpatterns = [
    path("lyrics", views.Lyrics.as_view(), name="lyrics"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
