"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "/", label: "Главная" },
  { href: "/poses", label: "Каталог поз" },
  { href: "/random", label: "Случайная поза" },
  { href: "/tips", label: "Советы" },
  { href: "/favorites", label: "Избранное" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0F0F0F]/40 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight"
        >
          <span className="text-[#D4A04A]">✦</span>
          <span className="font-display text-[#F5F0EB]">PosingDemo</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-[#C8C0B5] transition-colors hover:bg-white/5 hover:text-[#F5F0EB]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Меню"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-[#0F0F0F] md:hidden">
          <nav className="flex flex-col px-4 pb-4 pt-2">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-[#C8C0B5] transition-colors hover:bg-white/5 hover:text-[#F5F0EB]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
