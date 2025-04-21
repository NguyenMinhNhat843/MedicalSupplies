import { useState } from "react";
import PropTypes from "prop-types";

// data
import citys from "../data/citys";

const AddAddressModal = ({ isOpen, onClose, onSave }) => {
  const [form, setForm] = useState({
    name: "Nguyễn Minh Nhật",
    phone: "0123456789",
    city: "Đà Nẵng",
    district: "Quận 1",
    ward: "phường 11",
    street: "đường Nguyễn Văn Lượng",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Ngăn reload lại trang
    // console.log(form);
    onSave(form);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.3)] z-50">
      <div className="bg-white p-6 rounded-lg w-[600px]">
        <h2 className="text-lg font-semibold mb-4">Địa chỉ mới</h2>

        {/* Form nhập thông tin */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          {/* Họ và tên */}
          <div className="">
            <span className="font-bold pb-2 block">Họ và tên</span>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              placeholder="Nhập họ và tên"
              className="w-full border border-slate-200 p-2 rounded outline-none"
              required
            />
          </div>

          {/* Số điện thoại */}
          <div>
            <span className="font-bold pb-2 block">Số điện thoại</span>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              type="text"
              placeholder="Nhập số điện thoại"
              className="w-full border border-slate-200 p-2 rounded"
              required
            />
          </div>

          {/* Chọn tỉnh thành */}
          <div>
            <span className="font-bold pb-2 block">Chọn tỉnh / thành phố</span>

            {/* Select box */}
            <select
              name="city"
              value={form.city}
              onChange={handleChange}
              className="w-full border border-slate-200 p-2 rounded cursor-pointer outline-none"
            >
              <option>Chọn Tỉnh/Thành phố</option>
              {/* map dữ liệu tỉnh thành */}
              {citys.map((city, index) => (
                <option key={index} value={city.code}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          {/* Chọn quận huyện */}
          <div>
            <span className="font-bold pb-2 block">Chọn quận / huyện</span>

            <select
              name="district"
              value={form.district}
              onChange={handleChange}
              className="w-full border border-slate-200 p-2 rounded outline-none"
            >
              <option>Chọn Quận/Huyện</option>
            </select>
          </div>

          {/* Chọn phường xã */}
          <div>
            <span className="font-bold pb-2 block">Chọn phường / xã</span>
            <select
              name="ward"
              value={form.ward}
              onChange={handleChange}
              className="w-full border border-slate-200 p-2 rounded"
            >
              <option>Chọn Phường/Xã</option>
            </select>
          </div>

          {/* Địa chỉ cụ thể */}
          <div>
            <span className="font-bold pb-2 block">Địa chỉ cụ thể</span>
            <input
              name="street"
              value={form.street}
              onChange={handleChange}
              type="text"
              placeholder="Nhập địa chỉ cụ thể"
              className="w-full border border-slate-200 p-2 rounded"
            />
          </div>
          {/* Nút hành động */}
          <div className="flex justify-end gap-2 mt-6">
            <button
              onClick={onClose}
              className="px-4 py-2 border rounded hover:bg-gray-100 cursor-pointer"
            >
              Quay lại
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
            >
              Lưu lại
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
AddAddressModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default AddAddressModal;
