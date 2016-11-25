# -*- coding: utf-8 -*-
# Generated by Django 1.10.3 on 2016-11-25 01:16
from __future__ import unicode_literals

import datetime
from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('tilly', '0005_auto_20161122_0533'),
    ]

    operations = [
        migrations.CreateModel(
            name='Shop',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('create_date', models.DateTimeField(default=datetime.datetime.now)),
                ('update_date', models.DateTimeField(default=datetime.datetime.now)),
                ('name', models.CharField(max_length=255)),
                ('description', models.TextField(default='')),
                ('website', models.URLField(blank=True, null=True)),
            ],
            options={
                'ordering': ['name'],
                'abstract': False,
            },
        ),
        migrations.AddField(
            model_name='species',
            name='description',
            field=models.TextField(default=''),
        ),
    ]