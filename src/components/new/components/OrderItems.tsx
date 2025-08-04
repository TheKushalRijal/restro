import React, { useState } from 'react';
import { ArrowLeft, Star, Clock, Plus, Minus } from 'lucide-react';

interface OrderItemsProps {
  onBack: () => void;
}

const OrderItems: React.FC<OrderItemsProps> = ({ onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const [customMessage, setCustomMessage] = useState('');

  const handleQuantityIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddToCart = () => {
    console.log('Adding to cart:', {
      item: 'Beef Burger',
      quantity,
      customMessage,
      price: 250
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="relative w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl">
        {/* Orange Background Section */}
        <div className="relative bg-gradient-to-br from-orange-400 to-orange-500 h-80 overflow-hidden">
          {/* Back Arrow */}
          <button 
            onClick={onBack}
            className="absolute top-6 left-6 w-10 h-10 flex items-center justify-center z-30"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          
          {/* Large "Burger" Text Watermark */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="transform -rotate-12 opacity-30">
              <h1 className="text-8xl font-black text-orange-200 leading-none tracking-wider">
                Burger
              </h1>
            </div>
          </div>
          
          {/* Burger Image - Centered and overlapping */}
          <div className="absolute bottom-0 left-12 transform translate-y-0 z-2">
                <img 
                  src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Beef Burger"
                  className="w-50 h-50 object-contain rounded-xl shadow-2xl"
                />
              </div>

        </div>
        
        {/* White Content Section */}
        <div className="bg-white px-6 pt-24 pb-6 relative z-10 rounded-t-3xl">
          {/* Rating and Price Row */}
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400 fill-current" />
              <span className="text-lg font-bold text-gray-800">4.8</span>
            </div>
            <div className="text-2xl font-bold text-orange-500">
              Rs.250
            </div>
          </div>
          
          {/* Item Name and Quantity Controls */}
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">Beef Burger</h2>
            <div className="flex items-center gap-3">
              <button 
                onClick={handleQuantityIncrease}
                className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Plus className="w-4 h-4 text-white" />
              </button>
              <span className="text-lg font-bold text-gray-800 min-w-[1.5rem] text-center">
                {quantity}
              </span>
              <button 
                onClick={handleQuantityDecrease}
                className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
          
          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Big Juicy beef burger with cheese, lettuce, tomato,onions and special sauce !
          </p>
          
          {/* Delivery Time */}
          <div className="flex items-center gap-2 mb-6">
            <Clock className="w-4 h-4 text-gray-500" />
            <span className="text-gray-600 text-sm font-medium">19:00 min</span>
          </div>
          
          {/* Custom Message Input */}
          <div className="mb-6">
            <input
              type="text"
              placeholder="Add your custom message"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              className="w-full px-4 py-3 bg-gray-100 rounded-2xl border-0 focus:ring-2 focus:ring-orange-400 focus:outline-none transition-all duration-200 placeholder-gray-500 text-sm"
            />
          </div>
          
          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95 mb-4"
          >
            Add to Cart
          </button>
          
          {/* Go Back to Menu Link */}
          <button
            onClick={onBack}
            className="w-full text-gray-600 hover:text-gray-800 font-medium underline transition-colors duration-200 text-sm"
          >
            Go back to menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItems;