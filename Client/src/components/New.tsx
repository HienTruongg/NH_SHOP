import { useLocalStorage } from "@/hooks/useStorage";
import { ProductsTypes } from "@/interface/data";
import { getAllProducts } from "@/services/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
type ProductsProps = {
  featured?: boolean;
  products?: ProductsTypes[];
};
const New = ({ featured, products }: ProductsProps) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ["PRODCUTS_KEY"],
    queryFn: getAllProducts,
  });
  const { data: categories } = useQuery({
    queryKey: ["CATEGORIES_KEY"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/api/categories");
      return res.json();
    },
  });
  const filterProducct = featured
    ? data?.filter((item: ProductsTypes) => item.featured === featured)
    : products
    ? products
    : data;
  const [user] = useLocalStorage("user", {});
  const userId = user?.user?._id;
  const { mutate } = useMutation({
    mutationFn: async ({
      productId,
      quantity,
    }: {
      productId: string | undefined | number;
      quantity: number;
    }) => {
      const { data } = await axios.post(`http://localhost:8000/api/cart`, {
        userId,
        productId,
        quantity,
      });
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart", userId],
      });
      alert("Thêm giỏ hàng thành công");
    },
  });

  return (
    <>
      <div className="grid justify-items-center">
        <div className="flex w-[1250px] mt-10">
          <p className="text-[40px] font-medium">New</p>
        </div>

        <div className="w-[1250px] h-[1px] bg-black"></div>

        <div className=" grid grid-cols-3 justify-items-center gap-8 my-10 w-[1250px]">
          {filterProducct?.map((item: ProductsTypes, index: number) => (
            <div className="relative" key={index}>
              <div className="group ">
                <img src={item.image} className="w-[100%] h-[308px]" alt="" />
                <div className="bg-[#F4F5F7] h-[150px] ">
                  <p className="text-2xl font-semibold mx-4 ">
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </p>
                  <Link
                    to={`/product/${item._id}`}
                    className="text-base font-medium m-4 text-[#898989]"
                  >
                    {categories?.map((category: any) => {
                      return category._id === item.category
                        ? category.name
                        : "";
                    })}
                  </Link>
                  <p className="text-xl font-semibold my-6 mx-4">
                    {item.price.toLocaleString("vi-VN")}đ
                  </p>
                </div>
                <p className="absolute w-[45px] h-[45px] bg-red-500 rounded-full text-center top-[4%] right-[8%] text-white pt-[9px]">
                  {item.discount}%
                </p>
                <div className="absolute inset-0 z-10 bg-opacity-50 flex justify-end items-end transition-opacity duration-300">
                  <div className="text-white">
                    <div className=" flex flex-col">
                      <button className="bg-white border-[1px] border-solid border-[#B88E2F] text-[#B88E2F] font-bold py-2 px-8 rounded my-4">
                        <Link to={`/product/${item._id}`}>View</Link>
                      </button>
                      <button
                        className="bg-white border-[1px] border-solid border-[#B88E2F] text-[#B88E2F] font-bold py-2 px-8 rounded"
                        onClick={() => {
                          mutate({ productId: item._id, quantity: 1 });
                        }}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[1250px] h-[1px] bg-black"></div>
      </div>
    </>
  );
};

export default New;
