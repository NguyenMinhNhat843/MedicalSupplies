import { useState } from "react";
import CartProduct from "../Cart/CartProduct";
import orderApi from "../../api/orderApi";
// component
import InfoUser from "./InfoUser";
import MethodPay from "./MethodPay";
import formatMoney from "../../untils/formatMoney";
import { useSelector } from "react-redux";

const Payment = () => {
  const [step, setStep] = useState(1);
  const reduxCarts = useSelector((state) => state.cart.cartItems);
  const userInfo = useSelector((state) => state.user.userInfo);
  console.log("userInfo", userInfo);
  const handleOrder = async () => {
    try {
      const response = await orderApi.createOrder();
      if (response && response.data) {
        alert("Đặt hàng thành công!");
        // Xử lý sau khi đặt hàng thành công, ví dụ: chuyển hướng đến trang khác
      }
    } catch (error) {
      console.error("Có lỗi khi đặt hàng:", error);
    }
  };

  return (
    <div className="container mx-auto py-4">
      {/* Thanh giai đoạn */}
      <div className="flex justify-center mb-6">
        <div className="flex gap-8">
          <div
            className={`font-semibold cursor-pointer transition hover:underline ${
              step === 1 ? "text-blue-600" : "text-gray-400"
            }`}
            onClick={() => setStep(1)}
          >
            1. Thông tin nhận hàng
          </div>
          <div
            className={`font-semibold cursor-pointer transition hover:underline ${
              step === 2 ? "text-blue-600" : "text-gray-400"
            }`}
            onClick={() => setStep(2)}
          >
            2. Thanh toán & Xem sản phẩm
          </div>
        </div>
      </div>

      {step === 1 && (
        <div className="w-full flex justify-center">
          <div className="w-2/3">
            <InfoUser />
            <div className="flex justify-end pt-4">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setStep(2)}
              >
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex justify-between">
          <div className="w-2/5 grow pe-16">
            {/* Chọn phương thức thanh toán */}
            <MethodPay />
          </div>

          <div className="w-3/5">
            <p className="font-bold text-lg pb-4">Danh sách sản phẩm</p>
            <div>
              <CartProduct />
            </div>
            <div className="pt-8">
              <p className="font-bold text-xl">
                Tổng tiền:{" "}
                <span className="text-red-600">
                  {formatMoney(
                    reduxCarts.reduce((total, item) => {
                      return total + item.product.price * item.quantity;
                    }, 0)
                  )}{" "}
                  đ
                </span>
              </p>
              <p className="font-bold text-xl pt-4">
                Khuyến mãi:{" "}
                <span className="text-red-600">{formatMoney(0)} đ</span>
              </p>
              <div className="cursor-pointer">
                <button
                  onClick={handleOrder}
                  className={`w-full inline-block text-center rounded-lg bg-blue-600 py-4 text-xl text-white mt-8 cursor-pointer ${
                    reduxCarts.length === 0
                      ? "bg-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                >
                  Thanh toán
                </button>
              </div>
            </div>
            {/* Nút quay lại */}
            <div className="pt-4 flex justify-end">
              <button
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                onClick={() => setStep(1)}
              >
                Quay lại bước 1
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
