import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CartInfo = () => {
  const carts = useSelector((state) => state.cart.cartItems);

  return (
    <>
      <p className="font-bold text-xl">
        Tổng tiền:{" "}
        <span className="text-red-600">
          {carts.reduce((total, item) => {
            return total + item.price * item.quantity;
          }, 0)}{" "}
          đ
        </span>
      </p>
      <p className="font-bold text-xl pt-4">
        Khuyến mãi: <span className="text-red-600">0 đ</span>
      </p>
      <div className="cursor-pointer">
        <Link
          to={"/payment"}
          className="w-full inline-block text-center rounded-lg bg-blue-600 py-4 text-xl text-white mt-8 cursor-pointer"
        >
          Thanh toán
        </Link>
      </div>
    </>
  );
};

export default CartInfo;
