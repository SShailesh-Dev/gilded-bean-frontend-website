import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';

const Booking = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '1 Person'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const bookingId = "GB-" + Math.random().toString(36).substr(2, 9).toUpperCase();

  if (isSubmitted) {
    return (
      <div className="pt-40 pb-20 px-4 text-center max-w-3xl mx-auto min-h-screen bg-[#FDFBF7]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-[3rem] shadow-2xl border border-gray-100 text-left"
        >
          <div className="flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-8 mx-auto">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-4xl font-serif font-bold text-[#1A1A1A] mb-4 text-center">Reservation Confirmed!</h1>
          <p className="text-gray-600 text-lg mb-10 leading-relaxed text-center">
            Thank you for choosing The Gilded Bean. Your table is ready for you.
          </p>

          <div className="bg-[#FDFBF7] p-8 rounded-3xl border border-gray-100 space-y-4 mb-10">
            <div className="flex justify-between border-b border-gray-200 pb-4">
              <span className="text-gray-400 font-medium uppercase tracking-widest text-xs">Booking ID</span>
              <span className="text-[#1A1A1A] font-bold font-mono">{bookingId}</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <span className="text-gray-400 font-medium uppercase tracking-widest text-xs block mb-1">Guest</span>
                <span className="text-[#1A1A1A] font-bold">{bookingDetails.name || 'Valued Guest'}</span>
              </div>
              <div>
                <span className="text-gray-400 font-medium uppercase tracking-widest text-xs block mb-1">Guests</span>
                <span className="text-[#1A1A1A] font-bold">{bookingDetails.guests}</span>
              </div>
              <div>
                <span className="text-gray-400 font-medium uppercase tracking-widest text-xs block mb-1">Date</span>
                <span className="text-[#1A1A1A] font-bold">{bookingDetails.date || 'Today'}</span>
              </div>
              <div>
                <span className="text-gray-400 font-medium uppercase tracking-widest text-xs block mb-1">Time</span>
                <span className="text-[#1A1A1A] font-bold">{bookingDetails.time || '08:00 PM'}</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => setIsSubmitted(false)}
              className="flex-1 bg-[#D4AF37] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-[#B8962E] transition-all"
            >
              Make Another Booking
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-white border border-gray-200 text-[#1A1A1A] px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-all"
            >
              Print Confirmation
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="pt-24 pb-20 bg-[#FDFBF7]"
    >
      {/* Header */}
      <section className="bg-[#FDFBF7] py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#D4AF37] font-serif italic text-xl mb-4 block"
          >
            Reservations
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 text-[#1A1A1A]"
          >
            Table Reservation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-2xl mx-auto"
          >
            Secure your spot in our sanctuary of coffee and heritage. 
            Perfect for meetings, dates, or a quiet afternoon.
          </motion.p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 text-[#D4AF37]/10 animate-pulse">
          <Calendar className="h-32 w-32" />
        </div>
        <div className="absolute bottom-10 right-10 text-[#D4AF37]/10 animate-pulse delay-700">
          <Clock className="h-32 w-32" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-serif font-bold text-[#1A1A1A] mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Have a special request or planning a private event? 
                Our team is here to help you create the perfect experience.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-[#D4AF37]/10 rounded-2xl">
                  <MapPin className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#1A1A1A] mb-1">Our Location</h4>
                  <p className="text-gray-500">123 Heritage Lane, Jaipur, Rajasthan 302001</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-[#D4AF37]/10 rounded-2xl">
                  <Phone className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#1A1A1A] mb-1">Phone Number</h4>
                  <a href="tel:+919876543210" className="text-gray-500 hover:text-[#D4AF37] transition-colors">+91 98765 43210</a>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-[#D4AF37]/10 rounded-2xl">
                  <Mail className="h-6 w-6 text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-xl font-serif font-bold text-[#1A1A1A] mb-1">Email Address</h4>
                  <a href="mailto:reservations@gildedbean.com" className="text-gray-500 hover:text-[#D4AF37] transition-colors">reservations@gildedbean.com</a>
                </div>
              </div>
            </div>

            <div className="bg-[#FDFBF7] p-10 rounded-3xl border border-gray-100">
              <h4 className="text-xl font-serif font-bold text-[#1A1A1A] mb-4">Opening Hours</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday - Sunday</span>
                  <span>9:00 AM - 11:00 PM</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Full Name</label>
                  <input
                    required
                    type="text"
                    value={bookingDetails.name}
                    onChange={(e) => setBookingDetails({...bookingDetails, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Email</label>
                  <input
                    required
                    type="email"
                    value={bookingDetails.email}
                    onChange={(e) => setBookingDetails({...bookingDetails, email: e.target.value})}
                    placeholder="john@example.com"
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      required
                      type="date"
                      value={bookingDetails.date}
                      onChange={(e) => setBookingDetails({...bookingDetails, date: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-14 pr-6 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Time</label>
                  <div className="relative">
                    <Clock className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <select
                      required
                      value={bookingDetails.time}
                      onChange={(e) => setBookingDetails({...bookingDetails, time: e.target.value})}
                      className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-14 pr-6 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none"
                    >
                      <option value="">Select Time</option>
                      <option>08:00 AM</option>
                      <option>10:00 AM</option>
                      <option>12:00 PM</option>
                      <option>02:00 PM</option>
                      <option>04:00 PM</option>
                      <option>06:00 PM</option>
                      <option>08:00 PM</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Number of Guests</label>
                <div className="relative">
                  <Users className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    required
                    value={bookingDetails.guests}
                    onChange={(e) => setBookingDetails({...bookingDetails, guests: e.target.value})}
                    className="w-full bg-gray-50 border border-gray-100 rounded-xl pl-14 pr-6 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all appearance-none"
                  >
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 People</option>
                    <option>4 People</option>
                    <option>5+ People</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-gray-400">Special Requests</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about any allergies or special occasions..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-xl px-6 py-4 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37] transition-all"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D4AF37] text-white py-5 rounded-2xl font-bold text-lg hover:bg-[#B8962E] transition-all shadow-xl shadow-[#D4AF37]/20"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Booking;
