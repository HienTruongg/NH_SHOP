export type ProductsTypes = {
  _id?: number | string;
  name: string;
  price: number;
  description: string;
  image: string;
  gallery: string[];
  discount: number;
  category: string;
  featured: boolean;
};
export type CategoryType = {
  _id: number | string;
  name: string;
  slug: string;
  image: string;
};
export type UserTypes = {
  _id?: number | string;
  email: string;
  password: string;
};
export type CartTypes = {
  _id: number | string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
};
export type OrderTypes = {
  userId: string;
  orderItems: [];
  totalPrice: number;
  customerInfo: {};
};
