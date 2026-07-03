"use client";

import { useState, useMemo, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PoseFilters } from "@/components/PoseFilters";
import { PoseCard } from "@/components/PoseCard";
import { getAllPoses, filterPoses } from "@/lib/poses";
import type { PoseFilters as FilterType, PoseCategory } from "@/lib/types";

const allPoses = getAllPoses();

function PosesContent() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") as PoseCategory | null;

  const [filters, setFilters] = useState<FilterType>({
    category: categoryParam || "all",
    difficulty: "all",
    gender: "all",
    search: "",
  });

  const filtered = useMemo(() => filterPoses(allPoses, filters), [filters]);
  const gridKey = useRef(0);
  const [animKey, setAnimKey] = useState(0);

  const handleFilterChange = (newFilters: FilterType) => {
    setFilters(newFilters);
    gridKey.current += 1;
    setAnimKey(gridKey.current);
  };

  return (
    <>
      <PoseFilters
        filters={filters}
        onChange={handleFilterChange}
        total={filtered.length}
      />

      {filtered.length > 0 ? (
        <div
          key={animKey}
          className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((pose, i) => (
            <div
              key={pose.id}
              className="animate-[fade-in-up_0.35s_ease-out_both]"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <PoseCard pose={pose} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-16 text-center">
          <p className="text-lg text-[#A09890]">Ничего не нашлось</p>
          <p className="mt-1 text-sm text-[#5A5550]">
            Попробуйте другие настройки фильтров
          </p>
        </div>
      )}
    </>
  );
}

export default function PosesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="font-display text-3xl font-bold text-[#F5F0EB] sm:text-4xl">
          Каталог поз
        </h1>
        <p className="mt-2 text-[#A09890]">
          Находите идеальные позы по категории, сложности и настроению
        </p>
      </div>

      <Suspense fallback={
        <div className="flex items-center justify-center py-20">
          <div className="size-5 animate-pulse rounded-full bg-[#D4A04A]/50" />
        </div>
      }>
        <PosesContent />
      </Suspense>
    </div>
  );
}
