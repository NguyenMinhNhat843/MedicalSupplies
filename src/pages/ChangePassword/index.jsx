import { useState } from "react";

const Index = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <div>
      <h1 className="text-xl font-bold pb-6">Đổi mật khẩu</h1>
      <form action="">
        <div className="mb-4">
          <p className="font-semibold pb-2">Mật khẩu hiện tại</p>
          <input
            type="password"
            placeholder="Nhập mật khẩu hiện tại"
            required
            value={currentPassword}
            onChange={handleChangeCurrentPassword}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <p className="font-semibold pb-2">Mật khẩu mới</p>
          <input
            type="password"
            placeholder="Nhập mật khẩu mới"
            required
            value={newPassword}
            onChange={handleChangeNewPassword}
            className="border border-gray-300 rounded-lg p-2 w-full"
          />
        </div>
        <div>
          <button className="py-2 px-4 bg-blue-400 rounded-lg text-white cursor-pointer active:bg-blue-700">
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );
};

export default Index;
