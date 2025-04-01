import { FaFacebook } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-6 mt-8 border-t-4">
      <div className="grid grid-cols-4 gap-6 text-sm text-gray-700">
        {/* Cột 1: Về chúng tôi */}
        <div>
          <p className="font-bold mb-2">Về Chúng tôi</p>
          <p>Giới thiệu về nexus.com.vn</p>
          <p>Lịch làm việc</p>
          <p>Liên hệ</p>
        </div>

        {/* Cột 2: Hỗ trợ dịch vụ */}
        <div>
          <p className="font-bold mb-2">Hỗ trợ dịch vụ</p>
          <p>Hướng dẫn mua hàng</p>
          <p>Điều khoản và dịch vụ</p>
          <p>Cam kết chất lượng sản phẩm</p>
        </div>

        {/* Cột 3: Chính sách và Quy định */}
        <div>
          <p className="font-bold mb-2">Chính sách và Quy định</p>
          <p>Chính sách tiếp nhận và xử lý khiếu nại</p>
          <p>Hướng dẫn mua hàng</p>
          <p>Chính sách vận chuyển</p>
          <p>Chính sách bảo mật</p>
          <p>Chính sách đổi trả hàng</p>
        </div>

        {/* Cột 4: Kết nối với chúng tôi */}
        <div>
          <p className="font-bold mb-2">Kết nối với chúng tôi</p>
          <div className="flex space-x-4">
            <FaFacebook className="text-blue-600 w-8 h-8" />
            <SiZalo className="text-blue-500 w-8 h-8" />
          </div>
          <p className="mt-4">Quét mã QR chat ZALO</p>
          <div className="w-20 h-20 bg-gray-400 mt-2"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
