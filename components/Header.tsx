import React, { useState } from 'react';

interface HeaderProps {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNavigateToAbout: () => void;
  onNavigateToAdminLogin: () => void;
  onNavigateToAdmin: () => void;
  isAdminLoggedIn: boolean;
}

const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange, onNavigateToAbout, onNavigateToAdminLogin, onNavigateToAdmin, isAdminLoggedIn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleAdminClick = () => {
    if (isAdminLoggedIn) {
      onNavigateToAdmin();
    } else {
      onNavigateToAdminLogin();
    }
  };

  const adminButtonText = isAdminLoggedIn ? "পণ্য যোগ করুন" : "অ্যাডমিন লগইন";

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 text-3xl font-extrabold tracking-wider">
            <a href="#" className="text-black" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>
              Net-
              <span className="text-[#FF0061]">Bazar</span>
            </a>
          </div>

          <div className="flex items-center justify-end flex-grow ml-4">
            <div className="relative">
              <input
                type="text"
                placeholder="পণ্য খুঁজুন..."
                value={searchValue}
                onChange={onSearchChange}
                aria-label="Search products"
                className="w-36 sm:w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#FF0061] transition-all duration-300"
              />
            </div>

            <nav className="hidden md:flex space-x-8 ml-8 items-center">
              <a href="#featured" className="text-gray-600 hover:text-[#FF0061] transition-colors duration-300">বিশেষ পণ্য</a>
              <a href="#categories" className="text-gray-600 hover:text-[#FF0061] transition-colors duration-300">ক্যাটাগরি</a>
              <button onClick={onNavigateToAbout} className="text-gray-600 hover:text-[#FF0061] transition-colors duration-300">আমাদের সম্পর্কে</button>
              <button onClick={handleAdminClick} className="text-gray-600 hover:text-[#FF0061] transition-colors duration-300 font-semibold">{adminButtonText}</button>
            </nav>

            <div className="md:hidden ml-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open navigation menu"
                className="text-gray-600 hover:text-[#FF0061] focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-3">
              <a href="#featured" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-[#FF0061] p-2 rounded-md transition-colors duration-300"></a>
              <a href="#categories" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-[#FF0061] p-2 rounded-md transition-colors duration-300">ক্যাটাগরি</a>
              <button onClick={() => { onNavigateToAbout(); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-[#FF0061] p-2 rounded-md transition-colors duration-300">আমাদের সম্পর্কে</button>
              <button onClick={() => { handleAdminClick(); setIsMenuOpen(false); }} className="text-left text-gray-600 hover:text-[#FF0061] p-2 rounded-md transition-colors duration-300 font-semibold">{adminButtonText}</button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
