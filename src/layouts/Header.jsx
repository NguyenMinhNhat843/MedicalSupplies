import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import bg_header from "../assets/bg_header.jpg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div
      className="flex justify-between items-center px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg_header})` }}
    >
      {/* logo */}
      <Link to="/" className="w-25 h-full">
        <img src={logo} alt="logo" />
      </Link>
      {/* search bar */}
      <div className="bg-white shadow-2xl rounded-full flex justify-between items-center w-1/2 pe-4">
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
        <div className="flex items-center text-md pe-4 text-white bg-green-500 rounded-full py-2 px-4 cursor-pointer me-4">
          <div>
            <FontAwesomeIcon icon={faUser} className="pe-4" />
          </div>
          <p className="font-normal">Đăng nhập</p>
        </div>
        {/* giỏ hàng */}
        <div className="flex items-center text-white text-md pe-4 bg-green-500 rounded-full py-2 px-4 cursor-pointer">
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
