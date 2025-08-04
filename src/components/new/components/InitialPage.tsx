import React, { useState, useEffect } from 'react';
import { Globe, ChevronDown, Crown, ChefHat } from 'lucide-react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
}

interface InitialPageProps {
  onViewMenu: () => void;
}
const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'ne', name: 'Nepali', nativeName: 'नेपाली' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'zh', name: 'Chinese', nativeName: '中文' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語' },
];

const InitialPage: React.FC<InitialPageProps> = ({ onViewMenu }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [memberId, setMemberId] = useState('');

  useEffect(() => {
    const timer1 = setTimeout(() => setCurrentStep(2), 1500);
    const timer2 = setTimeout(() => setCurrentStep(3), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleLanguageSelect = (language: Language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
  };

  const handleViewMenu = () => {
    onViewMenu();
  };

  if (currentStep <= 2) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="text-orange-400">Digital</span>{' '}
              <span className="text-white">Menu</span>
            </h1>
            
            {/* Animated underline */}
            <div className="relative h-2 mb-8">
              <div 
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 h-1 bg-white transition-all duration-1000 ${
                  currentStep === 1 ? 'w-20' : 'w-80'
                }`}
              />
            </div>
            
            {/* Welcome text appears in step 2 */}
            {currentStep >= 2 && (
              <div 
                className={`transition-all duration-1000 ${
                  currentStep >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-2xl md:text-3xl text-gray-300 font-light italic">
                  Welcome
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
      <div 
        className={`relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 max-w-md w-full transform transition-all duration-1000 ${
          currentStep >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        style={{
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 100px rgba(251, 146, 60, 0.1)'
        }}
      >
        {/* Gradient glow effect */}
        <div className="absolute -top-1 -right-1 w-32 h-32 bg-gradient-to-br from-orange-400/20 to-transparent rounded-full blur-xl" />
        
        {/* Header Text */}
        <div className="text-center mb-8">
          <h2 className="text-orange-400 text-2xl md:text-3xl font-semibold mb-2">
            Welcome To Our
          </h2>
          <h1 className="text-orange-400 text-3xl md:text-4xl font-bold mb-4">
            Restaurant
          </h1>
          <p className="text-white text-lg font-light">
            Enjoy Your Food !
          </p>
        </div>

        {/* Chef Mascot */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <ChefHat className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
              GOOD FOOD
            </div>
            {/* Mustache */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-8 h-2 bg-amber-800 rounded-full" />
          </div>
        </div>

        {/* Language Selection */}
        <div className="relative mb-6">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-gray-700 hover:bg-gray-600 text-white px-4 py-3 rounded-xl flex items-center justify-between transition-all duration-200 border border-gray-600 hover:border-orange-400/50"
          >
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-orange-400" />
              <span>{selectedLanguage.nativeName}</span>
            </div>
            <ChevronDown 
              className={`w-5 h-5 text-orange-400 transition-transform duration-200 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`} 
            />
          </button>

          {/* Language Dropdown */}
          {isDropdownOpen && (
            <div 
              className="absolute top-full left-0 right-0 bg-white rounded-xl shadow-2xl border border-gray-200 mt-2 z-10 overflow-hidden transition-all duration-300 opacity-100 translate-y-0"
            >
              {languages.map((language) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageSelect(language)}
                  className={`w-full px-4 py-3 text-left hover:bg-orange-50 transition-colors duration-150 ${
                    selectedLanguage.code === language.code 
                      ? 'bg-orange-100 text-orange-600 font-medium' 
                      : 'text-gray-700'
                  }`}
                >
                  {language.nativeName}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Member ID Input */}
        <div className="mb-8">
          <div className="flex items-center gap-3 bg-gray-700 px-4 py-3 rounded-xl border border-gray-600 focus-within:border-orange-400/50 transition-colors duration-200">
            <Crown className="w-5 h-5 text-orange-400" />
            <input
              type="text"
              placeholder="Through Member Id"
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
              className="flex-1 bg-transparent text-white placeholder-gray-400 outline-none"
            />
          </div>
        </div>

        {/* View Menu Button */}
        <button
          onClick={handleViewMenu}
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 hover:shadow-lg active:scale-95"
        >
          View Menu
        </button>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400/50 rounded-full" />
        <div className="absolute bottom-4 right-4 w-1 h-1 bg-orange-400/30 rounded-full" />
      </div>
    </div>
  );
};

export default InitialPage;