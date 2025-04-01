import { FaUserCircle, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="bg-white text-black flex justify-between items-center p-4 shadow">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-black font-bold text-xl flex items-center">
          <span className="text-orange-500">Nexus</span>5
        </span>
      </div>

      {/* Menu */}
      <div className="flex space-x-6 text-sm">
        <div className="relative group">
          <button className="hover:text-green-600">Tải ứng dụng ▼</button>
          <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Android
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              iOS
            </a>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-green-600">Tiếng Việt ▼</button>
          <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              English
            </a>
          </div>
        </div>

        <div className="relative group">
          <button className="hover:text-green-600">Chi nhánh cửa hàng ▼</button>
          <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded hidden group-hover:block">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Hà Nội
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              TP.HCM
            </a>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          <FaUserCircle className="mr-2" /> Đăng nhập
        </button>
        <button className="flex items-center bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition">
          <FaShoppingCart className="mr-2" /> Giỏ hàng
        </button>
      </div>
    </nav>
  );
};

export default Header;
