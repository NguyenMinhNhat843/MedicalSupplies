import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  getCartThunk,
  setCartItems,
  setTotal,
} from "../../redux/slices/cartSlice";
import PropTypes from "prop-types";
import cartApi from "../../api/cartApi";
import { useState } from "react";

const ButtonAddToCart = ({ count, product }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const new_p = {
    ...product,
    quantity: count,
    total: count * product.price,
  };

  const handleAddToCart = async () => {
    setIsLoading(true);
    try {
      const response = await cartApi.addToCart(product.id, count);
      const fetchCart = await cartApi.getCart(user.id);
      console.log("fetchCart", fetchCart);
      if (fetchCart && fetchCart.data) {
        dispatch(setTotal(fetchCart.data.items.length));
        dispatch(setCartItems(fetchCart.data.items));
      }
    } catch (error) {
      console.error("Có lỗi khi thêm sản phẩm vào giỏ hàng:", error);
    } finally {
      setIsLoading(false);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-4 mt-auto flex items-center justify-between">
      <button
        onClick={handleAddToCart}
        type="button"
        className="py-4 ms-2 w-full rounded-full bg-blue-600 text-white font-semibold cursor-pointer active:opacity-80 flex justify-center items-center"
        disabled={isLoading}
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
        ) : (
          "Thêm vào giỏ hàng"
        )}
      </button>
    </div>
  );
};

ButtonAddToCart.propTypes = {
  count: PropTypes.number.isRequired,
  product: PropTypes.object,
};

export default ButtonAddToCart;
