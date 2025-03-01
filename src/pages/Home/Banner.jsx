import banner1 from "../../assets/banner1.jpg";

const Banner = () => {
  return (
    <div
      className="grid grid-cols-[60%_40%] grid-rows-2 gap-2"
      style={{ height: "400px" }}
    >
      <div className="h-full row-span-2 col-span-1">
        <img src={banner1} alt="banner" className="h-full w-full rounded-2xl" />
      </div>
      <div>
        <img src={banner1} alt="banner" className="rounded-2xl h-full" />
      </div>
      <div>
        <img src={banner1} alt="banner" className="rounded-2xl h-full" />
      </div>
    </div>
  );
};

export default Banner;
