import React, { useState } from 'react';
import { 
  ArrowLeft, 
  X, 
  Minus, 
  Plus, 
  Clock, 
  Home, 
  MessageSquare, 
  ShoppingCart, 
  Share2, 
  Bookmark 
} from 'lucide-react';
import BottomNav from "../../components/ui/Bottomnav";

interface CartItem {
  id: number;
  name: string;
  image: string;
  customization: string;
  price: number;
  quantity: number;
}

function Order() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Beef Burger',
      image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200',
      customization: 'add more cheese, onion free',
      price: 250,
      quantity: 1
    },
    {
      id: 2,
      name: 'Cheese pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200',
      customization: 'add more cheese, onion free',
      price: 350,
      quantity: 1
    },
    {
      id: 3,
      name: 'Cold Coke',
      image: 'https://images.pexels.com/photos/50593/coca-cola-cold-drink-soft-drink-coke-50593.jpeg?auto=compress&cs=tinysrgb&w=200',
      customization: 'cold 500ml',
      price: 50,
      quantity: 1
    }
  ]);

  const [orderInstruction, setOrderInstruction] = useState('');
  const [promoCode, setPromoCode] = useState('');

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Styles
  const styles = {
    appContainer: {
      minHeight: '100vh',
      position: 'relative',
      background: 'black',
      paddingBottom: '120px' // Add padding to prevent content from being hidden behind bottom nav
    },
   
    topNavigation: {
      backgroundColor: '#E89727',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      borderBottom: '1px solid #555',
      padding: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 40
    },
    navLeft: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    navButton: {
      padding: '0.5rem',
      borderRadius: '9999px',
      transition: 'background-color 0.2s'
    },
    navButtonHover: {
      backgroundColor: '#f3f4f6'
    },
    navIcon: {
      width: '1.5rem',
      height: '1.5rem',
      color: '#374151'
    },
    navTitle: {
      fontSize: '1.125rem',
      lineHeight: '1.75rem',
      fontWeight: 600,
      color: 'white'
    },
   
    cartItemsContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    cartItem: {
      backgroundColor: '#333333',
      borderRadius: '0.75rem',
      padding: '0.75rem',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      border: '1px solid #555',
      transition: 'box-shadow 0.2s'
    },
    
    itemContent: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '0.75rem'
    },
    itemImageContainer: {
      flexShrink: 0
    },
    itemImage: {
      width: '3rem',
      height: '3rem',
      borderRadius: '0.5rem',
      objectFit: 'cover'
    },
    itemDetails: {
      flex: 1,
      minWidth: 0
    },
    itemName: {
      fontWeight: 600,
      color: 'white',
      fontSize: '0.875rem',
      marginBottom: '0.25rem'
    },
    itemCustomization: {
      fontSize: '0.75rem',
      color: '#6b7280',
      marginBottom: '0.25rem'
    },
    itemPrice: {
      fontWeight: 700,
      fontSize: '1rem',
      color: '#FF9B0F'
    },
    quantityControls: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    removeButton: {
      padding: '0.001rem',
      color: '#ef4444',
      borderRadius: '0.5rem',
      transition: 'background-color 0.2s'
    },
   
    
    quantitySelector: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: '#f9fafb',
      borderRadius: '0.5rem',
      paddingLeft: '0.5rem',
      paddingRight: '0.5rem',
      paddingTop: '0.25rem',
      paddingBottom: '0.25rem'
    },
    quantityButton: {
      padding: '0.25rem',
      borderRadius: '0.25rem',
      transition: 'background-color 0.2s'
    },
    quantityButtonHover: {
      backgroundColor: '#e5e7eb'
    },
    quantityIcon: {
      width: '1rem',
      height: '1rem',
      color: '#4b5563'
    },
    quantityValue: {
      fontWeight: 500,
      color: '#111827',
      minWidth: '1.5rem',
      textAlign: 'center'
    },
    divider: {
      borderTop: '1px solid #e5e7eb',
    },
    totalSummary: {
      backgroundColor: '#333333',
      borderRadius: '1rem',
      padding: '1rem',
      boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.3)',
      border: '1px solid #555',
    },
    totalContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    totalLabel: {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: 'white'
    },
    totalRight: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem'
    },
    totalPrice: {
      fontSize: '1.25rem',
      fontWeight: 700,
      color: '#059669'
    },
    deliveryTime: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      color: '#6b7280'
    },
    clockIcon: {
      width: '1rem',
      height: '1rem'
    },
    timeText: {
      fontSize: '0.875rem',
      fontWeight: 500
    },
    
    instructionLabel: {
      display: 'block',
      fontSize: '0.875rem',
      fontWeight: 500,
      color: '#374151',
      paddingTop: '1rem',

    },
    instructionInput: {
      width: '100%',
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      border: '1px solid #555',
      borderRadius: '0.5rem',
      backgroundColor: '#333333',
      color: 'white',
      resize: 'none',
      height: '3rem'
    },
    instructionInputFocus: {
      outline: 'none',
      borderColor: 'transparent',
      boxShadow: '0 0 0 2px #f97316'
    },
    promoCodeContainer: {
      display: 'flex',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    promoInput: {
      flex: 1,
      paddingLeft: '0.75rem',
      paddingRight: '0.75rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      border: '1px solid #555',
      borderRadius: '0.5rem',
      backgroundColor: '#333333',
      color: 'white'
    },
    promoInputFocus: {
      outline: 'none',
      borderColor: 'transparent',
      boxShadow: '0 0 0 2px #f97316'
    },
    applyButton: {
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '0.5rem',
      paddingBottom: '0.5rem',
      backgroundColor: '#f97316',
      color: 'white',
      fontWeight: 500,
      borderRadius: '0.5rem',
      transition: 'background-color 0.2s'
    },
    applyButtonHover: {
      backgroundColor: '#ea580c'
    },
    placeOrderButton: {
      width: '100%',
      backgroundColor: '#10b981',
      color: 'white',
      fontWeight: 600,
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem',
      borderRadius: '0.75rem',
      transition: 'all 0.2s',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    placeOrderButtonHover: {
      backgroundColor: '#059669',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      transform: 'scale(1.02)'
    },
    placeOrderButtonActive: {
      transform: 'scale(0.98)'
    },
    bottomNavigation: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: '#333333',
      borderTop: '1px solid #555',
      paddingLeft: '1rem',
      paddingRight: '1rem',
      paddingTop: '0.75rem',
      paddingBottom: '0.75rem'
    },
    bottomNavContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      maxWidth: '28rem',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    bottomNavButton: {
      padding: '0.75rem',
      borderRadius: '0.75rem',
      transition: 'background-color 0.2s'
    },
    bottomNavButtonHover: {
      backgroundColor: '#555'
    },
    bottomNavIcon: {
      width: '1.5rem',
      height: '1.5rem',
      color: '#9ca3af'
    },
    cartButton: {
      padding: '1rem',
      backgroundColor: '#f97316',
      borderRadius: '1rem',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    },
    cartIcon: {
      width: '1.5rem',
      height: '1.5rem',
      color: 'white'
    }
  };

  return (
    <div style={styles.appContainer}>
      {/* World Map Background Pattern */}
      <div style={styles.backgroundPattern}></div>

      {/* Top Navigation */}
      <div style={styles.topNavigation}>
        <div style={styles.navLeft}>
          <button style={styles.navButton}>
            <ArrowLeft style={styles.navIcon} />
          </button>
          <h1 style={styles.navTitle}>
            {totalItems} items in cart
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Cart Items */}
        <div style={styles.cartItemsContainer}>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <div style={styles.itemContent}>
                {/* Item Image */}
                <div style={styles.itemImageContainer}>
                  <img 
                    src={item.image} 
                    alt={item.name}
                    style={styles.itemImage}
                  />
                </div>

                {/* Item Details */}
                <div style={styles.itemDetails}>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemCustomization}>{item.customization}</p>
                  <p style={styles.itemPrice}>Rs. {item.price}</p>
                </div>

                {/* Quantity Controls */}
                <div style={styles.quantityControls}>
                  <button 
                    onClick={() => removeItem(item.id)}
                    style={styles.removeButton}
                  >
                    <X style={styles.removeIcon} />
                  </button>
                  
                  <div style={styles.quantitySelector}>
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      style={styles.quantityButton}
                    >
                      <Minus style={styles.quantityIcon} />
                    </button>
                    
                    <span style={styles.quantityValue}>
                      {item.quantity}
                    </span>
                    
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      style={styles.quantityButton}
                    >
                      <Plus style={styles.quantityIcon} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={styles.divider}></div>

        {/* Total Summary */}
        <div style={styles.totalSummary}>
          <div style={styles.totalContent}>
            <span style={styles.totalLabel}>Total :</span>
            <div style={styles.totalRight}>
              <span style={styles.totalPrice}>Rs. {totalPrice}</span>
              <div style={styles.deliveryTime}>
                <Clock style={styles.clockIcon} />
                <span style={styles.timeText}>20:00 min</span>
              </div>
            </div>
          </div>
        </div>

        {/* Order Instruction */}
        <div style={styles.orderInstructionContainer}>
          <label style={styles.instructionLabel}>
            Order instruction
          </label>
          <textarea
            value={orderInstruction}
            onChange={(e) => setOrderInstruction(e.target.value)}
            placeholder="Add your message"
            style={styles.instructionInput}
          />
        </div>

        {/* Promo Code */}
        <div style={styles.promoCodeContainer}>
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Promo code"
            style={styles.promoInput}
          />
          <button style={styles.applyButton}>
            Apply
          </button>
        </div>

        {/* Place Order Button */}
        <button style={styles.placeOrderButton}>
          Place order
        </button>
      </div>

      {/* Bottom Navigation */}
      <BottomNav currentPage="order" />
    </div>
  );
}

export default Order;