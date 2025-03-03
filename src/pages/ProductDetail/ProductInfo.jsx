import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

// import img_p from "../../assets/image_products/P09468_1_l.avif";

const ProductInfo = ({ product }) => {
  const { image, name, price, unit, brand, category, description, origin } =
    product;

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
      <div className="" style={{ color: "#333" }}>
        {/* Thương hiệu */}
        <p className="pb-2">
          Thương hiệu: <span className="text-blue-400">{brand}</span>
        </p>
        {/* Tên sản phâm */}
        <p className="font-bold text-2xl pb-2">{name}</p>
        {/* Giá */}
        <p className="text-blue-600 pb-2">
          <span className="font-semibold text-lg">{price} đ</span> / {unit}
        </p>

        {/* Thông tin khác */}
        <div className="grid grid-cols-[30%_70%] auto-rows-min gap-2 pt-4">
          <span className="text-slate-500">Chọn đơn vị tính: </span>
          <div>
            <Link className="py-1 px-3 rounded-full border border-blue-400 hover:bg-blue-400 hover:text-white">
              {unit}
            </Link>
          </div>

          <span className="text-slate-500">Danh mục: </span>
          <span className="text-blue-600">{category}</span>

          <span className="text-slate-500">Mô tả ngắn: </span>
          <span>{description}</span>

          <span className="text-slate-500">Xuất xứ: </span>
          <span>{origin}</span>

          <span className="text-slate-500">Nhà sản xuất: </span>
          <span>{brand}</span>

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

        {/* Chọn số lượng */}
        <div className="py-4 flex items-center"></div>
        {/* button mua */}
        <div className="pb-2">
          <button
            type="text"
            className="py-4 w-full rounded-full bg-blue-600 text-white font-semibold cursor-pointer"
          >
            Chọn mua
          </button>
        </div>
      </div>
    </div>
  );
};
ProductInfo.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.string,
    brand: PropTypes.string,
    price: PropTypes.number,
    unit: PropTypes.string,
    usage: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    origin: PropTypes.string,
  }).isRequired,
};

export default ProductInfo;
