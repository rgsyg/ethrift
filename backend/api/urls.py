from django.urls import path
from api.views import UserProfileCreateView, UserProfileListView, UserProfileDetailView, ProductListView,ProductDetailView, OrderListView, OrderDetailView, UserOrdersView, UserProductsView

urlpatterns = [
    path('register/', UserProfileCreateView.as_view(), name='user-register'),
    path('products/', ProductListView.as_view(), name='product-list'),
    path('products/<int:pk>/', ProductDetailView.as_view(), name='product-detail'),
    path('orders/', OrderListView.as_view(), name='order-list'),
    path('orders/<int:pk>/', OrderDetailView.as_view(), name='order-detail'),
    path('users/', UserProfileListView.as_view(), name='user-list'),
    path('users/<int:pk>/', UserProfileDetailView.as_view(), name='user-detail'),
    path('user-orders/', UserOrdersView.as_view(), name='user-orders'),
    path('user-products/', UserProductsView.as_view(), name='user-products'),
]