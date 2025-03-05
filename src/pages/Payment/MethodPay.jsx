import { useState } from "react";

const MethodPay = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const handleChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div className="pt-6">
      <div className="flex items-center pb-2">
        <input
          type="radio"
          name="paymentMethod"
          value="momo"
          checked={selectedMethod === "momo"}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <span className="ps-4">Thanh toán với Momo</span>
      </div>

      <div className="flex items-center pb-2">
        <input
          type="radio"
          name="paymentMethod"
          value="zalopay"
          checked={selectedMethod === "zalopay"}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <span className="ps-4">Thanh toán với Zalo Pay</span>
      </div>

      <div className="flex items-center pb-2">
        <input
          type="radio"
          name="paymentMethod"
          value="bank"
          checked={selectedMethod === "bank"}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <span className="ps-4">Thanh toán bằng chuyển khoản ngân hàng</span>
      </div>
    </div>
  );
};

export default MethodPay;
