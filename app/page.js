'use client';

import { Instagram, Youtube, Twitter, Mail, Music, Link2 } from 'lucide-react';

export default function Home() {
  const links = [
    { icon: <Link2 size={18} />, label: 'My Website', url: 'https://sanzyretro.com' },
    { icon: <Youtube size={18} />, label: 'YouTube Channel', url: 'https://youtube.com/@sanzy' },
    { icon: <Instagram size={18} />, label: 'Instagram', url: 'https://instagram.com/sanzy' },
    { icon: <Music size={18} />, label: 'Spotify Tracks', url: 'https://open.spotify.com/user/sanzy' },
  ];

  return (
    <main className="min-h-screen bg-[#ffe8d6] text-[#222] flex items-center justify-center px-4 relative overflow-hidden font-sans">

      {/* Background block colors */}
      <div className="absolute w-40 h-40 bg-[#ffafcc] rotate-45 top-10 left-[-40px] rounded-lg shadow-xl" />
      <div className="absolute w-24 h-24 bg-[#bde0fe] bottom-10 right-[-30px] rounded-md shadow-lg" />
      <div className="absolute w-56 h-12 bg-[#cdb4db] rotate-[-12deg] top-[60%] left-[30%] blur-sm" />

      <div className="relative z-10 w-full max-w-md bg-white border-[4px] border-[#222] rounded-2xl p-8 shadow-[8px_8px_0px_#222]">

        {/* Avatar */}
        <div className="w-24 h-24 rounded-full mx-auto overflow-hidden border-[4px] border-[#222] shadow-md mb-4">
          <img
            src="https://i.pravatar.cc/150?img=21"
            alt="Sanzy"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Nama dan Bio */}
        <div className="text-center">
          <h1 className="text-3xl font-extrabold tracking-tight text-[#ff006e]">
            NamaAnda
          </h1>
          <p className="mt-1 text-sm text-[#444] italic">Neo-nostalgic content creator 🎮✨</p>
        </div>

        {/* Link Buttons */}
        <div className="mt-6 space-y-4">
          {links.map(({ icon, label, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 justify-center w-full py-3 rounded-xl border-[3px] border-[#222] bg-[#fefae0] hover:bg-[#ffd6a5] transition duration-200 font-bold text-[#222] shadow-[4px_4px_0px_#222]"
            >
              {icon} {label}
            </a>
          ))}
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-5 mt-6">
          <a href="https://twitter.com/sanzy" target="_blank" className="hover:scale-110 transition">
            <Twitter size={22} className="text-[#8338ec]" />
          </a>
          <a href="mailto:sanzy@email.com" target="_blank" className="hover:scale-110 transition">
            <Mail size={22} className="text-[#ff006e]" />
          </a>
        </div>

        <p className="mt-6 text-center text-xs text-[#777]">© 2025 Sanzystore. Stay groovy!</p>
      </div>
    </main>
  );
}
