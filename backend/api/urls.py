from rest_framework import routers
from django.conf.urls.static import static
from django.conf import settings
from . import views
from django.urls import path, include


urlpatterns = [
    path("artist/<str:id>/<str:token>", views.ArtistView.as_view(), name="artist"),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
