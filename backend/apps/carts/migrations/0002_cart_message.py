# Generated by Django 3.2.4 on 2021-11-18 19:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='message',
            field=models.CharField(db_index=True, default='Anonymous', max_length=200, verbose_name='message'),
        ),
    ]
