import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import bg_header from "../assets/bg_header.webp";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center px-12 py-4"
      style={{ backgroundImage: `url(${bg_header})` }}
    >
      {/* logo */}
      <div className="w-20 h-full">
        <img src={logo} alt="logo" />
      </div>
      {/* search bar */}
      <div className="bg-white rounded-full flex justify-between items-center w-1/2 pe-4">
        <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          className="px-4 py-4 outline-none rounded-full w-full"
        />
        <div>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-2xl cursor-pointer"
          />
        </div>
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        {/* avatar */}
        <div className="flex items-center text-white text-md pe-4">
          <div>
            <FontAwesomeIcon icon={faUser} className="pe-4" />
          </div>
          <p className="font-normal">Đăng nhập</p>
        </div>
        {/* giỏ hàng */}
        <div className="flex items-center text-white text-md pe-4 bg-red-500 rounded-full py-2 px-4 cursor-pointer">
          <div>
            <FontAwesomeIcon icon={faCartShopping} className="pe-4" />
          </div>
          <p className="font-normal">Giỏ hàng</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
