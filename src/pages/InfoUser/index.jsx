import { useEffect, useState } from "react";
import userApi from "../../api/userApi";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo } from "../../redux/slices/userSlice";

const provincesData = [
  {
    name: "TP. Hồ Chí Minh",
    districts: [
      {
        name: "Quận 1",
        wards: ["Phường Bến Nghé", "Phường Bến Thành", "Phường Cô Giang"],
      },
      {
        name: "Quận 3",
        wards: ["Phường Võ Thị Sáu", "Phường 7", "Phường 14"],
      },
    ],
  },
  {
    name: "Hà Nội",
    districts: [
      {
        name: "Ba Đình",
        wards: ["Phường Điện Biên", "Phường Kim Mã", "Phường Giảng Võ"],
      },
      {
        name: "Hoàn Kiếm",
        wards: ["Phường Hàng Trống", "Phường Tràng Tiền", "Phường Hàng Bạc"],
      },
    ],
  },
];

const PersonalInfoPage = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.user.userInfo);
  const [formData, setFormData] = useState({
    fullName: "Chưa có",
    dob: "",
    gender: "Nam",
    email: "none@gmail.com",
    phone: "0123456789",
    address: "",
    province: "",
    district: "",
    ward: "",
    street: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await userApi.getUserInfo();
        const userData = response.data;
        setFormData({
          fullName: userData.fullName || "Chưa có",
          phone: userData.phone || "Chưa có",
          email: userData.email || "Chưa có",
          gender: userData.gender || "Nam",
          dob: userData.dateOfBirth.slice(0, 10) || "",
          address: userData.address || "Chưa có",
        });
        dispatch(updateUserInfo(userData));
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error);
      }
    };
    fetchUserInfo();
  }, []);

  const [isEditMode, setIsEditMode] = useState(false);
  const [avatar, setAvatar] = useState("/img_aboutUs.jpg");
  const [avatarFile, setAvatarFile] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "province" && { district: "", ward: "" }),
      ...(name === "district" && { ward: "" }),
    }));
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatarFile(file);
      const previewUrl = URL.createObjectURL(file);
      setAvatar(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      fullName: formData.fullName,
      email: formData.email,
      address:
        formData.street + ", " + formData.ward + ", " + formData.district,
      phone: formData.phone,
      gender: formData.gender,
      dateOfBirth: formData.dob,
    };
    console.log("Dữ liệu đã lưu:", requestData);
    try {
      const response = await userApi.updateUserInfo(requestData);
      if (response && response.data) {
        dispatch(updateUserInfo(requestData));
        setIsEditMode(false);
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật thông tin:", error);
    }
  };

  // Lấy quận/huyện và phường/xã theo tỉnh/thành phố đã chọn
  const selectedProvince = provincesData.find(
    (p) => p.name === formData.province
  );
  const selectedDistrict = selectedProvince?.districts.find(
    (d) => d.name === formData.district
  );

  return (
    <div className="userinfo w-full">
      <div className="flex justify-end mb-4">
        <button
          type="button"
          className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded"
          onClick={() => setIsEditMode(!isEditMode)}
        >
          {isEditMode ? "Hủy" : "Chỉnh sửa"}
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <h3 className="text-lg font-semibold mb-6">Thông tin cá nhân</h3>

        {/* Avatar */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={avatar}
              alt="avatar"
              className="w-24 h-24 rounded-full object-cover cursor-pointer"
              onClick={() =>
                isEditMode && document.getElementById("avatarInput").click()
              }
            />
            <input
              id="avatarInput"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
              disabled={!isEditMode}
            />
          </div>
          <p className="text-sm text-gray-500 mt-2 text-center">
            Dung lượng file tối đa 5 MB. <br /> Định dạng: .JPEG, .PNG
          </p>
        </div>

        {/* Các trường thông tin */}
        <div className="space-y-4">
          {/* Họ và tên */}
          <Field
            label="Họ và tên"
            name="fullName"
            type="text"
            value={formData.fullName}
            isEditMode={isEditMode}
            handleChange={handleChange}
          />

          {/* Ngày sinh */}
          <Field
            label="Ngày sinh"
            name="dob"
            type="date"
            value={formData.dob}
            isEditMode={isEditMode}
            handleChange={handleChange}
          />

          {/* Giới tính */}
          <div>
            <label className="block text-gray-600 mb-1">Giới tính</label>
            {isEditMode ? (
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
            ) : (
              <p>{formData.gender}</p>
            )}
          </div>

          {/* Email */}
          <Field
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            isEditMode={isEditMode}
            handleChange={handleChange}
          />

          {/* Số điện thoại */}
          <Field
            label="Số điện thoại"
            name="phone"
            type="tel"
            value={formData.phone}
            isEditMode={isEditMode}
            handleChange={handleChange}
          />

          {/* Địa chỉ */}
          <div>
            <label className="block text-gray-600 mb-1">Địa chỉ</label>
            {isEditMode ? (
              <>
                <select
                  name="province"
                  className="w-full border rounded-lg px-3 py-2 mb-2"
                  value={formData.province}
                  onChange={handleChange}
                >
                  <option value="">Chọn tỉnh/thành phố</option>
                  {provincesData.map((province) => (
                    <option key={province.name}>{province.name}</option>
                  ))}
                </select>

                {formData.province && (
                  <select
                    name="district"
                    className="w-full border rounded-lg px-3 py-2 mb-2"
                    value={formData.district}
                    onChange={handleChange}
                  >
                    <option value="">Chọn quận/huyện</option>
                    {selectedProvince?.districts.map((d) => (
                      <option key={d.name}>{d.name}</option>
                    ))}
                  </select>
                )}

                {formData.district && (
                  <select
                    name="ward"
                    className="w-full border rounded-lg px-3 py-2 mb-2"
                    value={formData.ward}
                    onChange={handleChange}
                  >
                    <option value="">Chọn phường/xã</option>
                    {selectedDistrict?.wards.map((w) => (
                      <option key={w}>{w}</option>
                    ))}
                  </select>
                )}

                <input
                  type="text"
                  name="street"
                  placeholder="Tên đường / số nhà"
                  className="w-full border rounded-lg px-3 py-2"
                  value={formData.street}
                  onChange={handleChange}
                />
              </>
            ) : (
              <p>{formData.address}</p>
            )}
          </div>
        </div>

        {isEditMode && (
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              className="cursor-pointer bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Lưu thay đổi
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

// Component dùng chung cho các field đơn giản
const Field = ({ label, name, type, value, isEditMode, handleChange }) => (
  <div>
    <label className="block text-gray-600 mb-1">{label}</label>
    {isEditMode ? (
      <input
        type={type}
        name={name}
        className="w-full border rounded-lg px-3 py-2"
        value={value}
        onChange={handleChange}
      />
    ) : (
      <p>{value}</p>
    )}
  </div>
);

export default PersonalInfoPage;
