import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/Logo_Medical_Supplies.png";
import auth_right from "../../assets/auth_right.jpg";

import { FcGoogle } from "react-icons/fc";
import { SiApple } from "react-icons/si";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý đăng nhập
    navigate("/");
  };

  return (
    <div className="flex h-screen">
      {/* Left Side - Login Form */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12">
        <img src={logo} alt="Medical Supplies Logo" className="mb-4 w-24" />
        <h2 className="text-2xl font-bold mb-4">Welcome Back to Nexus5</h2>
        <p className="text-gray-500 mb-6">
          Enter your username and password to continue.
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

          <div className="mb-4">
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

          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember me
            </label>
            <span
              onClick={() => navigate("/forgot-password")}
              className="text-blue-500 hover:underline cursor-pointer"
            >
              Forgot password?
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Sign In
          </button>

          <div className="mt-4 text-center">
            <p>Or login with</p>
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
            Don&apos;t have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => navigate("/register")}
            >
              Register
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
        <div className=" absolute inset-0  bg-opacity-50 flex items-center justify-center items-end">
          <div className=" text-center px-8 pb-8">
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

export default Login;
