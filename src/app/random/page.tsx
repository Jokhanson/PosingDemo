"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { getRandomPose } from "@/lib/poses";
import { useFavorites } from "@/components/ThemeProvider";
import { Shuffle, Heart, Check, Sparkles } from "lucide-react";
import { Pose } from "@/lib/types";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function RandomPosePage() {
  const [pose, setPose] = useState<Pose | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [pulse, setPulse] = useState(false);
  const { isFav, toggle } = useFavorites();

  const reroll = useCallback(() => {
    setTransitioning(true);
    setTimeout(() => {
      setPose(getRandomPose());
      setTransitioning(false);
    }, 200);
  }, []);

  const fav = pose ? isFav(pose.id) : false;

  const handleFav = () => {
    if (!pose) return;
    toggle(pose.id);
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-4rem)] flex-col lg:flex-row">
      {/* LEFT: CTA + Tips */}
      <div className="flex flex-col justify-center px-6 py-12 sm:px-10 lg:w-1/2 lg:px-14 lg:py-16 xl:px-20">
        <div className="mx-auto w-full max-w-md lg:mx-0">
          <button
            onClick={reroll}
            disabled={transitioning}
            className="inline-flex h-14 w-full items-center justify-center gap-3 rounded-lg bg-[#D4A04A] px-8 text-lg font-semibold text-[#0F0F0F] transition-all hover:bg-[#D4A04A]/90 active:translate-y-px disabled:opacity-60"
          >
            <Shuffle className={`size-5 ${transitioning ? "animate-spin" : ""}`} />
            {transitioning ? "Загружаем..." : "Случайная поза"}
          </button>

          <p className="mt-3 text-sm leading-relaxed text-[#A09890] sm:text-base">
            Нажмите на кнопку — получите новый вариант для съёмки
          </p>

          {pose ? (
            <div
              key={pose.id}
              className={`mt-8 transition-opacity duration-300 ${transitioning ? "opacity-0" : "opacity-100"}`}
            >
              <div className="border-t border-white/5 pt-6">
                <h2 className="font-display text-3xl font-bold leading-tight text-[#F5F0EB] sm:text-4xl">
                  {pose.nameRu}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[#A09890]">
                  {pose.descriptionRu}
                </p>

                <div className="mt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-[#5A5550]">
                    Советы
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {pose.tips.map((tip, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-[#A09890]"
                      >
                        <span className="mt-1 flex size-3.5 shrink-0 items-center justify-center rounded-full border border-[#D4A04A]/30">
                          <Check className="size-2 text-[#D4A04A]" />
                        </span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 flex flex-wrap gap-1.5">
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
          ) : (
            <div className="mt-8 border-t border-white/5 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#5A5550]">
                <Sparkles className="size-3" />
                Как это работает
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#A09890]">
                Нажмите «Случайная поза» — получите готовый вариант для съёмки с
                описанием и советами. Можно нажимать сколько угодно раз.
              </p>
              <div className="mt-4 flex items-center gap-4 rounded-lg bg-[#1A1A1A] px-4 py-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-[#D4A04A]/10">
                  <Heart className="size-5 text-[#D4A04A]" />
                </div>
                <div className="text-xs text-[#5A5550]">
                  <span className="block text-[#A09890]">Избранное</span>
                  Понравилась поза? Нажмите на сердечко и сохраните в коллекцию.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT: Photo or Placeholder */}
      <div className="flex flex-col lg:w-1/2">
        <div className="relative min-h-[50vh] flex-1 lg:min-h-0">
          {pose ? (
            <>
              <Image
                key={pose.id}
                src={pose.imageUrl}
                alt={pose.nameRu}
                fill
                className={`object-cover transition-opacity duration-300 ${transitioning ? "opacity-0" : "opacity-100"}`}
                sizes="50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent lg:via-transparent" />
            </>
          ) : (
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[#0F0F0F]">
              <div className="absolute inset-0">
                <Image
                  src={`${basePath}/gradients/1.png`}
                  alt=""
                  fill
                  className="animate-[flow-1_9s_linear_infinite] object-cover"
                  sizes="50vw"
                  unoptimized
                />
                <Image
                  src={`${basePath}/gradients/2.png`}
                  alt=""
                  fill
                  className="animate-[flow-2_9s_linear_infinite] object-cover"
                  sizes="50vw"
                  unoptimized
                />
                <Image
                  src={`${basePath}/gradients/3.png`}
                  alt=""
                  fill
                  className="animate-[flow-3_9s_linear_infinite] object-cover"
                  sizes="50vw"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F] via-[#0F0F0F]/20 to-transparent lg:via-transparent" />
              <div className="relative z-10">
                <div className="mx-auto flex size-20 items-center justify-center rounded-full bg-[#0F0F0F]/60 backdrop-blur-sm">
                  <Shuffle className="size-10 text-[#D4A04A] animate-[pulse-slow_3s_ease-in-out_infinite]" />
                </div>
              </div>
            </div>
          )}
        </div>

        {pose && (
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
              {fav ? "В избранном" : "В избранное"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
