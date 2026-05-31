import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import * as LucideIcons from "lucide-react";
import { ArrowRight, Check } from "lucide-react";
import { coreServices, technologyDomains } from "../data/mock";

const Icon = ({ name, className }) => {
  const I = LucideIcons[name] || LucideIcons.Circle;
  return <I className={className} strokeWidth={1.8} />;
};

const ServicePage = () => {
  const { slug } = useParams();
  const service = coreServices.find((s) => s.id === slug);

  if (!service) {
    // Generic placeholder for services not in mock
    return (
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h1 className="text-3xl font-bold capitalize">{slug?.replace(/-/g, " ")}</h1>
          <p className="mt-3 text-neutral-600">This service page is coming soon.</p>
          <Link to="/" className="mt-6 inline-block text-violet-600 font-semibold">Return Home</Link>
        </div>
      </section>
    );
  }

  const benefits = [
    "Outcome-focused engagements aligned to your KPIs",
    "Dedicated solution architect from day one",
    "Battle-tested delivery framework, 1500+ projects shipped",
    "Flexible engagement—fixed scope, T&M or dedicated team"
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 via-white to-white py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Link to="/" className="text-sm text-violet-600 font-semibold">← Services</Link>
            <div className="mt-4 inline-flex items-center gap-3">
              <span className="w-14 h-14 rounded-2xl bg-violet-600 text-white flex items-center justify-center">
                <Icon name={service.icon} className="w-7 h-7" />
              </span>
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 leading-[1.05]">
              {service.title}
            </h1>
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">{service.headline}</p>
            <Link to="/contact">
              <button className="mt-7 inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-7 h-12 rounded-full transition-colors">
                {service.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 shadow-sm">
            <h3 className="text-lg font-bold text-neutral-900">Why partner with us</h3>
            <ul className="mt-4 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-neutral-700">
                  <span className="w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            What we <span className="text-violet-600">deliver</span>
          </h2>
          <p className="mt-3 text-neutral-600 max-w-3xl">{service.description}</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            {service.techStack.map((t) => (
              <div key={t} className="bg-neutral-50 hover:bg-violet-50 border border-neutral-100 rounded-2xl p-5 transition-colors">
                <div className="font-semibold text-neutral-900">{t}</div>
                <p className="mt-1 text-sm text-neutral-600">Production-grade implementations and integrations.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 text-center">
            Related <span className="text-violet-600">technology platforms</span>
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {(technologyDomains.find((d) => d.id === service.id)?.platforms || technologyDomains[0].platforms).map((p) => (
              <div key={p.name} className="bg-white border border-neutral-200 rounded-2xl p-5 text-center hover:border-violet-300 hover:-translate-y-0.5 transition-all">
                <div className="w-10 h-10 mx-auto rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
                  <Icon name={p.icon} className="w-5 h-5" />
                </div>
                <div className="mt-2 text-sm font-medium text-neutral-800">{p.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicePage;
