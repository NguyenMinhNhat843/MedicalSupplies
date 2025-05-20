import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/Logo.jpg";
import auth_right from "../../assets/auth_right.jpg";

import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";

//redux
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";

import authApi from "../../api/authApi";

const Login = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Xử lý đăng nhập
    try {
      const response = await authApi.login({
        username: email,
        password: password,
      });

      if (response.status === 200) {
        dispatch(login(response.data));
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
    }
  };

  return (
    <div className="flex">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12 py-6">
        <img src={logo} alt="Medical Supplies Logo" className="mb-4 w-24" />
        <h2 className="text-2xl font-bold mb-4">
          Chào mừng bạn đến với Nexus5
        </h2>
        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Nhớ mật khẩu
            </label>
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Quên mật khẩu?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition cursor-pointer"
          >
            Đăng nhập
          </button>

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

          <p className="mt-4 text-center">
            Bạn chưa có tài khoản?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Đăng ký ngay
            </span>
          </p>
        </form>
      </div>

      {/* Right Side - Dashboard Image */}
      <div className="w-1/2 relative bg-gray-900">
        {/* Background Image */}
        <img
          src={auth_right}
          alt="Dashboard Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay Content */}
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
      {/* end:  Right Side - Dashboard Image*/}
    </div>
  );
};

export default Login;
