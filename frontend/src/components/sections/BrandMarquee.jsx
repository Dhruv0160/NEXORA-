import React from "react";
import { brandLogos } from "../../data/mock";

const BrandMarquee = () => {
  const doubled = [...brandLogos, ...brandLogos];
  return (
    <section className="bg-white py-10 border-b border-neutral-100 overflow-hidden">
      <div className="relative max-w-[1400px] mx-auto">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {doubled.map((b, i) => (
            <div
              key={`${b}-${i}`}
              className="flex-shrink-0 px-6 py-3 text-2xl font-bold text-neutral-400 hover:text-violet-600 transition-colors tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandMarquee;
