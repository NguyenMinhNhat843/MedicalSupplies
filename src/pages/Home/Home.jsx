import Banner from "./Banner";
import BestProduct from "./BestProduct";
import bg_searchbar from "../../assets/bg_searchbar.webp";

const Home = () => {
  return (
    <div className="pb-8 min-h-screen bg-gradient-to-t from-cyan-100 via-white to-blue-50">
      <div className="pt-8">
        {/* Banner */}
        <div
          className=""
          style={{
            backgroundImage: `url(${bg_searchbar})`,
          }}
        >
          <div className="container mx-auto py-6">
            <Banner />
          </div>
        </div>

        {/* Sản phẩm bán chạy */}
        <div className="container mx-auto pt-8">
          <BestProduct />
        </div>
      </div>
    </div>
  );
};

export default Home;
