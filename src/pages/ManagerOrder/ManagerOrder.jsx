import { useState } from "react";

const tabs = [
  "Hoàn thành",
  "Đang xử lý",
  "Đã đóng gói",
  "Đang giao",
  "Đã hủy",
  "Chờ xử lý",
  "Chờ thanh toán",
];

export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState("Hoàn thành");

  return (
    <div className="">
      <h2 className="text-2xl font-semibold mb-4">Lịch sử đơn hàng</h2>

      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`py-2 px-4 border-b-2 whitespace-nowrap cursor-pointer ${
              activeTab === tab
                ? "border-blue-500 text-blue-500 font-semibold"
                : "border-transparent text-gray-600"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center py-16">
        {/* Image Placeholder */}
        <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 2 0 012-2h5.5l2 2H17a2 2 0 012 2v10a2 2 0 01-2 2z"
            />
          </svg>
        </div>

        {/* Message */}
        <p className="text-lg font-semibold mb-2">Không có đơn hàng nào</p>
        <p className="text-gray-500 mb-4">
          Hãy thêm sản phẩm vào giỏ hàng và tạo đơn hàng của bạn ngay hôm nay!
        </p>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer">
          Mua ngay
        </button>
      </div>
    </div>
  );
}
