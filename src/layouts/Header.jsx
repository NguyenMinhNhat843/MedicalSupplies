import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartShopping,
  faBell,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const carts = useSelector((state) => state.cart.cartItems);
  // test
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="flex justify-between items-center px-12 relative bg-white shadow-lg">
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
      {/*  */}
      <div className="flex justify-between items-center cursor-pointer">
        {user ? (
          <>
            <div className="flex justify-center items-center h-8 w-8 me-4">
              <FontAwesomeIcon
                icon={faCartShopping}
                className="bg-slate-100 p-4 rounded-full h-full w-full"
              />
            </div>
            <div className="mx-4 flex justify-center items-center h-8 w-8">
              <FontAwesomeIcon
                icon={faBell}
                className="bg-slate-100 p-4 rounded-full h-full w-full"
              />
            </div>
            <div className="flex justify-between items-center cursor-pointer">
              <div className="border border-slate-200 rounded-full flex items-center justify-center shadow-2xl">
                <img
                  src="/img_aboutUs.jpg"
                  alt="avatar"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <FontAwesomeIcon icon={faAngleDown} className="ps-2" />
            </div>
          </>
        ) : (
          <>
            <Link
              to={"/cart"}
              className=" flex items-center text-white text-md pe-4 bg-green-500 rounded-lg py-2 px-4 cursor-pointer me-4"
            >
              <div className="relative">
                <FontAwesomeIcon icon={faCartShopping} className="pe-4" />
                {carts.length > 0 && (
                  <div
                    className="absolute bg-red-600 rounded-full flex justify-center items-center bottom-3 right-1"
                    style={{ width: "20px", height: "20px" }}
                  >
                    <p className=" ">{carts.length}</p>
                  </div>
                )}
              </div>
              <p className="font-normal">Giỏ hàng</p>
            </Link>
            <div className="flex items-center text-md pe-4 text-white bg-green-500 rounded-lg py-2 px-4 cursor-pointer">
              <div>
                <FontAwesomeIcon icon={faUser} className="pe-4" />
              </div>
              <Link to={"/login"} className="font-normal">
                Đăng nhập
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
