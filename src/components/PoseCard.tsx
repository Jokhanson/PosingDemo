"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Pose, CATEGORY_LABELS, DIFFICULTY_LABELS } from "@/lib/types";
import { useFavorites } from "@/components/ThemeProvider";

interface PoseCardProps {
  pose: Pose;
}

export function PoseCard({ pose }: PoseCardProps) {
  const { isFav, toggle } = useFavorites();
  const fav = isFav(pose.id);

  return (
    <div className="group relative overflow-hidden rounded-lg bg-[#1A1A1A] transition-all duration-300 hover:ring-1 hover:ring-[#D4A04A]/50">
      <Link href={`/poses/${pose.id}`} className="block">
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
            <p className="mt-1 text-xs text-[#A09890]">{pose.name}</p>
          </div>
        </div>
      </Link>

      <div className="absolute right-2 top-2 flex gap-1.5">
        <Button
          variant="ghost"
          size="icon-xs"
          onClick={(e) => {
            e.preventDefault();
            toggle(pose.id);
          }}
          className={`transition-all ${
            fav
              ? "text-red-400 hover:text-red-300"
              : "text-[#A09890] hover:text-[#F5F0EB]"
          }`}
          aria-label={fav ? "Убрать из избранного" : "Добавить в избранное"}
        >
          <Heart className={`size-4 ${fav ? "fill-current" : ""}`} />
        </Button>
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
