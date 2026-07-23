"use client";

export function StickyCta() {
  function scrollToOrder() {
    document.getElementById("order-1")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between gap-2 bg-[#6b2b12] px-2.5 py-3 shadow-md">
      <p className="text-[15px] font-extrabold leading-tight text-white sm:text-[16px]">
        Mag-order Na – Hanggang 50% Diskwento Ngayon 👉
      </p>
      <button
        type="button"
        onClick={scrollToOrder}
        className="animate-cta-bob shrink-0 rounded-md border-2 border-white bg-[#e53935] px-3 py-2.5 text-[14px] font-extrabold text-white shadow-[0_2px_8px_rgba(0,0,0,0.25)] sm:text-[15px]"
      >
        Bumili Na
      </button>
    </div>
  );
}
