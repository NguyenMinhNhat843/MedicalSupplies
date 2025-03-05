import Proptyes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// Utils
import formatMoney from "../untils/formatMoney";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductItem2 = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    if (product.quantity > 1) {
      dispatch(decreaseQuantity(product.id));
    }
  };

  const handleClickTrash = () => {
    dispatch(removeFromCart(product.id));
  };

  // Điều hướng đến trang chi tiết sản phẩm
  const handleSaveProductSelected = () => {
    navigate("/product-detail/" + product.id);
  };

  return (
    <tr className="cursor-pointer hover:bg-slate-100">
      {/* Hình ảnh sản phẩm */}
      <td className="px-4 py-2" onClick={handleSaveProductSelected}>
        <img
          src={product.image}
          alt={product.name}
          className="h-16 w-16 object-cover"
        />
      </td>
      {/* Tên sản phẩm */}
      <td className=" px-4 py-2">{product.name}</td>
      {/* Đơn giá */}
      <td className="px-4 py-2">{formatMoney(product.price)} đ</td>
      {/* Số lượng (có nút tăng/giảm) */}
      <td className="px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-2">
          <button
            className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
            style={{ color: "#333" }}
            onClick={handleDecrease}
          >
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <span className="w-8 text-center">{product.quantity}</span>
          <button
            className="px-2 py-1 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
            style={{ color: "#333" }}
            onClick={handleIncrease}
          >
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </td>
      {/* Tổng tiền */}
      <td className="px-4 py-2" style={{ width: "150px" }}>
        {formatMoney(product.price * product.quantity)} đ
      </td>
      {/* Xóa sản phẩm */}
      <td
        className="px-4 py-2 text-center cursor-pointer text-red-500 hover:text-red-700"
        onClick={handleClickTrash}
      >
        <FontAwesomeIcon icon={faTrash} />
      </td>
    </tr>
  );
};

ProductItem2.propTypes = {
  product: Proptyes.shape({
    id: Proptyes.string.isRequired,
    image: Proptyes.string.isRequired,
    name: Proptyes.string.isRequired,
    price: Proptyes.number.isRequired,
    quantity: Proptyes.number.isRequired,
  }).isRequired,
};

export default ProductItem2;
