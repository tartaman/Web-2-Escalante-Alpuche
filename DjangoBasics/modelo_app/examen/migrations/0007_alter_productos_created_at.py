# Generated by Django 5.1.6 on 2025-03-05 07:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('examen', '0006_productos_created_at'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productos',
            name='created_at',
            field=models.DateField(auto_now_add=True),
        ),
    ]
