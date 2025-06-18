import React, { useState } from 'react';
import { Search, Filter, Star, Clock, Flame, Plus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isSpicy: boolean;
  cookTime: string;
  rating: number;
  popular: boolean;
  ingredients: string[];
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart();

  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Grilled Salmon Delight",
      description: "Fresh Atlantic salmon grilled to perfection with herbs and lemon butter sauce",
      price: 28.99,
      category: "seafood",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "20 min",
      rating: 4.8,
      popular: true,
      ingredients: ["Atlantic Salmon", "Lemon", "Herbs", "Butter", "Garlic"]
    },
    {
      id: 2,
      name: "Truffle Risotto",
      description: "Creamy arborio rice with black truffle, parmesan, and wild mushrooms",
      price: 24.99,
      category: "vegetarian",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "25 min",
      rating: 4.7,
      popular: false,
      ingredients: ["Arborio Rice", "Black Truffle", "Parmesan", "Wild Mushrooms", "White Wine"]
    },
    {
      id: 3,
      name: "Wagyu Beef Steak",
      description: "Premium wagyu beef cooked to your preference with roasted vegetables",
      price: 45.99,
      category: "meat",
      image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "15 min",
      rating: 4.9,
      popular: true,
      ingredients: ["Wagyu Beef", "Asparagus", "Carrots", "Potatoes", "Rosemary"]
    },
    {
      id: 4,
      name: "Spicy Thai Curry",
      description: "Authentic red curry with coconut milk, vegetables, and jasmine rice",
      price: 19.99,
      category: "spicy",
      image: "https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: true,
      cookTime: "18 min",
      rating: 4.6,
      popular: false,
      ingredients: ["Red Curry Paste", "Coconut Milk", "Bell Peppers", "Basil", "Jasmine Rice"]
    },
    {
      id: 5,
      name: "Mediterranean Pasta",
      description: "House-made pasta with sun-dried tomatoes, olives, and fresh basil",
      price: 22.99,
      category: "pasta",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "12 min",
      rating: 4.5,
      popular: true,
      ingredients: ["Fresh Pasta", "Sun-dried Tomatoes", "Olives", "Basil", "Olive Oil"]
    },
    {
      id: 6,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with molten center, served with vanilla ice cream",
      price: 12.99,
      category: "dessert",
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "8 min",
      rating: 4.8,
      popular: true,
      ingredients: ["Dark Chocolate", "Butter", "Eggs", "Flour", "Vanilla Ice Cream"]
    },
    {
      id: 7,
      name: "Lobster Thermidor",
      description: "Classic French lobster dish with creamy sauce and cheese gratinée",
      price: 38.99,
      category: "seafood",
      image: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "30 min",
      rating: 4.9,
      popular: true,
      ingredients: ["Fresh Lobster", "Cream", "Gruyère Cheese", "Brandy", "Mustard"]
    },
    {
      id: 8,
      name: "Vegetarian Buddha Bowl",
      description: "Quinoa bowl with roasted vegetables, avocado, and tahini dressing",
      price: 18.99,
      category: "vegetarian",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "15 min",
      rating: 4.4,
      popular: false,
      ingredients: ["Quinoa", "Avocado", "Sweet Potato", "Chickpeas", "Tahini"]
    },
    {
      id: 9,
      name: "Fiery Dragon Roll",
      description: "Spicy tuna roll with jalapeños, sriracha mayo, and tempura flakes",
      price: 16.99,
      category: "spicy",
      image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: true,
      cookTime: "10 min",
      rating: 4.6,
      popular: true,
      ingredients: ["Spicy Tuna", "Jalapeños", "Sriracha Mayo", "Tempura Flakes", "Nori"]
    },
    {
      id: 10,
      name: "Carbonara Classico",
      description: "Traditional Italian pasta with pancetta, eggs, and pecorino romano",
      price: 21.99,
      category: "pasta",
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "14 min",
      rating: 4.7,
      popular: true,
      ingredients: ["Spaghetti", "Pancetta", "Eggs", "Pecorino Romano", "Black Pepper"]
    },
    {
      id: 11,
      name: "Lamb Tagine",
      description: "Moroccan slow-cooked lamb with apricots, almonds, and aromatic spices",
      price: 32.99,
      category: "meat",
      image: "https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "45 min",
      rating: 4.8,
      popular: false,
      ingredients: ["Lamb", "Apricots", "Almonds", "Cinnamon", "Couscous"]
    },
    {
      id: 12,
      name: "Tiramisu Supreme",
      description: "Classic Italian dessert with mascarpone, coffee, and cocoa powder",
      price: 9.99,
      category: "dessert",
      image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=400",
      isSpicy: false,
      cookTime: "5 min",
      rating: 4.7,
      popular: true,
      ingredients: ["Mascarpone", "Ladyfingers", "Espresso", "Cocoa", "Marsala Wine"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Items', count: menuItems.length },
    { id: 'meat', name: 'Meat', count: menuItems.filter(item => item.category === 'meat').length },
    { id: 'seafood', name: 'Seafood', count: menuItems.filter(item => item.category === 'seafood').length },
    { id: 'vegetarian', name: 'Vegetarian', count: menuItems.filter(item => item.category === 'vegetarian').length },
    { id: 'pasta', name: 'Pasta', count: menuItems.filter(item => item.category === 'pasta').length },
    { id: 'spicy', name: 'Spicy', count: menuItems.filter(item => item.category === 'spicy').length },
    { id: 'dessert', name: 'Desserts', count: menuItems.filter(item => item.category === 'dessert').length }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-amber-50 pt-20">
      {/* Header */}
      <section className="py-16 bg-gradient-to-r from-amber-900 to-orange-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-amber-100 mb-6">
            Our Exquisite Menu
          </h1>
          <p className="text-xl text-amber-200/90 max-w-3xl mx-auto">
            Discover our carefully curated selection of dishes, each crafted with passion and the finest ingredients
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search dishes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Filter Button */}
            <button className="flex items-center space-x-2 bg-white px-6 py-3 rounded-full border border-gray-300 hover:bg-gray-50 transition-all duration-200">
              <Filter className="h-5 w-5 text-gray-600" />
              <span className="text-gray-700 font-medium">Filter</span>
            </button>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg transform scale-105'
                    : 'bg-white text-gray-700 hover:bg-amber-50 hover:text-amber-700 border border-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  {item.popular && (
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Popular</span>
                    </span>
                  )}
                  {item.isSpicy && (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Flame className="h-4 w-4" />
                      <span>Spicy</span>
                    </span>
                  )}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-2xl font-bold text-amber-600">${item.price}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-amber-400 fill-current" />
                    <span className="text-sm font-medium text-gray-700">{item.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>

                {/* Ingredients */}
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Ingredients:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.ingredients.slice(0, 3).map((ingredient, index) => (
                      <span
                        key={index}
                        className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                    {item.ingredients.length > 3 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        +{item.ingredients.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-gray-500">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{item.cookTime}</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg flex items-center space-x-2"
                  >
                    <Plus className="h-4 w-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;