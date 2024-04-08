import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useLocalStorage } from "./useStorage";

import { CartTypes } from "@/interface/data";

const useCart = () => {
  const queryClient = useQueryClient();
  const [user] = useLocalStorage("user", {});
  const userId = user.user._id;

  const { data } = useQuery({
    queryKey: ["cart", userId],
    queryFn: async () => {
      const { data } = await axios.get(
        `http://localhost:8000/api/cart/${userId}`
      );
      return data;
    },
  });
  const products = data?.cart?.products;

  const upToCart = useMutation({
    mutationFn: async (productId: string | number) => {
      console.log(productId);

      const { data } = await axios.post(
        "http://localhost:8000/api//cart/increase",
        {
          userId,
          productId,
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart", userId],
      });
    },
  });
  const downToCart = useMutation({
    mutationFn: async (productId: string | number) => {
      console.log(productId);

      const { data } = await axios.post(
        "http://localhost:8000/api//cart/decrease",
        {
          userId,
          productId,
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart", userId],
      });
    },
  });
  const caculateTotal = () => {
    if (!products) return 0;
    const total = products.reduce(
      (sum: number, item: CartTypes) => sum + item.price * item.quantity,
      0
    );
    return total.toLocaleString("vi-VN");
  };
  const removeCart = useMutation({
    mutationFn: async (productId: string) => {
      console.log(productId, userId);

      const { data } = await axios.delete(
        "http://localhost:8000/api/cart/remove",
        {
          data: {
            userId,
            productId,
          },
        }
      );
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart", userId],
      });
    },
  });
  return { products, removeCart, caculateTotal, downToCart, upToCart };
};

export default useCart;
