import { Link } from "react-router-dom";

// image
import visa from "../assets/pay_method/visa.svg";
import momo from "../assets/pay_method/momo.svg";
import zalopay from "../assets/pay_method/zalopay.svg";
import facebook from "../assets/relative/facebook_logo.svg";
import zalo from "../assets/relative/logo_Zalo.svg";

const Footer = () => {
  return (
    <div>
      {/* Xem danh sách cửa hàng trên toàn quốc */}
      <div className="bg-blue-600">
        <div className="container mx-auto flex justify-between items-center py-4">
          <p className="text-white text-xl">Chi nhánh Nexus5 trên toàn quốc </p>
          <Link
            to="#"
            type="text"
            className="py-2 px-4 rounded-full bg-white text-blue-600"
          >
            Xem danh sách cửa hàng
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="bg-slate-100 py-4" style={{ color: "#333" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            {/* col thông tin liên hệ */}
            <div>
              {/* tổng đài */}
              <p className="font-bold">
                Tổng đài:{" "}
                <Link to="#" className="font-normal">
                  (+84) 123456789
                </Link>{" "}
              </p>
              {/* email */}
              <p className="font-bold">
                Email:{" "}
                <Link to="#" className="font-normal">
                  abc@gmail.com
                </Link>{" "}
              </p>
              {/* Hỗ trợ thanh toán */}
              <div>
                <p className="font-bold pt-2">Hỗ trợ thanh toán</p>
                <div>
                  <div className="border-2 border-slate-300 rounded-md p-1 inline-block me-2">
                    <img src={visa} alt="visa" className="w-8" />
                  </div>
                  <div className="border-2 border-slate-300 rounded-md p-1 inline-block me-2">
                    <img src={momo} alt="visa" className="w-8" />
                  </div>
                  <div className="border-2 border-slate-300 rounded-md p-1 inline-block">
                    <img src={zalopay} alt="visa" className="w-8" />
                  </div>
                </div>
              </div>
              {/* Kết nối với chúng tôi */}
              <div>
                <p className="font-bold pt-2">Kết nối với chúng tôi</p>
                <div>
                  <Link to="#" className=" p-1 inline-block me-2">
                    <img src={facebook} alt="visa" className="w-8" />
                  </Link>
                  <Link to="#" className=" rounded-md p-1 inline-block me-2">
                    <img src={zalo} alt="visa" className="w-8" />
                  </Link>
                </div>
              </div>
            </div>

            {/* col về chúng tôi */}
            <div>
              <p className="font-bold">Về chúng tôi</p>
              <ul>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Giới thiệu
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Hệ thống cửa hàng
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Giấy phép kinh doanh
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Chính sách hoạt động
                  </Link>
                </li>
              </ul>
            </div>

            {/* col tìm hiểu thêm */}
            <div>
              <p className="font-bold">Tìm hiểu thêm</p>
              <ul>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Chính sách bảo hành
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Chính sách đổi trả hàng
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Chính sách giao hàng
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Chính sách bảo mật thông tin
                  </Link>
                </li>
              </ul>
            </div>

            {/* col danh mục */}
            <div>
              <p className="font-bold">Danh mục</p>
              <ul>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Thiết bị y tế
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Dụng cụ y tế tiêu hao
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Dụng cụ phẫu thuật
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="#" className="hover:text-blue-600 hover:underline">
                    Vật tư phòng chống dịch
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
