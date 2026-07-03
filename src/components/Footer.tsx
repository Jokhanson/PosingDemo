import Link from "next/link";

const NAV = [
  { href: "/", label: "Главная" },
  { href: "/poses", label: "Каталог поз" },
  { href: "/random", label: "Случайная поза" },
  { href: "/tips", label: "Советы" },
  { href: "/favorites", label: "Избранное" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0F0F0F]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <Link href="/" className="inline-flex items-center gap-2 text-lg font-bold tracking-tight">
              <span className="text-[#D4A04A]">✦</span>
              <span className="font-display text-[#F5F0EB]">PosingDemo</span>
            </Link>
            <p className="mt-2 text-xs text-[#5A5550]">
              Гид по позированию для фотосессий
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs text-[#A09890] transition-colors hover:text-[#F5F0EB]"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-[#5A5550]">Соцсети</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-7 items-center justify-center rounded-md bg-[#1A1A1A] text-[#A09890] transition-all hover:bg-[#2A2A2A] hover:text-[#F5F0EB]"
              aria-label="Instagram"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
            <a
              href="https://t.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-7 items-center justify-center rounded-md bg-[#1A1A1A] text-[#A09890] transition-all hover:bg-[#2A2A2A] hover:text-[#F5F0EB]"
              aria-label="Telegram"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m22 2-7 20-4-9-9-4Z"/>
                <path d="M22 2 11 13"/>
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-7 items-center justify-center rounded-md bg-[#1A1A1A] text-[#A09890] transition-all hover:bg-[#2A2A2A] hover:text-[#F5F0EB]"
              aria-label="YouTube"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-[#5A5550]">
            &copy; {new Date().getFullYear()} PosingDemo. Сделано с любовью к фотографии.
          </p>
        </div>
      </div>
    </footer>
  );
}
