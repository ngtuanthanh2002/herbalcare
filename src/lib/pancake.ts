import { PACKAGES, type PackageId } from "@/lib/sales-assets";

export type OrderPayload = {
  name: string;
  phone: string;
  address: string;
  packageValue: string;
};

const PRODUCT_NAME = "TSAA NG HERBA LUDWIGIA PROSTRATA";

const PACKAGE_PRICE: Record<
  PackageId,
  { quantity: number; price: number; shippingFee: number; title: string }
> = {
  "8": {
    quantity: 8,
    price: 3399,
    shippingFee: 0,
    title: `${PRODUCT_NAME} - 5+3 free (8 boxes)`,
  },
  "4": {
    quantity: 4,
    price: 1999,
    shippingFee: 0,
    title: `${PRODUCT_NAME} - 3+1 free (4 boxes)`,
  },
  "2": {
    quantity: 2,
    price: 1299,
    shippingFee: 0,
    title: `${PRODUCT_NAME} - Special (2 boxes)`,
  },
  "1": {
    quantity: 1,
    price: 699,
    shippingFee: 60,
    title: `${PRODUCT_NAME} - Trial (1 box)`,
  },
};

function getCredentials() {
  const apiKey = process.env.PANCAKE_API_KEY?.trim();
  const shopId = process.env.PANCAKE_SHOP_ID?.trim();
  const warehouseId = process.env.PANCAKE_WAREHOUSE_ID?.trim();

  if (!apiKey || !shopId || !warehouseId) {
    return null;
  }

  return { apiKey, shopId, warehouseId };
}

export async function createPancakeOrder(
  order: OrderPayload,
  pageUrl: string,
): Promise<{ ok: boolean; status: number; detail: string; orderId?: number }> {
  const creds = getCredentials();
  if (!creds) {
    return {
      ok: false,
      status: 500,
      detail: "Missing PANCAKE_API_KEY / PANCAKE_SHOP_ID / PANCAKE_WAREHOUSE_ID",
    };
  }

  const pkg =
    PACKAGES.find((p) => p.value === order.packageValue) ?? PACKAGES[0];
  const pricing = PACKAGE_PRICE[pkg.id];
  const name = order.name.trim();
  const phone = order.phone.trim();
  const address = order.address.trim();

  const body = {
    bill_full_name: name,
    bill_phone_number: phone,
    is_free_shipping: pricing.shippingFee === 0,
    received_at_shop: false,
    note: `${pkg.label}\nSource: herbalcare /tra\nPage: ${pageUrl}`,
    warehouse_id: creds.warehouseId,
    shipping_fee: pricing.shippingFee,
    shipping_address: {
      full_name: name,
      phone_number: phone,
      address,
      country_code: 63,
    },
    items: [
      {
        quantity: 1,
        one_time_product: true,
        discount_each_product: 0,
        is_bonus_product: false,
        variation_info: {
          name: pricing.title,
          retail_price: pricing.price,
          weight: 0.2 * pricing.quantity,
        },
        note: `Qty boxes: ${pricing.quantity}`,
      },
    ],
  };

  const url = `https://pos.pages.fm/api/v1/shops/${creds.shopId}/orders?api_key=${encodeURIComponent(creds.apiKey)}`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text().catch(() => "");
  let orderId: number | undefined;
  try {
    const json = JSON.parse(text) as {
      success?: boolean;
      data?: { id?: number };
    };
    orderId = json.data?.id;
    if (!res.ok || json.success === false) {
      return { ok: false, status: res.status, detail: text.slice(0, 800) };
    }
  } catch {
    if (!res.ok) {
      return {
        ok: false,
        status: res.status,
        detail: text.slice(0, 800) || res.statusText,
      };
    }
  }

  return {
    ok: true,
    status: res.status,
    detail: text.slice(0, 200),
    orderId,
  };
}
