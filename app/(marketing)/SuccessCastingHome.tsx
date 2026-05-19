"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const lineUrl = "https://line.me/R/ti/p/@SCNW";

const pulleyLogo = "/successcasting-assets/logo/success-logo2-transparent.png";

const socialLinks = [
  { label: "LINE", icon: "LINE", href: lineUrl },
  { label: "Facebook", icon: "f", href: "#contact" },
  { label: "Instagram", icon: "◎", href: "#contact" },
  { label: "LinkedIn", icon: "in", href: "#contact" },
];

const materials = [
  {
    code: "FC25",
    name: "เหล็กหล่อเทา / Gray Cast Iron",
    text: "งานหล่อ FC25 สำหรับ pulley, housing, base และชิ้นส่วนเครื่องจักรที่ต้องการลดแรงสั่นสะเทือนและควบคุมต้นทุน",
    img: "/successcasting-assets/shopee-new/pulley-product-fc25-no-price.png",
  },
  {
    code: "FCD",
    name: "เหล็กหล่อเหนียว / Ductile Cast Iron",
    text: "เหมาะกับงานที่ต้องการความเหนียว รับแรงกระแทก และความน่าเชื่อถือมากกว่าเหล็กหล่อเทาทั่วไป",
    img: "/successcasting-assets/shopee-new/large-gear-fcd.jpg",
  },
  {
    code: "SC46",
    name: "เหล็กกล้าหล่อ / Cast Steel",
    text: "สำหรับชิ้นส่วนรับแรง งานโครงสร้าง และงานอุตสาหกรรมที่ต้องควบคุมกระบวนการหล่ออย่างจริงจัง",
    img: "/successcasting-assets/shopee-new/molten-metal-sc46.jpg",
  },
  {
    code: "S45C",
    name: "Medium Carbon Steel",
    text: "เหมาะกับชิ้นงานที่ต้องการความแข็งแรงและมีขั้นตอนกลึง/ปรับแต่งต่อ เช่น hub, shaft และ custom machinery parts",
    img: "/successcasting-assets/shopee-new/grinding-machining-s45c.jpg",
  },
  {
    code: "Mo4140",
    name: "Chromium-Molybdenum Steel",
    text: "สำหรับงานหนักที่ต้องการความทนทานสูง ชิ้นส่วนเฉพาะทาง และงานซ่อมบำรุงที่ต้องลด downtime",
    img: "/successcasting-assets/shopee-new/mold-boxes-fc25.jpg",
  },
];

