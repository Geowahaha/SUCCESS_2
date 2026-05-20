"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const lineUrl = "https://line.me/R/ti/p/@SCNW";
const pulleyLogo = "/successcasting-assets/logo/success-logo2-transparent.png";
const mapEmbedSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.0468607006387!2d100.8540115!3d13.5939493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d43805247e39b%3A0xa792ad76155fb9a1!2sSuccess%20Network%20Co.%2CLTD.!5e0!3m2!1sen!2sth!4v1779216458535!5m2!1sen!2sth";

const heroSlides = [
  {
    eyebrow: "Full Service",
    title: "Jobbing foundry work for industrial replacement parts",
    text: "From sample part and drawing review through casting, machining support and delivery coordination.",
    img: "/successcasting-assets/molten-metal.jpg",
  },
  {
    eyebrow: "Gray & Ductile Iron",
    title: "Low to medium volume castings built around real shop needs",
    text: "FC25, FCD, SC46, S45C and Mo4140 parts for pulleys, gears, housings and machine components.",
    img: "/successcasting-assets/sand-casting.jpg",
  },
  {
    eyebrow: "Machined Components",
    title: "Reliable casting and machining routes for maintenance teams",
    text: "Send the old part, sketch or drawing. We help choose material and production approach before quoting.",
    img: "/successcasting-assets/shopee-new/grinding-machining-s45c.jpg",
  },
  {
    eyebrow: "Portfolio Proof",
    title: "Industrial cast parts, pulleys, gears and heavy components",
    text: "A practical portfolio-led presentation using real Success Casting product assets.",
    img: "/successcasting-assets/qdc-heavy-castings.jpg",
  },
  {
    eyebrow: "Molten Metal Process",
    title: "Foundry imagery for a stronger first impression",
    text: "Additional background rotation uses existing licensed project assets, not unlicensed stock downloads.",
    img: "/successcasting-assets/shopee-new/molten-metal-sc46.jpg",
  },
];

const portfolio = [
  {
    title: "SUC Pulley / พูลเล่ย์",
    img: "/successcasting-assets/shopee-new/pulley-product-fc25-no-price.png",
    body: "FC25/FCD pulley replacement parts from sample, drawing or repair requirement.",
  },
  {
    title: "Gear & Drive Components",
    img: "/successcasting-assets/shopee-new/gear-fcd.jpg",
    body: "FCD / FC25 gears and power-transmission parts for industrial machinery.",
  },
  {
    title: "Machining & Custom Parts",
    img: "/successcasting-assets/shopee-new/grinding-machining-s45c.jpg",
    body: "S45C / Mo4140 work needing machining, grinding or finishing after casting route review.",
  },
];

const capabilities = [
  ["Low to medium volume", "เหมาะกับงานซ่อมบำรุง งานตามแบบ และ semi-production ที่ต้องคุมต้นทุนและระยะเวลา"],
  ["Full service support", "ช่วยดู drawing, รูปชิ้นงาน, วัสดุ และแนวทางผลิตก่อนเสนอราคา"],
  ["Industrial materials", "FC25 · FCD · SC46 · S45C · Mo4140 สำหรับชิ้นส่วนเครื่องจักรและอะไหล่เฉพาะทาง"],
];

const materials = [
  ["FC25", "Gray Cast Iron", "Pulley, housing, base and vibration-damping parts", "/successcasting-assets/shopee-new/pulley-product-fc25-no-price.png"],
  ["FCD", "Ductile Cast Iron", "Tougher load-bearing components and gears", "/successcasting-assets/shopee-new/large-gear-fcd.jpg"],
  ["SC46", "Cast Steel", "Structural and higher-strength cast components", "/successcasting-assets/shopee-new/molten-metal-sc46.jpg"],
  ["S45C", "Medium Carbon Steel", "Machined hubs, shafts and replacement parts", "/successcasting-assets/shopee-new/grinding-machining-s45c.jpg"],
  ["Mo4140", "Chromium-Moly Steel", "Heavy duty custom parts for demanding applications", "/successcasting-assets/shopee-new/mold-boxes-fc25.jpg"],
];

