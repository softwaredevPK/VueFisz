from rest_framework.serializers import ModelSerializer, HyperlinkedModelSerializer
from .models import Set, Flashcard


class FlashCardSerializer(ModelSerializer):
    class Meta:
        model = Flashcard
        fields = ['front', 'back']


class SetSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Set
        fields = ['name', 'id', 'flashcards']
