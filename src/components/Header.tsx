import Link from "next/link";
import { siteConfig } from "@/lib/site";

const nav = [
  { href: "/tra", label: "Bộ sưu tập trà" },
  { href: "/ve-chung-toi", label: "Về chúng tôi" },
  { href: "/blog", label: "Blog" },
];

export function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 md:px-8">
        <Link
          href="/"
          className="font-[family-name:var(--font-fraunces)] text-xl tracking-tight text-brand md:text-2xl"
        >
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-foreground/85 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-brand"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/tra"
          className="rounded-sm bg-brand px-4 py-2 text-sm text-background transition-colors hover:bg-brand-soft"
        >
          Khám phá trà
        </Link>
      </div>
    </header>
  );
}
