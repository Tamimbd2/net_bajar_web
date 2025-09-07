export interface Product {
  id: string;
  createdAt: number;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl: string;
}

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}