import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//untils
import formatMoney from "../../untils/formatMoney";

const CartInfo = () => {
  const navigate = useNavigate();
  const carts = useSelector((state) => state.cart.cartItems);

  const handleClickButtonPayment = () => {
    if (carts.length === 0) return;
    navigate("/payment");
  };
  return (
    <>
      <p className="font-bold text-xl">
        Tổng tiền:{" "}
        <span className="text-red-600">
          {formatMoney(
            carts.reduce((total, item) => {
              return total + item.price * item.quantity;
            }, 0)
          )}{" "}
          đ
        </span>
      </p>
      <p className="font-bold text-xl pt-4">
        Khuyến mãi: <span className="text-red-600">{formatMoney(0)} đ</span>
      </p>
      <div className="cursor-pointer">
        <button
          onClick={handleClickButtonPayment}
          className={`w-full inline-block text-center rounded-lg bg-blue-600 py-4 text-xl text-white mt-8 cursor-pointer ${
            carts.length === 0 ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
        >
          Thanh toán
        </button>
      </div>
    </>
  );
};

export default CartInfo;
