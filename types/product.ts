export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  rating: number;
  created_at?: string;
}

export interface Recommendation {
  id: string;
  product_id: string;
  recommended_product_id: string;
}

export interface CartItem extends Product {
  quantity: number;
}
