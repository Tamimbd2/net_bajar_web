
import React from 'react';
import { type Category } from '../types';

interface CategoryCardProps {
  category: Category;
  onClick: (categoryName: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category, onClick }) => {
  return (
    <div 
      className="group relative rounded-lg overflow-hidden cursor-pointer"
      onClick={() => onClick(category.name)}
    >
      <img
        src={category.imageUrl}
        alt={category.name}
        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center p-2">
        <h3 className="text-white text-2xl font-bold tracking-wider text-center">{category.name}</h3>
      </div>
    </div>
  );
};

export default CategoryCard;