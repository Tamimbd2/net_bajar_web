import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AboutPage from './pages/AboutPage';
import AdminPage from './pages/AdminPage';
import AdminLoginPage from './pages/AdminLoginPage';
import { type Product } from './types';
import { INITIAL_PRODUCTS } from './constants';

const ADMIN_CODE = '221002257';

const App: React.FC = () => {
  const [page, setPage] = useState<'home' | 'product' | 'about' | 'admin' | 'admin-login'>('home');
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setPage('product');
    window.scrollTo(0, 0);
  };

  const handleGoHome = () => {
    setSelectedProduct(null);
    setLoginError(null);
    setPage('home');
    window.scrollTo(0, 0);
  };

  const handleShowAbout = () => {
    setPage('about');
    window.scrollTo(0, 0);
  };

  const handleShowAdmin = () => {
    setPage('admin');
    window.scrollTo(0, 0);
  };
  
  const handleNavigateToAdminLogin = () => {
    setLoginError(null);
    setPage('admin-login');
    window.scrollTo(0, 0);
  };

  const handleLoginAttempt = (code: string) => {
    if (code === ADMIN_CODE) {
      setIsAdminLoggedIn(true);
      setPage('admin');
      setLoginError(null);
    } else {
      setLoginError("ভুল কোড। আবার চেষ্টা করুন।");
    }
  };


  const handleAddProduct = (newProduct: Omit<Product, 'id'>) => {
    setProducts(prevProducts => [
      { ...newProduct, id: Date.now() }, 
      ...prevProducts
    ]);
    alert("Product added successfully!");
    handleGoHome();
  };

  const renderPage = () => {
    const homePageProps = {
        products,
        onSelectProduct: handleSelectProduct,
        onNavigateToAbout: handleShowAbout,
        onNavigateToAdmin: handleShowAdmin,
        onNavigateToAdminLogin: handleNavigateToAdminLogin,
        isAdminLoggedIn,
    };

    switch (page) {
      case 'product':
        return selectedProduct ? <ProductDetailPage product={selectedProduct} onBack={handleGoHome} /> : <HomePage {...homePageProps} />;
      case 'about':
        return <AboutPage onBack={handleGoHome} />;
      case 'admin':
        return isAdminLoggedIn ? <AdminPage onAddProduct={handleAddProduct} onBack={handleGoHome} /> : <AdminLoginPage onLoginAttempt={handleLoginAttempt} onBack={handleGoHome} error={loginError} />;
      case 'admin-login':
        return <AdminLoginPage onLoginAttempt={handleLoginAttempt} onBack={handleGoHome} error={loginError} />;
      case 'home':
      default:
        return <HomePage {...homePageProps} />;
    }
  };

  return (
    <div className="bg-white text-black min-h-screen">
      {renderPage()}
    </div>
  );
};

export default App;