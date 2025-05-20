import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.jpg";
import auth_right from "../../assets/auth_right.jpg";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";
import authApi from "../../api/authApi";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("Nguyễn Minh");
  const [lastName, setLastName] = useState("Nhật");
  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("123456");
  const [repeatPassword, setRepeatPassword] = useState("123456");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Xử lý logic đăng ký tại đây
    try {
      const request = {
        username: email,
        password: password,
      };

      const response = await authApi.register(request);
      console.log("Đăng ký thành công:", response);
      if (response.status === 200) {
        alert("Đăng ký thành công!");
        navigate("/login");
      }
    } catch (error) {
      alert("email đã đưuọc đăng ký. Vui lòng thử lại.");
      console.error("Đăng ký thất bại:", error);
    }
  };

  return (
    <div className="flex">
      {/* Bên trái - Form đăng ký */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12 py-6">
        <img src={logo} alt="Medical Supplies Logo" className="mb-4 w-24" />
        <h2 className="text-2xl font-bold mb-4">Create Your Nexus5 Account</h2>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* Trường Name */}
          <div className="mb-2">
            <label className="block text-gray-700">Họ và tên đệm</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Họ và tên đệm"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          {/* Trường Name */}
          <div className="mb-2">
            <label className="block text-gray-700">Tên</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Tên"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>

          {/* Trường Email */}
          <div className="mb-2">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Đại chỉ email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Trường Password */}
          <div className="mb-2">
            <label className="block text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Trường Repeat Password */}
          <div className="mb-2">
            <label className="block text-gray-700">Nhập lại mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Xác nhận mật khẩu"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>

          {/* Nút Sign Up */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            ĐĂNG KÝ
          </button>

          {/* Tùy chọn đăng nhập bằng mạng xã hội */}
          <div className="mt-4 text-center">
            <p>Hoặc đăng nhập với</p>
            <div className="flex justify-center mt-2">
              <button
                type="button"
                className="bg-white border px-4 py-2 rounded-lg mx-2 flex items-center"
              >
                <FcGoogle className="w-5 h-5 mr-2" />
                Google
              </button>
              <button
                type="button"
                className="bg-white border px-4 py-2 rounded-lg mx-2 flex items-center"
              >
                <SiApple className="w-5 h-5 mr-2" />
                Apple
              </button>
            </div>
          </div>

          {/* Link tới trang đăng nhập */}
          <p className="mt-4 text-center">
            Bạn dã có tài khoản?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </span>
          </p>
        </form>
      </div>

      {/* Bên phải - Hình ảnh quảng bá */}
      <div className="w-1/2 relative bg-gray-900 text-white">
        <img
          src={auth_right}
          alt="Dashboard Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex justify-center items-end">
          <div className="text-center px-8 pb-8">
            <h2 className="text-3xl font-bold mb-4 text-black/80">
              Đồng hành cùng sức khỏe
            </h2>
            <p className="text-black/80 max-w-md">
              Cung cấp thiết bị y tế uy tín, chính hãng.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-white mt-4 cursor-pointer text-black font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition"
            >
              Tới trang chủ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
