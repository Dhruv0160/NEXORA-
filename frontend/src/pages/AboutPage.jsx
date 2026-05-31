import React from "react";
import { Link } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { values, processSteps, founder, social } from "../data/mock";

const Icon = ({ name, className }) => {
  const I = LucideIcons[name] || LucideIcons.Circle;
  return <I className={className} strokeWidth={1.8} />;
};

const AboutPage = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50/40 py-20 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
              About Nexora
            </span>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight leading-[1.05] text-neutral-950">
              An AI partner that ships <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">outcomes</span>, not slide decks.
            </h1>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Founded in Vadodara, Nexora is an applied AI studio. We pair
              engineers, applied scientists and product thinkers to design,
              build and operate AI systems that compound business value in
              production.
            </p>
            <Link to="/contact">
              <button className="mt-7 inline-flex items-center gap-2 bg-neutral-950 hover:bg-blue-700 text-white font-semibold px-7 h-12 rounded-full transition-colors">
                Talk to the Founder <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-100 bg-gradient-to-br from-blue-100 to-indigo-100">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
                alt="Our team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100 max-w-[200px]">
              <div className="text-sm font-bold text-blue-600">Boutique studio</div>
              <div className="text-sm text-neutral-600 mt-1">Senior team, focused engagements.</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-neutral-100 max-w-[200px]">
              <div className="text-sm font-bold text-blue-600">India HQ</div>
              <div className="text-sm text-neutral-600 mt-1">Vadodara, Gujarat — serving global clients.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 grid md:grid-cols-[280px_1fr] gap-10 items-center">
          <div className="relative w-[260px] h-[260px] mx-auto md:mx-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-3xl rotate-6" />
            <img
              src={founder.image}
              alt={founder.name}
              className="relative w-full h-full object-cover rounded-3xl border-4 border-white shadow-xl"
            />
          </div>
          <div>
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">{founder.title}</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-neutral-950">
              Meet {founder.name}
            </h2>
            <p className="mt-4 text-neutral-600 leading-relaxed">{founder.bio}</p>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Based in {founder.location} — serving clients across India, UAE
              and Southeast Asia.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">
              <a href={`mailto:${social.email}`} className="inline-flex items-center gap-2 text-blue-700 font-medium hover:underline">
                <Mail className="w-4 h-4" /> {social.email}
              </a>
              <a href={social.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-700 font-medium hover:underline">
                <MapPin className="w-4 h-4" /> Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="culture" className="py-20 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Our <span className="text-blue-600">Culture & Values</span>
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
            <span className="text-sm font-bold tracking-widest text-blue-600 uppercase">Our Process</span>
            <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
              How we <span className="text-blue-600">deliver excellence</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {processSteps.map((s, i) => (
              <div
                key={s.step}
                className="relative bg-white border border-neutral-200 rounded-2xl p-6 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <div className="text-5xl font-bold text-blue-200">{s.step}</div>
                <h3 className="mt-3 text-base font-bold text-neutral-900">{s.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-blue-300" />
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
