"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getPoseById } from "@/lib/poses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useFavorites } from "@/components/ThemeProvider";
import { CATEGORY_LABELS, DIFFICULTY_LABELS, GENDER_LABELS } from "@/lib/types";
import { ArrowLeft, Heart, Check } from "lucide-react";

export default function PoseDetailPage() {
  const params = useParams();
  const pose = getPoseById(params.id as string);
  const { isFav, toggle } = useFavorites();

  if (!pose) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-[#A09890]">Поза не найдена</p>
          <Link href="/poses">
            <Button variant="link" className="mt-2 text-[#D4A04A]">
              Вернуться в каталог
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const fav = isFav(pose.id);

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <Link
        href="/poses"
        className="mb-8 inline-flex items-center gap-1.5 text-sm text-[#A09890] transition-colors hover:text-[#F5F0EB]"
      >
        <ArrowLeft className="size-4" />
        Назад к каталогу
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
          <Image
            src={pose.imageUrl}
            alt={pose.nameRu}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="border-[#D4A04A]/30 text-[#D4A04A]">
              {CATEGORY_LABELS[pose.category]}
            </Badge>
            <Badge variant="outline" className="border-[#2A2A2A] text-[#A09890]">
              {DIFFICULTY_LABELS[pose.difficulty]}
            </Badge>
            <Badge variant="outline" className="border-[#2A2A2A] text-[#A09890]">
              {GENDER_LABELS[pose.gender]}
            </Badge>
          </div>

          <h1 className="mt-5 font-display text-3xl font-bold text-[#F5F0EB] sm:text-4xl">
            {pose.nameRu}
          </h1>
          <p className="mt-1 text-sm text-[#5A5550]">{pose.name}</p>
          <p className="mt-4 leading-relaxed text-[#A09890]">
            {pose.descriptionRu}
          </p>

          <div className="mt-6">
            <h3 className="mb-3 text-sm font-semibold text-[#F5F0EB]">
              Советы по выполнению
            </h3>
            <ul className="space-y-2">
              {pose.tips.map((tip, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#A09890]">
                  <Check className="mt-0.5 size-4 shrink-0 text-[#D4A04A]" />
                  {tip}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {pose.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#1A1A1A] px-3 py-1 text-xs text-[#5A5550]"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => toggle(pose.id)}
            className={`mt-6 border-[#2A2A2A] ${
              fav
                ? "text-red-400 hover:text-red-300"
                : "text-[#A09890] hover:text-[#F5F0EB]"
            }`}
          >
            <Heart className={`mr-2 size-4 ${fav ? "fill-current" : ""}`} />
            {fav ? "В избранном" : "В избранное"}
          </Button>
        </div>
      </div>
    </div>
  );
}
