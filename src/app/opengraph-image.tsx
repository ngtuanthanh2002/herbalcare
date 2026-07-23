import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "linear-gradient(135deg, #143528 0%, #1f4d38 45%, #2f6b4f 100%)",
          color: "#f3f6f2",
        }}
      >
        <div
          style={{
            fontSize: 42,
            letterSpacing: "-0.03em",
            fontWeight: 600,
          }}
        >
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              letterSpacing: "-0.04em",
              fontWeight: 600,
              maxWidth: 900,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div style={{ fontSize: 28, opacity: 0.85, maxWidth: 780 }}>
            Trà xanh · Trà hoa · Trà thảo dược từ vùng chè Việt Nam
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
