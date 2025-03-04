import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCartShopping } from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-12 bg-cover bg-center bg-no-repeat">
      {/* logo */}
      <Link to="/" className="w-25 h-full">
        <img src={logo} alt="logo" />
      </Link>
      <div className="grow ps-4">
        <Link to={"/"} className="font-semibold pe-6">
          Home
        </Link>
        <Link to={"/"} className="font-semibold">
          Về chúng tôi
        </Link>
      </div>
      <div className="flex justify-between items-center cursor-pointer">
        {/* giỏ hàng */}
        <div className="flex items-center text-white text-md pe-4 bg-green-500 rounded-lg py-2 px-4 cursor-pointer me-4">
          <div>
            <FontAwesomeIcon icon={faCartShopping} className="pe-4" />
          </div>
          <p className="font-normal">Giỏ hàng</p>
        </div>
        {/* avatar */}
        <div className="flex items-center text-md pe-4 text-white bg-green-500 rounded-lg py-2 px-4 cursor-pointer">
          <div>
            <FontAwesomeIcon icon={faUser} className="pe-4" />
          </div>
          <p className="font-normal">Đăng nhập</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
