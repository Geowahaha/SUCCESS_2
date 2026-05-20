"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Lang = "th" | "en";

type TextPair = readonly [th: string, en: string];

const phoneDisplay = "098-636-2356";
const phoneHref = "tel:0986362356";
const lineUrl = "https://line.me/R/ti/p/@SCNW";
const pulleyLogo = "/successcasting-assets/logo/success-logo2-transparent.png";
const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.0468607006387!2d100.8540115!3d13.5939493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d43805247e39b%3A0xa792ad76155fb9a1!2sSuccess%20Network%20Co.%2CLTD.!5e0!3m2!1sen!2sth!4v1779216458535!5m2!1sen!2sth";

const copy = {
  th: {
    tagline: "งานหล่อและชิ้นส่วนเครื่องจักร",
    nav: ["หน้าแรก", "ทำไมต้องงานหล่อ", "ความสามารถ", "ผลงาน", "วัสดุ", "ติดต่อ"],
    switchLabel: "EN",
    hero: [
      ["ครบวงจร", "งานหล่อทรายและอะไหล่เครื่องจักรสำหรับโรงงาน", "รับงานจากตัวอย่างจริง แบบ drawing หรือรูปชิ้นงาน พร้อมช่วยประเมินวัสดุ งานหล่อ งานกลึง และการส่งมอบ"],
      ["เหล็กหล่อเทาและเหล็กหล่อเหนียว", "งานหล่อจำนวนน้อยถึงกลางที่ตอบโจทย์หน้างานจริง", "รองรับ FC25, FCD, SC46, S45C และ Mo4140 สำหรับพูลเล่ย์ เฟือง housing และชิ้นส่วนเครื่องจักร"],
      ["งานกลึงและชิ้นส่วนตามแบบ", "เส้นทางผลิตที่เชื่อถือได้สำหรับทีมซ่อมบำรุง", "ส่งชิ้นงานเก่า รูป หรือ drawing เพื่อช่วยเลือกวัสดุและแนวทางผลิตก่อนเสนอราคา"],
      ["ผลงานจริง", "ชิ้นงานหล่อ พูลเล่ย์ เฟือง และอะไหล่อุตสาหกรรม", "นำเสนอด้วยภาพผลงานจริงของ Success Casting เพื่อให้ลูกค้าเห็นแนวงานก่อนติดต่อ"],
      ["กระบวนการหลอมโลหะ", "ภาพโรงหล่อที่ทำให้เว็บดูน่าเชื่อถือขึ้น", "ใช้ภาพ asset ที่มีสิทธิ์ในโปรเจกต์ ไม่ใช้ภาพ stock ที่ยังไม่มี license"],
    ],
    call: "โทร",
    portfolioBtn: "ดูผลงาน",
    welcomeTitle: "ยินดีต้อนรับ",
    welcome: [
      "Success Casting ให้บริการงานหล่อทราย ชิ้นส่วนเครื่องจักร และอะไหล่ตามแบบ สำหรับลูกค้าอุตสาหกรรมที่ต้องการความชัดเจน งานจริง และการสื่อสารที่รวดเร็ว",
      "เรารองรับงานซ่อมบำรุง งานตัวอย่าง และงานกึ่ง production จากรูปชิ้นงาน drawing หรืออะไหล่เดิม พร้อมให้คำแนะนำวัสดุ FC25, FCD, SC46, S45C และ Mo4140",
      "ส่งรูปชิ้นงานหรือ drawing ทาง LINE @SCNW เพื่อประเมินวัสดุ กระบวนการผลิต และราคาเบื้องต้นได้ทันที",
    ],
    specialtyTitle: "ถนัดงานจำนวนน้อยถึงกลาง",
    specialty: "เหมาะกับงานอะไหล่เครื่องจักร งานซ่อมบำรุง และงานตามแบบที่ต้องพิจารณาจากชิ้นงานจริง ไม่ใช่สินค้าสำเร็จรูปทั่วไป",
    quote: "ขอใบเสนอราคา",
    portfolioTitle: "ผลงานสินค้า",
    seeMore: "ดูเพิ่มเติม...",
    capabilities: "ความสามารถหลัก",
    capabilityCards: [
      ["งานจำนวนน้อยถึงกลาง", "เหมาะกับงานซ่อมบำรุง งานตามแบบ และ semi-production ที่ต้องคุมต้นทุนและระยะเวลา"],
      ["ช่วยดูงานครบขั้นตอน", "ช่วยดู drawing, รูปชิ้นงาน, วัสดุ และแนวทางผลิตก่อนเสนอราคา"],
      ["วัสดุอุตสาหกรรม", "FC25 · FCD · SC46 · S45C · Mo4140 สำหรับชิ้นส่วนเครื่องจักรและอะไหล่เฉพาะทาง"],
    ],
    materialsTitle: "วัสดุที่รับผลิต",
    materialsLead: "วัสดุหลักสำหรับงานหล่อและชิ้นส่วนเครื่องจักรตามแบบ",
    contactTitle: "ติดต่อเรา",
    qr: "สแกน LINE @SCNW",
    footer: "งานหล่ออุตสาหกรรมและชิ้นส่วนเครื่องจักรตามแบบ",
  },
  en: {
    tagline: "Foundry and Machine Components",
    nav: ["Home", "Why Castings?", "Capabilities", "Portfolio", "Materials", "Contact Us"],
    switchLabel: "ไทย",
    hero: [
      ["Full Service", "Jobbing foundry work for industrial replacement parts", "From sample part and drawing review through casting, machining support and delivery coordination."],
      ["Gray & Ductile Iron", "Low to medium volume castings built around real shop needs", "FC25, FCD, SC46, S45C and Mo4140 parts for pulleys, gears, housings and machine components."],
      ["Machined Components", "Reliable casting and machining routes for maintenance teams", "Send the old part, sketch or drawing. We help choose material and production approach before quoting."],
      ["Portfolio Proof", "Industrial cast parts, pulleys, gears and heavy components", "A practical portfolio-led presentation using real Success Casting product assets."],
      ["Molten Metal Process", "Foundry imagery for a stronger first impression", "Additional background rotation uses existing licensed project assets, not unlicensed stock downloads."],
    ],
    call: "Call",
    portfolioBtn: "View Portfolio",
    welcomeTitle: "Welcome!",
    welcome: [
      "Success Casting provides sand casting, machined components and custom replacement parts for industrial customers that need practical support, clear communication and dependable delivery.",
      "We support jobbing and semi-production work from sample parts, drawings or repair requirements, with material guidance for FC25, FCD, SC46, S45C and Mo4140.",
      "Send part photos or drawings via LINE @SCNW for quick material, process and quote review.",
    ],
    specialtyTitle: "Low to medium volume is our speciality",
    specialty: "We focus on industrial castings and replacement parts where customer drawings, old samples and real operating requirements matter more than generic catalogue supply.",
    quote: "Request a Quote",
    portfolioTitle: "Portfolio",
    seeMore: "See more...",
    capabilities: "Capabilities",
    capabilityCards: [
      ["Low to medium volume", "Best for repair, custom and semi-production work where cost and lead time matter."],
      ["Full service support", "We review drawings, part photos, material needs and production route before quoting."],
      ["Industrial materials", "FC25 · FCD · SC46 · S45C · Mo4140 for machinery parts and replacement components."],
    ],
    materialsTitle: "Materials",
    materialsLead: "Core material routes for foundry and machined replacement parts.",
    contactTitle: "Contact Us",
    qr: "Scan LINE @SCNW",
    footer: "Industrial casting and machined components.",
  },
} as const;

