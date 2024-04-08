import Banner from "@/components/Banner";
import useCart from "@/hooks/useCart";
import { CartTypes } from "@/interface/data";
import { Link } from "react-router-dom";

const Cart = () => {
  const { products, removeCart, caculateTotal, downToCart, upToCart } =
    useCart();

  return (
    <>
      <Banner />
      <div className="mx-auto w-[1000px] my-12">
        <div className="bg-[#F9F1E7]">
          <div className="text-center">
            <h1 className="py-8 px-10 text-3xl font-semibold">Giỏ hàng</h1>
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-[#F9F1E7] dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Tên sản phẩm
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Ảnh sản phẩm
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Giá
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Số lượng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tổng
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody>
                {products?.map((item: CartTypes, index: number) => {
                  return (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {item.name}
                      </th>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="w-[80px] bg-[#F9F1E7] rounded-lg">
                          <img src={item.image} alt="" />
                        </div>
                      </th>
                      <td className="px-6 py-4">{item.price}</td>
                      <td className="px-6 py-4">
                        <div
                          className="py-2 px-3 inline-block bg-white border border-gray-200 rounded-lg"
                          data-hs-input-number
                        >
                          <div className="flex items-center gap-x-1.5">
                            <button
                              type="button"
                              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                              data-hs-input-number-decrement
                              onClick={() => downToCart.mutate(item.productId)}
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                            <input
                              className="p-0 w-6 bg-transparent border-0 text-gray-800 text-center focus:ring-0"
                              type="text"
                              value={item.quantity}
                              data-hs-input-number-input
                            />
                            <button
                              type="button"
                              className="size-6 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-md border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                              data-hs-input-number-increment
                              onClick={() => upToCart.mutate(item.productId)}
                            >
                              <i className="fa-solid fa-plus"></i>
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        {item.price * item.quantity}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          onClick={() => removeCart.mutate(item.productId)}
                        >
                          Xoá
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="">
              <div className="flex px-12 ">
                <p className="py-4 px-8 text-base font-medium">
                  Tổng tiền hàng:
                </p>
                <p className="py-4 px-8 text-xl font-medium text-[#B88E2F]">
                  {caculateTotal()}đ
                </p>
              </div>
            </div>
            <div className="flex justify-center py-10">
              <button className="text-black border-solid border-[1px] border-blue hover:bg-[#FAF3EA] focus:ring-4 focus:outline-none focus:ring-blue-300 text-[20px] font-bold rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-[#FAF3EA] flex ">
                <Link to={"#"}>Thanh Toán</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
