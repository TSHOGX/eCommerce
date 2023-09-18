export type Cart = CartItem[];

export type CartItem = {
  id: string;
  productTitle: string;
  quantity: number;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
};
