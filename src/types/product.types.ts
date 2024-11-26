export interface Category {
  _id: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  rating: number;
  reviews: number;
  images: string[];
  category: Category;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
