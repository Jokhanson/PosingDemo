import { poses as allPoses } from "@/data/poses";
import { Pose, PoseFilters } from "@/lib/types";

export function getAllPoses(): Pose[] {
  return allPoses;
}

export function filterPoses(poses: Pose[], filters: PoseFilters): Pose[] {
  return poses.filter((pose) => {
    if (filters.category !== "all" && pose.category !== filters.category) return false;
    if (filters.difficulty !== "all" && pose.difficulty !== filters.difficulty) return false;
    if (filters.gender !== "all" && pose.gender !== filters.gender) return false;
    if (filters.search) {
      const query = filters.search.toLowerCase();
      const matchesName =
        pose.nameRu.toLowerCase().includes(query) ||
        pose.name.toLowerCase().includes(query);
      const matchesDesc = pose.descriptionRu.toLowerCase().includes(query);
      const matchesTags = pose.tags.some((tag) => tag.includes(query));
      if (!matchesName && !matchesDesc && !matchesTags) return false;
    }
    return true;
  });
}

export function getPoseById(id: string): Pose | undefined {
  return allPoses.find((p) => p.id === id);
}

export function getRandomPose(): Pose {
  return allPoses[Math.floor(Math.random() * allPoses.length)];
}

export function getFavoritePoses(): Pose[] {
  if (typeof window === "undefined") return [];
  try {
    const ids = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
    return allPoses.filter((p) => ids.includes(p.id));
  } catch {
    return [];
  }
}

export function toggleFavorite(id: string): boolean {
  if (typeof window === "undefined") return false;
  const ids = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
  const index = ids.indexOf(id);
  if (index > -1) {
    ids.splice(index, 1);
    localStorage.setItem("favorites", JSON.stringify(ids));
    return false;
  } else {
    ids.push(id);
    localStorage.setItem("favorites", JSON.stringify(ids));
    return true;
  }
}

export function isFavorite(id: string): boolean {
  if (typeof window === "undefined") return false;
  const ids = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
  return ids.includes(id);
}
