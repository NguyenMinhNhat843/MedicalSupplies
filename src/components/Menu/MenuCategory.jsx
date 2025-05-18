import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import createSlug from "../../untils/createSlug";
import categoryApi from "../../api/categoryApi";

// redux
import { useDispatch, useSelector } from "react-redux";
import { filterProductByCategory } from "../../redux/slices/productSlice";

const MenuCategory = ({ setIsOpen }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      const cached = localStorage.getItem("categories");

      if (cached) {
        // Dữ liệu đã lưu → lấy ra dùng
        setCategories(JSON.parse(cached));
        setLoading(false);
      } else {
        // Gọi API → lưu vào localStorage
        try {
          const data = await categoryApi.getAll();
          setCategories(data);
          localStorage.setItem("categories", JSON.stringify(data));
          setLoading(false);
        } catch (error) {
          console.error("Error fetching categories:", error);
        }
      }
    };

    loadCategories();
  }, []);

  const navigate = useNavigate();
  const handleClickCategory = (category) => {
    navigate(`/search/${createSlug(category.name)}?id=${category.id}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="flex bg-white shadow-2xl rounded-lg overflow-hidden">
      {/* Danh mục lớn */}
      <div>
        {categories.map((category) => (
          <div
            key={category.id}
            className="p-4 cursor-pointer hover:bg-slate-100"
            onClick={() => handleClickCategory(category)}
          >
            <p>{category.name}</p>
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
