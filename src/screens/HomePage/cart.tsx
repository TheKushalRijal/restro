import React, { useState } from 'react';
import { ChevronLeft, Plus, Minus, X, Clock } from 'lucide-react';
import BottomNav from "../../components/ui/Bottomnav";

interface CartItem {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Beef Burger",
      description: "add more cheese, onion free",
      price: 250,
      quantity: 1,
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 2,
      name: "Cheese pizza",
      description: "add more cheese, onion free",
      price: 350,
      quantity: 1,
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      id: 3,
      name: "Cold Coke",
      description: "cold 500ml",
      price: 50,
      quantity: 1,
      image: "https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ]);

  const [orderInstructions, setOrderInstructions] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="w-full max-w-md mx-auto bg-black min-h-screen relative overflow-x-hidden">
      {/* Header - Fixed for mobile */}
      <div className="sticky top-0 z-10 flex items-center p-4 bg-black border-b border-gray-800 shadow-sm">
        <button className="p-1 -ml-1 rounded-full hover:bg-gray-900 active:bg-gray-800 transition-colors">
          <ChevronLeft size={24} className="text-white" />
        </button>
        <h1 className="ml-2 text-base font-semibold text-white">
          {totalItems} items in cart
        </h1>
      </div>

      {/* Scrollable Content */}
      <div className="pb-20">
        {/* Cart Items */}
        <div className="px-3 py-3 space-y-3">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-gray-900 rounded-xl p-3 relative shadow-sm">
              {/* Delete Button - Larger touch target */}
              <button
                onClick={() => removeItem(item.id)}
                className="absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-md hover:bg-red-600 active:scale-95 transition-all"
              >
                <X size={12} className="text-white" />
              </button>

              <div className="flex items-center space-x-3">
                {/* Item Image - Optimized size */}
                <div className="w-16 h-16 bg-black rounded-lg overflow-hidden flex-shrink-0 shadow-sm">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Item Details */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white text-sm leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-xs text-gray-300 mt-0.5 leading-tight">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-orange-400 font-bold text-base">
                      Rs. {item.price}
                    </span>
                    
                    {/* Quantity Controls - Larger touch targets */}
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700 active:scale-95 transition-all"
                      >
                        <Plus size={12} className="text-white" />
                      </button>
                      <span className="font-semibold text-white min-w-[20px] text-center text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 bg-gray-800 rounded-full flex items-center justify-center shadow-md hover:bg-gray-700 active:scale-95 transition-all"
                      >
                        <Minus size={12} className="text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-b border-gray-800 mx-3 my-4"></div>

        {/* Total Section */}
        <div className="px-3 mb-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white font-semibold text-lg">Total: </span>
              <span className="text-orange-400 font-bold text-lg">Rs. {totalPrice}</span>
            </div>
            <div className="flex items-center space-x-1 text-gray-200 bg-gray-800 px-2 py-1 rounded-full">
              <Clock size={14} />
              <span className="text-sm font-medium">20:00 min</span>
            </div>
          </div>
        </div>

        {/* Order Instructions */}
        <div className="px-3 mb-4">
          <h3 className="text-white font-semibold mb-2 text-sm">Order Instruction</h3>
          <textarea
            value={orderInstructions}
            onChange={(e) => setOrderInstructions(e.target.value)}
            placeholder="Add your message"
            className="w-full bg-gray-900 rounded-lg p-3 text-sm text-white placeholder-gray-400 resize-none h-16 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-black border border-transparent focus:border-orange-400 transition-all"
          />
        </div>

        {/* Promo Code */}
        <div className="px-3 mb-4">
          <div className="flex space-x-2">
            <input
              type="text"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
              placeholder="Promo code"
              className="flex-1 bg-gray-900 rounded-lg p-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-black border border-transparent focus:border-orange-400 transition-all"
            />
            <button className="bg-green-700 text-white px-4 py-3 rounded-lg font-semibold text-sm hover:bg-green-800 active:bg-green-900 transition-all shadow-sm">
              Apply
            </button>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Section */}
      <div className="fixed bottom-[100px] left-0 right-0 bg-black border-t border-gray-800 shadow-lg z-20">
        <div className="max-w-md mx-auto px-3 py-3">
          <button className="w-full bg-green-500 text-white py-3 rounded-xl font-semibold text-base hover:bg-green-600 active:bg-green-700 transition-all shadow-lg active:scale-[0.98]">
            Place order
          </button>
        </div>
      </div>
      <BottomNav currentPage="cart" />

    </div>
  );
};

export default Cart;