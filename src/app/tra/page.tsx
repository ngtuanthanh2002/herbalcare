import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { OrderForm } from "@/components/sales/OrderForm";
import {
  IconExchange,
  IconPackage,
  IconTruck,
  IconWarranty,
} from "@/components/sales/PromiseIcons";
import { StickyCta } from "@/components/sales/StickyCta";
import { IMG } from "@/lib/sales-assets";

export const metadata: Metadata = {
  title:
    "TSAA NG HERBA LUDWIGIA PROSTRATA - Makabagong Solusyong Herbal para sa Kalusugan ng Sikmura",
  description:
    "Tsaa ng Herba Ludwigia Prostrata — 4 na natural na halaman para sa ulser, acid reflux, at panunaw. Hanggang 50% diskwento ngayon. COD available.",
  alternates: { canonical: "/tra" },
  openGraph: {
    title: "TSAA NG HERBA LUDWIGIA PROSTRATA",
    description:
      "Purong Halamang Gamot – Mataas ang Bisa para sa kalusugan ng sikmura.",
    url: "/tra",
    locale: "fil_PH",
  },
};

function FullImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  return (
    <div className="relative w-full">
      <Image
        src={src}
        alt={alt}
        width={750}
        height={1000}
        priority={priority}
        className="h-auto w-full"
        sizes="(max-width: 480px) 100vw, 480px"
      />
    </div>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-[18px] leading-snug text-[#111]">
      <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2e7d32] text-[14px] font-black text-white">
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}

