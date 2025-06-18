import React from 'react';
import { ChefHat, MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-900 to-orange-800 text-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-amber-200" />
              <span className="text-2xl font-bold text-amber-100">Savoria</span>
            </div>
            <p className="text-amber-200/80 leading-relaxed">
              Experience culinary excellence with our carefully crafted dishes, 
              made with the finest ingredients and passion for great food.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200/80">123 Culinary Street, Food City, FC 12345</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-300" />
                <span className="text-amber-200/80">info@savoria.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Quick Links</h3>
            <div className="space-y-2">
              {['Home', 'Menu', 'About', 'Contact', 'Reservations'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-amber-200/80 hover:text-amber-200 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-200">Opening Hours</h3>
            <div className="space-y-2 text-amber-200/80">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>11:00 - 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 - 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>10:00 - 21:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 rounded-full bg-amber-800 text-amber-200 hover:bg-amber-700 hover:text-amber-100 transition-all duration-200 transform hover:scale-110"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-amber-200/80 text-center">
              © 2024 Savoria. All rights reserved. Made with ❤️ for food lovers.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;