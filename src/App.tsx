import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import RestaurantChat from './screens/HomePage/chats';

import RestaurantChatScreen from './screens/HomePage/chats';

//import Footer from './components/Footer'; // ✅ Uncomment if Footer exists
import Order from './screens/HomePage/orders';
import { HomePage } from './screens/HomePage';
function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/order" element={<Order />} />
          <Route path="/chat" element={<RestaurantChatScreen />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
