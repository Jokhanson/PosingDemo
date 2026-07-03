import Image from "next/image";
import { tips } from "@/data/tips";

export default function TipsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[60vh] overflow-hidden lg:min-h-[70vh]">
        <Image
          src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1400&h=1000&fit=crop"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/40 to-[#0F0F0F]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0F0F]/60 to-transparent" />

        <div className="relative mx-auto flex h-full min-h-[60vh] max-w-7xl items-end px-4 pb-14 sm:px-6 lg:min-h-[70vh] lg:pb-20 lg:pl-12">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#D4A04A]">
              <span className="inline-block size-1.5 rounded-full bg-[#D4A04A]" />
              Гайд
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-[#F5F0EB] sm:text-5xl lg:text-6xl">
              Советы по позированию
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#C8C0B5] sm:text-lg">
              Как чувствовать себя уверенно перед камерой и получать естественные,
              живые кадры.
            </p>
          </div>
        </div>
      </section>

      {/* TIPS GRID */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5A5550]">
            {tips.length} советов
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {tips.map((tip, index) => (
            <div
              key={tip.id}
              className="group rounded-lg border border-[#2A2A2A] bg-[#1A1A1A] p-6 transition-all hover:border-[#D4A04A]/30 hover:bg-[#1A1A1A]/80 sm:p-8"
            >
              <div className="flex items-start gap-5">
                <span className="font-display text-4xl font-bold leading-none text-[#2A2A2A] transition-colors group-hover:text-[#D4A04A]/30 sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <h2 className="font-display text-xl font-bold text-[#F5F0EB] sm:text-2xl">
                    {tip.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#A09890] sm:text-base">
                    {tip.summary}
                  </p>
                  <ul className="mt-4 space-y-2 border-t border-white/5 pt-4">
                    {tip.content.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm text-[#A09890] sm:text-base"
                      >
                        <span className="mt-1.5 flex size-3.5 shrink-0 items-center justify-center rounded-full border border-[#D4A04A]/30 sm:mt-1.5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8"
                            height="8"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-[#D4A04A]"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
