import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award, ArrowRight, Play } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8" />,
      title: "Premium Quality",
      description: "Only the finest ingredients sourced from trusted suppliers"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Service",
      description: "Quick preparation without compromising on quality"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Chefs",
      description: "Experienced culinary professionals creating amazing dishes"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award Winning",
      description: "Recognized for excellence in culinary arts and service"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Absolutely incredible dining experience! The flavors were perfectly balanced and the service was exceptional.",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Michael Chen",
      text: "Best restaurant in the city! Every dish is a masterpiece. I bring all my friends and family here.",
      rating: 5,
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emily Rodriguez",
      text: "The ambiance is perfect for both romantic dinners and family gatherings. Food quality is consistently amazing.",
      rating: 5,
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-1000 hover:scale-110"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
            Welcome to 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500"> Savoria</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-fade-in-up animation-delay-200">
            Where culinary artistry meets unforgettable experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
            <Link
              to="/menu"
              className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
            >
              <span>Explore Menu</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2">
              <Play className="h-5 w-5" />
              <span>Watch Story</span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-cream-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-amber-600">Savoria</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing an exceptional dining experience with attention to every detail
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-amber-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-amber-100 mb-6">
                Our Culinary Journey
              </h2>
              <p className="text-lg text-amber-200/90 mb-6 leading-relaxed">
                For over two decades, Savoria has been crafting extraordinary culinary experiences 
                that celebrate the art of fine dining. Our passionate chefs combine traditional 
                techniques with innovative flavors to create dishes that tell a story.
              </p>
              <p className="text-lg text-amber-200/90 mb-8 leading-relaxed">
                Every ingredient is carefully selected, every dish thoughtfully prepared, 
                and every meal served with the warmth and hospitality that makes dining 
                with us truly special.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 bg-amber-200 text-amber-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-100 transform hover:scale-105 transition-all duration-300"
              >
                <span>Learn More</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Chef preparing food"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-amber-600">20+</div>
                <div className="text-gray-700 font-medium">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Guests Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">Verified Customer</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for an Amazing Experience?
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Book your table now and discover why Savoria is the talk of the town
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Make a Reservation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;