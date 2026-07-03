import { tips } from "@/data/tips";
import { Lightbulb } from "lucide-react";

export default function TipsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="font-display text-3xl font-bold text-[#F5F0EB] sm:text-4xl">
          Советы по позированию
        </h1>
        <p className="mt-2 text-[#A09890]">
          Как чувствовать себя уверенно перед камерой
        </p>
      </div>

      <div className="space-y-6">
        {tips.map((tip) => (
          <div
            key={tip.id}
            className="rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-6 transition-colors hover:border-[#2A2A2A]/80"
          >
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#D4A04A]/10">
                <Lightbulb className="size-5 text-[#D4A04A]" />
              </div>
              <div className="min-w-0">
                <h2 className="font-display text-xl font-bold text-[#F5F0EB]">
                  {tip.title}
                </h2>
                <p className="mt-1 text-sm text-[#A09890]">{tip.summary}</p>
                <ul className="mt-3 space-y-1.5">
                  {tip.content.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-[#A09890]"
                    >
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#D4A04A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
