import { CategoryType } from "@/interface/data";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const CategoriesList = () => {
  const { data } = useQuery({
    queryKey: ["CATEGORIES_KEY"],
    queryFn: async () => {
      const res = await fetch("http://localhost:8000/api/categories");
      return res.json();
    },
  });
  return (
    <div className="grid justify-items-center">
      <div className="flex w-[1250px] mt-10 mb-3">
        <p className="text-[25px] font-medium">Danh Mục </p>
      </div>

      <div className="w-[1250px] flex my-5  ">
        {data?.map((item: CategoryType, index: number) => (
          <div className=" grid justify-items-center mx-3" key={index}>
            <img src={item.image} className="w-14 h-14 rounded-full" alt="" />
            <Link to={`/category/${item._id}`}>{item.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesList;
