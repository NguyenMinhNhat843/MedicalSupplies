import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const UserMenuSideBar = () => {
  const location = useLocation();

  // Định nghĩa các tab
  const menuItems = [
    { label: "Thông tin cá nhân", icon: faUser, path: "/account/info-user" },
    { label: "Đơn hàng của tôi", icon: faUser, path: "/account/order-history" },
    { label: "Quản lý sổ địa chỉ", icon: faUser, path: "/account/address" },
    { label: "Đổi mật khẩu", icon: faUser, path: "/account/change-password" },
    { label: "Đăng xuất", icon: faUser, path: "/" },
  ];

  return (
    <div className="" style={{ height: "fit-content" }}>
      {/* Thông tin user */}
      <div className="flex flex-col items-center">
        <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center mb-4">
          <FontAwesomeIcon icon={faUser} className="text-white text-3xl" />
        </div>
        <h2 className="font-semibold text-lg">Nguyễn Minh Nhật</h2>
        <p className="text-gray-600 mt-1">0123456789</p>
      </div>

      {/* Menu tab */}
      <div className="mt-8 space-y-2 w-full">
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`flex items-center rounded-lg px-4 py-3 cursor-pointer transition ${
              location.pathname === item.path
                ? "bg-gray-300"
                : "hover:bg-gray-100"
            }`}
          >
            <FontAwesomeIcon icon={item.icon} className="mr-3" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default UserMenuSideBar;
