import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useCases } from "../data/mock";

const CaseStudiesPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 via-white to-fuchsia-50/40 py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-5 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">
            What we build
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-neutral-950">
            AI solutions we ship for <span className="bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">teams like yours</span>
          </h1>
          <p className="mt-5 text-lg text-neutral-600 max-w-3xl mx-auto">
            Common use cases we build end-to-end. Each one is custom-engineered
            for your data, users and business model.
          </p>
        </div>
      </section>

      <section className="py-16 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 space-y-10">
          {useCases.map((c, i) => (
            <div
              key={c.id}
              className="bg-white rounded-3xl shadow-sm border border-neutral-100 overflow-hidden grid lg:grid-cols-[44%_56%]"
            >
              <div className={`relative h-64 lg:h-auto ${i % 2 ? "lg:order-2" : ""}`}>
                <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-neutral-900/60 via-neutral-900/20 to-transparent" />
                <span className="absolute top-5 left-5 px-3 py-1 rounded-full bg-white/90 text-neutral-800 text-xs font-semibold">
                  {c.industry}
                </span>
              </div>
              <div className="p-8 lg:p-10">
                <h2 className="text-2xl lg:text-3xl font-bold text-neutral-950 leading-tight">{c.title}</h2>
                <div className="mt-5 grid sm:grid-cols-2 gap-5">
                  <div>
                    <h4 className="text-sm font-bold text-violet-600 mb-1.5">The Problem</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-violet-600 mb-1.5">Our Approach</h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">{c.approach}</p>
                  </div>
                </div>
                <div className="mt-5">
                  <h4 className="text-sm font-bold text-violet-600 mb-2">What we deliver</h4>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {c.deliverables.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-neutral-700">
                        <Check className="w-4 h-4 text-violet-600 mt-0.5 flex-shrink-0" strokeWidth={3} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 text-violet-700 font-semibold text-sm hover:gap-3 transition-all"
                >
                  Discuss your version
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CaseStudiesPage;
