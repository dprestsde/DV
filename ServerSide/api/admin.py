from django.contrib import admin
from .models import FileUpload,JsonModel,TestUpload
# Register your models here.
admin.site.register(FileUpload)
admin.site.register(JsonModel)


admin.site.register(TestUpload)