const heroImages = [
  "/successcasting-assets/molten-metal.jpg",
  "/successcasting-assets/sand-casting.jpg",
  "/successcasting-assets/shopee-new/grinding-machining-s45c.jpg",
  "/successcasting-assets/qdc-heavy-castings.jpg",
  "/successcasting-assets/shopee-new/molten-metal-sc46.jpg",
];

const portfolio: Array<{ title: string; img: string; body: TextPair }> = [
  {
    title: "SUC Pulley / พูลเล่ย์",
    img: "/successcasting-assets/shopee-new/pulley-product-fc25-no-price.png",
    body: ["พูลเล่ย์ FC25/FCD และอะไหล่ทดแทนจากตัวอย่างจริง drawing หรือหน้างานซ่อมบำรุง", "FC25/FCD pulley replacement parts from sample, drawing or repair requirement."],
  },
  {
    title: "Gear & Drive Components",
    img: "/successcasting-assets/shopee-new/gear-fcd.jpg",
    body: ["เฟืองและชิ้นส่วนส่งกำลัง FCD / FC25 สำหรับเครื่องจักรอุตสาหกรรม", "FCD / FC25 gears and power-transmission parts for industrial machinery."],
  },
  {
    title: "Machining & Custom Parts",
    img: "/successcasting-assets/shopee-new/grinding-machining-s45c.jpg",
    body: ["งาน S45C / Mo4140 ที่ต้องกลึง เจียร หรือ finishing หลังวิเคราะห์แนวทางผลิต", "S45C / Mo4140 work needing machining, grinding or finishing after casting route review."],
  },
];

