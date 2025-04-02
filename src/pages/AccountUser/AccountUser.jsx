import { useState } from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

function AccountUser() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("NGUYỄN MINH NHẤT");
  const [phone] = useState("0352468843");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [selectedTab, setSelectedTab] = useState("personal");
  const [orderTab, setOrderTab] = useState("all");

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex bg-gray-100 min-h-screen p-8">
        <div className="bg-white w-1/4 p-6 rounded-lg shadow-md">
          <div className="flex flex-col items-center mb-6">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-white text-4xl">
              <FaUser className="text-blue-500" />
            </div>
            <h2 className="mt-4 text-lg font-bold">Nguyễn Minh Nhất</h2>
            <p className="text-gray-600">0123456789</p>
          </div>
          <ul className="space-y-4">
            <li onClick={() => setSelectedTab("personal")} className={`p-3 rounded-lg font-bold cursor-pointer ${selectedTab === "personal" ? "bg-gray-200" : "hover:bg-gray-100"}`}>Thông tin cá nhân</li>
            <li onClick={() => setSelectedTab("orders")} className={`p-3 rounded-lg cursor-pointer ${selectedTab === "orders" ? "bg-gray-200" : "hover:bg-gray-100"}`}>Đơn hàng của tôi</li>
            <li className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">Quản lý sổ địa chỉ</li>
            <li className="p-3 hover:bg-gray-100 rounded-lg cursor-pointer">Đăng xuất</li>
          </ul>
        </div>
        <div className="flex-1 p-6">
          {selectedTab === "personal" ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Thông tin cá nhân</h2>
              <div className="flex items-center mb-4 justify-center">
                <FaUser className="text-blue-500 text-6xl" />
              </div>
              {isEditing ? (
                <div>
                  <label className="block text-gray-700">Họ và tên</label>
                  <input className="w-full p-2 border rounded mb-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                  <label className="block text-gray-700">Số điện thoại</label>
                  <input className="w-full p-2 border rounded mb-2 bg-gray-200" type="text" value={phone} disabled />
                  <label className="block text-gray-700">Giới tính</label>
                  <div className="mb-2">
                    <label className="mr-4">
                      <input type="radio" name="gender" value="Nam" checked={gender === "Nam"} onChange={(e) => setGender(e.target.value)} /> Nam
                    </label>
                    <label>
                      <input type="radio" name="gender" value="Nữ" checked={gender === "Nữ"} onChange={(e) => setGender(e.target.value)} /> Nữ
                    </label>
                  </div>
                  <label className="block text-gray-700">Ngày sinh</label>
                  <input className="w-full p-2 border rounded mb-2" type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} />
                  <button onClick={() => setIsEditing(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Cập nhật thông tin</button>
                </div>
              ) : (
                <div>
                  <p className="text-lg font-bold">{name}</p>
                  <p className="text-gray-600">Số điện thoại: <span className="text-blue-500">{phone}</span></p>
                  <p className="text-gray-600">Giới tính: <span className="text-blue-500">{gender || "Thêm thông tin"}</span></p>
                  <p className="text-gray-600">Ngày sinh: <span className="text-blue-500">{birthDate || "Thêm thông tin"}</span></p>
                  <button onClick={() => setIsEditing(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Chỉnh sửa thông tin</button>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="flex items-center justify-center mb-4">
                <input className="w-full p-2 border rounded-lg" type="text" placeholder="Tìm theo tên đơn, mã đơn, hoặc tên sản phẩm..." />
                <FaSearch className="text-gray-500 ml-2 text-xl" />
              </div>
              <div className="flex border-b mb-4">
                {["Tất cả", "Đang xử lý", "Đang giao", "Đã giao", "Đã hủy", "Trả hàng"].map((tab, index) => (
                  <div key={index} onClick={() => setOrderTab(tab)} className={`p-3 cursor-pointer ${orderTab === tab ? "border-b-2 border-blue-500 font-bold" : "text-gray-500"}`}>{tab}</div>
                ))}
              </div>
              <h2 className="text-xl font-bold mb-2">Bạn chưa có đơn hàng nào.</h2>
              <p className="text-gray-600">Cùng khám phá hàng ngàn sản phẩm nhé!</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Khám phá ngay</button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountUser;
