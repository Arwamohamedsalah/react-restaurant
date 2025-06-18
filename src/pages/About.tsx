import React from 'react';
import { Award, Users, Heart, Clock, Star, ChefHat } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { number: '20+', label: 'Years of Excellence', icon: <Clock className="h-8 w-8" /> },
    { number: '50K+', label: 'Happy Customers', icon: <Heart className="h-8 w-8" /> },
    { number: '15', label: 'Expert Chefs', icon: <ChefHat className="h-8 w-8" /> },
    { number: '25+', label: 'Awards Won', icon: <Award className="h-8 w-8" /> }
  ];

  const chefs = [
    {
      name: "Marco Rodriguez",
      title: "Executive Chef",
      experience: "15+ years",
      specialty: "Mediterranean Cuisine",
      image: "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Marco brings passion and creativity to every dish, specializing in modern Mediterranean flavors."
    },
    {
      name: "Sofia Chen",
      title: "Sous Chef",
      experience: "12+ years",
      specialty: "Asian Fusion",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "Sofia's innovative approach to Asian fusion cuisine creates unforgettable taste experiences."
    },
    {
      name: "David Thompson",
      title: "Pastry Chef",
      experience: "10+ years",
      specialty: "French Pastry",
      image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      description: "David's artistic desserts are the perfect finale to any dining experience at Savoria."
    }
  ];

  const values = [
    {
      icon: <Heart className="h-12 w-12" />,
      title: "Passion",
      description: "Every dish is prepared with love and dedication to culinary excellence"
    },
    {
      icon: <Star className="h-12 w-12" />,
      title: "Quality",
      description: "We source only the finest ingredients and maintain the highest standards"
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Community",
      description: "Creating memorable experiences that bring people together over great food"
    },
    {
      icon: <Award className="h-12 w-12" />,
      title: "Excellence",
      description: "Continuously striving to exceed expectations in every aspect of service"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-amber-50 pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6">
            Our Story
          </h1>
          <p className="text-xl text-amber-200/90 max-w-3xl mx-auto">
            A journey of culinary passion, dedication, and the pursuit of creating extraordinary dining experiences
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                From Humble Beginnings to Culinary Excellence
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Founded in 2004 by Chef Isabella Savoria, our restaurant began as a small family-owned 
                  establishment with a simple mission: to create exceptional food that brings people together. 
                  What started as a dream in a modest kitchen has evolved into one of the city's most 
                  celebrated dining destinations.
                </p>
                <p>
                  Over the past two decades, we've remained committed to our core values while continuously 
                  innovating and refining our craft. Our team of passionate chefs combines traditional 
                  techniques with modern creativity, ensuring that every dish tells a story and every 
                  meal becomes a cherished memory.
                </p>
                <p>
                  Today, Savoria stands as a testament to the power of dedication, quality, and the 
                  belief that great food has the ability to create lasting connections between people 
                  from all walks of life.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant interior"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="text-3xl font-bold text-amber-600">2004</div>
                <div className="text-gray-700 font-medium">Established</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-amber-900 to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-amber-200 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold text-amber-100 mb-2">
                  {stat.number}
                </div>
                <div className="text-amber-200/90 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Savoria
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className="text-amber-600 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef Team Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Culinary Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The talented chefs who bring our vision to life with their creativity and expertise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={chef.image}
                    alt={chef.name}
                    className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2">
                    <div className="text-sm font-medium text-gray-900">{chef.experience}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{chef.name}</h3>
                  <div className="text-amber-600 font-semibold mb-1">{chef.title}</div>
                  <div className="text-gray-500 text-sm mb-4">Specialty: {chef.specialty}</div>
                  <p className="text-gray-600 leading-relaxed">{chef.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-700">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-amber-100 leading-relaxed">
            "To create exceptional culinary experiences that celebrate the art of fine dining, 
            foster meaningful connections, and leave lasting impressions on every guest who 
            walks through our doors. We believe that great food has the power to bring people 
            together, create memories, and enrich lives."
          </p>
          <div className="mt-8 text-amber-200 font-semibold text-lg">
            - Isabella Savoria, Founder & Head Chef
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;