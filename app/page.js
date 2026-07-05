'use client';
import { motion } from 'framer-motion';
import { Play, Ticket, ShoppingBag, Youtube, Music2 } from 'lucide-react';

const LINKS = [
  { icon: Play, label: 'Single Baru: "Goyang Kota"', sub: 'Spotify · Apple Music', url: '#', bg: 'bg-magenta text-white' },
  { icon: Youtube, label: 'Video Klip Terbaru', sub: 'YouTube — 1,2 jt views', url: 'https://youtube.com', bg: 'bg-kuning' },
  { icon: Ticket, label: 'Jadwal Manggung', sub: 'Tur "Panas Dingin" 2026', url: '#', bg: 'bg-biru text-white' },
  { icon: ShoppingBag, label: 'Merch Resmi', sub: 'Kaos · Vinyl · Totebag', url: '#', bg: 'bg-hijau' },
  { icon: Music2, label: 'Semua Platform Musik', sub: 'Deezer, Tidal, dll.', url: '#', bg: 'bg-krem' },
];

const BARS = [0.9, 1.4, 0.7, 1.2, 1.0, 1.5, 0.8];

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-14">
      {/* Memphis shapes */}
      <div className="wiggle absolute left-6 top-10 h-16 w-16 rounded-full border-[6px] border-magenta" aria-hidden="true" />
      <div className="absolute right-8 top-24 h-14 w-14 rotate-12 bg-kuning pop" aria-hidden="true" />
      <div className="wiggle absolute bottom-16 left-10 text-5xl font-bold text-biru" aria-hidden="true">✚</div>
      <div className="absolute -right-6 bottom-24 h-20 w-20 rounded-full bg-hijau pop" aria-hidden="true" />
      <svg className="absolute left-1/2 top-6 -translate-x-1/2" width="120" height="16" aria-hidden="true"><polyline points="0,12 15,4 30,12 45,4 60,12 75,4 90,12 105,4 120,12" fill="none" stroke="#ff4fa3" strokeWidth="4" /></svg>

      <div className="w-full max-w-md">
        {/* Poster header */}
        <motion.header initial={{ opacity: 0, y: -14, rotate: -2 }} animate={{ opacity: 1, y: 0, rotate: -2 }} transition={{ duration: 0.5 }} className="pop rounded-2xl bg-panda p-6 text-center text-krem">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-kuning">🕺 Funk · Disco · Bandung</p>
          <h1 className="mt-2 font-display text-4xl leading-tight text-white md:text-5xl">
            DISKO<span className="text-magenta">PANDA</span>
          </h1>
          {/* Equalizer */}
          <div className="eq mt-3 flex h-8 items-end justify-center gap-1.5" aria-hidden="true">
            {BARS.map((s, i) => (
              <span key={i} style={{ height: `${s * 20}px`, background: ['#ff4fa3', '#ffc933', '#3b82f6', '#22c55e'][i % 4], animation: `eq ${0.7 + (i % 3) * 0.2}s ease-in-out ${i * 0.1}s infinite` }} />
            ))}
          </div>
          <p className="mt-2 font-mono text-xs text-krem/70">Single baru sudah rilis — dengarkan sekarang!</p>
        </motion.header>

        {/* Links pop */}
        <nav className="mt-7 space-y-4" aria-label="Tautan band">
          {LINKS.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className={`pop pop-hover flex items-center gap-4 rounded-2xl p-4 ${l.bg} ${i % 2 ? 'rotate-[0.6deg]' : '-rotate-[0.6deg]'}`}
            >
              <span className="pop grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-panda"><l.icon size={19} /></span>
              <span className="flex-1">
                <span className="block font-bold leading-tight">{l.label}</span>
                <span className="block font-mono text-xs opacity-70">{l.sub}</span>
              </span>
            </motion.a>
          ))}
        </nav>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75 }} className="mt-8 text-center font-mono text-xs text-panda/50">
          booking: manajer@diskopanda.id · © {new Date().getFullYear()}
        </motion.p>
      </div>
    </main>
  );
}
