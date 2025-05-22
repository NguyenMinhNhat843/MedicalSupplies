import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faList } from "@fortawesome/free-solid-svg-icons";
import bg_searchbar from "../assets/bg_searchbar.webp";
import MenuCategory from "../components/Menu/MenuCategory";
import { useEffect, useRef, useState } from "react";
import productApi from "../api/productApi"; // <-- Import API
import { useDispatch } from "react-redux";
import { setProducts } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const toggle = () => setIsOpen(!isOpen);
  const menuRef = useRef();

  // Đóng khi click ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Gọi API tìm kiếm
  const handleSearch = () => {
    if (!keyword.trim()) return;

    try {
      navigate(`/search/${keyword}?keyword=${keyword}`); // Chuyển hướng đến trang kết quả tìm kiếm
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
    }
  };

  // Bắt sự kiện nhấn Enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="p-4 z-[999]">
      <div
        className="relative container mx-auto bg-white shadow-md rounded-full flex justify-between items-center pe-4"
        ref={menuRef}
      >
        <div
          className="flex items-center ps-4 bg-slate-200 px-4 py-4 cursor-pointer rounded-s-full"
          onClick={toggle}
        >
          <FontAwesomeIcon icon={faList} />
          <p className="ps-4">Danh mục</p>
        </div>
        <input
          type="text"
          placeholder="Nhập tên sản phẩm"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          className="px-4 py-4 outline-none rounded-full grow"
        />
        <div onClick={handleSearch}>
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-2xl cursor-pointer"
          />
        </div>

        {/* Menu category */}
        <div className="absolute top-full pt-4 left-0">
          {isOpen && <MenuCategory setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
