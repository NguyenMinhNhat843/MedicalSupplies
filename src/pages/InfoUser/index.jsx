import { useState } from "react";

const PersonalInfoPage = () => {
  // State quản lý form
  const [formData, setFormData] = useState({
    fullName: "Nguyễn Minh Nhật",
    dob: "2002-05-03",
    gender: "Nam",
    email: "abc@gmail.com",
    phone: "0123456789",
  });

  // State quản lý avatar
  const [avatar, setAvatar] = useState("/img_aboutUs.jpg"); // ảnh mặc định
  const [avatarFile, setAvatarFile] = useState(null); // file ảnh khi upload

  // Xử lý khi thay đổi input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Xử lý khi chọn ảnh
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file); // lưu file để upload khi submit
      const previewUrl = URL.createObjectURL(file);
      setAvatar(previewUrl); // xem trước hình
    }
  };

  // Xử lý khi submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Xử lý gửi dữ liệu (call API tại đây)
    console.log("Form Data:", formData);
    console.log("Avatar File:", avatarFile);

    // Có thể thêm API update thông tin + avatar tại đây
  };

  return (
    <div className="userinfo w-full">
      {/* Nội dung chính */}
      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-6">Thông tin cá nhân</h3>

        {/* Ảnh đại diện */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={avatar}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover cursor-pointer"
              onClick={() => document.getElementById("avatarInput").click()}
            />
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Dung lượng file tối đa 5 MB. <br /> Định dạng: .JPEG, .PNG
          </p>
        </div>

        {/* Các trường nhập liệu */}
        <div className="space-y-4">
          {/* Họ và tên */}
          <div>
            <label className="block text-gray-600 mb-1">Họ và tên</label>
            <input
              type="text"
              name="fullName"
              placeholder="Nhập họ và tên"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.fullName}
              onChange={handleChange}
            />
          </div>

          {/* Ngày sinh */}
          <div>
            <label className="block text-gray-600 mb-1">Ngày sinh</label>
            <input
              type="date"
              name="dob"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          {/* Giới tính */}
          <div>
            <label className="block text-gray-600 mb-1">Giới tính</label>
            <select
              name="gender"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.gender}
              onChange={handleChange}
            >
              <option>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Nhập email"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          {/* Số điện thoại */}
          <div>
            <label className="block text-gray-600 mb-1">Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              placeholder="Nhập số điện thoại"
              className="w-full border rounded-lg px-3 py-2"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Nút lưu */}
        <div className="flex justify-center mt-8">
          <button
            type="submit"
            className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Lưu thay đổi
          </button>
        </div>
      </form>
      {/* end: from thông tin */}
    </div>
  );
};

export default PersonalInfoPage;