const materials: Array<{ code: string; name: TextPair; body: TextPair; img: string }> = [
  { code: "FC25", name: ["เหล็กหล่อเทา", "Gray Cast Iron"], body: ["พูลเล่ย์ housing ฐานเครื่อง และชิ้นส่วนที่ต้องการซับแรงสั่น", "Pulley, housing, base and vibration-damping parts"], img: "/successcasting-assets/shopee-new/pulley-product-fc25-no-price.png" },
  { code: "FCD", name: ["เหล็กหล่อเหนียว", "Ductile Cast Iron"], body: ["ชิ้นส่วนรับแรง เฟือง และงานที่ต้องการความเหนียวสูงกว่าเหล็กหล่อเทา", "Tougher load-bearing components and gears"], img: "/successcasting-assets/shopee-new/large-gear-fcd.jpg" },
  { code: "SC46", name: ["เหล็กกล้าหล่อ", "Cast Steel"], body: ["ชิ้นส่วนโครงสร้างและงานหล่อที่ต้องการความแข็งแรงสูง", "Structural and higher-strength cast components"], img: "/successcasting-assets/shopee-new/molten-metal-sc46.jpg" },
  { code: "S45C", name: ["เหล็กคาร์บอนปานกลาง", "Medium Carbon Steel"], body: ["ฮับ เพลา และอะไหล่ทดแทนที่ต้องกลึงตามแบบ", "Machined hubs, shafts and replacement parts"], img: "/successcasting-assets/shopee-new/grinding-machining-s45c.jpg" },
  { code: "Mo4140", name: ["เหล็กโครเมียม-โมลิบดีนัม", "Chromium-Moly Steel"], body: ["ชิ้นส่วนใช้งานหนักที่ต้องการความแข็งแรงและความทนทานสูง", "Heavy duty custom parts for demanding applications"], img: "/successcasting-assets/shopee-new/mold-boxes-fc25.jpg" },
];

const text = (pair: TextPair, lang: Lang) => pair[lang === "th" ? 0 : 1];

function UtilityBar({ lang }: { lang: Lang }) {
  const phoneLabel = lang === "th" ? "โทร" : "Phone";
  return (
    <div className="bg-[#252525] px-4 py-2 text-xs text-zinc-100 sm:text-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-8">
        <a href="mailto:SCNWMax@gmail.com" className="hover:text-[#c72127]">✉ Email: SCNWMax@gmail.com</a>
        <a href={phoneHref} className="hover:text-[#c72127]">☎ {phoneLabel}: {phoneDisplay}</a>
        <a href={lineUrl} className="hover:text-[#c72127]">LINE: @SCNW</a>
      </div>
    </div>
  );
}

