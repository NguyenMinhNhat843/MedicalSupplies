import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import PropTypes from "prop-types";

const ButtonAddToCart = ({ count, product }) => {
  const dispatch = useDispatch();
  const new_p = {
    ...product,
    quantity: count,
    total: count * product.price,
  };

  const handleAddToCart = () => {
    dispatch(addToCart(new_p));

    // cuộn lên đầu trang
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="pt-4 mt-auto flex items-center justify-between">
      {/* <button
        type="text"
        className="py-4 me-2 w-full rounded-full bg-blue-600 text-white font-semibold cursor-pointer active:opacity-80"
      >
        Chọn mua
      </button> */}
      <button
        onClick={() => handleAddToCart()}
        type="text"
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
