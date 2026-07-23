"use client";

import { useEffect, useState } from "react";

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function Countdown() {
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
        if (h < 0) {
          return { h: 2, m: 15, s: 47 };
        }
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
    <div className="my-4 rounded-xl bg-gradient-to-r from-[#5b2d8e] to-[#2b5ea8] px-3 py-4">
      <p className="mb-3 text-center text-[18px] font-extrabold text-white">
        Magtatapos ang promosyon sa loob ng
      </p>
      <div className="flex justify-center gap-3">
        {cells.map((cell) => (
          <div key={cell.label} className="flex w-[72px] flex-col items-center">
            <div className="flex h-16 w-full items-center justify-center rounded-lg bg-[#4a1f7a] text-[28px] font-black text-white shadow-inner">
              {cell.value}
            </div>
            <span className="mt-1.5 text-[14px] font-bold text-white">
              {cell.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
