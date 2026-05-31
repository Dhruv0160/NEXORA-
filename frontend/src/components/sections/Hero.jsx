import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Search, Layers, Code2, Activity, Play, MapPin } from "lucide-react";
import { Button } from "../ui/button";
import { heroRotatingTexts, heroBadges } from "../../data/mock";

const iconMap = { Search, Layers, Code2, Activity };

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % heroRotatingTexts.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.35] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, black 40%, transparent 100%)"
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-20 right-0 w-[600px] h-[500px] bg-indigo-300/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-40 left-1/2 w-[400px] h-[400px] bg-indigo-300/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pt-20 lg:pt-28 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Location pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-blue-200 shadow-sm shadow-blue-100/60 text-sm font-medium text-neutral-700">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            Boutique AI studio • Vadodara, India
          </div>

          {/* Headline */}
          <h1 className="mt-7 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-950 leading-[1.05]">
            Production-ready
            <br />
            <span className="inline-block relative">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                {heroRotatingTexts[idx]}
              </span>
            </span>
            <br />
            <span className="text-neutral-950">that ships outcomes.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Nexora designs, engineers and operates AI systems for ambitious
            businesses—measured in revenue, not slide decks.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/contact">
              <Button className="bg-neutral-950 hover:bg-blue-700 text-white rounded-full px-7 h-12 text-[15px] font-semibold shadow-xl shadow-blue-200 hover:shadow-blue-300 transition-all gap-2">
                Book Discovery Call
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link to="/case-studies">
              <Button
                variant="outline"
                className="bg-white border-neutral-200 hover:bg-neutral-50 text-neutral-900 rounded-full px-6 h-12 text-[15px] font-medium gap-2"
              >
                <Play className="w-4 h-4 fill-blue-600 text-blue-600" />
                See what we build
              </Button>
            </Link>
          </div>
        </div>

        {/* Process Strip — honest capabilities, not inflated stats */}
        <div className="mt-20">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-neutral-500 font-medium mb-6">
            How we work
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {heroBadges.map((b, i) => {
              const Icon = iconMap[b.icon];
              return (
                <div
                  key={b.label}
                  className="group relative bg-white/70 backdrop-blur border border-neutral-200/70 rounded-2xl py-6 px-5 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 transition-all"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-blue-600">0{i + 1}</span>
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 flex items-center justify-center group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" strokeWidth={2} />
                    </div>
                  </div>
                  <div className="text-xl font-bold text-neutral-950 tracking-tight">{b.label}</div>
                  <div className="text-sm text-neutral-600 mt-1">{b.desc}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
