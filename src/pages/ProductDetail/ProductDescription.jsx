const tabs = [
  "Thành phần",
  "Công dụng",
  "Cách dùng",
  "Tác dụng phụ",
  "Lưu ý",
  "Bảo quản",
];

const ProductDecription = () => {
  return (
    <div className=" mt-8 flex border-t border-slate-200">
      {/* tabs */}
      <div className="border-e border-slate-200" style={{ width: "30%" }}>
        {tabs.map((tab) => {
          return (
            <div
              key={tab}
              className="py-3 border-b border-slate-200 hover:bg-slate-100 rounded-lg ps-2 cursor-pointer"
            >
              <button>{tab}</button>
            </div>
          );
        })}
      </div>
      <div className="ps-4 pt-4" style={{ width: "70%" }}>
        <p className="font-bold text-xl">Mô tả sản phẩm</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          rerum incidunt veniam delectus aliquid veritatis libero obcaecati
          magnam officia fugit enim, rem nemo officiis consequuntur
          necessitatibus? Cum dignissimos non inventore.
        </p>
      </div>
    </div>
  );
};

export default ProductDecription;
