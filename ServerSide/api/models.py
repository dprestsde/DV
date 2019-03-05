from django.db import models
from django.contrib.auth.models import User
from django.contrib.postgres.fields import JSONField




class JsonModel(models.Model):
    name = models.CharField(max_length=32)
    json_field = JSONField()
    
    def __str__(self):
        return self.name



class FileUpload(models.Model):
    name = models.CharField(max_length=36)
    datafile = models.FileField(null=True,blank=True)
    print('models.py......')
    def __str__(self):
        return str(self.name)



class TestUpload(models.Model):
    name = models.CharField(max_length=36)
    age = models.CharField(max_length=10)

    def __str__(self):
        return self.name