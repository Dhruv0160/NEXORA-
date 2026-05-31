import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Award, Users, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { heroRotatingTexts, heroStats } from "../../data/mock";

const iconMap = { Target, Award, Users, Zap };

const Hero = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setIdx((i) => (i + 1) % heroRotatingTexts.length);
    }, 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-50/40 to-white">
      {/* Decorative diagonal lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[60%] h-full opacity-30">
          <div className="absolute top-12 right-20 w-[2px] h-[140%] bg-gradient-to-b from-transparent via-orange-300 to-transparent rotate-[20deg]" />
          <div className="absolute top-12 right-44 w-[2px] h-[140%] bg-gradient-to-b from-transparent via-orange-200 to-transparent rotate-[20deg]" />
          <div className="absolute top-12 right-72 w-[2px] h-[140%] bg-gradient-to-b from-transparent via-orange-200 to-transparent rotate-[20deg]" />
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 pt-16 lg:pt-20 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-600 text-white text-sm font-medium shadow-sm">
            Experience
          </span>

          <div className="mt-6 relative">
            <div className="border-2 border-dashed border-orange-300/80 rounded-xl px-5 py-4 lg:px-7 lg:py-5 bg-white/40 backdrop-blur-sm inline-block min-w-[60%]">
              <div className="h-[58px] md:h-[72px] lg:h-[84px] overflow-hidden">
                {heroRotatingTexts.map((text, i) => (
                  <div
                    key={text}
                    className="h-[58px] md:h-[72px] lg:h-[84px] flex items-center transition-transform duration-700 ease-out"
                    style={{ transform: `translateY(-${idx * 100}%)` }}
                  >
                    <h1 className="text-[40px] md:text-[54px] lg:text-[64px] leading-[1] font-bold text-orange-600 whitespace-nowrap">
                      {text}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 text-lg md:text-xl text-neutral-700 max-w-xl">
            Business-impacting Problems Need <span className="font-semibold text-neutral-900">Business-centric Solutions</span>
          </p>

          <div className="mt-8 flex items-center gap-5">
            <div className="flex -space-x-3">
              {["1494790108377-be9c29b29330", "1438761681033-6461ffad8d80", "1500648767791-00dcc994a43e", "1544005313-94ddf0286df2"].map((id) => (
                <img
                  key={id}
                  src={`https://images.unsplash.com/photo-${id}?w=80&q=80`}
                  alt="client"
                  className="w-11 h-11 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-11 h-11 rounded-full bg-orange-600 text-white border-2 border-white flex items-center justify-center font-semibold">
                +
              </div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600">500+</div>
              <div className="text-sm text-neutral-600">Transformations</div>
            </div>
          </div>

          <div className="mt-8">
            <Link to="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white rounded-full px-7 h-12 font-semibold shadow-lg shadow-orange-200 hover:shadow-orange-300 transition-all gap-2">
                Connect with Us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {heroStats.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.label}
                className="bg-orange-50 border border-orange-100 rounded-2xl py-6 px-5 flex flex-col items-center text-center hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-7 h-7 text-orange-600 mb-2" strokeWidth={2} />
                <div className="text-2xl md:text-3xl font-bold text-neutral-900">{s.value}</div>
                <div className="text-sm text-neutral-600 mt-0.5">{s.label}</div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex items-center gap-4">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-orange-300 to-orange-300" />
          <span className="text-xs tracking-[0.3em] uppercase text-neutral-600 font-medium">More than 150 Brands</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-orange-300 to-orange-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
