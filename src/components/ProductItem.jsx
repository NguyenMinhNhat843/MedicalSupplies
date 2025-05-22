import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleDollarToSlot,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
//utils
import formatMoney from "../untils/formatMoney";

// navigation
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  // console.log("Produt: ", product);
  const navigate = useNavigate();

  const handleSaveProductSelected = () => {
    navigate("/product-detail/" + product.id);
  };

  const { image, name, price, unit, likes, sales, manufacturingCountry } =
    product;

  return (
    <div
      className="bg-white rounded-lg p-4 border-2 border-gray-200 cursor-pointer flex flex-col justify-between 
             transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-1"
      onClick={handleSaveProductSelected}
    >
      <div>
        <div className="relative">
          <img src={image} alt="image product" className="h-50 mx-auto" />

          {/* Nút like và cart */}
          <div className="absolute top-2 right-2 flex gap-2">
            <button
              className="py-2 px-3 cursor-pointer bg-gray-50 shadow-2xs rounded-full hover:bg-red-100 text-red-600 transition"
              onClick={(e) => {
                e.stopPropagation(); // ngăn click lan xuống ảnh
                console.log("Liked product:", product.id);
              }}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button
              className="py-2 px-3 cursor-pointer bg-gray-50 rounded-full shadow hover:bg-blue-100 text-blue-600 transition"
              onClick={(e) => {
                e.stopPropagation(); // ngăn click lan xuống ảnh
                console.log("Added to cart:", product.id);
              }}
            >
              🛒
            </button>
          </div>
        </div>
        {/* Giới hạn 2 dòng cho tên sản phẩm */}
        <p className="font-bold text-lg pt-4 line-clamp-2 min-h-[4.5rem]">
          {name}
        </p>
        <p className="text-blue-600 font-bold pt-2">
          {formatMoney(price)} đ/{unit ? unit : "cái"}
        </p>
        {/* tag */}
        <div className="flex flex-wrap gap-2 pt-3">
          {/* Tag lượt thích */}
          <span className="inline-flex items-center gap-1 bg-red-100 text-red-600 text-sm px-3 py-1 rounded-full font-medium">
            <FontAwesomeIcon icon={faHeart} />
            {likes ?? 100}
          </span>

          {/* Tag đã bán */}
          <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-700 text-sm px-3 py-1 rounded-full font-medium">
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
            {sales ?? 1000} đã bán
          </span>

          {/* Tag xuất xứ */}
          <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full font-medium">
            🏷️ {manufacturingCountry ?? "Việt Nam"}
          </span>
        </div>
      </div>

      {/* button xem chi tiết */}
      <div className="pt-2">
        <button
          type="button"
          className="py-2 px-4 rounded-lg bg-blue-600 w-full text-white cursor-pointer"
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    unit: PropTypes.string.isRequired,
    brand: PropTypes.string.isRequired,
    quantity_per_box: PropTypes.number.isRequired,
    usage: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    sell: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
