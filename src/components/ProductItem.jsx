import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const { image, name, price, unit, likes, sell } = product;
  return (
    <Link
      to="/product-detail"
      className="bg-white rounded-lg p-4 border-2 border-gray-200"
    >
      <div>
        <img src={image} alt="image product" className="h-50 mx-auto" />
      </div>
      <p className="font-bold text-lg pt-4">{name}</p>
      <p className="text-blue-600 font-bold pt-2">
        {price} đ/{unit}
      </p>
      {/* số lượt like + số lượng đã bán */}
      <div className="flex items-center justify-between pt-2">
        <div className="pe-4">
          <FontAwesomeIcon icon={faHeart} className="pe-2" />
          <span>{likes}</span>
        </div>
        <span>Đã bán: {sell}</span>
      </div>

      {/* button xem chi tiết */}
      <div className="pt-2">
        <button
          type="text"
          className="py-2 px-4 rounded-lg bg-blue-600 w-full text-white cursor-pointer"
        >
          Xem chi tiết
        </button>
      </div>
    </Link>
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
