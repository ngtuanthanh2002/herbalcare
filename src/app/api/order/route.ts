import { NextRequest, NextResponse } from "next/server";
import { PACKAGES } from "@/lib/sales-assets";
import { createPancakeOrder } from "@/lib/pancake";

export const runtime = "nodejs";

type Body = {
  name?: string;
  phone?: string;
  address?: string;
  packageValue?: string;
  pageUrl?: string;
};

function isValidPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 8 && digits.length <= 15;
}

export async function POST(req: NextRequest) {
  let data: Body;
  try {
    data = (await req.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const name = data.name?.trim() ?? "";
  const phone = data.phone?.trim() ?? "";
  const address = data.address?.trim() ?? "";
  const packageValue = data.packageValue?.trim() ?? "";
  const pageUrl =
    data.pageUrl?.trim() ||
    req.headers.get("referer") ||
    "https://herbalcare-eta.vercel.app/tra";

  if (!name || !phone || !address || !packageValue) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 },
    );
  }

  if (!isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, error: "Invalid phone number" },
      { status: 400 },
    );
  }

  const known = PACKAGES.some((p) => p.value === packageValue);
  if (!known) {
    return NextResponse.json(
      { ok: false, error: "Invalid package" },
      { status: 400 },
    );
  }

  try {
    const result = await createPancakeOrder(
      { name, phone, address, packageValue },
      pageUrl,
    );

    if (!result.ok) {
      console.error("[pancake order]", result.status, result.detail);
      return NextResponse.json(
        { ok: false, error: "Failed to send order to Pancake" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, orderId: result.orderId });
  } catch (err) {
    console.error("[pancake order]", err);
    return NextResponse.json(
      { ok: false, error: "Order request failed" },
      { status: 502 },
    );
  }
}
