import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import auth_right from "../../assets/auth_right.jpg";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic gửi email đặt lại mật khẩu (có thể thêm API call ở đây)
    console.log("Email submitted:", email);
    // Sau khi xử lý, chuyển hướng về trang đăng nhập
    navigate("/check-email");
  };

  return (
    <div className="flex h-screen">
      {/* Bên trái - Form Forgot Password */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12 relative">
        {/* Nút quay lại */}
        <div className="absolute top-8 left-8">
          <button
            onClick={() => navigate("/login")}
            className="text-black hover:text-gray-700"
          >
            <FaArrowLeft className="w-5 h-5" />
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
        <p className="text-gray-500 mb-6 text-center max-w-md">
          No worries! Enter your email address below, and we&apos;ll send you a link
          to reset your password.
        </p>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            SUBMIT
          </button>
        </form>

        {/* Footer với các link pháp lý */}
        <div className="absolute bottom-8 text-center text-gray-500">
          <a href="#privacy" className="text-blue-500 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#terms" className="text-blue-500 hover:underline">
            Term & Condition
          </a>
        </div>
      </div>

      {/* Bên phải - Hình ảnh quảng bá */}
      <div className="w-1/2 relative bg-gray-900 text-white">
        <img
          src={auth_right}
          alt="Dashboard Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center items-end">
          <div className="text-center px-8 pb-8">
            <h2 className="text-3xl font-bold mb-4 text-black">
              Transform Data into Cool Insights
            </h2>
            <p className="text-gray-900 max-w-md">
              Make informed decisions with our powerful analytics tools. Harness
              the power of data to drive your business forward.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;