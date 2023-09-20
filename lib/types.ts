export type Cart = CartItem[];

export type CartItem = {
  id: string;
  productTitle: string;
  quantity: number;
};

export type Products = Product[];

export type Product = {
  id: string; // equal to CartItem.id
  title: string;
  description: string;
  price: number;
  inventoryQuantity: number;
};
