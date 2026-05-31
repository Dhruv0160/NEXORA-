import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { navServices, navSolutions, navAbout } from "../data/mock";
import { cn } from "../lib/utils";

const NavDropdown = ({ label, items }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="flex items-center gap-1 text-[15px] font-medium text-neutral-900 hover:text-orange-600 transition-colors py-2">
        {label}
        <ChevronDown className={cn("w-4 h-4 transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
          <div className="bg-white rounded-xl shadow-2xl border border-neutral-100 py-3 min-w-[260px] animate-in fade-in slide-in-from-top-2 duration-200">
            {items.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block px-5 py-2.5 text-sm text-neutral-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-white transition-shadow",
        scrolled ? "shadow-md" : "shadow-sm"
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col leading-none group">
          <span className="text-[26px] font-bold tracking-tight">
            <span className="text-orange-600">orange</span>
            <span className="text-neutral-900">mantra</span>
          </span>
          <span className="text-[10px] font-semibold text-neutral-700 tracking-wide mt-0.5">
            AI Digital Transformation Company
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link to="/services/ai-automation" className="text-[15px] font-medium text-neutral-900 hover:text-orange-600 transition-colors">
            AI First
          </Link>
          <NavDropdown label="Services" items={navServices} />
          <NavDropdown label="Solutions" items={navSolutions} />
          <Link to="/case-studies" className="text-[15px] font-medium text-neutral-900 hover:text-orange-600 transition-colors">
            Our Work
          </Link>
          <NavDropdown label="About Us" items={navAbout} />
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:flex w-9 h-9 rounded-full items-center justify-center text-neutral-700 hover:bg-neutral-100 transition-colors">
            <Search className="w-4 h-4" />
          </button>
          <Link to="/contact">
            <Button className="hidden md:inline-flex bg-orange-600 hover:bg-orange-700 text-white rounded-full px-5 h-10 font-medium shadow-sm hover:shadow-md transition-all">
              Let's Connect
            </Button>
          </Link>
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-neutral-900"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white max-h-[80vh] overflow-y-auto">
          <div className="px-6 py-4 space-y-1">
            <Link to="/services/ai-automation" className="block py-3 font-medium text-neutral-900">AI First</Link>
            <details className="group">
              <summary className="flex items-center justify-between py-3 font-medium text-neutral-900 cursor-pointer list-none">
                Services <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-3 pb-2 space-y-1">
                {navServices.map((s) => (
                  <Link key={s.name} to={s.href} className="block py-2 text-sm text-neutral-700">{s.name}</Link>
                ))}
              </div>
            </details>
            <details className="group">
              <summary className="flex items-center justify-between py-3 font-medium text-neutral-900 cursor-pointer list-none">
                Solutions <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-3 pb-2 space-y-1">
                {navSolutions.map((s) => (
                  <Link key={s.name} to={s.href} className="block py-2 text-sm text-neutral-700">{s.name}</Link>
                ))}
              </div>
            </details>
            <Link to="/case-studies" className="block py-3 font-medium text-neutral-900">Our Work</Link>
            <details className="group">
              <summary className="flex items-center justify-between py-3 font-medium text-neutral-900 cursor-pointer list-none">
                About Us <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pl-3 pb-2 space-y-1">
                {navAbout.map((s) => (
                  <Link key={s.name} to={s.href} className="block py-2 text-sm text-neutral-700">{s.name}</Link>
                ))}
              </div>
            </details>
            <Link to="/contact" className="block mt-4">
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white rounded-full h-11">Let's Connect</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
