from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import mixins, status, viewsets
from .serializers import SetSerializer, FlashCardSerializer
from .models import Set, Flashcard


class SetViewSet(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    viewsets.GenericViewSet
):
    queryset = Set.objects.all()
    serializer_class = SetSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]


class FlashcardViewSet(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.CreateModelMixin,
    mixins.ListModelMixin,
    viewsets.GenericViewSet
):
    queryset = Flashcard.objects.all()
    serializer_class = FlashCardSerializer
    authentication_classes = [SessionAuthentication, BasicAuthentication]
