// image
import img_aboutUS from "../../assets/img_aboutUS.jpg";

const data = [
  {
    title: "Chất lượng đảm bảo ✅",
    description:
      "Sản phẩm được kiểm định nghiêm ngặt trước khi đến tay khách hàng.",
    icon: "🏅",
  },
  {
    title: "Nguồn gốc rõ ràng 🏭",
    description: "Hàng chính hãng, nhập khẩu từ các thương hiệu uy tín.",
    icon: "📦",
  },
  {
    title: "Giá cả hợp lý 💰",
    description:
      "Cạnh tranh trên thị trường, nhiều chương trình ưu đãi hấp dẫn.",
    icon: "💵",
  },
  {
    title: "Dịch vụ khách hàng tận tâm 🤝",
    description: "Hỗ trợ tư vấn 24/7, sẵn sàng giải đáp mọi thắc mắc.",
    icon: "📞",
  },
  {
    title: "Giao hàng nhanh chóng 🚚",
    description:
      "Nhận hàng nhanh trong 24-48h, miễn phí vận chuyển đơn hàng lớn.",
    icon: "🚀",
  },
];

const AboutUs = () => {
  return (
    <div className="container mx-auto py-8 grid grid-cols-2 gap-4">
      <div>
        <img src={img_aboutUS} alt="Ảnh giới thiệu" className="rounded-2xl" />
      </div>
      <div>
        <p className="text-2xl font-bold">
          Tại sao nên chọn sản phẩm của chúng tôi?
        </p>
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2 py-2">
              <span className="text-2xl">{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                {/* <p>{item.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
