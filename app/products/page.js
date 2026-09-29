"use client";
import { useState } from "react";
import Button from "../../components/Button";
import DarkBanner from "../../components/DarkBanner";

const products = [
  {
    key: "eco",
    category: "Marketing Agency",
    label: "Eco Creative Marketing Agency",
    desc: "Sustainable, growth-focused marketing for modern brands.",
    tags: ["Sustainability", "Branding", "Campaigns"],
  },
  {
    key: "one",
    category: "Content Studio",
    label: "One Content Creation Studio",
    desc: "High-impact video and content production.",
    tags: ["Video", "Photography", "Social Content"],
  },
  {
    key: "physio",
    category: "Health-Tech",
    label: "Physio@Home",
    desc: "On-demand physiotherapy, reimagined for the home.",
    tags: ["Health-Tech", "On-Demand", "Nepal"],
  },
];

export default function Products() {
  const [active, setActive] = useState("eco");
  const current = products.find((p) => p.key === active);

  return (
    <div className="animate-fadeSlideIn">
      <section className="hero-bg pt-[84px] pb-12">
        <div className="hero-glow" />
        <div className="max-w-content mx-auto px-[22px] md:px-10 relative">
          <h1 className="font-heading font-extrabold text-[32px] md:text-[46px] max-w-[720px]">
            Three ventures, <span className="gradient-text">one vision</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10">
          <div className="flex gap-3 mb-8 flex-wrap">
            {products.map((p) => (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className={`px-5 py-2 rounded-pill text-[14px] font-semibold border ${
                  active === p.key ? "bg-teal text-white border-teal" : "bg-white border-line"
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="eyebrow text-[12px] font-semibold text-teal mb-2">{current.category}</p>
              <h2 className="font-heading font-bold text-2xl mb-4">{current.label}</h2>
              <p className="text-muted mb-4">{current.desc}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {current.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line rounded-pill px-3 py-1 text-[12px] font-medium text-muted"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Button variant="primary">Learn more →</Button>
            </div>
            <div className="bg-white border border-line rounded-card h-64 flex items-center justify-center text-muted">
              Mock UI preview
            </div>
          </div>
        </div>
      </section>

      <DarkBanner eyebrow="Spotlight" title="Physio@Home — healthcare reimagined">
        <p className="text-white/70 max-w-[600px]">
          Bringing professional physiotherapy directly to patients' homes across Nepal.
        </p>
      </DarkBanner>
    </div>
  );
}
