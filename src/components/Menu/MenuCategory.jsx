import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import createSlug from "../../untils/createSlug";

// redux
import { filterProductByCategory } from "../../redux/slices/productSlice";

const MenuCategory = ({ setIsOpen }) => {
  const dispatch = useDispatch();
  const categorys = useSelector((state) => state.category.categorys);
  const [categorySelected, setCategorySelected] = useState(null);

  const navigate = useNavigate();

  // Khi chọn danh mục con → điều hướng + đóng menu
  const handleNavigate = (category) => {
    dispatch(filterProductByCategory(category.id));
    navigate("/search-result/" + createSlug(category.name), {
      state: { category },
    });
    setIsOpen(false); // Đóng menu khi chọn danh mục con
  };

  // Khi click danh mục cha → chỉ chọn nó, không đóng menu
  const handleSelectCategory = (category) => {
    setCategorySelected(categorySelected?.id === category.id ? null : category);
  };

  return (
    <div
      className="flex bg-white shadow-2xl rounded-lg overflow-hidden"
      style={{ width: "700px" }}
    >
      {/* Danh mục lớn */}
      <div className="border-e border-slate-300">
        {categorys.map((category) => (
          <div
            key={category.id}
            className={`p-4 cursor-pointer ${
              categorySelected?.id === category.id
                ? "bg-slate-200"
                : "hover:bg-slate-100"
            }`}
            onClick={() => handleSelectCategory(category)} // Chỉ chọn danh mục, không đóng menu
          >
            <p>{category.name}</p>
          </div>
        ))}
      </div>

      {/* Danh mục con */}
      <div className="grow">
        {categorySelected &&
          categorySelected.subcategories.map((sub) => (
            <div
              key={sub.name}
              className="flex items-center px-4 py-4 cursor-pointer hover:bg-slate-200"
              onClick={() => handleNavigate(sub)} // Khi click danh mục con thì navigate + đóng menu
            >
              <p className="ps-2">{sub.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

MenuCategory.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};

export default MenuCategory;
