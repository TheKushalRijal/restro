import React, { useState } from "react";
import { Button } from "./button";

const navItems = [
  { icon: "/home.png", label: "Home", id: "home" },
  { icon: "/chats.png", label: "Chat", id: "chat" },
  { icon: "/buying.png", label: "Cart", id: "cart" },
  { icon: "/journey.png", label: "Map", id: "map" },
  { icon: "/saved.png", label: "Saved", id: "saved" },
];

interface BottomnavProps {
  onNavigate?: (id: string) => void;
  currentPage?: string;
}

const Bottomnav: React.FC<BottomnavProps> = ({ onNavigate, currentPage }) => {
  const [activeNav, setActiveNav] = useState(() => {
    // Set active nav based on current page
    if (currentPage === 'order') return 2; // Cart index
    if (currentPage === 'chat') return 1; // Chat index
    return 0; // Default to home
  });

  const handleNavClick = (index: number, id: string) => {
    setActiveNav(index);
    console.log("Navigating to:", id);
    
    // Call the navigation handler if provided
    if (onNavigate) {
      onNavigate(id);
    }
    
    // Default navigation logic
    switch (id) {
      case 'home':
        // Navigate to home
        window.location.href = '/';
        break;
      case 'chat':
        // Navigate to chat
        window.location.href = '/chat';
        break;
      case 'cart':
        // Navigate to order page
        window.location.href = '/order';
        break;
      case 'map':
        // Navigate to map
        console.log('Navigate to map');
        break;
      case 'saved':
        // Navigate to saved
        console.log('Navigate to saved');
        break;
      default:
        break;
    }
  };

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-50">
      {/* Bottom Navigation */}
      <div className="w-[375px] h-[70px] mb-[30px] bg-[#333333] rounded-[25px] border border-[#0000001a] shadow-[0px_8px_24px_#00000020] flex justify-around items-center backdrop-blur-sm px-2">
        {navItems.map((item, index) => {
          const isActive = activeNav === index;

          return (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              onClick={() => handleNavClick(index, item.id)}
              className={`w-full h-full rounded-[20px] transition-all duration-300 transform active:scale-95 relative group flex items-center justify-center ${
                isActive
                  ? "bg-[#FF9B0F] border border-[#0000001a] shadow-[0px_4px_12px_#ff9a0e40] hover:bg-[#e68c0d]"
                  : "bg-transparent hover:bg-gray-600 hover:shadow-md"
              }`}
            >
              {/* Active dot */}
              {isActive && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse" />
              )}

              {/* Icon */}
              <div
                className={`transition-all duration-200 ${
                  isActive ? "text-white" : "text-white/70 group-hover:text-white"
                }`}
              >
                <img
                  src={item.icon}
                  alt={`${item.label} icon`}
                  className="w-11 h-11 object-contain"
                />
              </div>

              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Bottomnav;
