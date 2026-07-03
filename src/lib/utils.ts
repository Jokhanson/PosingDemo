import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function pluralPose(count: number): string {
  const n = Math.abs(count) % 100
  const n10 = n % 10
  if (n > 10 && n < 20) return `${count} поз`
  if (n10 > 1 && n10 < 5) return `${count} позы`
  if (n10 === 1) return `${count} поза`
  return `${count} поз`
}


