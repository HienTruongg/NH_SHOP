import { CategoryType } from "@/interface/data";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const { data } = useQuery({
    queryKey: ["CATEGORIES_KEY"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/api/categories");
      return res.json();
    },
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (id: any) => {
      const res = await axios.delete(
        `http://localhost:8000/api/categories/${id}`
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["CATEGORIES_KEY"],
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const onSubmit = (id: any) => {
    window.confirm("Bạn có chắc chắn muốn xoá !!!") && mutate(id);
  };
  return (
    <div>
      <div className="">
        <Link to="add">
          <button
            type="button"
            className="text-white bg-[#B22222] hover:bg-[#B22222] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Thêm danh mục
          </button>
        </Link>
      </div>
      <table className="w-[1192px] divide-y divide-gray-200 mb-6 mr-6">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              STT
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Tên danh mục
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Hình ảnh
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((item: CategoryType, index: number) => {
            return (
              <tr className="" key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <img src={item.image} width="50px" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`${item._id}`}>
                    <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                    onClick={() => onSubmit(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CategoryList;
