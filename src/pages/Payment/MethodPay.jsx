import { useState } from "react";

const MethodPay = () => {
  const [selectedMethod, setSelectedMethod] = useState("");

  const amount = 500000; // bạn có thể nhận giá trị này từ props nếu cần
  const accountName = "NEXUS";
  const bankName = "Agribank";
  const transferContent = "thanh toan";

  const handleChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <div className="pt-6">
      <p className="font-semibold text-lg pb-2">Chọn phương thức thanh toán:</p>

      {/* Trả tiền mặt */}
      <div className="flex items-center pb-2">
        <input
          type="radio"
          name="paymentMethod"
          value="cash"
          checked={selectedMethod === "cash"}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <span className="ps-4">Trả tiền mặt khi nhận hàng</span>
      </div>

      {/* Chuyển khoản ngân hàng */}
      <div className="flex items-center pb-2">
        <input
          type="radio"
          name="paymentMethod"
          value="bank"
          checked={selectedMethod === "bank"}
          onChange={handleChange}
          className="w-5 h-5"
        />
        <span className="ps-4">Chuyển khoản ngân hàng</span>
      </div>

      {/* Thông tin chuyển khoản nếu chọn ngân hàng */}
      {selectedMethod === "bank" && (
        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
          <p className="font-medium mb-2">Thông tin chuyển khoản:</p>
          <div className="mb-2">
            <img
              src="https://img.vietqr.io/image/970405-123456789-compact2.png?amount=500000&addInfo=thanh%20toan&accountName=NEXUS"
              alt="QR chuyển khoản"
              className="w-48"
            />
          </div>
          <ul className="text-sm text-gray-700">
            <li>
              <strong>Ngân hàng:</strong> {bankName}
            </li>
            <li>
              <strong>Số tài khoản:</strong> 123456789
            </li>
            <li>
              <strong>Chủ tài khoản:</strong> {accountName}
            </li>
            <li>
              <strong>Số tiền:</strong> {amount.toLocaleString()} VND
            </li>
            <li>
              <strong>Nội dung:</strong> {transferContent}
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MethodPay;
