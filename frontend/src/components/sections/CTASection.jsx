import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";

const stats = [
  { value: "50+", label: "AI Models in Production" },
  { value: "12+", label: "Industries Served" },
  { value: "3.2x", label: "Avg. ROI on AI Spend" },
  { value: "100%", label: "Custom Built for You" }
];

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-neutral-950">
      {/* Decorative gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.35),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(217,70,239,0.25),transparent_55%)]" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur border border-white/10 text-xs font-medium text-violet-200">
              <Zap className="w-3.5 h-3.5" /> Built for production
            </span>
            <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
              From idea to deployed AI <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                in weeks, not quarters.
              </span>
            </h2>
            <p className="mt-5 text-neutral-300 text-lg leading-relaxed max-w-lg">
              We pair senior engineers, applied scientists and product thinkers
              to ship AI that actually changes a business metric.
            </p>
            <Link to="/contact">
              <button className="mt-8 inline-flex items-center gap-2 bg-white text-neutral-950 hover:bg-violet-100 font-semibold px-7 h-12 rounded-full transition-all">
                Start an AI Project
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-violet-400/40 hover:bg-white/10 transition-all"
              >
                <div className="text-4xl font-bold text-white tracking-tight">{s.value}</div>
                <div className="mt-1 text-sm text-neutral-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
