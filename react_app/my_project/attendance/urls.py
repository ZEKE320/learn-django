from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'attendance'
urlpatterns = [
    path('', views.AttendanceListAPIView.as_view(), name='attendance'),
]
