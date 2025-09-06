import React from 'react';
import { type Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelectProduct }) => {
  return (
    <div 
      className="group cursor-pointer bg-white rounded-lg shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100"
      onClick={() => onSelectProduct(product)}
    >
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <p className="mt-2 text-xl font-bold text-[#FF0061]">৳{product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;