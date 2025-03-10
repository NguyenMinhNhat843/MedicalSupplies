import { FaArrowLeft } from "react-icons/fa";
import auth_right from "../../assets/auth_right.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdCheckCircle } from "react-icons/md";

const CreateNewPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [submitted, setSubmitted] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword === repeatPassword) {
      console.log("Mật khẩu mới đã được gửi:", newPassword);
      setSubmitted(true);
    }
  };
  return (
    <div className="flex h-screen">
      {submitted ? (
        <div className="w-1/2 flex flex-col justify-center items-center px-12 relative text-center">
          <MdCheckCircle className="text-orange-500 text-6xl mb-4" />
          <h2 className="text-2xl font-bold mb-4">
            Your password has been successfully reset!
          </h2>
          <p className="text-gray-500 mb-6">
            You can now log in with your new password. If you encounter any
            issues, please contact support
          </p>
          <button
            onClick={() => navigate("/login")}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
          >
            Back to Login
          </button>
        </div>
      ) : (
        <div className="w-1/2 flex flex-col items-center justify-center px-12 relative">
          <div className="absolute top-8 left-8">
            <button
              onClick={() => navigate("/login")}
              className="text-black hover:text-gray-700"
            >
              <FaArrowLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="width-full max-w-md">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black mb-4">
                Create a New Password
              </h2>
              <p className="text-gray-500 text-center max-w-md mb-6">
                Enter your new password below to complete the reset process.
                Ensure it&apos;s strong and secure
              </p>
            </div>

            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  className="border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2">
                  Repeat new Password
                </label>
                <input
                  type="password"
                  className="border px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
      <div className="w-1/2 relative">
        <img
          src={auth_right}
          alt="Dashboard Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex items-end">
          <div className="text-center px-8 pb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              Transform Data into Cool Insights
            </h2>
            <p className="text-gray-900 max-w-md">
              Make informed decisions with Cusana&apos;s powerful analytics
              tools. Harness the power of data to drive your business forward
              with Cusana Analytics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateNewPassword;
