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
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("nhatnguyen15062019@gmail.com");
  const [password, setPassword] = useState("StrongPass#123");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await authApi.login({
        username: email,
        password: password,
      });

      if (response.status === 200) {
        dispatch(login(response.data));
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      }
    } catch (error) {
      console.error("Đăng nhập thất bại:", error);
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: `url(${auth_right})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* form */}
      <div className="relative bg-white rounded-xl shadow-lg w-full max-w-md p-8 z-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col items-center mb-6">
            <img src={logo} alt="Logo" className="w-20 mb-4" />
            <h2 className="text-2xl font-bold text-center">
              Chào mừng đến với Nexus5
            </h2>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
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
            <label className="block text-gray-700 mb-1">Mật khẩu</label>
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
            <label className="flex items-center text-sm">
              <input type="checkbox" className="mr-2" />
              Nhớ mật khẩu
            </label>
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-blue-500 hover:underline cursor-pointer text-sm"
            >
              Quên mật khẩu?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition flex justify-center items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <FontAwesomeIcon icon={faSpinner} spin />
                <span>Đang đăng nhập...</span>
              </>
            ) : (
              "Đăng nhập"
            )}
          </button>

          <div className="mt-4 text-center text-sm">
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

          <p className="mt-4 text-center text-sm">
            Bạn chưa có tài khoản?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Đăng ký ngay
            </span>
          </p>
          <p className="mt-4 text-center text-sm">
            Bạn không muốn tạo tài khoản?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/")}
            >
              Vào xem sản phẩm nào
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
