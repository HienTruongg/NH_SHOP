import { ProductsTypes } from "@/interface/data";
import {
  createProducts,
  deleteProductsById,
  updateProducts,
} from "@/services/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
type ActionType = {
  action: "CREATE" | "UPDATE" | "DELETE";
};

const useProductsMutation = ({ action }: ActionType) => {
  const queryClinet = useQueryClient();
  const navigate = useNavigate();
  const form = useForm({
    // resolver: joiResolver(schema),
    defaultValues: {
      name: "",
      category: "",
      price: 0,
      image: "",
      description: "",
      featured: false,
      gallery: [""],
      discount: 0,
      countInStock: 0,
    },
  });
  const { mutate } = useMutation({
    mutationFn: async (product: ProductsTypes) => {
      console.log(product);

      switch (action) {
        case "CREATE":
          return await createProducts(product);
        case "UPDATE":
          return await updateProducts(product);
        case "DELETE":
          return (
            (await window.confirm("Bạn có chắc chắn muốn xoá !!!")) &&
            deleteProductsById(product._id!)
          );
        default:
          break;
      }
    },
    onSuccess: () => {
      queryClinet.invalidateQueries({
        queryKey: ["PRODUCTS_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = async (data: any) => {};
  return { mutate, onSubmit, form };
};

export default useProductsMutation;
