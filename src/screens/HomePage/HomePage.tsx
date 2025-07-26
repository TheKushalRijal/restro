import {

  HeartIcon,
  
  MapIcon,
  MessageCircleIcon,
  PlusIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";

export const HomePage = (): JSX.Element => {
  // Active navigation state
  const [activeNav, setActiveNav] = useState(0);
  const [activeCategory, setActiveCategory] = useState(0);

  // Category filters data
  const categories = [
    { name: "All" },
    { name: "Non-Veg" },
    { name: "Veg" },
    { name: "Drink" },
    { name: "Popular" },
  ];

  // Promotion cards data
  const promotions = [
    {
      id: 1,
      title: "Today's Offer",
      description: "Free box of fries",
      subtitle: "On all orders above",
      price: "Rs.500",
      image: "public/fries.png",
    },
    {
      id: 2,
      title: "Today's Offer",
      description: "Free box of fries",
      subtitle: "On all orders above",
      price: "Rs.500",
      image: "public/image.png",
    },
    {
      id: 3,
      title: "Today's Offer",
      description: "Free box of fries",
      subtitle: "On all orders above",
      price: "Rs.500",
      image: "public/image.png",
    },
  ];

  // Popular food items data
  const popularItems = [
    {
      id: 1,
      name: "Beef Burger",
      price: "Rs.250",
      image: "image.png",
    },
    {
      id: 2,
      name: "Cheese Pizza",
      price: "Rs.350",
      image: "image.png",
    },
  ];

  /* Navigation items data
  const navItems = [
    { 
      icon: <HomeIcon className="w-16 h-6" />, 
      label: "Home",
      id: "home"
    },
    { 
      icon: <MessageCircleIcon className="w-6 h-6" />, 
      label: "Chat",
      id: "chat"
    },
    { 
      icon: <ShoppingCartIcon className="w-6 h-6" />, 
      label: "Cart",
      id: "cart"
    },
    { 
      icon: <MapIcon className="w-6 h-6" />, 
      label: "Map",
      id: "map"
    },
    { 
      icon: <BookmarkIcon className="w-6 h-6" />, 
      label: "Saved",
      id: "saved"
    },
  ];

*/
const navItems = [
  { icon: "/home.png", label: "Home", id: "home" },
  { icon: "/chats.png", label: "Chat", id: "chat" },
  { icon: "/buying.png", label: "Cart", id: "cart" },
  { icon: "/journey.png", label: "Map", id: "map" },
  { icon: "/saved.png", label: "Saved", id: "saved" },
];





  // Handle navigation click
  const handleNavClick = (index: number, navId: string) => {
    setActiveNav(index);
    
    // Add haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // You can add navigation logic here
    console.log(`Navigating to: ${navId}`);
    
    // Example: Show different content based on selection
    switch (navId) {
      case 'home':
        // Already on home
        break;
      case 'chat':
        // Navigate to chat
        break;
      case 'cart':
        // Navigate to cart
        break;
      case 'map':
        // Navigate to map
        break;
      case 'saved':
        // Navigate to saved items
        break;
      default:
        break;
    }
  };

  return (
    <div className="bg-black flex flex-row justify-center w-full min-h-screen">
      <div className="bg-black overflow-hidden w-[393px] h-[852px] relative">
        {/* Status Bar */}
        

        {/* Header Section */}
        <header className="absolute w-[325px] h-[103px] top-[68px] left-8">
          <h1 className="absolute w-[271px] top-0 left-0 font-['Poppins'] font-semibold text-[#ff9a0e] text-[24px] tracking-[0] leading-[normal]">
            Delicious Bites Restaurant
          </h1>

          <p className="absolute w-[234px] top-[70px] left-0 font-['Poppins'] font-semibold text-white text-[15px] tracking-[0] leading-[normal]">
            Order Your Favourite Food !
          </p>

          <div className="absolute w-20 h-20 top-[13px] left-[245px] rounded-full overflow-hidden border-2 border-[#ff9a0e] shadow-lg">
            <img
              className="w-full h-full object-cover"
              alt="Profile"
              src="/public/avatar.png"
            />
          </div>
        </header>

        {/* Search Section */}
        <div className="absolute w-[325px] h-12 top-[188px] left-8">
          <div className="relative w-[269px] h-12 bg-[#333333] rounded-[50px] flex items-center px-[22px]">
            <SearchIcon className="w-[22px] h-5 text-white" />
            <Input
              className="absolute w-[180px] h-full top-0 left-[53px] border-none bg-transparent font-['Poppins'] font-normal text-white text-base focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-white"
              placeholder="Search"
            />
          </div>

          <Button className="absolute w-11 h-12 top-0 left-[279px] bg-[#ff9a0e] rounded-[10px] p-0 hover:bg-[#e68c0d] shadow-md">
            <img className="w-[20px] h-[20px]" alt="Filter" src="/public/Menu.svg" />
          </Button>
        </div>

        {/* Category Filters */}
        <div className="absolute flex space-x-3 top-[257px] left-8 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              onClick={() => setActiveCategory(index)}
              className={`h-[29px] px-4 py-0.5 rounded-[10px] shadow-[0px_4px_4px_#00000040] whitespace-nowrap ${
                activeCategory === index
                  ? "bg-[#FF9B0F] text-white border-[#FF9B0F]"
                  : "bg-[#d9d9d9] text-[rgba(0,0,0,0.70)] border-[#d9d9d9]"
              } font-['Poppins'] font-normal text-[15px] cursor-pointer hover:shadow-lg transition-all duration-200`}
            >
              {category.name}
            </Badge>
          ))}
        </div>

        {/* Main Content */}
        <div className="absolute w-full h-[534px] top-[318px] left-0">
          {/* Promotions Section */}
          <h2 className="absolute w-[101px] top-0 left-[32px] font-['Poppins'] font-semibold text-white text-[16px] tracking-[0] leading-[normal]">
            Promotions
          </h2>

          <ScrollArea className="absolute w-[361px] h-[130px] top-7 left-[32px]">
            <div className="flex space-x-4 pb-4">
              {promotions.map((promo) => (
                <Card
                  key={promo.id}
                  className="flex-shrink-0 w-[300px] h-[106px] bg-gradient-to-r from-[#786852] to-[#8b7355] rounded-[20px] shadow-[0px_6px_12px_#00000030] border-none overflow-hidden cursor-pointer hover:shadow-[0px_8px_16px_#00000040] transition-all duration-300"
                >
                  <CardContent className="relative flex p-4 rounded-[20px] bg-[#2A2A2A] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] overflow-hidden h-[106px] w-[300px]">
  {/* Text Content */}
  <div className="z-10 flex flex-col justify-center flex-1 pr-4">
    <p className="font-['Poppins'] font-black text-[#36FF1C] text-[15px] leading-none mb-1">
      {promo.title}
    </p>
    <span className="text-white text-[14px] font-bold leading-snug">
      {promo.description}
    </span>
    <span className="text-white text-[13px] font-medium leading-snug">
      {promo.subtitle}
    </span>
    <span className="text-white text-[18px] font-extrabold mt-1">
      {promo.price}
    </span>
  </div>

  {/* Image that may overlap */}
  <img
    src={promo.image}
    alt="Promo"
    className="absolute right-0 bottom-0 w-[170px] h-[100px] object-contain z-0"
  />
</CardContent>

                </Card>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="h-2" />
          </ScrollArea>

          {/* Popular Section */}
          <h2 className="absolute w-[71px] top-[158px] left-[32px] font-['Poppins'] font-semibold text-white text-[16px] tracking-[0] leading-[normal]">
            Popular
          </h2>

          <div className="absolute top-[187px] left-[32px] flex space-x-6">
            {popularItems.map((item) => (
              <Card
                key={item.id}
                className="w-[151px] h-[195px] bg-[#333333] rounded-[20px] shadow-[0px_6px_12px_#00000020] border-none overflow-hidden cursor-pointer hover:shadow-[0px_8px_16px_#00000030] transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-[130px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      alt={item.name}
                      src={item.image}
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-['Poppins'] font-medium text-white text-[13px] leading-tight">
                        {item.name}
                      </p>
                      <p className="font-['Poppins'] font-bold text-[#FF9B0F] text-[12px]">
                        {item.price}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto hover:bg-transparent"
                      >
                        <HeartIcon className="w-[22px] h-[22px] text-gray-400 hover:text-red-500 transition-colors duration-200" />
                      </Button>
                      <Button
                        size="icon"
                        className="h-[25px] w-[25px] rounded-full bg-[#FF9B0F] hover:bg-[#e68c0d] p-0 shadow-md hover:shadow-lg transition-all duration-200"
                      >
                        <PlusIcon className="h-4 w-4 text-white" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="absolute w-[375px] h-[70px] bottom-[30px] left-[9px] bg-[#333333] rounded-[25px] border border-solid border-[#0000001a] shadow-[0px_8px_24px_#00000020] flex justify-around items-center backdrop-blur-sm">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              size="icon"
              onClick={() => handleNavClick(index, item.id)}
              className={`w-full h-full bg-[#FF9B0F] rounded-[20px] shadow-[0px_8px_8px_rgba(0,0,0,0.25)] border border-[rgba(0,0,0,0.18)] transition-all duration-300 transform hover:scale-105 active:scale-95 relative group ${
                activeNav === index
                  ? "bg-[#FF9B0F] border border-solid border-[#0000001a] shadow-[0px_4px_12px_#ff9a0e40] hover:bg-[#e68c0d]"
                  : "bg-transparent hover:bg-gray-600 hover:shadow-md"
              }`}
            >
              {/* Active indicator dot */}
              {activeNav === index && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></div>
              )}
              
              {/* Icon container */}
              
             <div
  className={`flex items-center justify-center transition-all duration-200 ${
    activeNav === index ? "text-white" : "text-white-300 group-hover:text-white"
  }`}
>
  <img
    src={item.icon}
    alt={item.label}
    className="w-11 h-11 object-contain"
  />
</div>

              
              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </div>
            </Button>
          ))}
        </div>

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-[#FF9B0F20] to-transparent rounded-full -top-20 -right-20"></div>
          <div className="absolute w-[150px] h-[150px] bg-gradient-to-br from-[#FF9B0F10] to-transparent rounded-full bottom-40 -left-20"></div>
        </div>
      </div>
    </div>
  );
};