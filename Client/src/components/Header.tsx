import { useLocalStorage } from "@/hooks/useStorage";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/image/Meubel House_Logos-05.png";
import SkinClinic from "../assets/image/SkinClinic.png";
const Header = () => {
  const [user, remove] = useLocalStorage("user", {});
  const navigate = useNavigate();

  const handleLogout = () => {
    remove();
    navigate("/");
  };

  return (
    <header className="">
      <nav className="  bg-white border-gray-200   dark:bg-gray-800">
        <div className=" h-[100px] flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="https://flowbite.com" className="flex items-center">
            <img src={Logo} alt="" />
            <span className="mx-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              <img src={SkinClinic} alt="" />
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            {user ? (
              <button
                className="font-medium text-xl text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300  rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
                onClick={handleLogout}
              >
                {user?.user?.name}
              </button>
            ) : (
              <Link
                to={"/login"}
                className="font-medium text-xl text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300  rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                <img
                  src="./src/assets/image/mdi_account-alert-outline.svg"
                  alt=""
                />
              </Link>
            )}
            <a
              href="#"
              className="font-medium text-xl text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300  rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <img src="./src/assets/image/akar-icons_search.svg" alt="" />
            </a>
            <a
              href="#"
              className="font-medium text-xl text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300  rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <img src="./src/assets/image/akar-icons_heart.svg" alt="" />
            </a>
            <Link
              to="/cart"
              className="font-medium text-xl text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300  rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              <img
                src="./src/assets/image/ant-design_shopping-cart-outlined.svg"
                alt=""
              />
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/shop"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Abount
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
