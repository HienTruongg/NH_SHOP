import { Outlet } from "react-router-dom";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";

const Admin = () => {
  return (
    <div className="bg-[#10A37F] grid grid-cols-[20%,80%] relative ">
      <div className="">
        <Aside />
      </div>
      <main className="">
        <Header />
        <div className="">
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default Admin;
