import React, { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/mock";

const Testimonials = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  const t = testimonials[idx];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Customer Stories
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Loved by teams shipping <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">real AI</span>
          </h2>
        </div>

        <div className="relative bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-3xl p-10 lg:p-14">
          <Quote className="absolute top-8 left-8 w-14 h-14 text-blue-200" />

          <div className="relative">
            <p className="text-xl md:text-2xl italic text-neutral-800 leading-relaxed text-center max-w-3xl mx-auto">
              “{t.quote}”
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
              />
              <div className="text-center">
                <div className="font-bold text-neutral-900">{t.name}</div>
                <div className="text-sm text-neutral-600">{t.title}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              onClick={() => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-neutral-200 hover:border-blue-400 hover:bg-blue-50 flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={"h-2 rounded-full transition-all " + (i === idx ? "w-8 bg-blue-600" : "w-2 bg-neutral-300")}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => setIdx((i) => (i + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-neutral-200 hover:border-blue-400 hover:bg-blue-50 flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
