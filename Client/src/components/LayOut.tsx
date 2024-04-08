import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const LayOut = () => {
  return (
    <>
      <div className="relative">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default LayOut;
