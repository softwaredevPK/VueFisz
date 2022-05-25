from django.db import models
from django.utils.translation import gettext_lazy as _
from django.conf import settings
# Create your models here.


class TimeStamp(models.Model):
    created = models.DateTimeField(_('created'), auto_now=False, auto_now_add=True)
    last_modified = models.DateTimeField(_('last modified'),  auto_now=True)

    class Meta:
        abstract = True


class Set(TimeStamp):
    name = models.CharField(max_length=128)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='sets')


class Flashcard(TimeStamp):
    front = models.TextField()
    back = models.TextField()
    set = models.ForeignKey(Set, on_delete=models.PROTECT, related_name='flashcards')