function HeroSlider() {
  const [activeBg, setActiveBg] = useState(0);
  const currentBg = materials[activeBg];

  useEffect(() => {
    const id = window.setInterval(() => setActiveBg((v) => (v + 1) % materials.length), 5200);
    return () => window.clearInterval(id);
  }, []);

  const goBg = (direction: number) => setActiveBg((v) => (v + direction + materials.length) % materials.length);

  return (
    <section className="relative min-h-[720px] overflow-hidden bg-zinc-950 text-white sm:min-h-[820px]" aria-label="Success Casting material image hero slideshow">
      <img
        key={currentBg.code}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
        src={currentBg.img}
        alt={`${currentBg.code} ${currentBg.name} background`}
        decoding="async"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.90)_0%,rgba(0,0,0,.66)_48%,rgba(0,0,0,.38)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(217,157,45,.26),transparent_34%),linear-gradient(180deg,rgba(0,0,0,.76)_0%,rgba(0,0,0,.24)_36%,rgba(0,0,0,.82)_100%)]" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:80px_80px]" />

      <button type="button" aria-label="Previous background product" onClick={() => goBg(-1)} className="absolute left-4 top-1/2 z-30 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/45 text-3xl font-black text-white backdrop-blur transition hover:bg-[#d99d2d] hover:text-zinc-950">
        ‹
      </button>
      <button type="button" aria-label="Next background product" onClick={() => goBg(1)} className="absolute right-24 top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/25 bg-black/45 text-3xl font-black text-white backdrop-blur transition hover:bg-[#d99d2d] hover:text-zinc-950 lg:grid">
        ›
      </button>

      <div className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 overflow-hidden rounded-3xl bg-[#d99d2d] p-2 shadow-2xl lg:block">
        {socialLinks.map((item) => (
          <a key={item.label} href={item.href} aria-label={item.label} className="mb-2 grid h-14 w-14 place-items-center rounded-full bg-zinc-950 text-xs font-black text-white last:mb-0 hover:bg-white hover:text-zinc-950">
            {item.icon}
          </a>
        ))}
      </div>

      <Link href="/contact" className="absolute right-4 top-8 z-30 hidden rounded-[1.75rem] bg-[#d99d2d] px-8 py-5 text-center text-xl font-black uppercase leading-tight text-zinc-950 shadow-2xl shadow-black/30 transition hover:scale-105 hover:bg-white sm:inline-flex lg:right-8">
        Request<br />a Quote
      </Link>

      <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-end px-5 py-10 sm:min-h-[820px] sm:px-6 lg:px-8">
        <div className="pb-14 lg:max-w-4xl">
          <div className="hidden rounded-2xl bg-black/35 px-4 py-3 text-xs font-black uppercase tracking-[0.24em] text-zinc-200 backdrop-blur sm:inline-flex">
            Professional Sand Casting
          </div>
          <p className="mt-24 mb-6 inline-flex rounded-full bg-[#d99d2d] px-5 py-3 text-xs font-black uppercase tracking-[0.26em] text-zinc-950 shadow-xl shadow-black/30 sm:mt-28">FC25 · FCD · SC46 · S45C · Mo4140</p>
          <h1 className="max-w-3xl text-2xl font-black uppercase leading-[0.98] tracking-[-0.035em] text-white drop-shadow-2xl sm:text-3xl lg:text-4xl">
            Global Metal Castings<br />Machined Components
          </h1>
          <p className="mt-7 max-w-3xl border-l-4 border-[#d99d2d] pl-6 text-lg leading-8 text-zinc-100 drop-shadow-lg">
            งานหล่อทรายและชิ้นส่วนเครื่องจักรแบบมืออาชีพสำหรับ SUC Pulley, OEM replacement parts และงานอุตสาหกรรมที่ต้องการความน่าเชื่อถือจริง
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact" className="inline-flex justify-center rounded-3xl bg-[#d99d2d] px-10 py-5 text-lg font-black uppercase tracking-wide text-zinc-950 shadow-xl shadow-black/30 hover:bg-white">
              Request a Quote
            </Link>
            <Link href="/products" className="inline-flex justify-center rounded-3xl border border-white/40 bg-black/30 px-10 py-5 text-lg font-black text-white backdrop-blur hover:bg-white/10">
              ดูผลงานสินค้า
            </Link>
          </div>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-end">
            <a href={lineUrl} className="rounded-2xl bg-white p-3 text-center text-zinc-950 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl">
              <img src="/successcasting-assets/line-official-qr.png" alt="QR code สำหรับเพิ่ม LINE @SCNW" className="mx-auto h-32 w-32 object-contain" decoding="async" />
              <div className="mt-2 text-xs font-black">LINE @SCNW</div>
            </a>
            <div className="rounded-2xl bg-black/45 px-5 py-4 text-sm font-bold text-zinc-100 backdrop-blur">
              <span className="text-[#d99d2d]">{currentBg.code}</span> · {currentBg.name}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TopBar() {
  return (
    <>
      <div className="bg-black px-4 py-3 text-sm text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 sm:flex-row sm:items-center sm:justify-center sm:gap-10">
          <a href="mailto:SCNWMax@gmail.com" className="hover:text-[#d99d2d]">✉ Email: SCNWMax@gmail.com</a>
          <a href="tel:0986362356" className="hover:text-[#d99d2d]">☎ โทร: 098-636-2356</a>
          <a href={lineUrl} className="hover:text-[#d99d2d]">LINE ID: @SCNW</a>
        </div>
      </div>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#080808]/92 text-white shadow-lg backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-4">
            <img src={pulleyLogo} alt="Success Network Company logo" className="h-32 w-32 object-contain" decoding="async" />
            <span>
              <span className="block text-2xl font-semibold leading-none tracking-tight sm:text-3xl">Success Casting</span>
              <span className="text-xs uppercase tracking-[0.18em] text-zinc-300 sm:text-sm">Sand Casting & Machined Components</span>
            </span>
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm font-semibold md:justify-end">
            <Link className="rounded px-4 py-3 hover:bg-[#d99d2d] hover:text-zinc-950" href="/">หน้าแรก</Link>
            <Link className="rounded px-4 py-3 hover:bg-[#d99d2d] hover:text-zinc-950" href="/products">สินค้า</Link>
            <a className="rounded px-4 py-3 hover:bg-[#d99d2d] hover:text-zinc-950" href="#materials">วัสดุที่รับผลิต</a>
            <a className="rounded px-4 py-3 hover:bg-[#d99d2d] hover:text-zinc-950" href="#why">ทำไมต้องเรา</a>
            <Link className="rounded-2xl bg-[#d99d2d] px-5 py-3 font-black text-zinc-950 hover:bg-white" href="/contact">ขอใบเสนอราคา</Link>
          </nav>
        </div>
      </header>
    </>
  );
}

function MaterialSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setActive((v) => (v + 1) % materials.length), 4300);
    return () => window.clearInterval(id);
  }, [paused]);

  const go = (direction: number) => {
    setActive((v) => (v + direction + materials.length) % materials.length);
    setPaused(true);
  };

  const current = materials[active];

  return (
    <section id="materials" className="bg-[#f4f1ea] px-4 py-20 text-zinc-800 sm:px-6 lg:px-8" onPointerDown={() => setPaused(true)} onTouchStart={() => setPaused(true)}>
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div>
          <p className="inline-flex rounded-full bg-[#d99d2d] px-5 py-3 text-sm font-black uppercase tracking-[0.24em] text-zinc-950">วัสดุหลักที่รับผลิต</p>
          <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] text-zinc-950 sm:text-6xl">FC25, FCD, SC46, S45C, Mo4140</h2>
          <p className="mt-6 text-lg leading-9 text-zinc-600">
            Success Casting โฟกัสงานหล่อทรายและชิ้นส่วนเครื่องจักรตามแบบลูกค้า พร้อมให้คำแนะนำวัสดุตามลักษณะการใช้งานจริง: FC25 สำหรับงานหล่อเทา, FCD สำหรับงานเหนียว, SC46 / S45C / Mo4140 สำหรับงานรับแรงและงานแข็งแรงสูง
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {materials.map((item, index) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setActive(index);
                  setPaused(true);
                }}
                className={`rounded border px-4 py-2 text-sm font-bold transition ${index === active ? "border-[#d99d2d] bg-[#d99d2d] text-zinc-950" : "border-zinc-300 bg-white text-zinc-700 hover:border-[#d99d2d]"}`}
              >
                {item.code}
              </button>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-2xl shadow-black/20">
          <div className="relative min-h-[480px]">
            <img src={current.img} alt={`${current.code} casting product`} className="absolute inset-0 h-full w-full object-cover" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <div className="mb-4 inline-flex rounded bg-[#d99d2d] px-5 py-3 text-3xl font-black text-zinc-950">{current.code}</div>
              <h3 className="text-3xl font-black text-white sm:text-4xl">{current.name}</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-zinc-100">{current.text}</p>
              <div className="mt-7 flex items-center justify-between gap-4">
                <div className="text-xs uppercase tracking-[0.24em] text-zinc-300">{paused ? "Manual mode" : "สไลด์อัตโนมัติ"} · {active + 1}/5</div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => go(-1)} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl text-white ring-1 ring-white/30 hover:bg-[#d99d2d] hover:text-zinc-950" aria-label="Previous material">‹</button>
                  <button type="button" onClick={() => go(1)} className="grid h-11 w-11 place-items-center rounded-full bg-white/15 text-2xl text-white ring-1 ring-white/30 hover:bg-[#d99d2d] hover:text-zinc-950" aria-label="Next material">›</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SuccessCastingHome() {
  return (
    <main className="bg-white text-zinc-800">
      <TopBar />
      <HeroSlider />

      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.75fr_1fr] lg:items-center">
          <div>
          <p className="mb-5 inline-flex rounded-full bg-[#d99d2d] px-5 py-3 text-sm font-black text-zinc-950">About Us</p>
          <h2 className="text-5xl font-black uppercase leading-none tracking-[-0.05em] text-zinc-950 sm:text-6xl">Casting and Machining Metal Components</h2>
          <div className="mt-6 space-y-5 text-lg leading-9 text-zinc-600">
            <p>
              Success Casting ให้บริการผลิตชิ้นงานหล่อทราย ชิ้นส่วนเครื่องจักร และงานตามแบบลูกค้า โดยเน้นความถูกต้องของวัสดุ ความแข็งแรง และการส่งมอบที่ใช้งานได้จริงในโรงงานอุตสาหกรรม
            </p>
            <p>
              เรารับงานตั้งแต่งานจำนวนน้อย งานซ่อมบำรุง ไปจนถึงงานกึ่ง production พร้อมรองรับวัสดุ FC25, FCD, SC46, S45C และ Mo4140 รวมถึงงาน SUC Pulley และอะไหล่เครื่องจักรเฉพาะทาง
            </p>
          </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#d99d2d] p-3 shadow-2xl shadow-black/15">
            <img src="/successcasting-assets/shopee-new/mold-boxes-fc25.jpg" alt="Success Casting mold boxes and casting portfolio" className="h-[460px] w-full rounded-[1.4rem] object-cover" decoding="async" />
            <Link href="/products" aria-label="ดูผลงานสินค้า 20+ รูป" className="group absolute bottom-8 left-8 rounded-2xl bg-black/80 px-6 py-4 text-white backdrop-blur transition hover:-translate-y-1 hover:bg-[#d99d2d] hover:text-zinc-950 focus:outline-none focus:ring-4 focus:ring-[#d99d2d]/60">
              <div className="text-3xl font-black">20+</div>
              <div className="text-sm text-zinc-300 transition group-hover:text-zinc-950">real product images added</div>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="inline-block border-b-4 border-[#d99d2d] pb-2 text-5xl font-black uppercase tracking-[-0.04em] text-zinc-950">ผลงานสินค้า</h2>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {[
              ["SUC Pulley / พูลเล่ย์", "/successcasting-assets/shopee-new/pulley-product-fc25-no-price.png", "งาน pulley จาก FC25/FCD ตามตัวอย่างหรือ drawing"],
              ["เฟืองและชิ้นส่วนส่งกำลัง", "/successcasting-assets/shopee-new/gear-fcd.jpg", "เหมาะกับ FCD / FC25 สำหรับงานรับแรงและระบบส่งกำลัง"],
              ["ชิ้นงานหล่อและงาน machining", "/successcasting-assets/shopee-new/grinding-machining-s45c.jpg", "งาน S45C / Mo4140 ที่ต้องการกลึง เจียร์ หรือปรับแต่งต่อ"],
            ].map(([title, img, body]) => (
              <article key={title} className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                <img src={img} alt={title} className="h-72 w-full object-cover" decoding="async" />
                <div className="p-6">
                  <h3 className="text-2xl font-black text-zinc-950">{title}</h3>
                  <p className="mt-3 leading-7 text-zinc-600">{body}</p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/products" className="mt-8 inline-flex rounded-3xl bg-[#d99d2d] px-8 py-4 font-black text-zinc-950 hover:bg-zinc-950 hover:text-white">ดูสินค้าทั้งหมด</Link>
        </div>
      </section>

      <MaterialSlider />

      <section id="why" className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-3">
          {[
            ["รับงานตามแบบ", "ส่ง drawing, รูปตัวอย่าง หรือชิ้นงานเดิม เพื่อประเมินวัสดุและกระบวนการผลิต"],
            ["คุยงานเร็วผ่าน LINE", "สแกน QR หรือเพิ่ม LINE ID @SCNW เพื่อส่งรูปและสอบถามรายละเอียดทันที"],
            ["โฟกัสงานอุตสาหกรรม", "วัสดุหลัก FC25, FCD, SC46, S45C, Mo4140 สำหรับงานเครื่องจักรและอะไหล่เฉพาะทาง"],
          ].map(([title, body]) => (
            <div key={title} className="rounded border border-zinc-200 bg-[#faf9f7] p-7">
              <h3 className="text-2xl font-semibold text-red-700">{title}</h3>
              <p className="mt-4 leading-8 text-zinc-600">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#2f2f2f] px-4 py-14 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.26em] text-red-300">ติดต่อ Success Casting</p>
            <h2 className="mt-3 text-4xl font-semibold">ส่งรูปชิ้นงานหรือแบบเพื่อประเมินราคา</h2>
            <p className="mt-4 text-lg text-zinc-200">โทร 098-636-2356 หรือเพิ่ม LINE ID @SCNW</p>
          </div>
          <a href={lineUrl} className="rounded bg-white p-4 text-center text-zinc-900 shadow-xl">
            <img src="/successcasting-assets/line-official-qr.png" alt="LINE QR @SCNW" className="mx-auto h-36 w-36 object-contain" decoding="async" />
            <div className="mt-2 font-black">LINE ID: @SCNW</div>
          </a>
        </div>
      </section>
    </main>
  );
}
