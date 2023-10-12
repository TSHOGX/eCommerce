export type CartList = CartListItem[];

export type CartListItem = {
  id: string;
  image: string;
  productId: string;
  productTitle: string;
  productCategory: string;
  quantity: number;
  size: string | null;
  prize: string | null;
};

export type Products = Product[];

export type Product = {
  id: string; // equal to CartItem.id
  name: string;
  subtitle: string;
  description: string;
  price: string;
  size: string[];
  images: string[];
  url: string;
  inventoryQuantity: string;
};
