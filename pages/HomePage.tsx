import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import CategoryCard from '../components/CategoryCard';
import { CATEGORIES } from '../constants';
import { type Product } from '../types';

interface HomePageProps {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  onSelectProduct: (product: Product) => void;
  onNavigateToAbout: () => void;
  onNavigateToAdminLogin: () => void;
  onNavigateToAdmin: () => void;
  isAdminLoggedIn: boolean;
}

const HomePage: React.FC<HomePageProps> = ({ products, isLoading, error, onSelectProduct, onNavigateToAbout, onNavigateToAdminLogin, onNavigateToAdmin, isAdminLoggedIn }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setShowAllProducts(query.length > 0);
  };
  
  const handleCategorySelect = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSearchQuery('');
    setShowAllProducts(false);
    const featuredSection = document.getElementById('featured');
    if (featuredSection) {
      featuredSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const clearCategoryFilter = () => {
    setSelectedCategory(null);
    setShowAllProducts(false);
  };

  const filteredProducts = products
    .filter(product => !selectedCategory || product.category === selectedCategory)
    .filter(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
  const productsToShow = showAllProducts ? filteredProducts : filteredProducts.slice(0, 8);
 const sectionTitle = selectedCategory ? `"${selectedCategory}"` : "বিশেষ পণ্য";
  

  const renderProductGrid = () => {
    if (error) {
      return (
        <div className="col-span-full text-center p-8 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <h3 className="font-bold text-lg mb-2">পণ্য লোড করতে সমস্যা হয়েছে</h3>
          <p>{error}</p>
        </div>
      );
    }
    if (isLoading) {
      return <p className="col-span-full text-center text-gray-500 text-lg">পণ্য লোড হচ্ছে...</p>;
    }
    if (productsToShow.length > 0) {
      return productsToShow.map((product) => (
        <ProductCard key={product.id} product={product} onSelectProduct={onSelectProduct} />
      ));
    }
    return (
      <p className="col-span-full text-center text-gray-500 text-lg">
        {selectedCategory ? 'এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।' : 'আপনার অনুসন্ধানের সাথে মেলে এমন কোনো পণ্য পাওয়া যায়নি।'}
      </p>
    );
  };

  return (
    <>
      <Header 
        searchValue={searchQuery} 
        onSearchChange={handleSearchChange} 
        onNavigateToAbout={onNavigateToAbout}
        onNavigateToAdminLogin={onNavigateToAdminLogin}
        onNavigateToAdmin={onNavigateToAdmin}
        isAdminLoggedIn={isAdminLoggedIn}
      />
      <main>
        <HeroSlider />

        <section id="featured" className="py-16 sm:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-black mb-4">{sectionTitle}</h2>
              {selectedCategory ? (
                <button 
                  onClick={clearCategoryFilter}
                  className="text-sm text-[#FF0061] font-semibold hover:underline"
                >
                  ফিল্টার সরান
                </button>
              ) : (
                <p className="text-gray-600 max-w-2xl mx-auto">আপনার পছন্দের সেরা পণ্যটি এখুনি নিয়ে নিন ক্যাশ অন হোম ডেলিভারিতে </p>
              )}
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
              {renderProductGrid()}
            </div>
            
            {!showAllProducts && filteredProducts.length > 8 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAllProducts(true)}
                  className="bg-[#FF0061] text-white px-8 py-3 rounded-full font-bold hover:bg-[#D60051] transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0061]"
                  aria-label="Load more products"
                >
                  আরও দেখুন
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="categories" className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-black mb-12">ক্যাটাগরি অনুযায়ী কেনাকাটা</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 sm:gap-4">
              {CATEGORIES.map((category) => (
                <CategoryCard key={category.id} category={category} onClick={handleCategorySelect} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
