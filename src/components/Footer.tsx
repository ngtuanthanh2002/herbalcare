import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr] md:px-8">
        <div>
          <p className="font-[family-name:var(--font-fraunces)] text-2xl text-brand">
            {siteConfig.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            {siteConfig.tagline}. Chọn lọc từ vùng chè Việt Nam, đóng gói cẩn
            thận để giữ hương vị nguyên bản.
          </p>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Khám phá</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <Link href="/tra" className="hover:text-brand">
                Bộ sưu tập trà
              </Link>
            </li>
            <li>
              <Link href="/ve-chung-toi" className="hover:text-brand">
                Về chúng tôi
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-brand">
                Blog pha trà
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-medium text-foreground">Liên hệ</p>
          <ul className="mt-4 space-y-2 text-sm text-muted">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-brand">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.phone}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-muted md:px-8">
          © {new Date().getFullYear()} {siteConfig.name}. Tất cả quyền được bảo
          lưu.
        </p>
      </div>
    </footer>
  );
}
