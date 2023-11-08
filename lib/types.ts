export type Transaction = {
  id: string;
  timestamp: string;
  accountEmail: string;
  transProducts: TransProduct[];
  shippingAddress: ShippingAddress;
};

export type ShippingAddress = {
  city: string;
  country: string;
  line1: string;
  line2: string;
  postal_code: string;
  state: string;
};

export type TransProduct = {
  productID: string;
  quantity: number;
  size: string;
};

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
