import { Link } from "react-router-dom";

const MenuUser = () => {
  return (
    <div className="w-64 p-4 bg-white shadow-lg rounded-xl">
      <ul className="space-y-3">
        <li>
          <Link
            to="/profile"
            className="block p-2 rounded-lg hover:bg-gray-100 transition"
          >
            Thông tin cá nhân
          </Link>
        </li>
        <li>
          <Link
            to="/my-orders"
            className="block p-2 rounded-lg hover:bg-gray-100 transition"
          >
            Đơn hàng của tôi
          </Link>
        </li>
        <li>
          <Link
            to="/address-book"
            className="block p-2 rounded-lg hover:bg-gray-100 transition"
          >
            Quản lý sổ địa chỉ
          </Link>
        </li>
        <li>
          <Link
            to="/change-password"
            className="block p-2 rounded-lg hover:bg-gray-100 transition"
          >
            Đổi mật khẩu
          </Link>
        </li>
        <li>
          <button
            onClick={() => {
              // Xử lý logout ở đây, ví dụ:
              console.log("Đăng xuất");
              // localStorage.removeItem("user"); // Nếu dùng localStorage
              // window.location.href = "/login"; // Redirect về trang login
            }}
            className="w-full text-left p-2 rounded-lg hover:bg-gray-100 transition text-red-500 cursor-pointer"
          >
            Đăng xuất
          </button>
        </li>
      </ul>
    </div>
  );
};

export default MenuUser;
