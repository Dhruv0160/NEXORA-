import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useCases } from "../../data/mock";
import { cn } from "../../lib/utils";

const UseCases = () => {
  const [active, setActive] = useState(0);
  const story = useCases[active];

  return (
    <section className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-5 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
            What we build
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
            Solutions we ship for <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">teams like yours</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            Common AI use cases we build end-to-end—tailored to your data, users
            and business model.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {useCases.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all border",
                active === i
                  ? "bg-neutral-950 text-white border-neutral-950 shadow-md shadow-violet-200"
                  : "bg-white text-neutral-700 border-neutral-200 hover:border-violet-300"
              )}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg shadow-neutral-200/60 overflow-hidden">
          <div className="grid lg:grid-cols-[44%_56%]">
            <div className="relative h-64 lg:h-auto bg-neutral-900">
              <img
                src={story.image}
                alt={story.title}
                className="absolute inset-0 w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/70 via-neutral-900/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 text-neutral-800 text-xs font-semibold">
                  {story.industry}
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-950 leading-tight">
                {story.title}
              </h3>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-violet-600 mb-2">The Problem</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{story.problem}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-violet-600 mb-2">Our Approach</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{story.approach}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-bold text-violet-600 mb-3">What we deliver</h4>
                <ul className="space-y-2">
                  {story.deliverables.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" strokeWidth={3} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 bg-neutral-950 hover:bg-violet-700 text-white font-semibold px-6 h-11 rounded-full transition-colors"
              >
                Discuss your version
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
