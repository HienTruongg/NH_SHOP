import Loading from "@/components/Loading";
import { ProductsTypes } from "@/interface/data";
import { getProductsById } from "@/services/product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["PRODCUTS_KEY", id],
    queryFn: async () => await getProductsById(id as string),
  });
  const res = useQuery({
    queryKey: ["PRODCUTS_KEY", data?.category],
    queryFn: async () => {
      const { data: related } = await axios.get(
        `http://localhost:8000/api/products/related/${data?.category}`
      );
      return related;
    },
  });
  const relatedProducts = res.data?.filter(
    (item: ProductsTypes) => item._id !== data?._id
  );
  console.log(relatedProducts);

  if (isLoading) return <Loading />;
  return (
    <>
      <div className="font-[sans-serif] ">
        <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
          <form className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="flex lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className=" flex flex-wrap justify-center gap-x-10 gap-y-6 mx-auto">
                <div className="bg-[#F9F1E7] rounded-xl p-4">
                  <img
                    src="https://readymadeui.com/images/coffee3.webp"
                    alt="Product2"
                    className="w-[76px] cursor-pointer"
                  />
                </div>
                <div className="bg-[#F9F1E7] rounded-xl p-4">
                  <img
                    src="https://readymadeui.com/images/coffee4.webp"
                    alt="Product2"
                    className="w-[76px] cursor-pointer"
                  />
                </div>
                <div className="bg-[#F9F1E7] rounded-xl p-4">
                  <img
                    src="https://readymadeui.com/images/coffee5.webp"
                    alt="Product2"
                    className="w-[76px] cursor-pointer"
                  />
                </div>
                <div className="bg-[#F9F1E7] rounded-xl p-4">
                  <img
                    src="https://readymadeui.com/images/coffee5.webp"
                    alt="Product2"
                    className="w-[76px] cursor-pointer"
                  />
                </div>
              </div>
              <div className="bg-[#F9F1E7] px-4 py-10 rounded-xl">
                <img
                  src={data?.image}
                  alt="Product"
                  className="w-[1952px] h-[350px] rounded object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-[42px]  font-normal text-black">
                {data?.name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className="text-[#9F9F9F] text-4xl font-bold">
                  {data?.price.toLocaleString("vi-VN")}đ
                </p>
              </div>
              <div className="flex space-x-2 mt-4">
                <svg
                  className="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-yellow-300"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <svg
                  className="w-5 fill-[#CED5D8]"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                </svg>
                <h4 className="text-black text-base">| 5 Customer Review</h4>
              </div>

              <div className="mt-8">
                <p className="space-y-3 list-disc mt-4 text-sm text-black">
                  {data?.description}
                </p>
              </div>
              <div className="">
                <h3 className="text-sm font-normal text-[#9F9F9F] mt-6">
                  Color
                </h3>
                <div className="flex w-auto justify-around mt-6">
                  <div
                    className="w-[100px] rounded-md bg-[#F9F1E7] text-sm font-normal 
                  p-[10px]"
                  >
                    Titan Đen
                  </div>
                  <div
                    className="w-[100px] rounded-md bg-[#F9F1E7] text-sm font-normal 
                  p-[10px]"
                  >
                    Titan Trắng
                  </div>
                  <div className="w-[150px] rounded-md bg-[#F9F1E7] text-sm font-normal p-[10px]">
                    Titan Tự Nhiên
                  </div>
                </div>
              </div>
              <div className="">
                <h3 className="text-sm font-normal text-[#9F9F9F] mt-6">
                  Color
                </h3>
                <div className="flex w-[100px] justify-around mt-6">
                  <div className="w-[20px] rounded-full bg-[#816DFA] h-[20px]"></div>
                  <div className="w-[20px] rounded-full bg-[#000000] h-[20px]"></div>
                  <div className="w-[20px] rounded-full bg-[#B88E2F] h-[20px]"></div>
                </div>
              </div>
              <div className="w-[550px] flex justify-between mt-10">
                <div className="relative flex items-center max-w-[8rem]">
                  <button
                    type="button"
                    id="decrement-button"
                    data-input-counter-decrement="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-s-lg p-3 h-16 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 2"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h16"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="quantity-input"
                    data-input-counter
                    aria-describedby="helper-text-explanation"
                    className="bg-gray-50 border-x-0 border-gray-300 h-16 text-center text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full py-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="999"
                    required
                  />
                  <button
                    type="button"
                    id="increment-button"
                    data-input-counter-increment="quantity-input"
                    className="bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-gray-600 hover:bg-gray-200 border border-gray-300 rounded-e-lg p-3 h-16 focus:ring-gray-100 dark:focus:ring-gray-700 focus:ring-2 focus:outline-none"
                  >
                    <svg
                      className="w-3 h-3 text-gray-900 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 18"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 1v16M1 9h16"
                      />
                    </svg>
                  </button>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="py-4 px-10  text-xl font-normal text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Add To Cart
                  </button>
                </div>

                <div className="">
                  <button
                    type="button"
                    className="py-4 px-10  text-xl font-normal text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    Compare
                  </button>
                </div>
              </div>
              <div className="">
                <div className="bg-[#D9D9D9] w-[606px] h-[1px] my-14"></div>
                <div className="">
                  <ul>
                    <li className="text-[#9F9F9F] font-normal text-sm mt-4">
                      SKU <span>: SS001</span>
                    </li>
                    <li className="text-[#9F9F9F] font-normal text-sm mt-4">
                      Category <span>: Sofas</span>
                    </li>
                    <li className="text-[#9F9F9F] font-normal text-sm mt-4">
                      Tags <span>: Sofa, Chair, Home, Shop</span>
                    </li>
                    <li className="text-[#9F9F9F] font-normal text-sm mt-4">
                      Share
                      <span>
                        :<div className=""></div>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="grid justify-items-center">
          <div className=" grid grid-cols-4 justify-items-center gap-8 my-10 w-[1250px]">
            {relatedProducts?.map((item: ProductsTypes, index: number) => (
              <div className="relative " key={index}>
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
                      {item.category}
                    </Link>
                    <p className="text-xl font-semibold my-6 mx-4">
                      {item.price}
                    </p>
                  </div>
                  <p className="absolute w-[45px] h-[45px] bg-red-500 rounded-full text-center top-[4%] right-[8%] text-white pt-[9px]">
                    {item.discount}%
                  </p>
                  <div className="opacity-0 group-hover:opacity-100 absolute inset-0 z-10 bg-gray-700 bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
                    <div className="text-white">
                      <div className=" flex flex-col">
                        <button className="bg-white border-[1px] border-solid border-[#B88E2F] text-[#B88E2F] font-bold py-2 px-8 rounded my-4">
                          <Link to={`/product/${item._id}`}>View</Link>
                        </button>
                        <button className="bg-white border-[1px] border-solid border-[#B88E2F] text-[#B88E2F] font-bold py-2 px-8 rounded">
                          Add to cart
                        </button>
                      </div>
                      <div className="flex mt-3">
                        <p className="text-lg font-semibold mx-3">Share</p>
                        <p className="text-lg font-semibold mx-3">Compare</p>
                        <p className="text-lg font-semibold mx-3">Like</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
