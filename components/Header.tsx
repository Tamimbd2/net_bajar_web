import React from 'react';

interface HeaderProps {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onNavigateToAbout: () => void;
}

const Header: React.FC<HeaderProps> = ({ searchValue, onSearchChange, onNavigateToAbout }) => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 text-3xl font-extrabold tracking-wider">
            <a href="#" className="text-black">
              Net-
              <span className="text-[#FF0061]">Bazar</span>
            </a>
          </div>

          <div className="flex items-center justify-end flex-grow ml-4 sm:ml-8">
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
             <nav className="hidden md:flex space-x-8 ml-4 sm:ml-8">
              <a href="#featured" className="text-gray-600 hover:text-[#FF0061] transition-colors duration-300">বিশেষ পণ্য</a>
              <a href="#categories" className="text-gray-600 hover:text-[#FF0061] transition-colors duration-300">ক্যাটাগরি</a>
              <button onClick={onNavigateToAbout} className="text-gray-600 hover:text-[#FF0061] transition-colors duration-300">আমাদের সম্পর্কে</button>
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
