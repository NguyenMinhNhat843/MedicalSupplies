import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// utils
import formatMoney from "../../untils/formatMoney";
import { useSelector } from "react-redux";

const CartInfo = () => {
  const navigate = useNavigate();
  const reduxCarts = useSelector((state) => state.cart.cartItems);
  const loading = useSelector((state) => state.cart.loading);
  const handleClickButtonPayment = () => {
    if (reduxCarts.length === 0) return;
    navigate("/payment");
  };

  if (loading) return <p>Đang tải giỏ hàng...</p>;

  return (
    <>
      <p className="font-bold text-xl">
        Tổng tiền:{" "}
        <span className="text-red-600">
          {formatMoney(
            reduxCarts.reduce((total, item) => {
              return total + item.product.price || item.price * item.quantity;
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
