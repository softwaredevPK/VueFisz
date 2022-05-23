from rest_framework.views import APIView
from rest_framework.authentication import SessionAuthentication, BasicAuthentication


class FlashCardView(APIView):
    authentication_classes = ...
    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def get(self, request, *args, **kwargs):
        ...

    def post(self, request, *args, **kwargs):
        ...

    def put(self, request, *args, **kwargs):
        ...

    def delete(self, request, *args, **kwargs):
        ...