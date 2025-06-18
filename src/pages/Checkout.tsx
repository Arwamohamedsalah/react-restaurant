import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import { CreditCard, MapPin, Clock, CheckCircle, User, Mail, Phone } from 'lucide-react';

const Checkout: React.FC = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const [orderDetails, setOrderDetails] = useState({
    deliveryAddress: '',
    phone: '',
    email: user?.email || '',
    name: user?.name || '',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    specialInstructions: ''
  });

  // Redirect if cart is empty
  if (items.length === 0 && !orderPlaced) {
    return <Navigate to="/menu" replace />;
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setOrderDetails({
      ...orderDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate order processing
    await new Promise(resolve => setTimeout(resolve, 3000));

    setOrderPlaced(true);
    setIsProcessing(false);
    clearCart();

    // Redirect to home after 5 seconds
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-emerald-50 flex items-center justify-center pt-20">
        <div className="max-w-md w-full mx-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-gray-600 mb-6">
              Thank you for your order! We'll start preparing your delicious meal right away.
            </p>
            <div className="bg-green-50 rounded-lg p-4 mb-6">
              <p className="text-green-800 font-semibold">Estimated Delivery Time</p>
              <p className="text-green-600">30-45 minutes</p>
            </div>
            <p className="text-gray-500 text-sm">
              You'll receive updates via SMS and email. Redirecting to home page...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-amber-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Details</h2>

            <form onSubmit={handleSubmitOrder} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <User className="h-5 w-5 mr-2 text-amber-600" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={orderDetails.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={orderDetails.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={orderDetails.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Delivery Address */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-amber-600" />
                  Delivery Address
                </h3>
                <textarea
                  name="deliveryAddress"
                  required
                  rows={3}
                  value={orderDetails.deliveryAddress}
                  onChange={handleInputChange}
                  placeholder="Enter your complete delivery address..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>

              {/* Payment Method */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-amber-600" />
                  Payment Method
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={orderDetails.paymentMethod === 'card'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span>Credit Card</span>
                  </label>
                  <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={orderDetails.paymentMethod === 'cash'}
                      onChange={handleInputChange}
                      className="mr-3"
                    />
                    <span>Cash on Delivery</span>
                  </label>
                </div>

                {orderDetails.paymentMethod === 'card' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        required
                        placeholder="1234 5678 9012 3456"
                        value={orderDetails.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        required
                        placeholder="123"
                        maxLength={3}
                        value={orderDetails.cvv}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Special Instructions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Instructions (Optional)
                </label>
                <textarea
                  name="specialInstructions"
                  rows={3}
                  value={orderDetails.specialInstructions}
                  onChange={handleInputChange}
                  placeholder="Any special requests or dietary restrictions..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isProcessing
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Processing Order...</span>
                  </div>
                ) : (
                  `Place Order - $${getTotalPrice().toFixed(2)}`
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-amber-600 font-bold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold">${getTotalPrice().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Delivery Fee:</span>
                <span className="font-semibold">$3.99</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax:</span>
                <span className="font-semibold">${(getTotalPrice() * 0.1).toFixed(2)}</span>
              </div>
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total:</span>
                  <span className="text-amber-600">
                    ${(getTotalPrice() + 3.99 + (getTotalPrice() * 0.1)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center space-x-2 text-amber-800">
                <Clock className="h-5 w-5" />
                <span className="font-semibold">Estimated Delivery Time</span>
              </div>
              <p className="text-amber-700 mt-1">30-45 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;