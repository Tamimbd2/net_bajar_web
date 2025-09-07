import React, { useState } from 'react';
import Footer from '../components/Footer';
import { type Product } from '../types';

interface AdminPageProps {
  onAddProduct: (newProduct: Omit<Product, 'id' | 'createdAt'>) => void;
  onBack: () => void;
  isSubmitting: boolean;
}

const AdminPage: React.FC<AdminPageProps> = ({ onAddProduct, onBack, isSubmitting }) => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !category || !price || !imageUrl || !description) {
      alert("অনুগ্রহ করে সমস্ত ক্ষেত্র পূরণ করুন।");
      return;
    }

    const isConfirmed = window.confirm("আপনি কি নিশ্চিত যে আপনি এই পণ্যটি যোগ করতে চান?");

    if (isConfirmed) {
      const newProduct = {
        name,
        category,
        price: parseFloat(price),
        imageUrl: imageUrl,
        description,
      };

      onAddProduct(newProduct);
    }
  };

  return (
    <>
      <main className="bg-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
          <button
            onClick={onBack}
            className="mb-8 inline-flex items-center text-gray-600 hover:text-[#FF0061] transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            হোমপেজে ফিরে যান
          </button>

          <div className="max-w-2xl mx-auto bg-gray-50 p-6 sm:p-10 rounded-lg shadow-md">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-black text-center mb-8">নতুন পণ্য যোগ করুন</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">পণ্যের নাম</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0061] focus:border-[#FF0061] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">ক্যাটাগরি</label>
                <input
                  type="text"
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0061] focus:border-[#FF0061] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">মূল্য (BDT)</label>
                <input
                  type="number"
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0061] focus:border-[#FF0061] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">পণ্যের ছবির লিঙ্ক</label>
                <input
                  type="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0061] focus:border-[#FF0061] sm:text-sm"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">পণ্যের বিবরণ</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#FF0061] focus:border-[#FF0061] sm:text-sm"
                  required
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#FF0061] hover:bg-[#D60051] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF0061] disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      সাবমিট হচ্ছে...
                    </>
                  ) : (
                    'পণ্য সাবমিট করুন'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AdminPage;