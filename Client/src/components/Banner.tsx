const Banner = () => {
  return (
    <>
      <div className="relative">
        <img
          className="w-[100%]"
          src="src/assets/image/Rectangle 1.png"
          alt=""
        />
        <div className="absolute top-[147px] right-[42%]">
          <div className="flex flex-col items-center justify-between w-full h-[214px] ">
            <h1 className="text-5xl font-medium">Trang Chủ</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
