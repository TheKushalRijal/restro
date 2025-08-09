import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

import RestaurantChatScreen from './screens/HomePage/chats';
import Order from './screens/HomePage/orders';
import { HomePage } from './screens/HomePage';

import InitialPage from './components/new/components/InitialPage';
import OrderItems from './components/new/components/OrderItems';
import Cart from './screens/HomePage/cart';
// This component handles loading screen and redirects to /orderitems
function LoadingRedirectWrapper() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if loading screen has already been shown
    const hasLoaded = localStorage.getItem("hasLoaded");
    if (hasLoaded) {
      navigate('/home');
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      localStorage.setItem("hasLoaded", "true");
      navigate('/home');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return loading ? <InitialPage onViewMenu={() => navigate('/home')} /> : null;
}

function App() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const restaurant = params.get("restaurant");
    const table = params.get("table");
    if (restaurant && table) {
      localStorage.setItem("restaurant", restaurant);
      localStorage.setItem("table", table);
    }
  }, []);


  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<LoadingRedirectWrapper />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/home" element={<HomePage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/chat" element={<RestaurantChatScreen />} />
<Route path="/orderitems" element={<OrderItems onBack={() => {}} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
