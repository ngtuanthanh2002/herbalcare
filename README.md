# HerbalCare

Website trà thảo mộc xây bằng **Next.js** (App Router), tối ưu SEO và sẵn sàng deploy **Vercel**.

## Chạy local

```bash
npm install
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000).

## Deploy Vercel

1. Đẩy repo lên GitHub/GitLab.
2. Import project trên [vercel.com/new](https://vercel.com/new).
3. (Tuỳ chọn) thêm env `NEXT_PUBLIC_SITE_URL=https://domain-cua-ban.com` để canonical/sitemap đúng domain.

## SEO đã có sẵn

- Metadata API + `metadataBase`, Open Graph, Twitter card
- `sitemap.xml` và `robots.txt`
- JSON-LD Organization / WebSite / Product
- `lang="vi"`, canonical theo trang
- OG image động (`opengraph-image.tsx`)

## Cấu trúc chính

- `/` — Landing
- `/tra` — Bộ sưu tập trà
- `/tra/[slug]` — Chi tiết từng loại trà
- `/ve-chung-toi` — Giới thiệu
- `/blog` — Blog pha trà (nội dung SEO)
