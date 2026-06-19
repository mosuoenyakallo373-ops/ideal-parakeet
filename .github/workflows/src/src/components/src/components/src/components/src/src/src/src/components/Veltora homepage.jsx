import { useState } from 'react';
import {
  ShoppingBag, Search, ArrowRight, Truck, ShieldCheck, RotateCcw,
  Plane, Watch, Smartphone, Package, Menu, X, Plus, Check,
} from 'lucide-react';

const INK = '#14171F';
const PORCELAIN = '#F1F2F4';
const VERMILION = '#FF4524';
const COBALT = '#1E3FFF';
const STONE = '#8B909C';

const departments = [
  {
    code: 'DEPT. A',
    name: 'Essentials',
    desc: 'What you reach for every day. Restocked, never out.',
    icon: Package,
    bg: VERMILION,
    fg: '#FFFFFF',
  },
  {
    code: 'DEPT. B',
    name: 'Trip Gear',
    desc: 'Built for transit. Packed light, holds everything.',
    icon: Plane,
    bg: INK,
    fg: '#FFFFFF',
  },
  {
    code: 'DEPT. C',
    name: 'Accessories',
    desc: 'Finish the outfit. Watches, belts, bags.',
    icon: Watch,
    bg: PORCELAIN,
    fg: INK,
    border: true,
  },
  {
    code: 'DEPT. D',
    name: 'Gadgets',
    desc: 'Tech that earns its space in your bag.',
    icon: Smartphone,
    bg: COBALT,
    fg: '#FFFFFF',
  },
];

const products = [
  { name: 'Voyager Packing Cubes', dept: 'TRIP GEAR', price: 449, icon: Plane, bg: INK },
  { name: 'Daily Reset Toiletry Kit', dept: 'ESSENTIALS', price: 289, icon: Package, bg: VERMILION },
  { name: 'Cobalt Steel Watch', dept: 'ACCESSORIES', price: 899, icon: Watch, bg: COBALT },
  { name: 'Pulse Wireless Earbuds', dept: 'GADGETS', price: 699, icon: Smartphone, bg: COBALT },
  { name: 'Transit Crossbody Bag', dept: 'TRIP GEAR', price: 599, icon: Plane, bg: INK },
  { name: 'Anchor Leather Belt', dept: 'ACCESSORIES', price: 349, icon: Watch, bg: VERMILION },
];

