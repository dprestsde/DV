# Generated by Django 2.1.7 on 2019-02-22 18:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_remove_fileupload_created'),
    ]

    operations = [
        migrations.CreateModel(
            name='TestUpload',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=36)),
                ('age', models.CharField(max_length=10)),
            ],
        ),
    ]