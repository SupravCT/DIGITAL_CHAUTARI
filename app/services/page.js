import Button from "../../components/Button";
import Card from "../../components/Card";
import DarkBanner from "../../components/DarkBanner";

const categories = [
  {
    icon: "📣",
    title: "Digital Marketing",
    desc: "Data-driven campaigns that put your brand in front of the right people.",
    sub: ["SEO & SEM", "Social Media Marketing", "Paid Advertising", "Analytics & Reporting"],
  },
  {
    icon: "✍️",
    title: "Content Creation",
    desc: "Video, photo, and copy that tells your story and holds attention.",
    sub: ["Video Production", "Photography", "Copywriting", "Social Content"],
  },
  {
    icon: "💻",
    title: "Software Development",
    desc: "Full-stack engineering for web, mobile, and custom platforms.",
    sub: ["Web Development", "Mobile Apps", "API Integration", "Product Design"],
  },
];

const industries = ["Healthcare", "E-Commerce", "Real Estate", "Education", "Tourism", "Media"];

const tiers = [
  { name: "Starter", price: "Rs 15,000/mo", features: ["Basic SEO", "2 social posts/week", "Monthly report"] },
  { name: "Professional", price: "Rs 45,000/mo", popular: true, features: ["Full SEO & SEM", "Daily content", "Bi-weekly report", "Priority support"] },
  { name: "Enterprise", price: "Custom", features: ["Dedicated team", "Custom strategy", "24/7 support"] },
];

export default function Services() {
  return (
    <div className="animate-fadeSlideIn">
      <section className="hero-bg pt-[84px] pb-12">
        <div className="hero-glow" />
        <div className="max-w-content mx-auto px-[22px] md:px-10 relative">
          <h1 className="font-heading font-extrabold text-[32px] md:text-[46px] max-w-[720px] mb-4">
            Services that drive <span className="gradient-text">growth</span>
          </h1>
          <p className="text-muted max-w-[660px]">
            Digital marketing, content creation, and software development under one roof.
          </p>
        </div>
      </section>

      {/* Service categories */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 space-y-14">
          {categories.map((c) => (
            <div key={c.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <span className="w-12 h-12 rounded-chip bg-chip-teal flex items-center justify-center text-2xl mb-4">
                  {c.icon}
                </span>
                <h3 className="font-heading font-bold text-2xl mb-2">{c.title}</h3>
                <p className="text-muted text-[15px]">{c.desc}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {c.sub.map((s) => (
                  <div
                    key={s}
                    className="card-hover bg-white border border-line rounded-card p-4 text-[14px] font-medium"
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10">
          <h2 className="font-heading font-bold text-[28px] mb-8">Who we work with</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {industries.map((i) => (
              <div
                key={i}
                className="card-hover bg-white border border-line rounded-card p-5 text-center"
              >
                <p className="text-2xl mb-2">🏷️</p>
                <p className="font-heading font-semibold text-[13px]">{i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-card p-[22px] border ${
                t.popular ? "bg-navy text-white border-navy-border" : "bg-white border-line"
              }`}
            >
              {t.popular && (
                <span className="bg-gold text-ink text-[11px] font-semibold px-3 py-1 rounded-pill inline-block mb-3">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-xl mb-1">{t.name}</h3>
              <p className={`mb-4 ${t.popular ? "text-white/70" : "text-muted"}`}>{t.price}</p>
              <ul className="space-y-2 mb-6 text-[14px]">
                {t.features.map((f) => (
                  <li key={f}>✓ {f}</li>
                ))}
              </ul>
              <Button variant={t.popular ? "primary" : "ghost"}>Choose {t.name}</Button>
            </div>
          ))}
        </div>
      </section>

      <DarkBanner eyebrow="Why us" title="Why work with us">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[14px]">
          {["Dedicated project manager", "Agile development cycle", "Transparent pricing", "Post-launch support", "Scalable architecture", "Cross-platform expertise"].map(
            (i) => (
              <div key={i} className="flex gap-2"><span className="text-gold">✓</span>{i}</div>
            )
          )}
        </div>
      </DarkBanner>

      <section className="py-16 text-center">
        <h2 className="font-heading font-bold text-[28px] mb-6">Let's find the right service for you</h2>
        <Button variant="primary">Book a Consultation →</Button>
      </section>
    </div>
  );
}
