const Blog = () => {
  return (
    <>
      <div className="grid justify-items-center">
        <div className="flex w-[1250px] mt-10">
          <p className="text-[40px] font-medium">Blog</p>
        </div>
        <div className="w-[1250px] h-[1px] bg-black"></div>
        <div className="w-[1250px] grid justify-start">
          <div className="flex mr-10 my-10">
            <img src="./src/assets/image/Rectangle 67.png" alt="" />
            <div className="flex flex-col h-[250px] justify-between ">
              <p className="text-xl font-semibold mt-20 ml-8">
                THE ULTIMATE SOFA BUYING GUIDE
              </p>
              <div className="w-[533px] h-[1px] bg-black ml-8"></div>
            </div>
          </div>
          <div className="flex mr-10 my-10">
            <img src="./src/assets/image/Rectangle 67 (1).png" alt="" />
            <div className="flex flex-col h-[250px] justify-between ">
              <p className="text-xl font-semibold mt-20 ml-8">
                A BEDROOM MUST HAVE SOME THING LIKE THIS
              </p>
              <p className="ml-8 text-base font-medium text-[#898989]">
                Your level of comfort when geting into and out of bed can be
                greatly influenced by the bed frame you choose. It may
                significantly affect how want your bedroom to feet and look
              </p>
              <div className="w-[533px] h-[1px] bg-black ml-8"></div>
            </div>
          </div>
          <div className="flex mr-10 my-10">
            <img src="./src/assets/image/Rectangle 67 (2).png" alt="" />
            <div className="flex flex-col h-[250px] justify-between ">
              <p className="text-xl font-semibold mt-20 ml-8">
                THE ULTIMATE SOFA BUYING GUIDE
              </p>
              <p className="ml-8 text-base font-medium text-[#898989]">
                People do a lot of research to make sure they purchase the ideal
                televisoin. And like the rest of us, you want to keep that
                gorgeous flat srceen in your living or bedroom on a table or
                stand
              </p>
              <div className="w-[533px] h-[1px] bg-black ml-8"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
