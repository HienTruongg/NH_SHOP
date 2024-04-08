import CategoriesList from "@/components/CategoriesList";
import New from "@/components/New";

const ShopPage = () => {
  return (
    <>
      <CategoriesList />
      <New featured={true} />
    </>
  );
};

export default ShopPage;
