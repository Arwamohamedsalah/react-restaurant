import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChefHat, User, LogOut, ShoppingBag } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';
import CartSidebar from './CartSidebar';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const { getTotalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  const totalItems = getTotalItems();

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-gradient-to-r from-amber-900/95 to-orange-800/95 backdrop-blur-md shadow-lg' 
          : 'bg-gradient-to-r from-amber-900/80 to-orange-800/80 backdrop-blur-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-2 group"
              onClick={() => setIsOpen(false)}
            >
              <ChefHat className="h-8 w-8 text-amber-200 group-hover:text-amber-100 transition-colors duration-200" />
              <span className="text-xl font-bold text-amber-100 group-hover:text-white transition-colors duration-200">
                Savoria
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group ${
                      location.pathname === link.path
                        ? 'text-amber-200 bg-white/10'
                        : 'text-amber-100 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-amber-200 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
                  </Link>
                ))}
              </div>
            </div>

            {/* User Menu & Cart */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-amber-100 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
              >
                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-amber-100">
                    <User className="h-5 w-5" />
                    <span className="text-sm font-medium">{user.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-amber-100 hover:text-white hover:bg-white/10 transition-all duration-200"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="bg-amber-200 text-amber-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-amber-100 transform hover:scale-105 transition-all duration-200 shadow-md"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Cart Button */}
              <button
                onClick={() => setCartOpen(true)}
                className="relative p-2 text-amber-100 hover:text-white rounded-md transition-colors duration-200"
              >
                <ShoppingBag className="h-6 w-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-amber-100 hover:text-white p-2 rounded-md transition-colors duration-200"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-gradient-to-r from-amber-900/95 to-orange-800/95 backdrop-blur-md`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  location.pathname === link.path
                    ? 'text-amber-200 bg-white/10'
                    : 'text-amber-100 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {user ? (
              <div className="border-t border-white/10 pt-4 mt-4">
                <div className="flex items-center space-x-2 px-3 py-2 text-amber-100">
                  <User className="h-5 w-5" />
                  <span className="text-sm font-medium">{user.name}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium text-amber-100 hover:text-white hover:bg-white/5 transition-all duration-200"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-amber-200 text-amber-900 px-3 py-2 rounded-md text-base font-medium hover:bg-amber-100 transition-all duration-200 mt-4"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;