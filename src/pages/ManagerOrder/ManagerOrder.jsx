import { useEffect, useState } from "react";
import orderApi from "../../api/orderApi";
import { set } from "lodash";

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
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await orderApi.getOrderByToken();
        setOrders(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Có lỗi khi lấy đơn hàng:", error);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin h-10 w-10 text-blue-500"
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
            d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
          ></path>
        </svg>
      </div>
    );
  }

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
      {loading && (
        <div className="flex flex-col items-center justify-center py-16">
          <>
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
              Hãy thêm sản phẩm vào giỏ hàng và tạo đơn hàng của bạn ngay hôm
              nay!
            </p>

            {/* Button */}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg cursor-pointer">
              Mua ngay
            </button>
          </>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col items-center justify-center py-16">
          {orders.map((order) => {
            return (
              <div
                key={order.id}
                className="w-full max-w-3xl border rounded-lg shadow p-6 mb-6 bg-white"
              >
                <h2 className="text-2xl font-bold mb-2">
                  Đơn hàng #{order.id}
                </h2>
                <p>
                  <strong>Ngày đặt hàng:</strong>{" "}
                  {new Date(order.orderDate).toLocaleString()}
                </p>
                <p>
                  <strong>Trạng thái:</strong>{" "}
                  {order.status === "PENDING" ? "Chờ giao hàng" : order.status}
                </p>
                <p>
                  <strong>Tổng tiền:</strong> {order.totalAmount.toFixed(2)} vnd
                </p>
                <p>
                  <strong>Thanh toán:</strong>{" "}
                  {order.paymentStatus === "UNPAID"
                    ? "Thanh toán khi nhận hàng"
                    : order.paymentStatus}
                </p>

                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Sản phẩm:</h3>
                  <table className="w-full table-auto text-sm border">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border px-2 py-1">STT</th>
                        <th className="border px-2 py-1">Mã sản phẩm</th>
                        <th className="border px-2 py-1">Số lượng</th>
                        <th className="border px-2 py-1">Giá</th>
                        <th className="border px-2 py-1">Tổng</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order.orderItems.map((item, index) => (
                        <tr key={item.id}>
                          <td className="border px-2 py-1 text-center">
                            {index + 1}
                          </td>
                          <td className="border px-2 py-1 text-center">
                            #{item.productId}
                          </td>
                          <td className="border px-2 py-1 text-center">
                            {item.quantity}
                          </td>
                          <td className="border px-2 py-1 text-center">
                            {Number(
                              item.priceAtTimeOfPurchase.toFixed(2)
                            ).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </td>
                          <td className="border px-2 py-1 text-center">
                            $
                            {(
                              item.quantity * item.priceAtTimeOfPurchase
                            ).toFixed(2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* <div className="mt-4 text-sm text-gray-600">
                  <p>Mã khách hàng: #{order.customerId}</p>
                  <p>
                    Địa chỉ giao hàng:{" "}
                    {order.shippingAddress || "Chưa cập nhật"}
                  </p>
                  <p>Mã tracking: {order.trackingNumber || "Chưa có"}</p>
                  <p>
                    Phương thức thanh toán: {order.paymentMethod || "Chưa chọn"}
                  </p>
                  <p>Mã giảm giá: {order.voucherCode || "Không áp dụng"}</p>
                </div> */}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
