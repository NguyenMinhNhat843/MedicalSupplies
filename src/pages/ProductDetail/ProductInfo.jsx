import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

// component
import ButtonAddToCart from "../../components/button/ButtonAddToCart";

const ProductInfo = ({ product }) => {
  const {
    image,
    name,
    price,
    unit,
    brandOrigin: brand,
    categories: categories,
    manufacturer: manufacturer,
    description,
    origin,
  } = product;

  const [count, setCount] = useState(1);
  const handleClickMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const handleClickPlus = () => {
    setCount(count + 1);
  };

  return (
    <div className="grid grid-cols-2 gap-8">
      <div className="rounded-lg border border-slate-300 me-8">
        <img src={image} alt="image product" className="rounded-lg w-full" />
      </div>
      <div className="flex flex-col" style={{ color: "#333" }}>
        {/* Tên sản phâm */}
        <p className="font-bold text-2xl pb-2">{name}</p>
        {/* Giá */}
        <p className="text-blue-600 pb-2">
          <span className="font-semibold text-lg">{price} đ</span> /{" "}
          {unit ? unit : "Cái"}
        </p>

        {/* Thông tin khác */}
        <div className="grid grid-cols-[30%_70%] auto-rows-min gap-2 pt-4">
          <span className="text-slate-500">Chọn đơn vị tính: </span>
          <div>
            <Link className="py-1 px-3 rounded-full border border-blue-400 hover:bg-blue-400 hover:text-white">
              {unit ? unit : "Cái"}
            </Link>
          </div>

          <span className="text-slate-500">Danh mục: </span>

          <span className="text-blue-600">
            {categories.length > 0
              ? categories.map((category, index) => (
                  <span key={index}>
                    {category}
                    {index < categories.length - 1 ? ", " : ""}
                  </span>
                ))
              : "Chưa có danh mục"}
          </span>

          <span className="text-slate-500">Mô tả ngắn: </span>
          <span>{description}</span>

          <span className="text-slate-500">Xuất xứ: </span>
          <span>{brand}</span>

          <span className="text-slate-500">Nhà sản xuất: </span>
          <span>{manufacturer}</span>

          <span className="text-slate-500">Chọn số lượng: </span>
          <div>
            <div
              className="flex justify-between items-center border border-slate-400 rounded-full"
              style={{ width: "fit-content" }}
            >
              <Link
                className="px-2 rounded-s-full  active:bg-slate-200 py-1"
                onClick={handleClickMinus}
              >
                <FontAwesomeIcon icon={faMinus} />
              </Link>
              <span className="px-4 border-x-2 border-slate-300 py-1">
                {count}
              </span>
              <Link
                className="px-2 rounded-e-full active:bg-slate-200 py-1"
                onClick={handleClickPlus}
              >
                <FontAwesomeIcon icon={faPlus} />
              </Link>
            </div>
          </div>
        </div>
        {/* end: thông tin khác */}

        {/* button mua */}
        <div className="mt-auto">
          <ButtonAddToCart count={count} product={product} />
        </div>
        {/* end: button mua */}
      </div>
    </div>
  );
};
ProductInfo.propTypes = {
  product: PropTypes.object,
};

export default ProductInfo;
