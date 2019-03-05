from rest_framework import serializers
from .models import FileUpload,JsonModel

class FileUploadSerializer(serializers.ModelSerializer):
    owner = serializers.SlugRelatedField(
        read_only=True,
        slug_field='id'
    )
    print('serializers.py.....')
    class Meta:
        model = JsonModel
        fields = "__all__"


class PostDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FileUpload
        fields = "__all__"
