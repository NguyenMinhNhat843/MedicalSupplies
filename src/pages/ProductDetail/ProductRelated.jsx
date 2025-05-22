import { useEffect, useState } from "react";
import productApi from "../../api/productApi";

const ProductRelative = ({ categoryIds }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      try {
        const results = await Promise.all(
          categoryIds.map((categoryId) => productApi.getByCategory(categoryId))
        );

        const merged = results.flat();

        // Loại bỏ sản phẩm trùng theo ID
        const uniqueProducts = Array.from(
          new Map(merged.map((p) => [p.id, p])).values()
        );

        setRelatedProducts(uniqueProducts);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm liên quan:", error);
      }
    };

    if (categoryIds?.length > 0) {
      fetchRelatedProducts();
    }
  }, [categoryIds]);

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        Sản phẩm liên quan
      </h2>

      {/* Thanh trượt ngang */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="min-w-[200px] flex-shrink-0 border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer bg-white"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h3 className="text-sm font-medium text-gray-900">
                {product.name}
              </h3>
              <p className="text-green-600 font-semibold mt-1">
                {Number(product.price).toLocaleString("vi-VN")} đ
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRelative;
