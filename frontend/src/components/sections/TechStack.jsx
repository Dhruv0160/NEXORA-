import React, { useState } from "react";
import * as LucideIcons from "lucide-react";
import { technologyDomains } from "../../data/mock";
import { ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

const Icon = ({ name, className }) => {
  const I = LucideIcons[name] || LucideIcons.Circle;
  return <I className={className} strokeWidth={1.6} />;
};

const TechStack = () => {
  const [active, setActive] = useState(technologyDomains[0].id);
  const current = technologyDomains.find((d) => d.id === active);

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-orange-50/50 to-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Our Technology <span className="text-orange-600">Stack and Platforms</span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg">
            Over 1,000 experts with 24+ years of experience in over 100 cutting-edge technologies.
          </p>
          <p className="mt-2 text-neutral-600">
            Deep expertise across <span className="font-semibold text-neutral-900">every major platform, framework, and emerging technology</span> your business needs.
          </p>
        </div>

        <div className="bg-white border border-neutral-200 rounded-3xl shadow-sm overflow-hidden">
          <div className="grid lg:grid-cols-[300px_1fr]">
            {/* Sidebar */}
            <div className="bg-orange-50/60 p-6 border-r border-neutral-200">
              <h3 className="font-bold text-neutral-900 mb-4 text-lg">Technology Domains</h3>
              <div className="space-y-2">
                {technologyDomains.map((d) => {
                  const isActive = active === d.id;
                  return (
                    <button
                      key={d.id}
                      onClick={() => setActive(d.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-xl text-left text-sm font-medium transition-all",
                        isActive
                          ? "bg-neutral-900 text-white shadow-md"
                          : "text-neutral-700 hover:bg-white"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center",
                          isActive ? "bg-orange-500 text-white" : "bg-orange-100 text-orange-600"
                        )}>
                          <Icon name={d.icon} className="w-4 h-4" />
                        </span>
                        {d.name}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-10">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-orange-500 text-white flex items-center justify-center">
                  <Icon name={current.icon} className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900">{current.name}</h3>
                  <p className="text-neutral-600 mt-1">{current.subtitle}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {current.platforms.map((p) => (
                  <div
                    key={p.name}
                    className="bg-neutral-50 hover:bg-orange-50 border border-neutral-100 hover:border-orange-200 rounded-2xl p-5 text-center transition-all cursor-default hover:-translate-y-0.5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-white border border-neutral-200 mx-auto flex items-center justify-center text-neutral-700">
                      <Icon name={p.icon} className="w-5 h-5" />
                    </div>
                    <div className="mt-3 text-sm font-medium text-neutral-800">{p.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
