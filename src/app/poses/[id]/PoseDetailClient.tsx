"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getPoseById } from "@/lib/poses";
import { useFavorites } from "@/components/ThemeProvider";
import { CATEGORY_LABELS, DIFFICULTY_LABELS, GENDER_LABELS } from "@/lib/types";
import { ArrowLeft, Heart, Check } from "lucide-react";

export default function PoseDetailClient({ id }: { id: string }) {
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const backHref = from === "favorites" ? "/favorites" : "/poses";
  const backLabel = from === "favorites" ? "Назад в избранное" : "Назад к каталогу";
  const pose = getPoseById(id);
  const { isFav, toggle } = useFavorites();
  const [pulse, setPulse] = useState(false);

  const handleFav = () => {
    toggle(pose!.id);
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
  };

  if (!pose) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-[#A09890]">Поза не найдена</p>
          <Link href="/poses">
            <span className="mt-2 inline-block text-sm text-[#D4A04A] hover:underline">
              Вернуться в каталог
            </span>
          </Link>
        </div>
      </div>
    );
  }

  const fav = isFav(pose.id);

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
      {/* LEFT: Photo + Favorite */}
      <div className="flex flex-col lg:w-1/2">
        <div className="relative min-h-[50vh] flex-1 lg:min-h-0">
          <Image
            src={pose.imageUrl}
            alt={pose.nameRu}
            fill
            className="object-cover"
            sizes="50vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0F0F0F]/10 to-[#0F0F0F] lg:via-[#0F0F0F]/20" />
        </div>

        <div className="border-t border-white/5 bg-[#0F0F0F] px-6 py-5 sm:px-10">
          <button
            onClick={handleFav}
            className={`flex w-full items-center justify-center gap-3 rounded-lg px-6 py-3 text-base font-semibold transition-all ${
              fav
                ? "bg-red-400/10 text-red-400 hover:bg-red-400/20"
                : "border border-[#2A2A2A] text-[#F5F0EB] hover:border-[#D4A04A]/40 hover:bg-[#1A1A1A]"
            }`}
          >
            <Heart
              className={`size-5 transition-transform ${
                fav ? "fill-current" : ""
              } ${pulse ? "animate-[pulse-heart_0.3s_ease-out]" : ""}`}
            />
            {fav ? "В избранном" : "Добавить в избранное"}
          </button>
        </div>
      </div>

      {/* RIGHT: Content */}
      <div className="flex flex-col justify-start px-6 py-8 sm:px-10 lg:w-1/2 lg:px-14 lg:py-10 xl:px-20">
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <Link
            href={backHref}
            className="inline-flex items-center gap-2 rounded-md bg-[#1A1A1A] px-4 py-2 text-sm text-[#5A5550] transition-colors hover:bg-[#2A2A2A] hover:text-[#F5F0EB]"
          >
            <ArrowLeft className="size-4" />
            {backLabel}
          </Link>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-full border border-[#D4A04A]/20 bg-[#D4A04A]/10 px-2.5 py-0.5 text-xs font-medium text-[#D4A04A]">
              {CATEGORY_LABELS[pose.category]}
            </span>
            <span className="inline-flex items-center rounded-full border border-[#2A2A2A] px-2.5 py-0.5 text-xs font-medium text-[#A09890]">
              {DIFFICULTY_LABELS[pose.difficulty]}
            </span>
            <span className="inline-flex items-center rounded-full border border-[#2A2A2A] px-2.5 py-0.5 text-xs font-medium text-[#A09890]">
              {GENDER_LABELS[pose.gender]}
            </span>
          </div>

          <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-[#F5F0EB] sm:text-4xl">
            {pose.nameRu}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-[#A09890] sm:text-base">
            {pose.descriptionRu}
          </p>

          <div className="mt-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#5A5550]">
              Советы
            </h3>
            <ul className="mt-3 space-y-2.5">
              {pose.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#A09890] sm:text-base">
                  <span className="mt-1 flex size-4 shrink-0 items-center justify-center rounded-full border border-[#D4A04A]/30">
                    <Check className="size-2.5 text-[#D4A04A]" />
                  </span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {pose.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[#1A1A1A] px-2 py-0.5 text-xs text-[#5A5550]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
