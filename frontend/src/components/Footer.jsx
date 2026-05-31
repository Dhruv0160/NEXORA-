import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Instagram, MapPin, Mail, Phone, ArrowRight, Sparkles } from "lucide-react";
import { offices, social } from "../data/mock";

const FooterCol = ({ title, links }) => (
  <div>
    <h4 className="text-white font-semibold text-[14px] mb-4 tracking-wide">{title}</h4>
    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l.label}>
          <Link to={l.href} className="text-[13.5px] text-neutral-400 hover:text-white transition-colors">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="relative bg-neutral-950 text-neutral-300 overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-indigo-600/20 blur-3xl rounded-full pointer-events-none" />

      {/* CTA Strip */}
      <div className="relative border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-14 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight tracking-tight">
              Ready to ship AI that <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">moves a metric?</span>
            </h3>
            <p className="mt-3 text-neutral-400">
              Let's design a 2-week prototype together.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-neutral-950 font-semibold rounded-full px-7 h-12 hover:bg-blue-100 transition-colors"
            >
              Book a Discovery Call
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-xl p-2 inline-flex">
                <img
                  src="https://customer-assets.emergentagent.com/job_nexora-ai-25/artifacts/w563sbi0_image.png"
                  alt="Nexora"
                  className="h-8 w-auto object-contain"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 border-l border-white/10 pl-3">
                AI Solutions
              </p>
            </div>
            <p className="mt-5 text-sm text-neutral-400 leading-relaxed max-w-md">
              We design, engineer and operate AI systems that compound business
              value—from generative copilots and autonomous agents to vision and
              recommendation engines.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a href={social.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href={social.twitter} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={social.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { label: "About Nexora", href: "/about" },
              { label: "Our Approach", href: "/about#culture" },
              { label: "Case Studies", href: "/case-studies" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" }
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { label: "Generative AI", href: "/services/generative-ai" },
              { label: "AI Agents", href: "/services/ai-agents" },
              { label: "ML Engineering", href: "/services/ml-engineering" },
              { label: "Computer Vision", href: "/services/computer-vision" },
              { label: "Data Platform", href: "/services/data-platform" }
            ]}
          />
          <FooterCol
            title="Industries"
            links={[
              { label: "Real Estate", href: "/industries" },
              { label: "Retail & D2C", href: "/industries" },
              { label: "Healthcare", href: "/industries" },
              { label: "FinTech", href: "/industries" },
              { label: "Education", href: "/industries" }
            ]}
          />
        </div>

        <div className="mt-14 pt-10 border-t border-white/5 grid md:grid-cols-2 gap-8">
          {offices.map((o) => (
            <div key={o.city} className="text-sm">
              <div className="flex items-center gap-2 text-white font-semibold">
                <MapPin className="w-4 h-4 text-blue-400" />
                {o.city}
              </div>
              <p className="text-neutral-400 mt-2 leading-relaxed">{o.address}</p>
              <p className="text-neutral-400 mt-1 flex items-center gap-2">
                <Phone className="w-3.5 h-3.5" /> {o.phone}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Nexora AI Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-neutral-500">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <a className="flex items-center gap-1.5 hover:text-white" href={`mailto:${social.email}`}>
              <Mail className="w-3.5 h-3.5" /> {social.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
