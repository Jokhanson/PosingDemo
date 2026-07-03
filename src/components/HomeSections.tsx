"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Shuffle, Sparkles } from "lucide-react";
import { getAllPoses } from "@/lib/poses";
import { PoseCard } from "@/components/PoseCard";
import { Button } from "@/components/ui/button";

const poses = getAllPoses();

export function HeroSection() {
  const featured = poses.slice(0, 4);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4A04A]/5 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A04A]/20 bg-[#D4A04A]/10 px-3 py-1 text-xs text-[#D4A04A]">
            <Sparkles className="size-3" />
            Гид по позированию
          </div>
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-[#F5F0EB] sm:text-5xl lg:text-6xl">
            Позируй как
            <br />
            <span className="text-[#D4A04A]">профессионал</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#A09890] sm:text-lg">
            Каталог проверенных поз для фотосессий: от классических портретов до
            editorial-съёмок. С практическими советами от фотографов.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/poses">
              <Button className="h-10 bg-[#D4A04A] text-[#0F0F0F] hover:bg-[#D4A04A]/90 px-5 text-sm font-medium">
                Смотреть позы
                <ArrowRight className="ml-1.5 size-4" />
              </Button>
            </Link>
            <Link href="/random">
              <Button
                variant="outline"
                className="h-10 border-[#2A2A2A] text-[#F5F0EB] hover:bg-[#1A1A1A] px-5 text-sm"
              >
                <Shuffle className="mr-1.5 size-4" />
                Случайная поза
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {featured.map((pose) => (
            <PoseCard key={pose.id} pose={pose} />
          ))}
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
      count: poses.filter((p) => p.category === "portrait").length,
    },
    {
      key: "couple",
      name: "Пары",
      desc: "Романтичные и игривые позы для двоих",
      count: poses.filter((p) => p.category === "couple").length,
    },
    {
      key: "group",
      name: "Группы",
      desc: "Композиции для компаний от 3 человек",
      count: poses.filter((p) => p.category === "group").length,
    },
    {
      key: "fashion",
      name: "Мода",
      desc: "Смелые и стильные позы для fashion-съёмок",
      count: poses.filter((p) => p.category === "fashion").length,
    },
    {
      key: "dance",
      name: "Танец",
      desc: "Динамичные и грациозные танцевальные позы",
      count: poses.filter((p) => p.category === "dance").length,
    },
    {
      key: "lifestyle",
      name: "Повседневность",
      desc: "Естественные позы для lifestyle-контента",
      count: poses.filter((p) => p.category === "lifestyle").length,
    },
    {
      key: "editorial",
      name: "Редакционная",
      desc: "Артовые и концептуальные редакционные позы",
      count: poses.filter((p) => p.category === "editorial").length,
    },
  ];

  return (
    <section className="border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="font-display text-3xl font-bold text-[#F5F0EB]">
            Категории поз
          </h2>
          <p className="mt-2 text-[#A09890]">
            Выберите тип съёмки
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={`/poses?category=${cat.key}`}
              className="group rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-5 transition-all hover:border-[#D4A04A]/50 hover:bg-[#1A1A1A]/80"
            >
              <h3 className="font-display text-lg font-bold text-[#F5F0EB] group-hover:text-[#D4A04A] transition-colors">
                {cat.name}
              </h3>
              <p className="mt-1 text-sm text-[#A09890]">{cat.desc}</p>
              <span className="mt-3 inline-block text-xs text-[#5A5550]">
                {cat.count} поз
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
