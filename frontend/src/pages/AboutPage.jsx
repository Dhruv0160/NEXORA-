import React from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { values, processSteps } from "../data/mock";

const Icon = ({ name, className }) => {
  const I = LucideIcons[name] || LucideIcons.Circle;
  return <I className={className} strokeWidth={1.8} />;
};

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-50 via-white to-white py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-600 text-white text-sm font-medium">
              About Us
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-900">
              We're the right <span className="text-orange-600">tech-solutions partner</span> for your digital innovation needs.
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Since 2001, OrangeMantra has been digitally transforming and accelerating
              businesses across 30+ industries. "Orange" stands for innovation, "Mantra"
              for the magic of disciplined execution.
            </p>
            <Link to="/contact">
              <button className="mt-7 inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 h-12 rounded-full transition-colors">
                Let's Collaborate <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-orange-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
              <div className="text-3xl font-bold text-orange-600">21+ Years</div>
              <div className="text-sm text-neutral-600">in the market</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100">
              <div className="text-3xl font-bold text-orange-600">1500+</div>
              <div className="text-sm text-neutral-600">Projects Delivered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">Our Vision</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            Digitally transforming and <span className="text-orange-600">accelerating businesses</span>
          </h2>
          <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
            OrangeMantra empowers enterprises with innovative tech solutions to stay ahead
            in an increasingly digital-driven market. We combine deep engineering, design
            thinking and domain expertise to deliver outcomes that matter.
          </p>
        </div>
      </section>

      {/* Values */}
      <section id="culture" className="py-20 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Our <span className="text-orange-600">Culture & Values</span>
            </h2>
            <p className="mt-4 text-lg text-neutral-600">The principles that guide everything we do.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-neutral-100 rounded-2xl p-7 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${v.color}`}>
                  <Icon name={v.icon} className="w-7 h-7" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-neutral-900">{v.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-bold tracking-widest text-orange-600 uppercase">Our Process</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              How we <span className="text-orange-600">deliver excellence</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <div
                key={s.step}
                className="relative bg-white border border-neutral-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-md transition-all"
              >
                <div className="text-5xl font-bold text-orange-200">{s.step}</div>
                <h3 className="mt-3 text-base font-bold text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-orange-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
