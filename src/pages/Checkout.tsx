import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import { CheckCircle2, CreditCard, Truck, ShoppingBag, ArrowLeft, ArrowRight, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const { showToast } = useToast();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateStep = () => {
    if (step === 1) {
      if (!formData.name || !formData.email || !formData.phone) {
        showToast('Please fill in all contact details', 'error');
        return false;
      }
      if (!formData.email.includes('@')) {
        showToast('Please enter a valid email', 'error');
        return false;
      }
    } else if (step === 2) {
      if (!formData.address || !formData.city || !formData.zip) {
        showToast('Please fill in all shipping details', 'error');
        return false;
      }
    } else if (step === 3) {
      if (!formData.cardNumber || !formData.expiry || !formData.cvv) {
        showToast('Please fill in all payment details', 'error');
        return false;
      }
      if (formData.cardNumber.length < 16) {
        showToast('Invalid card number', 'error');
        return false;
      }
    }
    return true;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep()) {
      if (step < 3) setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handlePlaceOrder = async () => {
    if (!validateStep()) return;
    
    setIsProcessing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsProcessing(false);
      setIsSuccess(true);
      clearCart();
      showToast('Order placed successfully!', 'success');
    } catch (error) {
      setIsProcessing(false);
      showToast('Failed to place order. Please try again.', 'error');
    }
  };

  if (cart.length === 0 && !isSuccess) {
    return (
      <div className="pt-40 pb-20 px-4 text-center min-h-screen bg-[#FDFBF7]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag className="h-10 w-10 text-gray-300" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-[#1A1A1A] mb-4">Your cart is empty</h2>
          <p className="text-gray-500 mb-8">Add some delicious brews to your cart before checking out.</p>
          <Link
            to="/menu"
            className="inline-block bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#B8962E] transition-all"
          >
            Go to Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="pt-40 pb-20 px-4 text-center min-h-screen bg-[#FDFBF7]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-2xl mx-auto bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100"
        >
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-[#1A1A1A] mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed">
            Thank you for your order. We've received it and our baristas are starting to brew your favorites. 
            You'll receive a confirmation email shortly.
          </p>
          <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-gray-100 mb-10 text-left">
            <div className="flex justify-between border-b border-gray-200 pb-4 mb-4">
              <span className="text-gray-400 font-medium uppercase tracking-widest text-xs">Order Number</span>
              <span className="text-[#1A1A1A] font-bold font-mono">#GB-{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400 font-medium uppercase tracking-widest text-xs">Estimated Delivery</span>
              <span className="text-[#1A1A1A] font-bold">25-35 Minutes</span>
            </div>
          </div>
          <button
            onClick={() => navigate('/')}
            className="bg-[#D4AF37] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-[#B8962E] transition-all"
          >
            Back to Home
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-[#FDFBF7] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Checkout Steps */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 overflow-hidden">
              {/* Progress Bar */}
              <div className="bg-[#1A1A1A] p-8 text-white">
                <div className="flex justify-between items-center max-w-md mx-auto">
                  {[1, 2, 3].map((s) => (
                    <div key={s} className="flex flex-col items-center relative">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all duration-500 ${
                        step >= s ? 'bg-[#D4AF37] text-white' : 'bg-white/10 text-white/40'
                      }`}>
                        {s === 1 && <Users className="h-5 w-5" />}
                        {s === 2 && <Truck className="h-5 w-5" />}
                        {s === 3 && <CreditCard className="h-5 w-5" />}
                      </div>
                      <span className={`text-[10px] uppercase tracking-widest mt-2 font-bold ${
                        step >= s ? 'text-[#D4AF37]' : 'text-white/20'
                      }`}>
                        {s === 1 ? 'Details' : s === 2 ? 'Shipping' : 'Payment'}
                      </span>
                      {s < 3 && (
                        <div className={`absolute left-full top-5 w-20 h-[2px] -translate-x-2 ${
                          step > s ? 'bg-[#D4AF37]' : 'bg-white/10'
                        }`} />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-10 md:p-16">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.form
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleNext}
                      className="space-y-8"
                    >
                      <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">Contact Information</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                            placeholder="John Doe"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email Address</label>
                          <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                            placeholder="john@example.com"
                          />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Phone Number</label>
                          <input
                            required
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                            placeholder="+91 98765 43210"
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[#D4AF37] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#B8962E] transition-all flex items-center justify-center group"
                      >
                        Continue to Shipping
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </motion.form>
                  )}

                  {step === 2 && (
                    <motion.form
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      onSubmit={handleNext}
                      className="space-y-8"
                    >
                      <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">Shipping Address</h2>
                      <div className="space-y-8">
                        <div className="space-y-2">
                          <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Street Address</label>
                          <textarea
                            required
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            rows={3}
                            className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                            placeholder="123 Heritage Lane, Civil Lines"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                          <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">City</label>
                            <input
                              required
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                              placeholder="Jaipur"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">ZIP Code</label>
                            <input
                              required
                              name="zip"
                              value={formData.zip}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                              placeholder="302001"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex-1 border-2 border-gray-100 text-gray-400 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                        >
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          Back
                        </button>
                        <button
                          type="submit"
                          className="flex-[2] bg-[#D4AF37] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#B8962E] transition-all flex items-center justify-center group"
                        >
                          Continue to Payment
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </motion.form>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-8"
                    >
                      <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">Payment Details</h2>
                      <div className="space-y-8">
                        <div className="bg-[#1A1A1A] p-8 rounded-3xl text-white relative overflow-hidden">
                          <div className="relative z-10">
                            <div className="flex justify-between items-start mb-12">
                              <CreditCard className="h-10 w-10 text-[#D4AF37]" />
                              <div className="text-right">
                                <span className="text-[10px] uppercase tracking-widest text-white/40 block">Card Holder</span>
                                <span className="font-bold uppercase">{formData.name || 'Your Name'}</span>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <span className="text-2xl font-mono tracking-[0.2em] block">
                                {formData.cardNumber ? formData.cardNumber.replace(/(.{4})/g, '$1 ') : '•••• •••• •••• ••••'}
                              </span>
                              <div className="flex justify-between items-end">
                                <div>
                                  <span className="text-[10px] uppercase tracking-widest text-white/40 block">Expiry Date</span>
                                  <span className="font-bold">{formData.expiry || 'MM/YY'}</span>
                                </div>
                                <div className="w-12 h-8 bg-white/10 rounded-md flex items-center justify-center">
                                  <div className="w-8 h-4 bg-[#D4AF37]/40 rounded-sm" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-2 md:col-span-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Card Number</label>
                            <input
                              required
                              name="cardNumber"
                              maxLength={16}
                              value={formData.cardNumber}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                              placeholder="1234567812345678"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Expiry Date</label>
                            <input
                              required
                              name="expiry"
                              placeholder="MM/YY"
                              value={formData.expiry}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-bold uppercase tracking-widest text-gray-400">CVV</label>
                            <input
                              required
                              name="cvv"
                              type="password"
                              maxLength={3}
                              value={formData.cvv}
                              onChange={handleInputChange}
                              className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] transition-all"
                              placeholder="•••"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={handleBack}
                          className="flex-1 border-2 border-gray-100 text-gray-400 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all flex items-center justify-center"
                        >
                          <ArrowLeft className="mr-2 h-5 w-5" />
                          Back
                        </button>
                        <button
                          onClick={handlePlaceOrder}
                          disabled={isProcessing}
                          className="flex-[2] bg-[#D4AF37] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#B8962E] transition-all flex items-center justify-center disabled:opacity-50"
                        >
                          {isProcessing ? (
                            <div className="flex items-center">
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3" />
                              Processing...
                            </div>
                          ) : (
                            `Pay ₹${totalPrice}`
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-[3rem] shadow-xl border border-gray-100 p-8 sticky top-32">
              <h3 className="text-2xl font-serif font-bold text-[#1A1A1A] mb-8">Order Summary</h3>
              <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 scrollbar-hide">
                {cart.map((item) => (
                  <div key={item.id} className="flex space-x-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-bold text-sm text-[#1A1A1A]">{item.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-400">Qty: {item.quantity}</span>
                        <span className="text-sm font-bold text-[#D4AF37]">{item.price}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-4 border-t border-gray-100 pt-6">
                <div className="flex justify-between text-gray-500">
                  <span>Subtotal</span>
                  <span>₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-gray-500">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold uppercase text-xs">Free</span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-xl font-serif font-bold text-[#1A1A1A]">Total</span>
                  <span className="text-3xl font-serif font-bold text-[#D4AF37]">₹{totalPrice}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
