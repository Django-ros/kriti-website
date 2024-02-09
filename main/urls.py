
from django.urls import path,include
from .import views
urlpatterns = [

    path('library/',views.home,name="home"),
    path('',views.interface,name="interface"),
    path('chatbot/',views.chatbot,name="chatbot"),
]