import { categorySchema } from "@/services/validation";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(categorySchema),
    defaultValues: {
      name: "",
      image: "",
    },
  });
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: async (formData: any) => {
      console.log(formData);

      const res = await axios.post(
        "http://localhost:8000/api/categories",
        formData
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
  const naigate = useNavigate();
  const onSubmit = (data: any) => {
    mutate(data);
    naigate("/admin/categories");
  };
  return (
    <>
      <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white">
        <div className="flex">
          <h3 className="font-bold uppercase text-2xl">Thêm sản phẩm</h3>
        </div>
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder=" Name*"
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
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCategory;
