from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    address = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True, null=True)
    preferred_payment_method = models.CharField(max_length=50, blank=True, null=True)
    business_name = models.CharField(max_length=100, blank=True, null=True)
    business_address = models.TextField(blank=True, null=True)
    business_phone = models.CharField(max_length=20, blank=True, null=True)
    bank_account = models.CharField(max_length=100, blank=True, null=True)

    def __str__(self):
        return self.user.username + "'s Profile"

class Product(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    name = models.CharField(max_length=200)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.name
    
class Order(models.Model):
    user = models.ForeignKey(UserProfile, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    order_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order #{self.id} - {self.product.name} - {self.user.user.username}"