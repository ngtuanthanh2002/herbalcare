"use client";

import Image from "next/image";
import { FormEvent, useEffect, useState } from "react";
import { PACKAGES } from "@/lib/sales-assets";
import { trackMetaEvent } from "@/lib/meta-pixel";

type OrderFormProps = {
  formId: string;
};

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function FormCountdown() {
  const [left, setLeft] = useState({ h: 2, m: 15, s: 47 });

  useEffect(() => {
    const id = window.setInterval(() => {
      setLeft((prev) => {
        let { h, m, s } = prev;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) return { h: 2, m: 15, s: 47 };
        return { h, m, s };
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, []);

  const cells = [
    { value: pad(left.h), label: "Oras" },
    { value: pad(left.m), label: "Minuto" },
    { value: pad(left.s), label: "Segundo" },
  ];

  return (
    <div className="flex flex-1 flex-col items-center justify-center pt-1">
      <p className="mb-2 text-center text-[14px] font-extrabold leading-tight text-[#1a237e]">
        Magtatapos ang promosyon sa loob ng
      </p>
      <div className="flex justify-center gap-1.5">
        {cells.map((cell) => (
          <div key={cell.label} className="flex w-[52px] flex-col items-center">
            <div className="flex h-[48px] w-full items-center justify-center rounded-md bg-[#1e88e5] text-[24px] font-black text-white shadow-md">
              {cell.value}
            </div>
            <span className="mt-1 text-[12px] font-bold text-[#111]">
              {cell.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-2.5 w-full max-w-[180px]">
        <div className="rounded-sm bg-[#ffe082] px-2 py-1 text-center shadow-[0_2px_0_#f9a825]">
          <p className="text-[18px] font-black tracking-wide text-[#c62828]">
            DISKWENTO 50%
          </p>
        </div>
      </div>
    </div>
  );
}

export function OrderForm({ formId }: OrderFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pkg, setPkg] = useState<string>(PACKAGES[0].value);
  const [submitting, setSubmitting] = useState(false);
  const [popup, setPopup] = useState<"success" | "error" | null>(null);
  const [errorMessage, setErrorMessage] = useState(
    "Hindi maipadala ang order. Pakisubukan ulit sa ilang sandali.",
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (submitting) return;

    setSubmitting(true);
    setPopup(null);

    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          phone,
          address,
          packageValue: pkg,
          pageUrl: typeof window !== "undefined" ? window.location.href : "",
        }),
      });

      const data = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!res.ok || !data?.ok) {
        setErrorMessage(
          data?.error === "Invalid phone number"
            ? "Hindi wasto ang numero ng telepono. Pakisuri at subukan ulit."
            : "Hindi maipadala ang order. Pakisubukan ulit sa ilang sandali.",
        );
        setPopup("error");
        return;
      }

      const selectedPkg =
        PACKAGES.find((p) => p.value === pkg) ?? PACKAGES[0];
      const valueById: Record<string, number> = {
        "8": 3399,
        "4": 1999,
        "2": 1299,
        "1": 759,
      };

      trackMetaEvent("Lead");
      trackMetaEvent("Purchase", {
        value: valueById[selectedPkg.id] ?? 0,
        currency: "PHP",
        content_name: selectedPkg.label,
      });

      setName("");
      setPhone("");
      setAddress("");
      setPkg(PACKAGES[0].value);
      setPopup("success");
    } catch {
      setErrorMessage(
        "Hindi maipadala ang order. Pakisubukan ulit sa ilang sandali.",
      );
      setPopup("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id={formId} className="scroll-mt-20 bg-[#f7f3ea] px-2 py-4">
      {popup ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setPopup(null)}
        >
          <div
            className="w-full max-w-[340px] rounded-xl bg-white p-5 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full text-[28px] ${
                popup === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {popup === "success" ? "✓" : "!"}
            </div>
            <h3 className="text-[20px] font-black text-[#111]">
              {popup === "success" ? "Tagumpay!" : "Hindi nagawa"}
            </h3>
            <p className="mt-2 text-[15px] leading-snug text-[#444]">
              {popup === "success"
                ? "Salamat! Natanggap na ang iyong order. Tatawagan ka namin sa lalong madaling panahon."
                : errorMessage}
            </p>
            <button
              type="button"
              onClick={() => setPopup(null)}
              className={`mt-5 w-full rounded-full py-3 text-[16px] font-bold text-white ${
                popup === "success" ? "bg-[#2e7d32]" : "bg-[#e53935]"
              }`}
            >
              OK
            </button>
          </div>
        </div>
      ) : null}

      <div className="overflow-hidden rounded-md border-[3px] border-[#1976d2] bg-[#f5b095] p-2.5 shadow-md">
        {/* 2 products side by side + countdown */}
        <div className="mb-3 flex items-start gap-1.5 rounded-md bg-white/40 p-1.5">
          <div className="flex shrink-0 gap-0.5">
            <div className="relative h-[120px] w-[72px]">
              <Image
                src="/Images/product.png"
                alt="TSAA NG HERBA LUDWIGIA PROSTRATA"
                fill
                className="object-contain"
                sizes="72px"
              />
            </div>
            <div className="relative h-[120px] w-[72px]">
              <Image
                src="/Images/product.png"
                alt="TSAA NG HERBA LUDWIGIA PROSTRATA"
                fill
                className="object-contain"
                sizes="72px"
              />
            </div>
          </div>
          <FormCountdown />
        </div>

        <form onSubmit={onSubmit} className="space-y-2.5">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Pangalan / Name"
            className="w-full rounded-md border border-black bg-white px-3 py-3 text-[16px] outline-none focus:border-[#1976d2]"
          />
          <input
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Numero ng Telepono / Phone Number"
            className="w-full rounded-md border border-black bg-white px-3 py-3 text-[16px] outline-none focus:border-[#1976d2]"
          />
          <textarea
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address / Address"
            rows={2}
            className="w-full rounded-md border border-black bg-white px-3 py-3 text-[16px] outline-none focus:border-[#1976d2]"
          />

          <div className="rounded-md border border-black/15 bg-white px-2 py-1">
            {PACKAGES.map((item) => {
              const selected = pkg === item.value;
              return (
                <label
                  key={item.id}
                  className="flex cursor-pointer items-center gap-3 border-b border-[#e8e8e8] py-3 last:border-b-0"
                >
                  <span className="relative inline-flex h-5 w-5 shrink-0 items-center justify-center">
                    <input
                      type="radio"
                      name={`package-${formId}`}
                      value={item.value}
                      checked={selected}
                      onChange={() => setPkg(item.value)}
                      className="peer absolute inset-0 z-10 m-0 h-5 w-5 cursor-pointer opacity-0"
                      required
                    />
                    <span
                      className={`pointer-events-none box-border block h-5 w-5 rounded-full border-2 ${
                        selected
                          ? "border-[#1976d2] bg-white"
                          : "border-[#9e9e9e] bg-white"
                      }`}
                    />
                    <span
                      className={`pointer-events-none absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1976d2] ${
                        selected ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  </span>
                  <span className="font-[Arial,Helvetica,sans-serif] text-[14px] font-semibold leading-snug text-[#111]">
                    {item.label}
                  </span>
                </label>
              );
            })}
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="animate-cta-bob w-full rounded-full bg-[#e53935] py-3.5 text-[22px] font-black tracking-wide text-white shadow-[0_4px_10px_rgba(0,0,0,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {submitting ? "PINAPADALA..." : "BUMILI NA"}
          </button>
        </form>

        <div className="mt-3 rounded-md border border-black bg-white px-3 py-3 text-[14px] font-semibold leading-snug text-[#1565c0]">
          <p>
            🔒: &quot;Ang iyong personal na impormasyon ay mananatiling pribado
            at ligtas.&quot;
          </p>
          <p className="mt-1.5">
            ✅ Bayad sa pagdating (COD), ligtas at garantisado.
          </p>
          <p className="mt-1.5">
            ✅ Garantiyang 100% orihinal ang produkto.
          </p>
        </div>
      </div>
    </section>
  );
}
