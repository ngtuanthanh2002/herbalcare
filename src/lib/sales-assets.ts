export const IMG = {
  hero: "/Images/hero.png",
  teaBags: "/Images/tea-bags.png",
  herbs: "/Images/herbs.png",
  benefits: "/Images/benefits.png",
  logoMoh: "/Images/logo-moh.png",
  logoFda: "/Images/logo-fda.png",
  logoHalal: "/Images/logo-halal.png",
  certFda: "/Images/cert-fda.png",
  natural: "/Images/natural.png",
  productBoxes: "/Images/product-boxes.png",
  productBaskets: "/Images/product-baskets.png",
  sanPham: "/Images/product.png",
  absorption: "/Images/absorption.png",
  herbsTray: "/Images/herbs.png",
  hpylori: "/Images/hpylori.png",
  gerd: "/Images/gerd.png",
  ulcer: "/Images/ulcer.png",
  ingredients: "/Images/ingredients.png",
  beforeAfter56: "/Images/before-after-56.png",
  beforeAfter30: "/Images/before-after-30.png",
  beforeAfterWoman: "/Images/before-after-woman.png",
  warehouse1: "/Images/warehouse-1.png",
  warehouse2: "/Images/warehouse-2.png",
  warehouse3: "/Images/warehouse-3.png",
} as const;

export const PACKAGES = [
  {
    id: "8",
    label:
      "Bumili ng 5 kahon, libre ang 3 kahon. (Kabuuang 8 kahon) - 3,399 Peso - Libreng delivery",
    value:
      "< 8 TSAA NG HERBA LUDWIGIA PROSTRATA >|Bumili ng 5 kahon, libre ang 3 kahon. (Kabuuang 8 kahon) - 3,399 Peso - Libreng delivery",
  },
  {
    id: "4",
    label:
      "Bumili ng 3 kahon, libre ang 1 kahon. (Kabuuang 4 kahon) - 1,999 Peso - Libreng delivery",
    value:
      "< 4 TSAA NG HERBA LUDWIGIA PROSTRATA >|Bumili ng 3 kahon, libre ang 1 kahon. (Kabuuang 4 kahon) - 1,999 Peso - Libreng delivery",
  },
  {
    id: "2",
    label: "Espesyal na alok (2 Kahon) - 1,299 Peso - Libreng delivery",
    value:
      "< 2 TSAA NG HERBA LUDWIGIA PROSTRATA >|Espesyal na alok (2 Kahon) - 1,299 Peso - Libreng delivery",
  },
  {
    id: "1",
    label: "Trial package (1 Kahon) - 699 Peso + bayad sa paghahatid 60 Peso",
    value:
      "< 1 TSAA NG HERBA LUDWIGIA PROSTRATA >|Trial package (1 Kahon) - 699 Peso + bayad sa paghahatid 60 Peso",
  },
] as const;

export type PackageId = (typeof PACKAGES)[number]["id"];