function SiteHeader({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  const t = copy[lang];
  const links = ["/", "#welcome", "#capabilities", "#portfolio", "#materials", "#contact"];
  return (
    <header className="sticky top-0 z-50 border-b border-black/20 bg-[#333] text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white p-2 shadow-inner">
            <img src={pulleyLogo} alt="Success Casting logo" className="h-full w-full object-contain" decoding="async" />
          </span>
          <span className="leading-tight">
            <span className="block text-2xl font-semibold tracking-tight">Success Casting</span>
            <span className="block text-[12px] uppercase tracking-[0.18em] text-zinc-300">{t.tagline}</span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-1 text-sm font-semibold">
          {t.nav.map((label, index) => (
            <a key={label} href={links[index]} className={`px-3 py-2 transition hover:bg-[#c72127] ${index === 0 ? "bg-[#262626]" : ""}`}>
              {label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setLang(lang === "th" ? "en" : "th")}
            className="ml-1 border border-white/30 px-3 py-2 text-xs font-bold hover:bg-white hover:text-zinc-950"
            aria-label="Switch language"
          >
            {t.switchLabel}
          </button>
        </nav>
      </div>
    </header>
  );
}

function Hero({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const slide = copy[lang].hero[active];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((value: number) => (value + 1) % heroImages.length), 5200);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (direction: number) => {
    setActive((value: number) => (value + direction + heroImages.length) % heroImages.length);
    setPaused(true);
  };

  return (
    <section
      className="relative min-h-[520px] overflow-hidden bg-[#1f1f1f] text-white md:min-h-[610px]"
      aria-label="Success Casting foundry image slideshow"
      onPointerDown={(event) => {
        if (!(event.target as Element).closest("a,button")) pointerStart.current = { x: event.clientX, y: event.clientY };
      }}
      onPointerUp={(event) => {
        if ((event.target as Element).closest("a,button")) return;
        const start = pointerStart.current;
        pointerStart.current = null;
        if (!start) return;
        const dx = event.clientX - start.x;
        if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1);
      }}
    >
      <img key={heroImages[active]} src={heroImages[active]} alt={`${slide[0]} industrial casting background`} className="absolute inset-0 h-full w-full object-cover" decoding="async" draggable={false} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.38)_48%,rgba(0,0,0,.14))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />
      <button type="button" aria-label="Previous background product" onClick={() => go(-1)} className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center bg-black/45 text-3xl text-white ring-1 ring-white/30 hover:bg-[#c72127]">‹</button>
      <button type="button" aria-label="Next background product" onClick={() => go(1)} className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center bg-black/45 text-3xl text-white ring-1 ring-white/30 hover:bg-[#c72127]">›</button>
      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl items-center px-4 py-20 md:min-h-[610px]">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block bg-[#c72127] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">{slide[0]}</p>
          <h1 className="text-4xl font-light leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">{slide[1]}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-100">{slide[2]}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={phoneHref} className="inline-flex justify-center bg-[#c72127] px-8 py-3 text-lg font-semibold text-white hover:bg-[#9f171c]">☎ {copy[lang].call}</a>
            <Link href="/products" className="inline-flex justify-center border border-white/50 bg-black/20 px-7 py-3 font-semibold text-white hover:bg-white hover:text-zinc-950">{copy[lang].portfolioBtn}</Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroImages.map((_, index) => (
          <button key={index} type="button" aria-label={`Show slide ${index + 1}`} onClick={() => { setActive(index); setPaused(true); }} className={`h-2.5 transition-all ${active === index ? "w-9 bg-[#c72127]" : "w-3 bg-white/65 hover:bg-white"}`} />
        ))}
      </div>
    </section>
  );
}

function Welcome({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section id="welcome" className="bg-white px-4 py-16 text-zinc-700 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <h2 className="border-b border-zinc-200 pb-3 text-3xl font-semibold text-[#c72127] sm:text-4xl">{t.welcomeTitle}</h2>
          <div className="mt-6 space-y-5 text-base leading-8 sm:text-lg">
            {t.welcome.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
        <div className="border-l-4 border-[#c72127] bg-[#f5f5f5] p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-zinc-900">{t.specialtyTitle}</h3>
          <p className="mt-4 leading-8 text-zinc-600">{t.specialty}</p>
          <Link href="/contact" className="mt-6 inline-flex bg-[#c72127] px-6 py-3 font-semibold text-white hover:bg-zinc-900">{t.quote}</Link>
        </div>
      </div>
    </section>
  );
}

function Portfolio({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section id="portfolio" className="bg-white px-4 pb-16 text-zinc-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="border-b border-zinc-200 pb-3 text-3xl font-semibold text-[#c72127] sm:text-4xl">{t.portfolioTitle}</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.title} className="text-center">
              <Link href="/products" className="block bg-white p-2 transition hover:-translate-y-1 hover:shadow-xl">
                <img src={item.img} alt={item.title} className="mx-auto h-64 w-full object-contain" decoding="async" />
              </Link>
              <h3 className="mt-5 text-xl font-bold text-zinc-700">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-zinc-600">{text(item.body, lang)}</p>
            </article>
          ))}
        </div>
        <Link href="/products" className="mt-8 inline-flex rounded-sm bg-[#c72127] px-6 py-3 font-semibold text-white hover:bg-zinc-900">{t.seeMore}</Link>
      </div>
    </section>
  );
}

function Capabilities({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <section id="capabilities" className="bg-[#f1f1f1] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 border-b border-zinc-300 pb-3 text-3xl font-semibold text-[#c72127] sm:text-4xl">{t.capabilities}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {t.capabilityCards.map(([title, body]) => (
            <div key={title} className="border-t-4 border-[#c72127] bg-white p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
              <p className="mt-3 leading-7 text-zinc-600">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Materials({ lang }: { lang: Lang }) {
  const [active, setActive] = useState(0);
  const current = materials[active];
  const t = copy[lang];
  return (
    <section id="materials" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <h2 className="border-b border-zinc-200 pb-3 text-3xl font-semibold text-[#c72127] sm:text-4xl">{t.materialsTitle}</h2>
          <p className="mt-5 leading-8 text-zinc-600">{t.materialsLead}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {materials.map((item, index) => (
              <button key={item.code} type="button" onClick={() => setActive(index)} className={`border px-4 py-2 text-sm font-semibold ${active === index ? "border-[#c72127] bg-[#c72127] text-white" : "border-zinc-300 bg-white text-zinc-700 hover:border-[#c72127]"}`}>{item.code}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-0 overflow-hidden border border-zinc-200 bg-white shadow-lg md:grid-cols-[.95fr_1.05fr]">
          <img src={current.img} alt={`${current.code} ${text(current.name, lang)} casting`} className="h-full min-h-[330px] w-full object-cover" decoding="async" />
          <div className="p-8">
            <div className="inline-block bg-[#c72127] px-4 py-2 text-2xl font-bold text-white">{current.code}</div>
            <h3 className="mt-5 text-3xl font-semibold text-zinc-950">{text(current.name, lang)}</h3>
            <p className="mt-4 leading-8 text-zinc-600">{text(current.body, lang)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFooter({ lang }: { lang: Lang }) {
  const t = copy[lang];
  return (
    <footer id="contact" className="bg-[#2d2d2d] px-4 py-14 text-zinc-200 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_.7fr_1.1fr]">
        <div>
          <h3 className="border-b border-zinc-600 pb-3 text-2xl font-semibold text-[#e23a40]">{t.contactTitle}</h3>
          <div className="mt-5 space-y-2 leading-7">
            <p>บริษัท ซัคเซสเน็ทเวิร์ค จำกัด</p>
            <p>307/288 หมู่ที่ 11 ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ 10540</p>
            <p>{lang === "th" ? "โทร" : "Phone"}: <a href={phoneHref} className="text-white hover:text-[#e23a40]">{phoneDisplay}</a></p>
            <p>Email: <a href="mailto:SCNWMax@gmail.com" className="text-white hover:text-[#e23a40]">SCNWMax@gmail.com</a></p>
            <p>LINE: <a href={lineUrl} className="text-white hover:text-[#e23a40]">@SCNW</a></p>
          </div>
        </div>
        <a href={lineUrl} className="flex flex-col items-center justify-center bg-white p-5 text-center text-zinc-950 transition hover:-translate-y-1">
          <img src="/successcasting-assets/line-official-qr.png" alt="LINE QR @SCNW" className="h-36 w-36 object-contain" decoding="async" />
          <span className="mt-3 font-bold">{t.qr}</span>
        </a>
        <div className="min-h-[280px] overflow-hidden bg-zinc-800 ring-1 ring-white/10">
          <iframe src={mapEmbedSrc} width="600" height="320" style={{ border: 0, width: "100%", height: "100%", minHeight: 280 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Success Network Co., LTD. Google Map" />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-zinc-700 pt-5 text-sm text-zinc-400">
        © Success Casting / Success Network Co., Ltd. {t.footer}
      </div>
    </footer>
  );
}

export function SuccessCastingHome() {
  const [lang, setLang] = useState<Lang>("th");
  return (
    <main className="bg-white text-zinc-800">
      <UtilityBar lang={lang} />
      <SiteHeader lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Welcome lang={lang} />
      <Portfolio lang={lang} />
      <Capabilities lang={lang} />
      <Materials lang={lang} />
      <ContactFooter lang={lang} />
    </main>
  );
}
