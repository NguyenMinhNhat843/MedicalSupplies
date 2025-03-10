import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faList } from "@fortawesome/free-solid-svg-icons";
import bg_searchbar from "../assets/bg_searchbar.webp";
import MenuCategory from "../components/Menu/MenuCategory";
import { useEffect, useRef, useState } from "react";

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Đóng model khi click bên ngoài
  const menuRef = useRef();

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

  return (
    <div className="p-4" style={{ backgroundImage: `url(${bg_searchbar})` }}>
      {/* search bar */}
      <div
        className="relative container mx-auto bg-white shadow-2xl rounded-full flex justify-between items-center pe-4"
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
          className="px-4 py-4 outline-none rounded-full grow"
        />
        <div>
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
