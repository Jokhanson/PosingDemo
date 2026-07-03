"use client";

import Image from "next/image";
import { getAllPoses } from "@/lib/poses";
import { pluralPose } from "@/lib/utils";
import { PoseCard } from "@/components/PoseCard";

const poses = getAllPoses();

const btnPrimary =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#D4A04A] px-6 text-sm font-semibold text-[#0F0F0F] no-underline transition-all hover:bg-[#D4A04A]/90 active:translate-y-px";

const btnSecondary =
  "inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#2A2A2A] px-6 text-sm font-semibold text-[#F5F0EB] no-underline transition-all hover:bg-[#1A1A1A] active:translate-y-px";

export function HeroSection() {
  const featured = poses.slice(0, 4);
  const hero = poses[0];

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[80vh] flex-col lg:flex-row">
        <div className="flex flex-col justify-center px-4 py-16 sm:px-8 lg:w-1/2 lg:px-12 lg:py-24 xl:px-20">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D4A04A]/20 bg-[#D4A04A]/10 px-3 py-1 text-xs text-[#D4A04A] w-fit">
            <span className="size-1.5 rounded-full bg-[#D4A04A]" />
            Гид по позированию
          </div>

          <h1 className="font-display text-5xl font-bold leading-none tracking-tight text-[#F5F0EB] sm:text-6xl lg:text-7xl xl:text-8xl">
            Позируй
            <br />
            <span className="text-[#D4A04A]">как профессионал</span>
          </h1>

          <p className="mt-3 max-w-md text-base leading-relaxed text-[#A09890] sm:text-lg">
            Идеальные позы для любых съёмок. Проверенные варианты
            с практическими советами от фотографов.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/poses" className={btnPrimary}>
              Смотреть позы
            </a>
            <a href="/random" className={btnSecondary}>
              Случайная поза
            </a>
          </div>

          {featured.length > 0 && (
            <div className="mt-12 flex items-center gap-4 border-t border-white/5 pt-6">
              <div className="flex -space-x-2">
                {featured.slice(0, 3).map((pose, i) => (
                  <div
                    key={pose.id}
                    className="relative size-9 overflow-hidden rounded-full border-2 border-[#0F0F0F]"
                  >
                    <Image
                      src={pose.imageUrl}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                ))}
              </div>
              <span className="text-xs text-[#5A5550]">
                {pluralPose(poses.length)} в коллекции
              </span>

              <span className="h-5 w-px bg-[#2A2A2A]" />

              <div className="flex items-center gap-2">
                <span className="text-xs text-[#5A5550]">Мы в соцсетях</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-md bg-[#1A1A1A] text-[#A09890] transition-all hover:bg-[#D4A04A] hover:text-[#0F0F0F]"
                  aria-label="Instagram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </a>
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-md bg-[#1A1A1A] text-[#A09890] transition-all hover:bg-[#D4A04A] hover:text-[#0F0F0F]"
                  aria-label="Telegram"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m22 2-7 20-4-9-9-4Z"/>
                    <path d="M22 2 11 13"/>
                  </svg>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-9 items-center justify-center rounded-md bg-[#1A1A1A] text-[#A09890] transition-all hover:bg-[#D4A04A] hover:text-[#0F0F0F]"
                  aria-label="YouTube"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="hidden lg:relative lg:block lg:min-h-full lg:w-1/2">
          {hero && (
            <>
              <Image
                src={hero.imageUrl}
                alt=""
                fill
                className="object-cover"
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent lg:via-transparent" />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export function CategoriesSection() {
  const categories = [
    {
      key: "portrait",
      name: "Портреты",
      desc: "Классические и креативные портретные позы",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=250&fit=crop&crop=face",
      count: poses.filter((p) => p.category === "portrait").length,
    },
    {
      key: "couple",
      name: "Пары",
      desc: "Романтичные и игривые позы для двоих",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=200&h=250&fit=crop",
      count: poses.filter((p) => p.category === "couple").length,
    },
    {
      key: "group",
      name: "Группы",
      desc: "Композиции для компаний от 3 человек",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=200&h=250&fit=crop",
      count: poses.filter((p) => p.category === "group").length,
    },
    {
      key: "fashion",
      name: "Мода",
      desc: "Смелые и стильные позы для fashion-съёмок",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200&h=250&fit=crop",
      count: poses.filter((p) => p.category === "fashion").length,
    },
    {
      key: "dance",
      name: "Танец",
      desc: "Динамичные и грациозные танцевальные позы",
      image: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=200&h=250&fit=crop",
      count: poses.filter((p) => p.category === "dance").length,
    },
    {
      key: "lifestyle",
      name: "Повседневность",
      desc: "Естественные позы для lifestyle-контента",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=200&h=250&fit=crop",
      count: poses.filter((p) => p.category === "lifestyle").length,
    },
    {
      key: "editorial",
      name: "Редакционная",
      desc: "Артовые и концептуальные редакционные позы",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=200&h=250&fit=crop",
      count: poses.filter((p) => p.category === "editorial").length,
    },
  ];

  return (
    <section className="border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A5550]">
            Направления
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-[#F5F0EB] sm:text-4xl">
            Исследуйте по&nbsp;категориям
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.key}
              href={`/poses?category=${cat.key}`}
              className="group relative block overflow-hidden rounded-lg bg-[#1A1A1A] no-underline transition-all hover:ring-1 hover:ring-[#D4A04A]/50"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={cat.image}
                  alt=""
                  fill
                  className="object-cover transition-all duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display text-xl font-bold text-[#F5F0EB]">
                    {cat.name}
                  </h3>
                  <p className="mt-1 text-sm text-[#C8C0B5]">{cat.desc}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-[#A09890]">
                    <span className="inline-block size-1 rounded-full bg-[#D4A04A]" />
                    {pluralPose(cat.count)}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
