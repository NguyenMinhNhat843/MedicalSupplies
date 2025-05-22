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
  const [email, setEmail] = useState("nhatnguyen15062019@gmail.com");
  const [password, setPassword] = useState("StrongPass#123");
  const [repeatPassword, setRepeatPassword] = useState("StrongPass#123");
  const [otp, setOtp] = useState("");
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== repeatPassword) {
      alert("Mật khẩu không khớp");
      return;
    }

    try {
      setIsSubmitting(true);
      const request = {
        username: email,
        email,
        password,
      };

      const response = await authApi.register(request);

      if (response.status === 200) {
        setShowOtpModal(true);
      }
    } catch (error) {
      alert("Có lỗi xảy ra trong quá trình đăng ký.");
      console.error("Đăng ký thất bại:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const res = await authApi.verifyOtp({ email, otp });

      if (res.status === 200) {
        alert("Xác thực OTP thành công!");
        setShowOtpModal(false);
        navigate("/login");
      }
    } catch (err) {
      alert("OTP không đúng hoặc đã hết hạn.");
    }
  };

  const handleResendOtp = async () => {
    try {
      await authApi.resendOtp(email);
      alert("OTP đã được gửi lại.");
    } catch (err) {
      alert("Không thể gửi lại OTP.");
    }
  };

  return (
    <div className="flex">
      {/* Form đăng ký */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12 py-6">
        <img src={logo} alt="Logo" className="mb-4 w-24" />

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* <div className="mb-2">
            <label className="block text-gray-700">Họ và tên đệm</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Tên</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div> */}
          <div className="mb-2">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Nhập lại mật khẩu</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg"
              value={repeatPassword}
              onChange={(e) => setRepeatPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800"
          >
            {isSubmitting ? "Đang xử lý..." : "ĐĂNG KÝ"}
          </button>

          {/* Các tùy chọn khác */}
          <div className="mt-4 text-center">
            <p>Hoặc đăng nhập với</p>
            <div className="flex justify-center mt-2">
              <button
                type="button"
                className="border px-4 py-2 rounded-lg mx-2 flex items-center"
              >
                <FcGoogle className="w-5 h-5 mr-2" /> Google
              </button>
              <button
                type="button"
                className="border px-4 py-2 rounded-lg mx-2 flex items-center"
              >
                <SiApple className="w-5 h-5 mr-2" /> Apple
              </button>
            </div>
          </div>
          <p className="mt-4 text-center">
            Bạn đã có tài khoản?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </span>
          </p>
        </form>
      </div>

      {/* Bên phải */}
      <div className="w-1/2 relative bg-gray-900 text-white">
        <img
          src={auth_right}
          alt="auth"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-opacity-50 flex justify-center items-end">
          <div className="text-center px-8 pb-8">
            <h2 className="text-3xl font-bold mb-4 text-black/80">
              Đồng hành cùng sức khỏe
            </h2>
            <p className="text-black/80">
              Cung cấp thiết bị y tế uy tín, chính hãng.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-white mt-4 text-black px-6 py-2 rounded-lg"
            >
              Tới trang chủ
            </button>
          </div>
        </div>
      </div>

      {/* Modal nhập OTP */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-96 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">
              Xác nhận Email
            </h3>
            <p className="text-sm text-gray-700 mb-4 text-center">
              Mã OTP đã được gửi tới email: <strong>{email}</strong>
            </p>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Nhập mã OTP"
              className="w-full px-4 py-2 border rounded-lg mb-4"
            />
            <button
              onClick={handleVerifyOtp}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
            >
              Xác nhận
            </button>
            <button
              onClick={handleResendOtp}
              className="w-full mt-2 text-sm text-blue-600 underline"
            >
              Gửi lại mã OTP
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
