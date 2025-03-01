import Banner from "./Banner";
import BestProduct from "./BestProduct";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto pt-8">
        {/* Banner */}
        <div className="">
          <Banner />
        </div>

        {/* Sản phẩm bán chạy */}
        <div className="pt-8">
          <BestProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
