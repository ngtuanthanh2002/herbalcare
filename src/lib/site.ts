export const siteConfig = {
  name: "HerbalCare",
  tagline: "Trà thảo mộc tinh khiết từ thiên nhiên",
  description:
    "HerbalCare mang đến trà thảo mộc Việt Nam — trà xanh, trà hoa, trà thảo dược chọn lọc, pha chuẩn vị và tốt cho sức khỏe mỗi ngày.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://herbalcare.vn",
  locale: "vi_VN",
  email: "hello@herbalcare.vn",
  phone: "+84 900 000 000",
  social: {
    facebook: "https://facebook.com/herbalcare",
    instagram: "https://instagram.com/herbalcare",
  },
} as const;
