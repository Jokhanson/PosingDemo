"use client";

import { useState, useMemo } from "react";
import { PoseFilters } from "@/components/PoseFilters";
import { PoseCard } from "@/components/PoseCard";
import { getAllPoses, filterPoses } from "@/lib/poses";
import type { PoseFilters as FilterType } from "@/lib/types";

const allPoses = getAllPoses();

export default function PosesPage() {
  const [filters, setFilters] = useState<FilterType>({
    category: "all",
    difficulty: "all",
    gender: "all",
    search: "",
  });

  const filtered = useMemo(() => filterPoses(allPoses, filters), [filters]);

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

      <PoseFilters
        filters={filters}
        onChange={setFilters}
        total={filtered.length}
      />

      {filtered.length > 0 ? (
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((pose) => (
            <PoseCard key={pose.id} pose={pose} />
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
    </div>
  );
}
