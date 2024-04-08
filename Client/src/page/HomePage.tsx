import Banner from "@/components/Banner";
import Blog from "@/components/Blog";
import New from "@/components/New";
import Shop from "@/components/Shop";

const HomePage = () => {
  return (
    <>
      <div className="">
        <Banner />
        <New featured={true} />
        <Shop />
        <Blog />
      </div>
    </>
  );
};

export default HomePage;
