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
      <section className="bg-gradient-to-br from-orange-50 via-white to-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-5 py-1.5 rounded-full bg-orange-600 text-white text-sm font-medium">
            Get in Touch
          </span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Let's build something <span className="text-orange-600">remarkable</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Tell us about your project—our solution architects will get back to you within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[1.2fr_1fr] gap-12">
          <div className="bg-white border border-neutral-200 rounded-3xl p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 className="w-16 h-16 text-orange-600 mx-auto" />
                <h3 className="mt-4 text-2xl font-bold text-neutral-900">Thanks for reaching out!</h3>
                <p className="mt-2 text-neutral-600">A senior consultant will email you within 24 hours.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", company:"", message:"", consent:false }); }}
                  className="mt-6 text-orange-600 font-semibold hover:underline"
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
                    <input required name="name" value={form.name} onChange={onChange} className="w-full h-11 px-4 rounded-lg border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition" placeholder="Jane Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Work Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={onChange} className="w-full h-11 px-4 rounded-lg border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition" placeholder="jane@company.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Phone</label>
                    <input name="phone" value={form.phone} onChange={onChange} className="w-full h-11 px-4 rounded-lg border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition" placeholder="+1 555 123 4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">Company</label>
                    <input name="company" value={form.company} onChange={onChange} className="w-full h-11 px-4 rounded-lg border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition" placeholder="Acme Inc." />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Tell us about your project *</label>
                  <textarea required name="message" value={form.message} onChange={onChange} rows={5} className="w-full px-4 py-3 rounded-lg border border-neutral-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none" placeholder="Briefly describe your goals, timeline and any constraints..." />
                </div>
                <label className="flex items-start gap-2.5 text-sm text-neutral-600 cursor-pointer">
                  <input type="checkbox" name="consent" checked={form.consent} onChange={onChange} className="mt-0.5 accent-orange-600 w-4 h-4" />
                  <span>I consent to OrangeMantra processing my data in accordance with the privacy policy.</span>
                </label>
                <button type="submit" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-7 h-12 rounded-full transition-colors shadow-md">
                  Send Message <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          <div className="space-y-6">
            <div className="bg-orange-600 text-white rounded-3xl p-8">
              <h3 className="text-xl font-bold">Quick contact</h3>
              <div className="mt-5 space-y-4">
                <a href="mailto:info@orangemantra.com" className="flex items-center gap-3 hover:opacity-90">
                  <Mail className="w-5 h-5" /> info@orangemantra.com
                </a>
                <a href="tel:+911244103201" className="flex items-center gap-3 hover:opacity-90">
                  <Phone className="w-5 h-5" /> +91 124 410 3201
                </a>
              </div>
            </div>
            {offices.map((o) => (
              <div key={o.city} className="bg-white border border-neutral-200 rounded-2xl p-6">
                <div className="flex items-center gap-2 font-bold text-neutral-900">
                  <MapPin className="w-4 h-4 text-orange-600" /> {o.city}
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
