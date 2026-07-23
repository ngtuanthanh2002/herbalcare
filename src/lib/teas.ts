export type Tea = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  origin: string;
  flavor: string;
  category: "trà xanh" | "trà hoa" | "trà thảo dược";
};

export const teas: Tea[] = [
  {
    slug: "tra-xanh-moc-chau",
    name: "Trà xanh Mộc Châu",
    shortDescription: "Vị thanh, hậu ngọt — thu hoạch từ đồi chè cao nguyên.",
    description:
      "Trà xanh Mộc Châu được hái sớm buổi sáng trên cao nguyên Sơn La. Lá chè tươi, hương cỏ non và hậu vị ngọt dài — lý tưởng để bắt đầu ngày mới.",
    benefits: ["Giàu chất chống oxy hóa", "Tỉnh táo nhẹ nhàng", "Hỗ trợ trao đổi chất"],
    origin: "Mộc Châu, Sơn La",
    flavor: "Thanh nhẹ, hậu ngọt",
    category: "trà xanh",
  },
  {
    slug: "tra-hoa-cuc",
    name: "Trà hoa cúc",
    shortDescription: "Dịu mắt, thư giãn — hương hoa thoảng nhẹ.",
    description:
      "Hoa cúc vàng sấy khô giữ nguyên hương thơm nhẹ và vị ngọt tự nhiên. Ly trà ấm giúp thư giãn buổi tối, làm dịu cảm giác căng thẳng.",
    benefits: ["Thư giãn", "Dịu mắt", "Hỗ trợ giấc ngủ nhẹ"],
    origin: "Đồng bằng sông Hồng",
    flavor: "Hoa nhẹ, ngọt thanh",
    category: "trà hoa",
  },
  {
    slug: "tra-gung-mat-ong",
    name: "Trà gừng mật ong",
    shortDescription: "Ấm bụng, sảng khoái — gừng tươi kết hợp mật ong.",
    description:
      "Hòa quyện gừng núi và mật ong nguyên chất. Vị cay ấm vừa phải, thích hợp ngày mưa lạnh hoặc khi cần làm ấm cơ thể.",
    benefits: ["Ấm bụng", "Hỗ trợ tiêu hóa", "Tăng sức đề kháng nhẹ"],
    origin: "Tây Nguyên",
    flavor: "Cay ấm, ngọt dịu",
    category: "trà thảo dược",
  },
  {
    slug: "tra-atiso",
    name: "Trà atiso Đà Lạt",
    shortDescription: "Thanh nhiệt, giải độc — tinh túy hoa atiso cao nguyên.",
    description:
      "Atiso Đà Lạt chọn lọc, sấy giữ sắc xanh và vị đắng thanh đặc trưng. Thường dùng sau bữa ăn hoặc những ngày cần thanh lọc nhẹ.",
    benefits: ["Thanh nhiệt", "Hỗ trợ gan", "Giải độc nhẹ"],
    origin: "Đà Lạt, Lâm Đồng",
    flavor: "Đắng thanh, mát",
    category: "trà thảo dược",
  },
  {
    slug: "tra-sen",
    name: "Trà sen Tây Hồ",
    shortDescription: "Hương sen dịu — truyền thống pha trà Việt.",
    description:
      "Lá trà ướp hương sen Tây Hồ theo cách thủ công. Hương hoa lan tỏa chậm, vị trà đậm đà mà vẫn thanh — dành cho phút dừng lại giữa ngày.",
    benefits: ["Thư thái tinh thần", "Hương thơm tự nhiên", "Giữ nét trà Việt"],
    origin: "Hà Nội",
    flavor: "Sen thơm, trà đậm",
    category: "trà hoa",
  },
  {
    slug: "tra-o-long",
    name: "Trà ô long",
    shortDescription: "Bán lên men — cân bằng vị trà xanh và trà đen.",
    description:
      "Ô long bán lên men mang hương hoa, vị mượt và hậu vị kéo dài. Phù hợp uống nóng hoặc ủ lạnh trong ngày hè.",
    benefits: ["Cân bằng caffeine", "Hương phức tạp", "Uống linh hoạt nóng/lạnh"],
    origin: "Lâm Đồng",
    flavor: "Hoa, mượt, hậu dài",
    category: "trà xanh",
  },
];

export function getTeaBySlug(slug: string): Tea | undefined {
  return teas.find((tea) => tea.slug === slug);
}
