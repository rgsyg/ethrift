from rest_framework import serializers
from django.contrib.auth.models import User
from api.models import UserProfile, Product, Order

class UserProfileCreateSerializer(serializers.ModelSerializer):
    username = serializers.CharField(write_only=True)
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(write_only=True)
    first_name = serializers.CharField(write_only=True)
    last_name = serializers.CharField(write_only=True)

    class Meta:
        model = UserProfile
        fields = ['first_name', 'last_name', 'username', 'email', 'password']

    def create(self, validated_data):
        first_name = validated_data.pop('first_name')
        last_name = validated_data.pop('last_name')
        username = validated_data.pop('username')
        email = validated_data.pop('email')
        password = validated_data.pop('password')

        user = User.objects.create_user(first_name=first_name, last_name=last_name, username=username, email=email, password=password)
        profile = UserProfile.objects.create(user=user, **validated_data)
        return profile

class UserProfileSerializer(serializers.ModelSerializer):
    user_username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = UserProfile
        fields = ['user_username', 'address', 'phone_number', 'preferred_payment_method', 'business_name', 'business_address', 'business_phone']

class ProductSerializer(serializers.ModelSerializer):
    user_username = serializers.ReadOnlyField(source='user.user.username')

    class Meta:
        model = Product
        fields = ['id', 'user_username', 'name', 'description', 'price']

class OrderSerializer(serializers.ModelSerializer):
    user_username = serializers.ReadOnlyField(source='user.user.username')

    class Meta:
        model = Order
        fields = ['id', 'user_username', 'product_name', 'quantity', 'order_date']