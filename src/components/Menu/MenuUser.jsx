import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/slices/authSlice";

const MenuUser = () => {
  const dispatch = useDispatch();
  const handleLogout = async () => {
    dispatch(logout());
  };

  return (
    <div className="w-64 p-4 bg-white shadow-lg rounded-xl">
      <ul className="space-y-3">
        <li>
          <Link
            to="/account/info-user"
            className="block p-2 rounded-lg hover:bg-gray-100 transition"
          >
            Thông tin cá nhân
          </Link>
        </li>
        <li>
          <Link
            to="/account/order-history"
            className="block p-2 rounded-lg hover:bg-gray-100 transition"
          >
            Đơn hàng của tôi
          </Link>
        </li>
        <li>
          <Link
            to="/account/change-password"
            className="block p-2 rounded-lg hover:bg-gray-100 transition"
          >
            Đổi mật khẩu
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
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
