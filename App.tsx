import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import { type Product } from './types';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'product' | 'about'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setPage('product');
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setSelectedProduct(null);
    setPage('home');
    window.scrollTo(0, 0);
  };

  const handleShowAbout = () => {
    setPage('about');
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (page) {
      case 'product':
        return selectedProduct ? <ProductDetailPage product={selectedProduct} onBack={handleGoHome} /> : <HomePage onSelectProduct={handleSelectProduct} onNavigateToAbout={handleShowAbout} />;
      case 'about':
        return <AboutPage onBack={handleGoHome} />;
      case 'home':
      default:
        return <HomePage onSelectProduct={handleSelectProduct} onNavigateToAbout={handleShowAbout} />;
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {renderPage()}
    </div>
  );
};

export default App;
