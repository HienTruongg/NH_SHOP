const Header = () => {
  return (
    <>
      <header className="">
        <div className="pt-2 relative mx-auto text-gray-600 flex justify-end items-center mt-[17px]">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            className="absolute right-24 top-[-28px] mt-5 mr-4"
          ></button>
          <div className="px-3">
            <i
              className="fa-solid fa-user fa-lg"
              style={{ color: "#ffffff" }}
            />
          </div>
          <div className="px-3">
            <i
              className="fa-solid fa-bell fa-lg"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
