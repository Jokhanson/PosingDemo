import { CATEGORY_LABELS, DIFFICULTY_LABELS, GENDER_LABELS } from "@/lib/types";
import type { PoseFilters as PoseFiltersType } from "@/lib/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const categories = [
  { value: "all", label: "Все" },
  ...Object.entries(CATEGORY_LABELS).map(([value, label]) => ({ value, label })),
];

const difficulties = [
  { value: "all", label: "Любая" },
  ...Object.entries(DIFFICULTY_LABELS).map(([value, label]) => ({ value, label })),
];

const genders = [
  { value: "all", label: "Все" },
  ...Object.entries(GENDER_LABELS).map(([value, label]) => ({ value, label })),
];

interface PoseFiltersProps {
  filters: PoseFiltersType;
  onChange: (filters: PoseFiltersType) => void;
  total: number;
}

export function PoseFilters({ filters, onChange, total }: PoseFiltersProps) {
  const set = (key: keyof PoseFiltersType, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  const hasActiveFilters =
    filters.category !== "all" ||
    filters.difficulty !== "all" ||
    filters.gender !== "all" ||
    filters.search !== "";

  const reset = () => {
    onChange({
      category: "all",
      difficulty: "all",
      gender: "all",
      search: "",
    });
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#A09890]" />
        <Input
          placeholder="Поиск поз..."
          value={filters.search}
          onChange={(e) => set("search", e.target.value)}
          className="border-[#2A2A2A] bg-[#1A1A1A] pl-9 text-[#F5F0EB] placeholder:text-[#5A5550] focus-visible:border-[#D4A04A] focus-visible:ring-[#D4A04A]/20"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => set("category", cat.value)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              filters.category === cat.value
                ? "bg-[#D4A04A] text-[#0F0F0F]"
                : "bg-[#1A1A1A] text-[#A09890] hover:bg-[#2A2A2A] hover:text-[#F5F0EB]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {difficulties.map((d) => (
          <button
            key={d.value}
            onClick={() => set("difficulty", d.value)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              filters.difficulty === d.value
                ? "bg-[#D4A04A] text-[#0F0F0F]"
                : "bg-[#1A1A1A] text-[#A09890] hover:bg-[#2A2A2A] hover:text-[#F5F0EB]"
            }`}
          >
            {d.label}
          </button>
        ))}

        {genders.map((g) => (
          <button
            key={g.value}
            onClick={() => set("gender", g.value)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              filters.gender === g.value
                ? "bg-[#D4A04A] text-[#0F0F0F]"
                : "bg-[#1A1A1A] text-[#A09890] hover:bg-[#2A2A2A] hover:text-[#F5F0EB]"
            }`}
          >
            {g.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-[#A09890]">
          Найдено: {total}
        </span>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="xs"
            onClick={reset}
            className="text-[#A09890] hover:text-[#F5F0EB]"
          >
            <X className="mr-1 size-3" />
            Сбросить
          </Button>
        )}
      </div>
    </div>
  );
}
