import { Suspense } from "react";
import { getAllPoses } from "@/lib/poses";
import PoseDetailClient from "./PoseDetailClient";

export function generateStaticParams() {
  return getAllPoses().map((pose) => ({ id: pose.id }));
}

export default async function PoseDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <Suspense>
      <PoseDetailClient id={id} />
    </Suspense>
  );
}
