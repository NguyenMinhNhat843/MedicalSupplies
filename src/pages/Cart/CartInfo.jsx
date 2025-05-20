import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// utils
import formatMoney from "../../untils/formatMoney";
import { useSelector } from "react-redux";

const CartInfo = () => {
  const navigate = useNavigate();
  const reduxCarts = useSelector((state) => state.cart.cartItems);
  const handleClickButtonPayment = () => {
    if (reduxCarts.length === 0) return;
    navigate("/payment");
  };

  return (
    <>
      <p className="font-bold text-xl">
        Tổng tiền:{" "}
        <span className="text-red-600">
          {formatMoney(
            reduxCarts.reduce((total, item) => {
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
            reduxCarts.length === 0 ? "bg-gray-400 cursor-not-allowed" : ""
          }`}
        >
          Thanh toán
        </button>
      </div>
    </>
  );
};

export default CartInfo;