export default function TraSalesPage() {
  return (
    <div className="min-h-screen bg-[#cfc9bd]">
      <div className="mx-auto min-h-screen w-full max-w-[480px] bg-[#f7f3ea] shadow-[0_0_40px_rgba(0,0,0,0.28)]">
        {/* 1. Sticky CTA */}
        <StickyCta />

        {/* 2. Title */}
        <section className="px-3 pb-2 pt-5 text-center">
          <div className="rounded-[32px] border-[3px] border-[#1b5e20] bg-[#f3e6d4] px-2 py-5 shadow-md">
            <h1 className="font-serif text-[28px] font-black leading-[1.05] tracking-wide text-[#c62828] sm:text-[32px]">
              TSAA NG HERBA
              <br />
              LUDWIGIA PROSTRATA
            </h1>
          </div>
          <p className="mt-4 text-[20px] font-extrabold leading-tight text-[#111] sm:text-[22px]">
            Purong Halamang Gamot – Mataas ang Bisa
          </p>
        </section>

        {/* 3. Green ingredient bar */}
        <section className="bg-[#1b5e20] px-3 py-3.5 text-white">
          <div className="grid grid-cols-2 gap-x-2 gap-y-2 text-[15px] font-bold leading-snug">
            <p>🌿 Herba Lakom Air</p>
            <p>🌿 Teh Ampelopsis</p>
            <p>🌿 Hedyotis capitellata</p>
            <p>🌿 Kabute Lingzhi</p>
          </div>
        </section>

        {/* 4. Hero graphic */}
        <FullImage
          src={IMG.hero}
          alt="Tsaa ng Herba Ludwigia Prostrata – 4 uri ng halaman"
          priority
        />

        {/* 5. Product description — LARGE like sample */}
        <section className="bg-white px-4 py-6">
          <h2 className="mb-5 text-center font-[family-name:var(--font-fraunces)] text-[32px] font-bold italic leading-none text-[#6b3a1f]">
            Paglalarawan ng Produkto
          </h2>
          <ul className="space-y-4 text-[19px] leading-snug text-[#111]">
            <li>
              📦 <strong>Pangalan ng Produkto:</strong> TSAA NG HERBA LUDWIGIA
              PROSTRATA
            </li>
            <li>
              🌿 <strong>Nilalaman:</strong> 4 Premium Natural Herbs
            </li>
            <li>
              ☕ <strong>Lasa:</strong> Banayad na matamis at nakakapresko
              (Madaling inumin)
            </li>
            <li>
              ⚖️ <strong>Ispesipikasyon:</strong> 30 sachet / Kahon
            </li>
            <li>
              ⏳ <strong>Shelf life:</strong> 24 buwan
            </li>
          </ul>
        </section>

        {/* 6. Circle pair */}
        <div className="flex items-center justify-center gap-5 bg-[#f7f3ea] px-4 py-6">
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-[5px] border-[#c9a227] shadow-md">
            <Image
              src={IMG.teaBags}
              alt="Mga tea bag ng Tsaa ng Herba"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-[5px] border-[#c9a227] shadow-md">
            <Image
              src={IMG.herbs}
              alt="Mga hilaw na sangkap ng herbal tea"
              fill
              className="object-cover"
              sizes="160px"
            />
          </div>
        </div>

        {/* 7. Benefits / KHASIAT */}
        <FullImage
          src={IMG.benefits}
          alt="Mga benepisyo ng Tsaa ng Herba Ludwigia Prostrata"
        />

        {/* 8. Trust checklist + logos */}
        <section className="space-y-5 bg-white px-4 py-6">
          <ul className="space-y-4">
            <CheckItem>
              <strong className="text-[20px]">
                Rehistrado sa FDA Philippines
              </strong>
            </CheckItem>
            <CheckItem>
              <strong className="text-[20px]">
                Inirerekomenda ng mga eksperto – Angkop sa lahat ng edad
              </strong>
            </CheckItem>
            <CheckItem>
              <strong className="text-[22px] text-[#c62828]">
                100% Orihinal na Produkto
              </strong>
            </CheckItem>
          </ul>

          <div className="flex items-center justify-center gap-3 pt-1">
            <Image
              src={IMG.logoMoh}
              alt="KKM / MOH"
              width={100}
              height={100}
              className="h-24 w-auto object-contain"
            />
            <Image
              src={IMG.logoHalal}
              alt="Halal Malaysia"
              width={100}
              height={100}
              className="h-24 w-auto object-contain"
            />
            <Image
              src={IMG.logoFda}
              alt="FDA"
              width={100}
              height={100}
              className="h-24 w-auto object-contain"
            />
          </div>

          <div className="mx-auto max-w-[240px]">
            <Image
              src={IMG.certFda}
              alt="Sertipiko ng FDA"
              width={240}
              height={280}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* 9. 100% natural banner */}
        <div className="bg-[#ef6c00] px-3 py-4 text-center">
          <p className="text-[26px] font-black tracking-wide text-white">
            100% LIKAS NA SANGKAP
          </p>
        </div>

        {/* 10. Natural ingredients graphic */}
        <FullImage
          src={IMG.natural}
          alt="100% likas na sangkap – 4 na halaman"
        />

        {/* 11. Usage instructions */}
        <section className="bg-[#fff4d6] px-4 py-6">
          <ul className="space-y-5">
            <CheckItem>
              <strong>Karaniwang Paraan ng Pag-inom:</strong> Magtimpla ng 1-2
              sachet araw-araw. Maaaring gamitin bilang pang-araw-araw na inumin
              kapalit ng plain water.
            </CheckItem>
            <CheckItem>
              <strong>Rekomendasyon:</strong> Inirerekomenda ang tuloy-tuloy na
              paggamit nang 2 hanggang 3 buwan, lalo na kung madalas kang
              makaranas ng: hirap sa panunaw, kabag o pamamaga ng sikmura, acid
              reflux o heartburn, init o sakit sa itaas na bahagi ng sikmura,
              discomfort pagkatapos kumain.
            </CheckItem>
            <CheckItem>
              <strong>Mga Tip para sa Pinakamahusay na Resulta:</strong>{" "}
              Pagsamahin ang pag-inom ng tsaa sa: balanseng diyeta, sapat na
              pahinga, mabuting pamamahala sa stress, at magaan na ehersisyo.
            </CheckItem>
          </ul>

          <a
            href="#order-1"
            className="animate-cta-bob mt-7 block cursor-pointer rounded-2xl bg-[#e53935] py-4 text-center text-[22px] font-black leading-tight text-white shadow-[0_8px_18px_rgba(0,0,0,0.28)]"
          >
            Kunin ang Alok
            <br />
            Ngayon!
          </a>
        </section>

        {/* 12. Traditional medicine header */}
        <section className="bg-[#f7f3ea] px-4 pb-3 pt-8 text-center">
          <div className="mx-auto mb-4 h-px w-40 bg-[#c9a227]" />
          <p className="text-[18px] font-black tracking-wide text-[#c62828]">
            AYON SA TRADISYUNAL NA GAMUTAN
          </p>
          <h2 className="mt-2 font-serif text-[28px] font-black leading-tight text-[#111]">
            TUMUTULONG SA MGA SUMUSUNOD NA PROBLEMA
          </h2>
          <div className="mx-auto mt-4 h-px w-40 bg-[#c9a227]" />
        </section>

        {/* 13. Product boxes */}
        <FullImage
          src={IMG.productBoxes}
          alt="Mga kahon ng Tsaa ng Herba Ludwigia Prostrata"
        />

        {/* 14. Problems list */}
        <section className="bg-[#fff8ee] px-4 py-6">
          <ul className="space-y-5">
            <CheckItem>
              <strong className="text-[19px]">
                Nagpapalamig sa Sistema ng Panunaw:
              </strong>{" "}
              Tumutulong sa mga problema sa gastric at duodenal ulcer na dulot
              ng init o sobrang init sa katawan.
            </CheckItem>
            <CheckItem>
              <strong className="text-[19px]">
                Anti-Inflammatory, Anti-Bacterial at Nagpapababa ng asido sa sikmura:
              </strong>{" "}
              Epektibong tumutulong laban sa bakterya at nagpapababa ng asido sa
              sikmura, kaya nababawasan ang init at sakit ng heartburn nang
              mabilis.
            </CheckItem>
            <CheckItem>
              <strong className="text-[19px]">
                Nagpapagaling sa Lining ng Sikmura (Mucosa):
              </strong>{" "}
              Tumutulong magpagaling at muling bumuo ng nasirang tissue ng
              dingding ng sikmura dahil sa anti-inflammatory nitong katangian.
            </CheckItem>
            <CheckItem>
              <strong className="text-[19px]">Nagpapabuti ng Panunaw:</strong>{" "}
              Binabawasan ang kabag, hangin, at indigestion dahil sa hindi
              regular na pagkain.
            </CheckItem>
          </ul>
        </section>

        {/* 15. Order form 1 */}
        <OrderForm formId="order-1" />

        {/* 16. After form: medical images then absorption then intro text */}
        <FullImage src={IMG.hpylori} alt="Mga epekto ng H. Pylori sa sikmura" />
        <FullImage src={IMG.gerd} alt="Sakit na Refluks Gastroesophageal (GERD)" />
        <FullImage
          src={IMG.ulcer}
          alt="Peptikong Ulser: mekanismo, sintomas, at komplikasyon"
        />
        <FullImage src={IMG.absorption} alt="Mabilis na pag-absorb x 300" />

        <section className="space-y-5 bg-[#fff8e7] px-4 py-6 text-[18px] leading-snug text-[#111]">
          <p>
            Ang{" "}
            <strong className="text-[#c62828]">
              TSAA NG HERBA LUDWIGIA PROSTRATA
            </strong>{" "}
            ay hindi karaniwang herbal drink. Ito ay perpektong kombinasyon ng
            tradisyunal na gamutan at modernong proseso ng produksyon.
            Idinisenyo ang teknolohiya upang kunin at panatilihin ang
            mahahalagang medicinal benefits, at idirekta ang healing essence sa
            apektadong lining (mucosa) ng sikmura.
          </p>
          <p>
            Dahil sa optimized production, nananatili ang bioactive compounds
            (tulad ng Flavonoid) sa anyong madaling masipsip ng katawan. Kapag
            nainom, mabilis itong tumagos sa lining ng sikmura, bumabalot at
            nagpoprotekta sa ulcer area — isang banayad na ginhawa na mahirap
            makamit sa iba pang conventional methods.
          </p>
        </section>

        {/* Mid herbs tray */}
        <FullImage src={IMG.productBoxes} alt="Mga hilaw na sangkap ng tsaa" />

        <section className="space-y-5 bg-[#fff8e7] px-4 py-6 text-[18px] leading-snug text-[#111]">
          <p>
            Kapag pumasok ito sa katawan at kumilos direkta sa problemang bahagi
            ng sikmura, nagbibigay ang nutritional system na ito ng komprehensibong
            epekto:
          </p>
          <p>
            🌿{" "}
            <strong>
              Herba Lakom Air & Teh Ampelopsis (Anti-Inflammatory Action):
            </strong>{" "}
            Malakas na natural na anti-inflammatory at anti-bacterial agents.
            Tumutulong ang kombinasyong ito laban sa Helicobacter Pylori (HP),
            mabilis na nagpapagaan ng sugat sa ulcer, at binabawasan ang
            pamamaga sa mucosa ng sikmura.
          </p>
          <p>
            🌿{" "}
            <strong>
              Hedyotis capitellata & Kabute Lingzhi (Recovery Action):
            </strong>{" "}
            Agad na nagne-neutralize ang Hedyotis capitellata ng sobrang asido sa
            sikmura, at pinapawi ang heartburn at acid reflux. Samantala,
            tumutulong ang Kabute Lingzhi sa pagpapasigla ng katawan, paglaki ng
            bagong selula, laban sa oxidative stress, at pagpapalakas ng natural
            immunity.
          </p>
          <p className="font-extrabold">
            Ang makabagong kombinasyon ng 4 na halaman ay nagbibigay ng
            walang-kaparis na solusyon:
          </p>
          <FullImage src={IMG.productBaskets} alt="Mga hilaw na sangkap ng tsaa" />
          <ul className="space-y-4">
            <CheckItem>
              <strong className="text-[#c62828]">Mabilis na Ginhawa:</strong>{" "}
              Mas magaan at mas komportable ang sikmura. Nababawasan ang kabag,
              pagdighay, at asim ng sikmura matapos ang ilang araw ng
              tuloy-tuloy na paggamit.
            </CheckItem>
            <CheckItem>
              <strong className="text-[#c62828]">Matagalang Proteksyon:</strong>{" "}
              Hindi lang pansamantalang ginhawa—tumutulong sa pagpapanumbalik at
              pagpapalakas ng normal na paggana ng sikmura para sa pangmatagalang
              kalusugan ng panunaw.
            </CheckItem>
            <CheckItem>
              <strong className="text-[#c62828]">100% Likas at Ligtas:</strong>{" "}
              Walang preservatives, artificial colors, o synthetic chemicals.
              Ligtas inumin araw-araw bilang kapalit ng karaniwang tubig, nang
              walang pag-aalala sa masamang epekto sa atay o bato.
            </CheckItem>
          </ul>
        </section>

        {/* before-after 56 → 30 → woman → ingredients */}
        <FullImage
          src={IMG.beforeAfter56}
          alt="Bago at pagkatapos – 56 taong gulang"
        />
        <FullImage
          src={IMG.beforeAfter30}
          alt="Bago at pagkatapos – 30 taong gulang"
        />
        <FullImage
          src={IMG.beforeAfterWoman}
          alt="Bago at pagkatapos – babae 28 taong gulang"
        />
        <FullImage
          src={IMG.ingredients}
          alt="Mga sangkap ng Tsaa ng Herba Ludwigia Prostrata"
        />

        {/* Order form 2 */}
        <OrderForm formId="order-2" />

        {/* Commitments */}
        <section className="bg-white px-4 py-7">
          <h2 className="mb-5 text-center text-[22px] font-black text-[#1a237e]">
            Pangako Kapag Bumili ng Produkto
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              {
                title: "Ang produktong matatanggap ay katulad ng nasa larawan at video.",
                Icon: IconPackage,
              },
              { title: "Door-to-door delivery (COD)", Icon: IconTruck },
              { title: "Palit 1 sa 1 sa loob ng 7 araw", Icon: IconExchange },
              { title: "12 buwang warranty", Icon: IconWarranty },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-4 text-center shadow-[0_4px_16px_rgba(0,0,0,0.1)]"
              >
                <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#ff8a9a] to-[#e91e63] text-white shadow-sm">
                  <item.Icon className="h-7 w-7" />
                </div>
                <p className="text-[13px] font-bold leading-snug text-[#222]">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Warehouse */}
        <section className="space-y-2 bg-[#f7f3ea] px-2 pb-4">
          <p className="px-2 pt-3 text-center text-[16px] font-extrabold text-[#1b5e20]">
            Katibayan ng pagpapadala at warehouse
          </p>
          <FullImage src={IMG.warehouse1} alt="Mga parcel na handa i-deliver" />
          <FullImage src={IMG.warehouse2} alt="Warehouse packing operations" />
          <FullImage src={IMG.warehouse3} alt="Collage ng logistics at packing" />
        </section>

        {/* Footer — like sample image 3 */}
        <footer className="relative overflow-hidden bg-[#0a4a4b] px-5 py-8 text-left text-white">
          <div
            className="pointer-events-none absolute -left-10 top-24 h-56 w-56 rounded-full bg-[#1a6b6c]/40 blur-2xl"
            aria-hidden
          />
          <div className="relative z-10">
            <p className="text-[13px] font-bold uppercase tracking-wide text-[#ff8a3d]">
              Kilalanin
            </p>
            <h2 className="mt-2 text-[18px] font-black leading-tight tracking-wide sm:text-[20px]">
              TSAA NG HERBA LUDWIGIA PROSTRATA
            </h2>
            <p className="mt-4 flex items-start gap-2 text-[14px] leading-relaxed text-white/95">
              <span className="mt-0.5 shrink-0" aria-hidden>
                🏠
              </span>
              <span>
                1610 Quezon Ave., Diliman, Quezon City, Metro Manila 1104,
                Philippines
              </span>
            </p>
            <p className="mt-3 flex items-center gap-2 text-[15px] font-semibold">
              <span aria-hidden>📞</span>
              <span>Hotline: 09754717952</span>
            </p>

            <p className="mt-8 text-[13px] font-bold uppercase tracking-wide text-[#ff8a3d]">
              Mga Patakaran
            </p>
            <ul className="mt-3 space-y-2 text-[14px] text-white">
              <li>
                <Link href="#" className="underline underline-offset-2">
                  Patakaran sa Paghahatid at Pagbabalik
                </Link>
              </li>
              <li>
                <Link href="#" className="underline underline-offset-2">
                  Patakaran sa Warranty
                </Link>
              </li>
              <li>
                <Link href="#" className="underline underline-offset-2">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="underline underline-offset-2">
                  Mga Tuntunin sa Paggamit
                </Link>
              </li>
              <li>
                <Link href="#" className="underline underline-offset-2">
                  Mga Tuntunin ng Serbisyo
                </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}
