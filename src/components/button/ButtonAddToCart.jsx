import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import PropTypes from "prop-types";
import cartApi from "../../api/cartApi";

const ButtonAddToCart = ({ count, product }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const new_p = {
    ...product,
    quantity: count,
    total: count * product.price,
  };

  const handleAddToCart = async () => {
    try {
      const response = await cartApi.addToCart(product.id, count);

      if (response.status === 200) {
        dispatch(addToCart(new_p));
      }
    } catch (error) {
      console.error("Có lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    }

    // Cuộn lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="pt-4 mt-auto flex items-center justify-between">
      <button
        onClick={handleAddToCart}
        type="button"
        className="py-4 ms-2 w-full rounded-full bg-blue-600 text-white font-semibold cursor-pointer active:opacity-80"
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

ButtonAddToCart.propTypes = {
  count: PropTypes.number.isRequired,
  product: PropTypes.object,
};

export default ButtonAddToCart;
