from django.contrib import admin
from django.urls import path, include
from .views import SetViewSet, FlashcardViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

router.register('sets', SetViewSet)
router.register('flashcards', FlashcardViewSet)
urlpatterns = router.urls
