import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import { blogPosts } from "../data/mock";

const BlogPage = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-violet-50 via-white to-white py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block px-5 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium">Insights</span>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight text-neutral-900">
            Ideas worth <span className="text-violet-600">building on</span>
          </h1>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Practical guides, case studies and analyses from our engineers and consultants.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((p) => (
            <article key={p.id} className="group bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-neutral-500">
                  <span className="px-2.5 py-1 rounded-full bg-violet-100 text-violet-700 font-medium">{p.category}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{p.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-bold text-neutral-900 leading-snug group-hover:text-violet-600 transition-colors">{p.title}</h3>
                <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{p.excerpt}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-violet-600 font-semibold text-sm">
                  Read more <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default BlogPage;
