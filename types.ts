
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  imageUrl: string;
}
