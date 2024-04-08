import instance from "@/configs/axios";
import { ProductsTypes } from "@/interface/data";

export const getAllProducts = async (): Promise<ProductsTypes[]> => {
  try {
    const response = await instance.get("/products");
    return response.data;
  } catch (error) {
    return [];
  }
};
export const deleteProductsById = async (id: number | string) => {
  try {
    const response = await instance.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
export const getProductsById = async (id: number | string) => {
  try {
    const response = await instance.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
};
export const updateProducts = async (data: ProductsTypes) => {
  try {
    const response = await instance.put(`/products/${data._id}`, data);
    return response.data;
  } catch (error) {
    return [];
  }
};
export const createProducts = async (data: ProductsTypes) => {
  try {
    const response = await instance.post("/products", data);
    return response.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};
