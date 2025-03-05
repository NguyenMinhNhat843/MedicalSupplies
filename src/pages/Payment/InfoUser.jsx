import { useState } from "react";

const InfoUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <p className="pb-4 font-bold text-lg">Thông tin nhận hàng</p>
      {/* Form thông tin nhận hàng */}
      <form>
        {/* form group */}
        <div className="mb-4">
          <label className="block font-semibold pb-2">Tên người nhận:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tên người nhận"
            className="py-2 px-4 rounded-lg outline-none border border-slate-300 w-full"
          />
        </div>

        {/* form group */}
        <div className="mb-4">
          <label className="block font-semibold pb-2">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="py-2 px-4 rounded-lg outline-none border border-slate-300 w-full"
          />
        </div>

        {/* form group */}
        <div className="mb-4">
          <label className="block font-semibold pb-2">Số điện thoại:</label>
          <input
            type="number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Số điện thoại"
            className="py-2 px-4 rounded-lg outline-none border border-slate-300 w-full"
          />
        </div>

        {/* form group */}
        <div className="mb-4">
          <label className="block font-semibold pb-2">Địa chỉ:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Địa chỉ nhận hàng"
            className="py-2 px-4 rounded-lg outline-none border border-slate-300 w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default InfoUser;
