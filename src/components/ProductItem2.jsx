import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import formatMoney from "../untils/formatMoney";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import cartApi from "../api/cartApi";
import { useRef } from "react";
import { debounce } from "lodash";

const ProductItem2 = ({ product }) => {
  console.log("ProductItem2", product);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Tạo debounce riêng biệt cho tăng và giảm
  const debouncedIncrease = useRef(
    debounce(async (id, quantity) => {
      try {
        await cartApi.increaseQuantity(id, quantity);
      } catch (error) {
        console.error("Lỗi cập nhật tăng số lượng:", error);
      }
    }, 500)
  ).current;

  const debouncedDecrease = useRef(
    debounce(async (id, quantity) => {
      try {
        await cartApi.decreaseQuantity(id, quantity);
      } catch (error) {
        console.error("Lỗi cập nhật giảm số lượng:", error);
      }
    }, 500)
  ).current;

  const handleIncrease = () => {
    const newQuantity = product.quantity + 1;
    dispatch(increaseQuantity(product.id)); // cập nhật redux
    debouncedIncrease(product.id, newQuantity); // gọi API sau 500ms
  };

  const handleDecrease = () => {
    if (product.quantity > 1) {
      const newQuantity = product.quantity - 1;
      dispatch(decreaseQuantity(product.id));
      debouncedDecrease(product.id, newQuantity);
    }
  };

  const handleClickTrash = async () => {
    try {
      await cartApi.removeCartItem(product.id);
      dispatch(removeFromCart(product.id));
    } catch (error) {
      console.error("Lỗi xóa sản phẩm:", error);
    }
  };

  const handleSaveProductSelected = () => {
    navigate("/product-detail/" + product.id);
  };

  return (
    <tr className="cursor-pointer hover:bg-slate-100">
      <td className="px-4 py-2" onClick={handleSaveProductSelected}>
        <img
          src={product.product.image || "default.jpg"}
          alt={product.product.name}
          className="h-16 w-16 object-cover"
        />
      </td>
      <td className="px-4 py-2">{product.product.name}</td>
      <td className="px-4 py-2">{formatMoney(product.product.price || 0)} đ</td>
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
      <td className="px-4 py-2" style={{ width: "150px" }}>
        {formatMoney(product.product.price * product.quantity || 0)} đ
      </td>
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
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem2;
