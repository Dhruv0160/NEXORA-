import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "750+", label: "eCommerce Empires Built" },
  { value: "75+", label: "AI Systems Deployed" },
  { value: "500+", label: "Global Brands Served" },
  { value: "95%", label: "Client Retention Rate" }
];

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden bg-neutral-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,106,0,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,106,0,0.18),transparent_55%)]" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              We've Helped Leaders <br />
              <span className="text-orange-500">Outlast Trends.</span>
            </h2>
            <p className="mt-5 text-neutral-300 text-lg leading-relaxed">
              Two decades of building enduring digital systems for the world's most
              ambitious brands—and we are just getting started.
            </p>
            <Link to="/contact">
              <button className="mt-8 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 h-12 rounded-full shadow-lg shadow-orange-900/50 transition-all">
                Power My Tech Capability
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-colors"
              >
                <div className="text-4xl font-bold text-white">{s.value}</div>
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
