import Logo from "../assets/image/Meubel House_Logos-05.png";
import SkinClinic from "../assets/image/SkinClinic.png";
const Footer = () => {
  return (
    <>
      <div className=" h-[300px] bg-[#FAF3EA] grid grid-cols-4 justify-items-center items-center">
        <div className="flex">
          <img src="./src/assets/image/Group.svg" className="h-[60px]" alt="" />
          <div className="">
            <p className="text-2xl font-semibold">High Quality</p>
            <p className="text-xl font-medium text-[#898989]">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex">
          <img src="./src/assets/image/Group.png" className="h-[60px]" alt="" />
          <div className="">
            <p className="text-2xl font-semibold">Warranty Protection</p>
            <p className="text-xl font-medium text-[#898989]">Over 2 years</p>
          </div>
        </div>
        <div className="flex">
          <img
            src="./src/assets/image/shipping.svg"
            className="h-[60px]"
            alt=""
          />
          <div className="">
            <p className="text-2xl font-semibold">Free Shipping</p>
            <p className="text-xl font-medium text-[#898989]">
              Order over 150 $
            </p>
          </div>
        </div>
        <div className="flex">
          <img
            src="./src/assets/image/customer-support.svg"
            className="h-[60px]"
            alt=""
          />
          <div className="">
            <p className="text-2xl font-semibold">24 / 7 Support</p>
            <p className="text-xl font-medium text-[#898989]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="grid grid-cols-4 m-20">
          <div className="">
            <div className="flex">
              <img src={Logo} alt="" />
              <span className="mx-2 self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                <img src={SkinClinic} alt="" />
              </span>
            </div>
            <p className="mt-10">
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>
          <div className="ml-14">
            <p className="text-base font-medium text-[#9F9F9F]">Links</p>
            <ul className="mt-10">
              <li className="text-base font-medium mt-10">Home</li>
              <li className="text-base font-medium mt-10">Shop</li>
              <li className="text-base font-medium mt-10">Abount</li>
              <li className="text-base font-medium mt-10">Contact</li>
            </ul>
          </div>
          <div className="">
            <p className="text-base font-medium text-[#9F9F9F]">Help</p>
            <ul className="mt-10">
              <li className="text-base font-medium mt-10">Payment Options</li>
              <li className="text-base font-medium mt-10">Returns</li>
              <li className="text-base font-medium mt-10">Privacy Policies</li>
            </ul>
          </div>
          <div className="">
            <p className="text-base font-medium text-[#9F9F9F]">Newsletter</p>
            <p className="mt-10">Enter Your Email Address</p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-[1350px] h-[1px] bg-black"></div>
          <p className="mt-16">2023 furino. All rights reverved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
