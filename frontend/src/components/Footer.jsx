import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Twitter, Facebook, Instagram, Youtube, MapPin, Mail, Phone, ArrowRight } from "lucide-react";
import { offices } from "../data/mock";

const FooterCol = ({ title, links }) => (
  <div>
    <h4 className="text-white font-semibold text-[15px] mb-4">{title}</h4>
    <ul className="space-y-2.5">
      {links.map((l) => (
        <li key={l.label}>
          <Link to={l.href} className="text-[13.5px] text-neutral-400 hover:text-orange-400 transition-colors">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-neutral-300">
      {/* CTA Strip */}
      <div className="border-b border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
              Ready to <span className="text-orange-500">transform your business?</span>
            </h3>
            <p className="mt-2 text-neutral-400">
              Let's build technology that drives real business outcomes.
            </p>
          </div>
          <div className="flex md:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-7 h-12 transition-colors"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="text-[28px] font-bold tracking-tight">
              <span className="text-orange-500">orange</span>
              <span className="text-white">mantra</span>
            </div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-400 mt-1">
              AI Digital Transformation Company
            </p>
            <p className="mt-5 text-sm text-neutral-400 leading-relaxed max-w-md">
              Since 2001, we have engineered ambitious technology programs for
              500+ global brands—spanning AI, cloud, commerce and enterprise
              transformation.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[Linkedin, Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-orange-500 hover:border-orange-500 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol
            title="Company"
            links={[
              { label: "About Us", href: "/about" },
              { label: "Our Culture", href: "/about#culture" },
              { label: "Careers", href: "/careers" },
              { label: "Blog", href: "/blog" },
              { label: "Contact", href: "/contact" }
            ]}
          />
          <FooterCol
            title="Services"
            links={[
              { label: "Digital Transformation", href: "/services/digital-transformation" },
              { label: "eCommerce Development", href: "/services/ecommerce-development" },
              { label: "AI & Automation", href: "/services/ai-automation" },
              { label: "Cloud & DevOps", href: "/services/cloud-devops" },
              { label: "Custom Software", href: "/services/custom-software" }
            ]}
          />
          <FooterCol
            title="Industries"
            links={[
              { label: "Retail & eCommerce", href: "/industries" },
              { label: "Automotive", href: "/industries" },
              { label: "BFSI", href: "/industries" },
              { label: "Healthcare", href: "/industries" },
              { label: "Manufacturing", href: "/industries" }
            ]}
          />
        </div>

        {/* Offices */}
        <div className="mt-14 pt-10 border-t border-neutral-800">
          <h4 className="text-white font-semibold mb-6">Global Offices</h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((o) => (
              <div key={o.city} className="text-sm">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <MapPin className="w-4 h-4 text-orange-500" />
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
      </div>

      <div className="border-t border-neutral-800">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} OrangeMantra. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-neutral-500">
            <Link to="/privacy" className="hover:text-orange-500">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-orange-500">Terms of Use</Link>
            <a className="flex items-center gap-1.5 hover:text-orange-500" href="mailto:info@orangemantra.com">
              <Mail className="w-3.5 h-3.5" /> info@orangemantra.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
