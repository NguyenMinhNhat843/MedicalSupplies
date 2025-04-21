import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faPlus,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import AddAddressModal from "../../components/AddAddressModel"; // Đảm bảo đường dẫn đúng

const AddressBook = () => {
  const [addresses, setAddresses] = useState([]); // Danh sách địa chỉ
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái mở modal

  // Xử lý khi lưu địa chỉ mới
  const handleSaveAddress = (newAddress) => {
    setAddresses([...addresses, newAddress]); // Thêm vào danh sách
  };

  // Xử lý xóa địa điểm
  const handleDeleteAddress = (index) => {
    const newAddresses = [...addresses];
    newAddresses.splice(index, 1);
    setAddresses(newAddresses);
  };

  // Xử lý khi click vào 1 điaạ điểm sẽ mở model để chỉnh sửa
  const handleEditAddress = () => {
    // Lấy ra địa chỉ cần chỉnh sửa

    // Mở modal với dữ liệu của địa chỉ cần chỉnh sửa
    setIsModalOpen(true);
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Sổ địa chỉ nhận hàng</h2>
        <button
          onClick={() => setIsModalOpen(true)} // Mở modal
          className="cursor-pointer flex items-center gap-2 border border-blue-500 text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-100 transition"
        >
          <FontAwesomeIcon icon={faPlus} />
          Thêm địa chỉ
        </button>
      </div>

      {/* Kiểm tra nếu chưa có địa chỉ */}
      {addresses.length === 0 ? (
        <div className="flex flex-col items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/854/854878.png" // icon placeholder
            alt="No address"
            className="w-24 h-24 mb-4 opacity-70"
          />
          <h3 className="text-lg font-semibold mb-2">Chưa có địa chỉ nào</h3>
          <p className="text-gray-600 text-center">
            Vui lòng thêm địa chỉ để nhận sản phẩm nhanh chóng và thuận tiện
          </p>
        </div>
      ) : (
        // Nếu có địa chỉ, map và render ra
        <div>
          {addresses.map((address, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-lg shadow mb-4 flex justify-between items-center"
            >
              <div>
                <p className="">
                  <span className="font-semibold">Họ tên:</span> {address.name}
                </p>
                <p className="">
                  <span className="font-semibold">Số điện thoại:</span>{" "}
                  {address.phone}
                </p>
                <p className="">
                  <span className="font-semibold">Địa chỉ: </span>{" "}
                  {address.street +
                    ", " +
                    address.ward +
                    ", " +
                    address.district +
                    ", " +
                    address.city}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  className="text-blue-600 cursor-pointer text-2xl me-4"
                  onClick={() => handleEditAddress(index)} // Mở modal chỉnh sửa
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="text-red-600 cursor-pointer text-2xl"
                  onClick={() => handleDeleteAddress(index)} // Xóa địa chỉ
                />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Thêm địa chỉ */}
      <AddAddressModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} // Đóng modal
        onSave={handleSaveAddress} // Lưu địa chỉ mới
      />
    </div>
  );
};

export default AddressBook;