function UtilityBar() {
  return (
    <div className="bg-[#252525] px-4 py-2 text-xs text-zinc-100 sm:text-sm">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1.5 sm:flex-row sm:gap-8">
        <a href="mailto:SCNWMax@gmail.com" className="hover:text-[#c72127]">✉ Email: SCNWMax@gmail.com</a>
        <a href="tel:0986362356" className="hover:text-[#c72127]">☎ Tel.: 098-636-2356</a>
        <a href={lineUrl} className="hover:text-[#c72127]">LINE: @SCNW</a>
      </div>
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/20 bg-[#333] text-white shadow-lg">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-3 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-16 w-16 place-items-center rounded-full bg-white p-2 shadow-inner">
            <img src={pulleyLogo} alt="Success Casting logo" className="h-full w-full object-contain" decoding="async" />
          </span>
          <span className="leading-tight">
            <span className="block text-2xl font-semibold tracking-tight">Success Casting</span>
            <span className="block text-[12px] uppercase tracking-[0.18em] text-zinc-300">Foundry and Machine Components</span>
          </span>
        </Link>
        <nav className="flex flex-wrap gap-1 text-sm font-semibold">
          {[
            ["Home", "/"],
            ["Why Castings?", "#welcome"],
            ["Capabilities", "#capabilities"],
            ["Portfolio", "#portfolio"],
            ["Materials", "#materials"],
            ["Contact Us", "#contact"],
          ].map(([label, href], index) => (
            <a key={label} href={href} className={`px-3 py-2 transition hover:bg-[#c72127] ${index === 0 ? "bg-[#262626]" : ""}`}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const pointerStart = useRef<{ x: number; y: number } | null>(null);
  const slide = heroSlides[active];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((value) => (value + 1) % heroSlides.length), 5200);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (direction: number) => {
    setActive((value) => (value + direction + heroSlides.length) % heroSlides.length);
    setPaused(true);
  };

  return (
    <section
      className="relative min-h-[520px] overflow-hidden bg-[#1f1f1f] text-white md:min-h-[610px]"
      aria-label="Success Casting foundry image slideshow"
      onPointerDown={(event) => { if (!(event.target as Element).closest("a,button")) pointerStart.current = { x: event.clientX, y: event.clientY }; }}
      onPointerUp={(event) => {
        if ((event.target as Element).closest("a,button")) return;
        const start = pointerStart.current;
        pointerStart.current = null;
        if (!start) return;
        const dx = event.clientX - start.x;
        if (Math.abs(dx) > 44) go(dx < 0 ? 1 : -1);
      }}
    >
      <img key={slide.img} src={slide.img} alt={`${slide.eyebrow} industrial casting background`} className="absolute inset-0 h-full w-full object-cover" decoding="async" draggable={false} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.38)_48%,rgba(0,0,0,.14))]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/70 to-transparent" />

      <button type="button" aria-label="Previous background product" onClick={() => go(-1)} className="absolute left-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center bg-black/45 text-3xl text-white ring-1 ring-white/30 hover:bg-[#c72127]">
        ‹
      </button>
      <button type="button" aria-label="Next background product" onClick={() => go(1)} className="absolute right-4 top-1/2 z-20 grid h-11 w-11 -translate-y-1/2 place-items-center bg-black/45 text-3xl text-white ring-1 ring-white/30 hover:bg-[#c72127]">
        ›
      </button>

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-6xl items-center px-4 py-20 md:min-h-[610px]">
        <div className="max-w-2xl">
          <p className="mb-4 inline-block bg-[#c72127] px-4 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">{slide.eyebrow}</p>
          <h1 className="text-4xl font-light leading-tight tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">{slide.title}</h1>
          <p className="mt-5 max-w-xl text-lg leading-8 text-zinc-100">{slide.text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex justify-center bg-[#c72127] px-7 py-3 font-semibold text-white hover:bg-[#9f171c]">Contact Us</Link>
            <Link href="/products" className="inline-flex justify-center border border-white/50 bg-black/20 px-7 py-3 font-semibold text-white hover:bg-white hover:text-zinc-950">View Portfolio</Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, index) => (
          <button key={item.eyebrow} type="button" aria-label={`Show ${item.eyebrow}`} onClick={() => { setActive(index); setPaused(true); }} className={`h-2.5 transition-all ${active === index ? "w-9 bg-[#c72127]" : "w-3 bg-white/65 hover:bg-white"}`} />
        ))}
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section id="welcome" className="bg-white px-4 py-16 text-zinc-700 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-start">
        <div>
          <h2 className="border-b border-zinc-200 pb-3 text-3xl font-semibold text-[#c72127] sm:text-4xl">Welcome!</h2>
          <div className="mt-6 space-y-5 text-base leading-8 sm:text-lg">
            <p>
              Success Casting provides sand casting, machined components and custom replacement parts for industrial customers that need practical support, clear communication and dependable delivery.
            </p>
            <p>
              We support jobbing and semi-production work from sample parts, drawings or repair requirements, with material guidance for FC25, FCD, SC46, S45C and Mo4140.
            </p>
            <p className="text-zinc-600">
              ส่งรูปชิ้นงานหรือ drawing ทาง LINE @SCNW เพื่อประเมินวัสดุ กระบวนการผลิต และราคาเบื้องต้นอย่างรวดเร็ว
            </p>
          </div>
        </div>
        <div className="border-l-4 border-[#c72127] bg-[#f5f5f5] p-6 shadow-sm">
          <h3 className="text-2xl font-semibold text-zinc-900">Low to medium volume is our speciality</h3>
          <p className="mt-4 leading-8 text-zinc-600">
            We focus on industrial castings and replacement parts where customer drawings, old samples and real operating requirements matter more than generic catalogue supply.
          </p>
          <Link href="/contact" className="mt-6 inline-flex bg-[#c72127] px-6 py-3 font-semibold text-white hover:bg-zinc-900">Request a Quote</Link>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-white px-4 pb-16 text-zinc-800 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2 className="border-b border-zinc-200 pb-3 text-3xl font-semibold text-[#c72127] sm:text-4xl">Portfolio</h2>
        <div className="mt-8 grid gap-10 md:grid-cols-3">
          {portfolio.map((item) => (
            <article key={item.title} className="text-center">
              <Link href="/products" className="block bg-white p-2 transition hover:-translate-y-1 hover:shadow-xl">
                <img src={item.img} alt={item.title} className="mx-auto h-64 w-full object-contain" decoding="async" />
              </Link>
              <h3 className="mt-5 text-xl font-bold text-zinc-700">{item.title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-7 text-zinc-600">{item.body}</p>
            </article>
          ))}
        </div>
        <Link href="/products" className="mt-8 inline-flex rounded-sm bg-[#c72127] px-6 py-3 font-semibold text-white hover:bg-zinc-900">See more...</Link>
      </div>
    </section>
  );
}

function Capabilities() {
  return (
    <section id="capabilities" className="bg-[#f1f1f1] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
        {capabilities.map(([title, body]) => (
          <div key={title} className="border-t-4 border-[#c72127] bg-white p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-zinc-900">{title}</h3>
            <p className="mt-3 leading-7 text-zinc-600">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Materials() {
  const [active, setActive] = useState(0);
  const current = materials[active];
  return (
    <section id="materials" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
        <div>
          <h2 className="border-b border-zinc-200 pb-3 text-3xl font-semibold text-[#c72127] sm:text-4xl">Materials</h2>
          <p className="mt-5 leading-8 text-zinc-600">Core material routes for foundry and machined replacement parts.</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {materials.map((item, index) => (
              <button key={item[0]} type="button" onClick={() => setActive(index)} className={`border px-4 py-2 text-sm font-semibold ${active === index ? "border-[#c72127] bg-[#c72127] text-white" : "border-zinc-300 bg-white text-zinc-700 hover:border-[#c72127]"}`}>{item[0]}</button>
            ))}
          </div>
        </div>
        <div className="grid gap-0 overflow-hidden border border-zinc-200 bg-white shadow-lg md:grid-cols-[.95fr_1.05fr]">
          <img src={current[3]} alt={`${current[0]} ${current[1]} casting`} className="h-full min-h-[330px] w-full object-cover" decoding="async" />
          <div className="p-8">
            <div className="inline-block bg-[#c72127] px-4 py-2 text-2xl font-bold text-white">{current[0]}</div>
            <h3 className="mt-5 text-3xl font-semibold text-zinc-950">{current[1]}</h3>
            <p className="mt-4 leading-8 text-zinc-600">{current[2]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactFooter() {
  return (
    <footer id="contact" className="bg-[#2d2d2d] px-4 py-14 text-zinc-200 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1fr_.7fr_1.1fr]">
        <div>
          <h3 className="border-b border-zinc-600 pb-3 text-2xl font-semibold text-[#e23a40]">Contact Us</h3>
          <div className="mt-5 space-y-2 leading-7">
            <p>บริษัท ซัคเซสเน็ทเวิร์ค จำกัด</p>
            <p>307/288 หมู่ที่ 11 ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ 10540</p>
            <p>Phone: <a href="tel:0986362356" className="text-white hover:text-[#e23a40]">098-636-2356</a></p>
            <p>Email: <a href="mailto:SCNWMax@gmail.com" className="text-white hover:text-[#e23a40]">SCNWMax@gmail.com</a></p>
            <p>LINE: <a href={lineUrl} className="text-white hover:text-[#e23a40]">@SCNW</a></p>
          </div>
        </div>
        <a href={lineUrl} className="flex flex-col items-center justify-center bg-white p-5 text-center text-zinc-950 transition hover:-translate-y-1">
          <img src="/successcasting-assets/line-official-qr.png" alt="LINE QR @SCNW" className="h-36 w-36 object-contain" decoding="async" />
          <span className="mt-3 font-bold">Scan LINE @SCNW</span>
        </a>
        <div className="min-h-[280px] overflow-hidden bg-zinc-800 ring-1 ring-white/10">
          <iframe src={mapEmbedSrc} width="600" height="320" style={{ border: 0, width: "100%", height: "100%", minHeight: 280 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Success Network Co., LTD. Google Map" />
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-zinc-700 pt-5 text-sm text-zinc-400">
        © Success Casting / Success Network Co., Ltd. Industrial casting and machined components.
      </div>
    </footer>
  );
}

export function SuccessCastingHome() {
  return (
    <main className="bg-white text-zinc-800">
      <UtilityBar />
      <SiteHeader />
      <Hero />
      <Welcome />
      <Portfolio />
      <Capabilities />
      <Materials />
      <ContactFooter />
    </main>
  );
}