export default function VeltoraHomepage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  function addToCart(name) {
    setToast(name);
    window.clearTimeout(addToCart._t);
    addToCart._t = window.setTimeout(() => setToast(null), 2200);
  }

  return (
    <div style={{ fontFamily: "'Inter', sans-serif", color: INK, background: '#FFFFFF' }} className="min-h-screen w-full">
      <style>{`
        .veltora-display { font-family: 'Archivo Black', sans-serif; }
        .veltora-label { font-family: 'Big Shoulders Display', sans-serif; }
        .veltora-mono { font-family: 'Space Mono', monospace; }

        .veltora-marquee-track {
          display: inline-flex;
          animation: veltora-scroll 22s linear infinite;
        }
        @keyframes veltora-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .veltora-marquee-track { animation: none; }
        }

        .veltora-stamp {
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .veltora-stamp:hover {
          transform: rotate(0deg) translateY(-4px) !important;
          box-shadow: 0 12px 28px rgba(20,23,31,0.18);
        }
        .veltora-product:hover .veltora-product-img {
          transform: scale(1.04);
        }
        .veltora-product-img { transition: transform 0.3s ease; }
      `}</style>

      {/* Manifest ticker */}
      <div style={{ background: INK }} className="overflow-hidden whitespace-nowrap py-2">
        <div className="veltora-marquee-track">
          {[0, 1].map((rep) => (
            <span key={rep} className="veltora-mono text-[11px] tracking-widest text-white/80 uppercase px-4">
              Free nationwide shipping over R750 &nbsp;·&nbsp; CPT &nbsp;·&nbsp; JHB &nbsp;·&nbsp; DBN &nbsp;·&nbsp; PTA &nbsp;·&nbsp; Secure checkout via Paystack &nbsp;·&nbsp; Free nationwide shipping over R750 &nbsp;·&nbsp; CPT &nbsp;·&nbsp; JHB &nbsp;·&nbsp; DBN &nbsp;·&nbsp; PTA &nbsp;·&nbsp; Secure checkout via Paystack &nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b" style={{ borderColor: 'rgba(20,23,31,0.08)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="veltora-display text-xl tracking-tight">VELTORA</a>

          <nav className="hidden md:flex items-center gap-8 veltora-label text-[15px] uppercase tracking-wide">
            <a href="#departments" className="hover:opacity-60">Essentials</a>
            <a href="#departments" className="hover:opacity-60">Trip Gear</a>
            <a href="#departments" className="hover:opacity-60">Accessories</a>
            <a href="#departments" className="hover:opacity-60">Gadgets</a>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="hidden sm:inline-flex p-2 rounded-full hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <Search size={19} />
            </button>
            <button aria-label="Cart" className="p-2 rounded-full hover:bg-black/5 relative focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2">
              <ShoppingBag size={19} />
            </button>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-full hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-5 py-4 flex flex-col gap-4 veltora-label text-base uppercase tracking-wide" style={{ borderColor: 'rgba(20,23,31,0.08)' }}>
            <a href="#departments" onClick={() => setMenuOpen(false)}>Essentials</a>
            <a href="#departments" onClick={() => setMenuOpen(false)}>Trip Gear</a>
            <a href="#departments" onClick={() => setMenuOpen(false)}>Accessories</a>
            <a href="#departments" onClick={() => setMenuOpen(false)}>Gadgets</a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="max-w-6xl mx-auto px-5 md:px-8 pt-14 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <p className="veltora-mono text-xs tracking-widest uppercase mb-5" style={{ color: VERMILION }}>
            Now shipping nationwide
          </p>
          <h1 className="veltora-display text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl tracking-tight">
            PACKED FOR<br />WHATEVER'S<br />NEXT.
          </h1>
          <p className="mt-6 max-w-md text-base md:text-lg" style={{ color: STONE }}>
            From the daily carry to the long haul — Veltora stocks what you actually reach for. Shipped nationwide, sorted by department.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#departments"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full veltora-label uppercase tracking-wide text-[15px] text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
              style={{ background: INK }}
            >
              Shop the manifest <ArrowRight size={16} />
            </a>
          </div>
        </div>

        {/* Stamp cluster */}
        <div className="hidden lg:block relative h-[420px]">
          {departments.map((d, i) => {
            const positions = [
              'top-0 left-6 -rotate-6',
              'top-20 right-0 rotate-3',
              'bottom-16 left-0 rotate-2',
              'bottom-0 right-10 -rotate-3',
            ];
            return (
              <div
                key={d.name}
                className={`veltora-stamp absolute w-44 p-4 rounded-2xl shadow-lg ${positions[i]} ${d.border ? 'border-2' : ''}`}
                style={{ background: d.bg, color: d.fg, borderColor: d.border ? 'rgba(20,23,31,0.15)' : undefined }}
              >
                <d.icon size={20} />
                <p className="veltora-mono text-[10px] tracking-widest uppercase mt-3 opacity-70">{d.code}</p>
                <p className="veltora-label text-lg uppercase leading-tight mt-0.5">{d.name}</p>
              </div>
            );
          })}
        </div>

        {/* Mobile department grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {departments.map((d) => (
            <div
              key={d.name}
              className={`p-4 rounded-2xl ${d.border ? 'border-2' : ''}`}
              style={{ background: d.bg, color: d.fg, borderColor: d.border ? 'rgba(20,23,31,0.15)' : undefined }}
            >
              <d.icon size={18} />
              <p className="veltora-mono text-[9px] tracking-widest uppercase mt-2 opacity-70">{d.code}</p>
              <p className="veltora-label text-base uppercase leading-tight">{d.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Departments */}
      <section id="departments" className="max-w-6xl mx-auto px-5 md:px-8 pb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="veltora-display text-2xl md:text-3xl tracking-tight">The Departments</h2>
          <p className="veltora-mono text-xs uppercase tracking-widest hidden sm:block" style={{ color: STONE }}>4 active</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {departments.map((d) => (
            <a
              key={d.name}
              href="#featured"
              className={`group rounded-2xl p-7 flex flex-col justify-between min-h-[200px] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${d.border ? 'border-2' : ''}`}
              style={{ background: d.bg, color: d.fg, borderColor: d.border ? 'rgba(20,23,31,0.15)' : undefined }}
            >
              <div className="flex items-center justify-between">
                <d.icon size={26} />
                <span className="veltora-mono text-[11px] tracking-widest uppercase opacity-70">{d.code}</span>
              </div>
              <div>
                <p className="veltora-display text-2xl mt-6 mb-1">{d.name}</p>
                <p className="text-sm opacity-80 max-w-xs">{d.desc}</p>
                <span className="inline-flex items-center gap-1.5 veltora-label uppercase text-sm tracking-wide mt-4 group-hover:gap-2.5 transition-all">
                  Shop dept <ArrowRight size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section id="featured" className="max-w-6xl mx-auto px-5 md:px-8 pb-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="veltora-display text-2xl md:text-3xl tracking-tight">Fresh in the Manifest</h2>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-6 md:overflow-visible">
          {products.map((p) => (
            <div key={p.name} className="veltora-product shrink-0 w-44 md:w-auto">
              <div
                className="veltora-product-img aspect-square rounded-2xl flex items-center justify-center mb-3"
                style={{ background: p.bg }}
              >
                <p.icon size={36} color="#FFFFFF" strokeWidth={1.5} />
              </div>
              <p className="veltora-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: STONE }}>{p.dept}</p>
              <p className="text-sm font-semibold leading-snug mb-1.5">{p.name}</p>
              <div className="flex items-center justify-between">
                <span className="veltora-mono text-sm font-bold">R{p.price.toFixed(2)}</span>
                <button
                  onClick={() => addToCart(p.name)}
                  aria-label={`Add ${p.name} to cart`}
                  className="p-1.5 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                  style={{ background: INK }}
                >
                  <Plus size={14} color="#FFFFFF" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Value strip */}
      <section className="border-t border-b" style={{ borderColor: 'rgba(20,23,31,0.1)' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-10 grid sm:grid-cols-3 gap-8">
          {[
            { icon: Truck, title: 'Nationwide delivery', caption: '2–4 working days, every province.' },
            { icon: ShieldCheck, title: 'Secure checkout', caption: 'Paystack-protected, every order.' },
            { icon: RotateCcw, title: 'Easy returns', caption: '30 days, no questions asked.' },
          ].map((v) => (
            <div key={v.title} className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl shrink-0" style={{ background: PORCELAIN }}>
                <v.icon size={20} />
              </div>
              <div>
                <p className="veltora-label uppercase tracking-wide text-[15px]">{v.title}</p>
                <p className="text-sm" style={{ color: STONE }}>{v.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: INK, color: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid md:grid-cols-[1.2fr_1fr] gap-12">
          <div>
            <p className="veltora-display text-2xl tracking-tight mb-3">VELTORA</p>
            <p className="text-sm max-w-xs mb-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Packed for whatever's next. Get restock alerts and new drops.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); addToCart('Subscribed'); }}
              className="flex max-w-sm rounded-full overflow-hidden border"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}
            >
              <input
                type="email"
                required
                placeholder="you@email.com"
                className="bg-transparent px-4 py-2.5 text-sm flex-1 placeholder:text-white/40 focus:outline-none"
              />
              <button type="submit" className="px-5 py-2.5 veltora-label uppercase text-sm tracking-wide" style={{ background: VERMILION }}>
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-3 gap-6 veltora-label uppercase text-sm tracking-wide">
            <div className="flex flex-col gap-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <p className="text-white">Shop</p>
              <a href="#departments">Essentials</a>
              <a href="#departments">Trip Gear</a>
              <a href="#departments">Accessories</a>
              <a href="#departments">Gadgets</a>
            </div>
            <div className="flex flex-col gap-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <p className="text-white">Help</p>
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
              <a href="#">Contact</a>
            </div>
            <div className="flex flex-col gap-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              <p className="text-white">Company</p>
              <a href="#">About</a>
              <a href="#">Careers</a>
            </div>
          </div>
        </div>
        <div
          className="max-w-6xl mx-auto px-5 md:px-8 py-5 border-t flex flex-col sm:flex-row justify-between gap-2 veltora-mono text-[11px] tracking-wide uppercase"
          style={{ borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.45)' }}
        >
          <span>© 2026 Veltora</span>
          <span>Secure checkout powered by Paystack</span>
        </div>
      </footer>

      {/* Toast */}
      {toast && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 px-5 py-3 rounded-full shadow-xl text-sm text-white z-50"
          style={{ background: INK }}
        >
          <Check size={16} color={VERMILION} />
          <span className="veltora-label uppercase tracking-wide text-[13px]">{toast} added</span>
        </div>
      )}
    </div>
  );
  }
  
