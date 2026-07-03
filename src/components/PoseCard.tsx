"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { Pose, CATEGORY_LABELS, DIFFICULTY_LABELS } from "@/lib/types";
import { useFavorites } from "@/components/ThemeProvider";

interface PoseCardProps {
  pose: Pose;
  backTo?: string;
}

export function PoseCard({ pose, backTo }: PoseCardProps) {
  const { isFav, toggle } = useFavorites();
  const fav = isFav(pose.id);
  const [pulse, setPulse] = useState(false);
  const linkHref = backTo ? `/poses/${pose.id}?from=${backTo}` : `/poses/${pose.id}`;

  const handleFav = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggle(pose.id);
    setPulse(true);
    setTimeout(() => setPulse(false), 300);
  };

  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#1A1A1A] transition-all duration-300 hover:ring-1 hover:ring-[#D4A04A]/50">
      <Link href={linkHref} className="block">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={pose.imageUrl}
            alt={pose.nameRu}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h3 className="font-display text-lg font-bold text-[#F5F0EB]">
              {pose.nameRu}
            </h3>
          </div>
        </div>
      </Link>

      <div className="absolute right-3 top-3 z-10">
        <button
          onClick={handleFav}
          className={`transition-all ${
            fav
              ? "text-red-400 hover:text-red-300"
              : "text-[#A09890] hover:text-[#F5F0EB]"
          }`}
          aria-label={fav ? "Убрать из избранного" : "Добавить в избранное"}
        >
          <Heart
            className={`size-6 drop-shadow-sm transition-transform ${
              fav ? "fill-current" : ""
            } ${pulse ? "animate-[pulse-heart_0.3s_ease-out]" : ""}`}
          />
        </button>
      </div>

      <div className="flex flex-wrap gap-1.5 px-4 pb-4 pt-2">
        <Badge variant="outline" className="border-[#2A2A2A] text-[#A09890] text-[10px]">
          {CATEGORY_LABELS[pose.category]}
        </Badge>
        <Badge variant="outline" className="border-[#2A2A2A] text-[#A09890] text-[10px]">
          {DIFFICULTY_LABELS[pose.difficulty]}
        </Badge>
      </div>
    </div>
  );
}
