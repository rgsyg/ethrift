from rest_framework import serializers
from api.models import UserProfile, Product, Order

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