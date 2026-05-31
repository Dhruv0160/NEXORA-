import React, { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { offices } from "../data/mock";
import { useToast } from "../hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false
  });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.consent) {
      toast({ title: "Consent required", description: "Please accept the privacy notice to continue." });
      return;
    }
    // Store in localStorage as mock
    const leads = JSON.parse(localStorage.getItem("om_leads") || "[]");
    leads.push({ ...form, ts: Date.now() });
    localStorage.setItem("om_leads", JSON.stringify(leads));
    setSubmitted(true);
    toast({ title: "Message sent!", description: "Our team will reach out within 1 business day." });
  };

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50/40 py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-5 py-1.5 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-neutral-950">
            Let's build something <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">that ships.</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Tell us about your project—Dhruv and the team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-blue-600 mx-auto" />
                <h3 className="mt-4 text-2xl font-bold text-neutral-900">Thanks for reaching out!</h3>
                <p className="mt-2 text-neutral-600">A senior consultant will email you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", company:"", message:"", consent:false }); }}
                  className="mt-6 text-blue-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <h2 className="text-2xl font-bold text-neutral-900">Send us a message</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Full Name *</label>
                    <input required name="name" value={form.name} onChange={onChange} className="w-full h-11 px-4 rounded-lg border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Work Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={onChange} className="w-full h-11 px-4 rounded-lg border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone</label>
                    <input name="phone" value={form.phone} onChange={onChange} className="w-full h-11 px-4 rounded-lg border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="+1 555 123 4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company</label>
                    <input name="company" value={form.company} onChange={onChange} className="w-full h-11 px-4 rounded-lg border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition" placeholder="Acme Inc." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Tell us about your project *</label>
                  <textarea required name="message" value={form.message} onChange={onChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition resize-none" placeholder="Briefly describe your goals, timeline and any constraints..." />
                </div>
                <label className="flex items-start gap-2.5 text-sm text-neutral-600 cursor-pointer">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} className="mt-0.5 accent-blue-600 w-4 h-4" />
                  <span>I consent to Nexora processing my data in accordance with the privacy policy.</span>
                </label>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 h-12 rounded-full transition-colors shadow-md">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-indigo-600 text-white rounded-3xl p-8 shadow-xl shadow-blue-200">
              <h3 className="text-xl font-bold">Quick contact</h3>
              <div className="mt-5 space-y-4">
                <a href="mailto:help@nexora-digital.in" className="flex items-center gap-3 hover:opacity-90">
                  <Mail className="w-5 h-5" /> help@nexora-digital.in
                </a>
                <a href="tel:+919904256613" className="flex items-center gap-3 hover:opacity-90">
                  <Phone className="w-5 h-5" /> +91 99042 56613
                </a>
                <a href="https://wa.me/919904256613" target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:opacity-90">
                  <Send className="w-5 h-5" /> WhatsApp us
                </a>
              </div>
            </div>
            {offices.map((o) => (
              <div key={o.city} className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 font-bold text-neutral-900">
                  <MapPin className="w-4 h-4 text-blue-600" /> {o.city}
                </div>
                <p className="mt-2 text-sm text-neutral-600">{o.address}</p>
                <p className="mt-1 text-sm text-neutral-500">{o.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
