from django.urls import path
from .views import ContactMessageView, TrackVisitView

urlpatterns = [
    path('contact/', ContactMessageView.as_view(), name='contact'),
    path('track-visit/', TrackVisitView.as_view(), name='track_visit'),
]
