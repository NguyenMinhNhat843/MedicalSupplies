import { useState } from "react";
import CartProduct from "../Cart/CartProduct";
import CartInfo from "../Cart/CartInfo";

// component
import InfoUser from "./InfoUser";
import MethodPay from "./MethodPay";

const Payment = () => {
  const [step, setStep] = useState(1);

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
              <CartInfo />
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
