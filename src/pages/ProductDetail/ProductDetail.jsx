import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Path from "../../components/Path";
import ProductInfo from "./ProductInfo";
import ProductDecription from "./ProductDescription";
import productApi from "../../api/productApi"; // Đảm bảo bạn đã import API đúng

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null); // State để lưu trữ sản phẩm
  const [loading, setLoading] = useState(true); // State để xử lý trạng thái loading

  useEffect(() => {
    if (!id) {
      setLoading(false); // Đặt loading thành false nếu không có id
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await productApi.getById(id);
        setProduct(response);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy sản phẩm:", error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mx-auto py-8">
      {/* Hiển thị thông tin sản phẩm nếu có */}
      {product && (
        <>
          <Path
            paths={[
              { label: "Trang chủ", link: "/" },
              { label: "Sản phẩm tốt nhất", link: "/best-products" },
              {
                label: "Máy đo huyết áp",
                link: "/best-products/blood-pressure-monitor",
              },
            ]}
          />
          <h2 className="text-xl font-bold">{product.name}</h2>
          <p>{product.description}</p>
          <ProductInfo product={product} />
          <ProductDecription product={product} />
        </>
      )}
    </div>
  );
};

export default ProductDetail;
