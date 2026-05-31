import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Bot, Brain, Eye } from "lucide-react";
import { coreServices } from "../../data/mock";

const iconMap = { Sparkles, Bot, Brain, Eye };

const CoreServices = () => {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            What we build
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
            AI services, <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">end-to-end</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            From strategy to deployed agents—engineered for evaluation,
            observability and real ROI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {coreServices.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.id}
                className="group relative bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-100/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-100/0 group-hover:bg-blue-100/40 rounded-full transition-colors duration-500" />

                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="w-7 h-7" strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-neutral-900">{s.title}</h3>
                  <p className="mt-3 text-[15px] text-neutral-600 leading-relaxed">
                    {s.headline}
                  </p>
                  <p className="mt-3 text-sm text-neutral-500 leading-relaxed">
                    {s.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {s.techStack.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/services/${s.id}`}
                    className="mt-6 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:gap-3 transition-all"
                  >
                    {s.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
