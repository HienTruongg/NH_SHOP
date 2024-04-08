import { categorySchema } from "@/services/validation";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const CategoryUpdate = () => {
  const { id } = useParams<{ id: string }>();
  const { data } = useQuery({
    queryKey: ["CATEGORIES_KEY", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:8000/api/categories/${id}`);
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(categorySchema),
    defaultValues: {
      name: "",
      image: "",
    },
  });

  useEffect(() => {
    data && reset(data.category);
  }, [data]);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (formData: any) => {
      const response = await axios.put(
        `http://localhost:8000/api/categories/${formData.id}`,
        formData
      );
      return response.data;
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
  const navigate = useNavigate();
  const onSubmit = (data: any) => {
    console.log(data);
    mutate(data);
    navigate("/admin/categories");
  };
  return (
    <>
      <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
        <div className="flex">
          <h3 className="font-bold uppercase text-2xl">Cập nhật danh mục</h3>
        </div>
        <form
          className="mt-5"
          onSubmit={handleSubmit((data) => onSubmit(data))}
        >
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Tên danh mục*"
                {...register("name", {
                  minLength: 3,
                  maxLength: 30,
                  required: true,
                })}
              />
              {errors.name && (
                <p className="text-red-600 font-bold m-2">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Hình ảnh*"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <p className="text-red-600 font-bold m-2">
                  {errors.image.message}
                </p>
              )}
            </div>
          </div>

          <p className="text-red-600 font-bold m-2"></p>
          <div className="my-2 w-1/2 lg:w-1/4">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-[#df3079] text-black[#F9F1E7] p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Cập nhật danh mục
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CategoryUpdate;
