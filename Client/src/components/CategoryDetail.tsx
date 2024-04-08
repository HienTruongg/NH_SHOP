// import { useQuery } from "@tanstack/react-query";
// import { useParams } from "react-router-dom";
// import New from "./New";

// const CategoryDetail = () => {
//   const { id } = useParams<{ id: string }>();
//   const { data } = useQuery({
//     queryKey: ["CATEGORIES_KEY", id],
//     queryFn: async () => {
//       const res = await fetch(`http://localhost:8000/api/categories/${id}`);
//       return res.json();
//     },
//   });
//   console.log(data);

//   return (
//     <>
//       <div className="grid justify-items-center">
//         <div className="flex w-[1250px] mt-10 mb-3">
//           <p className="text-[25px] font-medium">
//             Danh Mục : {data?.category?.name}
//           </p>
//         </div>
//       </div>
//       <New products={data?.product} />
//     </>
//   );
// };

// export default CategoryDetail;
