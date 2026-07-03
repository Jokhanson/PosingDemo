export type PoseCategory =
  | "portrait"
  | "couple"
  | "group"
  | "fashion"
  | "dance"
  | "lifestyle"
  | "editorial";

export type PoseDifficulty = "easy" | "medium" | "hard";

export type PoseGender = "female" | "male" | "unisex";

export interface Pose {
  id: string;
  name: string;
  nameRu: string;
  description: string;
  descriptionRu: string;
  category: PoseCategory;
  difficulty: PoseDifficulty;
  gender: PoseGender;
  imageUrl: string;
  tips: string[];
  tags: string[];
}

export interface PoseFilters {
  category: PoseCategory | "all";
  difficulty: PoseDifficulty | "all";
  gender: PoseGender | "all";
  search: string;
}

export const CATEGORY_LABELS: Record<PoseCategory, string> = {
  portrait: "Портрет",
  couple: "Пара",
  group: "Группа",
  fashion: "Мода",
  dance: "Танец",
  lifestyle: "Повседневность",
  editorial: "Редакционная",
};

export const DIFFICULTY_LABELS: Record<PoseDifficulty, string> = {
  easy: "Лёгкая",
  medium: "Средняя",
  hard: "Сложная",
};

export const GENDER_LABELS: Record<PoseGender, string> = {
  female: "Женская",
  male: "Мужская",
  unisex: "Унисекс",
};
