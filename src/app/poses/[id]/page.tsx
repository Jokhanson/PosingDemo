import { getAllPoses } from "@/lib/poses";
import PoseDetailClient from "./PoseDetailClient";

export function generateStaticParams() {
  return getAllPoses().map((pose) => ({ id: pose.id }));
}

export default function PoseDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return <PoseDetailClient id={params.id} />;
}
