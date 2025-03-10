import { FaEnvelope } from "react-icons/fa"; // Biểu tượng phong bì
import auth_right from "../../assets/auth_right.jpg";

const CheckEmail = () => {
  const handleOpenEmail = () => {
    // Logic mở ứng dụng email hoặc redirect
    console.log("Open email clicked");
  };

  const handleResend = () => {
    // Logic gửi lại email
    console.log("Resend email");
  };

  return (
    <div className="flex h-screen">
      {/* Bên trái - Màn hình Check Your Email */}
      <div className="w-1/2 flex flex-col justify-center items-center bg-white px-12 relative">
        <FaEnvelope className="text-orange-500 text-6xl mb-4" />
        <h2 className="text-2xl font-bold mb-4 text-black">CHECK YOUR EMAIL</h2>
        <p className="text-gray-500 mb-6 text-center max-w-md">
          We sent a password reset link to your email. Please check your inbox.
        </p>
        <button
          onClick={handleOpenEmail}
          className="w-full max-w-md bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          OPEN EMAIL
        </button>
        <p className="mt-4 text-gray-500">
          Didn&apos;t receive the email?{" "}
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={handleResend}
          >
            Resend
          </span>
        </p>
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

      {/* Bên phải - Dashboard Preview */}
      <div className="w-1/2 bg-gray-900 text-white relative">
        <img
          src={auth_right}
          alt="Dashboard Preview"
          className="absolute inset-0 w-full h-full object-cover"
        />
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

export default CheckEmail;
