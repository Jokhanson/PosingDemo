"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface FavoritesContextValue {
  favorites: Set<string>;
  toggle: (id: string) => void;
  isFav: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextValue>({
  favorites: new Set(),
  toggle: () => {},
  isFav: () => false,
});

export function useFavorites() {
  return useContext(FavoritesContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const ids = JSON.parse(localStorage.getItem("favorites") || "[]") as string[];
      setFavorites(new Set(ids));
    } catch {
      setFavorites(new Set());
    }
  }, []);

  const toggle = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      try {
        localStorage.setItem("favorites", JSON.stringify([...next]));
      } catch {}
      return next;
    });
  };

  const isFav = (id: string) => favorites.has(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggle, isFav }}>
      {children}
    </FavoritesContext.Provider>
  );
}
