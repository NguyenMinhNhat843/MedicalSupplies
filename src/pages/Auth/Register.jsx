import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo_Medical_Supplies.png";
import auth_right from "../../assets/auth_right.jpg";
import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý logic đăng ký tại đây
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      {/* Bên trái - Form đăng ký */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12">
        <img src={logo} alt="Medical Supplies Logo" className="mb-4 w-24" />
        <h2 className="text-2xl font-bold mb-4">Create Your Nexus5 Account</h2>

        <form className="w-full max-w-md" onSubmit={handleSubmit}>
          {/* Trường Name */}
          <div className="mb-2">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Trường Email */}
          <div className="mb-2">
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

          {/* Trường Password */}
          <div className="mb-2">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Trường Repeat Password */}
          <div className="mb-2">
            <label className="block text-gray-700">Repeat Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the password"
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
            SIGN UP
          </button>

          {/* Tùy chọn đăng nhập bằng mạng xã hội */}
          <div className="mt-4 text-center">
            <p>Or Sign up with</p>
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
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/login")}
            >
              Sign in
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

export default Register;