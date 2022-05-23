from django.db import models
from django.utils.translation import gettext_lazy as _
# Create your models here.


class TimeStamp(models.Model):
    created = models.DateTimeField(_('created'), auto_now=False, auto_now_add=True)
    last_modified = models.DateTimeField(_('last modified'),  auto_now=True)

    class Meta:
        abstract = True


class Flashcard(TimeStamp):
    front = models.TextField()
    back = models.TextField()


class Set(models.Model):
    name = models.CharField(max_length=128)
    flashcards = models.ForeignKey(Flashcard, on_delete=models.CASCADE, related_name='set')

