import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { caseStudies } from "../../data/mock";
import { cn } from "../../lib/utils";

const SuccessStories = () => {
  const [active, setActive] = useState(0);
  const story = caseStudies[active];

  return (
    <section className="py-20 lg:py-24 bg-neutral-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Success Stories
          </span>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-neutral-950">
            AI in production, <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">measured in revenue</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            From a 4×17 lift in real-estate site visits to FDA-ready vision AI in
            healthcare—stories told through outcomes, not buzzwords.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {caseStudies.map((c, i) => (
            <button
              key={c.id}
              onClick={() => setActive(i)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium transition-all border",
                active === i
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-200"
                  : "bg-white text-neutral-700 border-neutral-200 hover:border-blue-300"
              )}
            >
              {c.client}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-3xl shadow-lg shadow-neutral-200/60 overflow-hidden">
          <div className="grid lg:grid-cols-[44%_56%]">
            <div className="relative h-64 lg:h-auto bg-neutral-900">
              <img
                src={story.image}
                alt={story.client}
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
              <h3 className="text-2xl lg:text-3xl font-bold text-neutral-900 leading-tight">
                {story.title}
              </h3>

              <div className="mt-6 grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-2">Challenge:</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-neutral-900 mb-2">The Solution:</h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">{story.solution}</p>
                </div>
              </div>

              <div className="mt-6">
                <h4 className="text-sm font-bold text-neutral-900 mb-3">Results:</h4>
                <ul className="space-y-2">
                  {story.results.map((r) => (
                    <li key={r} className="flex items-start gap-2 text-sm text-neutral-700">
                      <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" strokeWidth={3} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/case-studies"
                className="mt-7 inline-flex items-center gap-2 bg-neutral-900 hover:bg-blue-600 text-white font-semibold px-6 h-11 rounded-full transition-colors"
              >
                Explore All Case Studies
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
