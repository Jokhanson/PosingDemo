"use client";

import { useState, useEffect } from "react";
import { PoseCard } from "@/components/PoseCard";
import { getRandomPose } from "@/lib/poses";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";
import { Pose } from "@/lib/types";

export default function RandomPosePage() {
  const [pose, setPose] = useState<Pose | null>(null);

  const reroll = () => {
    setPose(getRandomPose());
  };

  useEffect(() => {
    setPose(getRandomPose());
  }, []);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 text-center sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold text-[#F5F0EB] sm:text-4xl">
        Случайная поза
      </h1>
      <p className="mt-2 text-[#A09890]">
        Нажмите на кнопку — получите вдохновение
      </p>

      <Button
        onClick={reroll}
        className="mb-10 mt-6 bg-[#D4A04A] text-[#0F0F0F] hover:bg-[#D4A04A]/90"
      >
        <Shuffle className="mr-2 size-4" />
        Другую позу
      </Button>

      {pose && (
        <div className="mx-auto max-w-sm">
          <PoseCard pose={pose} />
        </div>
      )}
    </div>
  );
}
