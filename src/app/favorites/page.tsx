"use client";

import { useMemo } from "react";
import { PoseCard } from "@/components/PoseCard";
import { pluralPose } from "@/lib/utils";
import { useFavorites } from "@/components/ThemeProvider";
import { getAllPoses } from "@/lib/poses";
import { Heart } from "lucide-react";
import Link from "next/link";

const allPoses = getAllPoses();

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const poses = useMemo(
    () => allPoses.filter((p) => favorites.has(p.id)),
    [favorites]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="font-display text-3xl font-bold text-[#F5F0EB] sm:text-4xl">
          Избранное
        </h1>
        <p className="mt-2 text-[#A09890]">
          {poses.length
            ? `Сохранено ${pluralPose(poses.length)}`
            : "Здесь появятся сохранённые позы"}
        </p>
      </div>

      {poses.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {poses.map((pose) => (
            <PoseCard key={pose.id} pose={pose} backTo="favorites" />
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <Heart className="mx-auto size-12 text-[#2A2A2A]" />
          <p className="mt-3 text-lg text-[#A09890]">
            У вас пока нет избранных поз
          </p>
          <Link
            href="/poses"
            className="mt-2 inline-block text-sm text-[#D4A04A] hover:underline"
          >
            Перейти в каталог
          </Link>
        </div>
      )}
    </div>
  );
}
