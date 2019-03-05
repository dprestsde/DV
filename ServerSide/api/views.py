# views.py
from rest_framework.parsers import FileUploadParser 
from rest_framework.viewsets import ModelViewSet
from rest_framework.generics import CreateAPIView
from .serializers import FileUploadSerializer,PostDataSerializer
from rest_framework.exceptions import ParseError
from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import filters
import pandas as pd
from django.conf import settings
from .models import FileUpload,JsonModel,TestUpload
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status
import json
def update():
    print('update called......')
    try:
        fs = FileUpload.objects.all().values()[0]
        name = fs['datafile']
        print("Trying....")
        df = pd.read_csv(settings.MEDIA_ROOT +'//'+ name)
        print("media root")
        df = df.set_index(df.columns[0])
        print("set_index")
        print("tring-----")
        print(df.head())
        json_file = df.to_json()
        print("json file")
        data = json.loads(json_file)
        print("Loads...")
        p = JsonModel(name=name,json_field=data)
        print("SAVED.....S")
        p.save()
        FileUpload.objects.all().delete()
    except:
        print('ERROR OCCCURED*********')


class FileUploadViewSet(ModelViewSet):
    update()
    print("FileUploadViewSet")

    queryset = JsonModel.objects.all()
    serializer_class = FileUploadSerializer
    parser_classes = (FileUploadParser,)
    filter_backends = (filters.SearchFilter,)
    search_fields = ('name','id','json_field'
    )
    # print("####",perform_create(serializer_class))
    def post(self,request):
        print("POST *******")
        if 'file' not in request.data:
            raise ParseError("Empty content")

        f = request.data['file']
        print(f)
        request.save(f.name, f, save=True)
        print(request)
        print("*******************************")
        update()
        return Response(status=status.HTTP_201_CREATED)


class FileView(APIView):
    parser_classes = (MultiPartParser, FormParser)
    def post(self, request, *args, **kwargs):
        print(request.data)
        file_serializer = PostDataSerializer(data=request.data)
        if file_serializer.is_valid():
            file_serializer.save()
            print("$$$$$$$$$$$$$$$")
            update()
            return Response(file_serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)