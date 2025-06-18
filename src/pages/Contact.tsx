import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Navigation } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    reservationDate: '',
    reservationTime: '',
    guests: '2'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState('contact');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        reservationDate: '',
        reservationTime: '',
        guests: '2'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Address",
      details: ["123 Culinary Street", "Food City, FC 12345"]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 123-4568"]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["info@savoria.com", "reservations@savoria.com"]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Hours",
      details: ["Mon-Fri: 11:00 - 22:00", "Sat-Sun: 10:00 - 23:00"]
    }
  ];

  const openInMaps = () => {
    const address = "123 Culinary Street, Food City, FC 12345";
    const encodedAddress = encodeURIComponent(address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedAddress}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-amber-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-amber-200/90 max-w-3xl mx-auto">
            We'd love to hear from you. Contact us for reservations, inquiries, or just to say hello!
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center"
            >
              <div className="text-amber-600 mb-4 flex justify-center">
                {info.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-gray-600 text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {/* Tab Navigation */}
            <div className="flex mb-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('contact')}
                className={`px-6 py-3 font-semibold transition-all duration-200 ${
                  activeTab === 'contact'
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Contact Us
              </button>
              <button
                onClick={() => setActiveTab('reservation')}
                className={`px-6 py-3 font-semibold transition-all duration-200 ${
                  activeTab === 'reservation'
                    ? 'text-amber-600 border-b-2 border-amber-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                Make Reservation
              </button>
            </div>

            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {activeTab === 'contact' ? 'Message Sent!' : 'Reservation Requested!'}
                </h3>
                <p className="text-gray-600">
                  {activeTab === 'contact'
                    ? 'Thank you for your message. We\'ll get back to you soon!'
                    : 'We\'ll contact you shortly to confirm your reservation.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                {activeTab === 'reservation' && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label htmlFor="reservationDate" className="block text-sm font-medium text-gray-700 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        id="reservationDate"
                        name="reservationDate"
                        required
                        value={formData.reservationDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="reservationTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Time *
                      </label>
                      <input
                        type="time"
                        id="reservationTime"
                        name="reservationTime"
                        required
                        value={formData.reservationTime}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                        Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {activeTab === 'contact' && (
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {activeTab === 'contact' ? 'Message *' : 'Special Requests'}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required={activeTab === 'contact'}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder={
                      activeTab === 'contact'
                        ? 'Tell us how we can help you...'
                        : 'Any dietary restrictions or special requests?'
                    }
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>
                        {activeTab === 'contact' ? 'Send Message' : 'Request Reservation'}
                      </span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Map and Additional Info */}
          <div className="space-y-8">
            {/* Interactive Map */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-amber-100 to-orange-100 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890123!2d-74.0059413!3d40.7127753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjEuNCJX!5e0!3m2!1sen!2sus!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-t-2xl"
                ></iframe>
                <button
                  onClick={openInMaps}
                  className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600 px-4 py-2 rounded-full font-semibold hover:bg-white transition-all duration-200 flex items-center space-x-2 shadow-lg"
                >
                  <Navigation className="h-4 w-4" />
                  <span>Open in Maps</span>
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Us</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Parking</h4>
                  <p className="text-gray-600 text-sm">
                    Complimentary valet parking available for all dinner guests. 
                    Street parking also available on nearby streets.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Dress Code</h4>
                  <p className="text-gray-600 text-sm">
                    Smart casual to formal attire. We want you to feel comfortable 
                    while maintaining the elegant atmosphere of our restaurant.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Reservations</h4>
                  <p className="text-gray-600 text-sm">
                    Reservations recommended, especially for dinner service and weekends. 
                    Walk-ins welcome based on availability.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Live Location</h4>
                  <p className="text-gray-600 text-sm">
                    Click "Open in Maps" above to get real-time directions to our restaurant. 
                    We're located in the heart of the culinary district.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;