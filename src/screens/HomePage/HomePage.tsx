import {

  HeartIcon,
  
  MapIcon,
  MessageCircleIcon,
  PlusIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import BottomNav from "../../components/ui/Bottomnav";
import React, { useState, useEffect } from "react";

export const HomePage = (): JSX.Element => {
/* At the top of HomePage.tsx, inside the component
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const restaurant = params.get("restaurant");
  const table = params.get("table");
  if (restaurant && table) {
    localStorage.setItem("restaurant", restaurant);
    localStorage.setItem("table", table);
  }
}, []);


*/

  // Active category state
  const [activeCategory, setActiveCategory] = useState(0);

  // Category filters data
  const categories = [
    { name: "All" },
    { name: "Non-Veg" },
    { name: "Veg" },
    { name: "Drink" },
    { name: "Dessert" },];

  // Promotion cards data
  const fallbackPromotions = [
    {
      id: 1,
      title: "Today's Offer",
      description: "Free box of fries",
      subtitle: "On all orders above",
      
      
      
      price: "Rs.500",
      image: "fries.png",
    },
    {
      id: 2,
      title: "Today's Offer",
      description: "Free box of fries",
      subtitle: "On all orders above",
      price: "Rs.500",
      image: "image.png",
    },
    {
      id: 3,
      title: "Today's Offer",
      description: "Free box of fries",
      subtitle: "On all orders above",
      price: "Rs.500",
      image: "image.png",
    
    },
  ];




  
  // Popular food items data
const fallbackPopularItems = [
  {
    id: 1,
    name: "Beef Burger",
    price: "Rs.250",
    image: "image.png",
    categories: ["Non-Veg"],
  },
  {
    id: 2,
    name: "Cheese Pizza",
    price: "Rs.350",
    image: "image.png",
    categories: ["Veg", "Dessert"],
  },
];

  const [promotions, setPromotions] = useState(fallbackPromotions);


  useEffect(() => {
    // Replace with your Django backend API endpoint
  fetch(`http://localhost:8000/api/promotions/?restaurant=${restaurant}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setPromotions(data))
      .catch(() => setPromotions(fallbackPromotions));
  }, []);


const restaurant = localStorage.getItem("restaurant") || "DeliciousBites"; // fallback for dev
const table = localStorage.getItem("table") || "Table 1"; // fallback for dev
const [popularItems, setPopularItems] = useState(fallbackPopularItems);

 useEffect(() => {
  // Replace with your Django backend API endpoint for popular items
  fetch(`http://localhost:8000/api/popular/?restaurant=${restaurant}`)
    .then((res) => {
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    })
    .then((data) => setPopularItems(data))
    .catch(() => setPopularItems(fallbackPopularItems));
}, []);



// Find the selected category name
const selectedCategory = categories[activeCategory].name;

// Filter items
const filteredPopularItems =
  selectedCategory.toLowerCase() === "all"
    ? popularItems
    : popularItems.filter(item =>
        item.categories &&
        item.categories.some(cat =>
          cat.toLowerCase() === selectedCategory.toLowerCase()
        )
      );


  return (
    <div className="bg-black flex flex-row justify-center w-full min-h-screen">
      <div className="bg-black overflow-hidden w-[393px] h-[852px] relative -mt-12">
        {/* Status Bar */}
        

        {/* Header Section */}
        
            <header className="absolute w-[325px] h-[103px] top-[70px] left-8">
              <h1 className="absolute w-[271px] top-0 left-0 font-['Poppins'] font-semibold text-[#ff9a0e] text-[24px] tracking-[0] leading-[normal]">
                {restaurant}
              </h1>
              <h3 className="absolute top-[35px] left-0 font-['Poppins'] font-medium text-white text-[18px]">
                Table Number: {table}
              </h3>
              <p className="absolute w-[234px] top-[70px] left-0 font-['Poppins'] font-semibold text-white text-[15px] tracking-[0] leading-[normal]">
                Order Your Favourite Food !
              </p>
              <div className="absolute w-20 h-20 top-[13px] left-[270px] rounded-full overflow-hidden border-2 border-[#ff9a0e] shadow-lg">
                <img
                  className="w-full h-full object-cover"
                  alt="Profile"
                  src="/avatar.png"
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

          <Button className="absolute w-11 h-12 top-0 left-[305px] bg-[#ff9a0e] rounded-[10px] p-0 hover:bg-[#e68c0d] shadow-md">
            <img className="w-[20px] h-[20px]" alt="Filter" src="/Menu.svg" />
          </Button>
        </div>

        {/* Category Filters */}
        <div className="absolute flex space-x-3 top-[257px] left-7 overflow-x-auto scrollbar-hide">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant="outline"
              onClick={() => setActiveCategory(index)}
              className={`h-[29px] px-3 py-0.5 rounded-[10px] shadow-[0px_4px_4px_#00000040] whitespace-nowrap ${
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
              {filteredPopularItems.map((item) => (
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

        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-[200px] h-[200px] bg-gradient-to-br from-[#FF9B0F20] to-transparent rounded-full -top-20 -right-20"></div>
          <div className="absolute w-[150px] h-[150px] bg-gradient-to-br from-[#FF9B0F10] to-transparent rounded-full bottom-40 -left-20"></div>
        </div>
      </div>
      
      {/* Bottom Navigation - positioned outside the main container */}
      <BottomNav currentPage="home" />
    </div>
  );
};