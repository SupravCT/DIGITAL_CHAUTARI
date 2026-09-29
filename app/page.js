import Button from "../components/Button";
import Card from "../components/Card";
import StatBar from "../components/StatBar";
import DarkBanner from "../components/DarkBanner";

const features = [
  { icon: "📈", title: "Growth-Driven", text: "Strategies built to move real metrics, not vanity numbers." },
  { icon: "🎨", title: "Creative-First", text: "Every project starts with an idea worth telling." },
  { icon: "⚙️", title: "Tech-Powered", text: "Full-stack engineering behind every product we ship." },
  { icon: "🤝", title: "Client-Centric", text: "Transparent process, partners instead of vendors." },
];

const services = [
  { icon: "📣", title: "Digital Marketing" },
  { icon: "✍️", title: "Content Creation" },
  { icon: "💻", title: "Software Development" },
  { icon: "🎯", title: "Branding & Design" },
];

const products = [
  { icon: "🌿", label: "Marketing Agency", title: "Eco Creative Marketing Agency", desc: "Sustainable, growth-focused marketing for modern brands." },
  { icon: "🎬", label: "Content Studio", title: "One Content Creation Studio", desc: "High-impact video and content production." },
  { icon: "🏥", label: "Health-Tech", title: "Physio@Home", desc: "On-demand physiotherapy, reimagined for the home." },
];

const sectors = ["Healthcare", "E-Commerce", "Real Estate", "Education", "Tourism & Hospitality", "Media & Publishing"];

const processSteps = [
  { n: "01", title: "Discover" },
  { n: "02", title: "Design" },
  { n: "03", title: "Develop" },
  { n: "04", title: "Deliver" },
];

const testimonials = [
  { name: "Anisha Rai", role: "Founder, Bloom Naturals", quote: "Digital Chautari transformed how we tell our brand story online." },
  { name: "Suman Gurung", role: "CEO, NextEd Nepal", quote: "Fast, thoughtful, and genuinely invested in our growth." },
  { name: "Priya Shrestha", role: "Ops Lead, CareWell Clinic", quote: "Physio@Home changed how our patients access care." },
];

const blogPosts = [
  { tag: "Marketing", date: "Sep 12, 2026 · 4 min read", title: "5 SEO wins every small brand should chase", color: "bg-chip-teal" },
  { tag: "Health-Tech", date: "Aug 28, 2026 · 6 min read", title: "How Physio@Home is changing home recovery", color: "bg-chip-gold" },
  { tag: "Engineering", date: "Aug 10, 2026 · 5 min read", title: "Building scalable software for Nepali startups", color: "bg-chip-mint" },
];

export default function Home() {
  return (
    <div className="animate-fadeSlideIn">
      {/* Hero */}
      <section className="hero-bg pt-[84px] pb-12">
        <div className="hero-glow" />
        <div className="max-w-content mx-auto px-[22px] md:px-10 relative">
          <span className="inline-block bg-white border border-line rounded-pill px-4 py-1.5 text-[13px] font-semibold mb-6 eyebrow-tracking">
            🚀 Welcome to Digital Chautari
          </span>
          <h1 className="font-heading font-extrabold text-[32px] md:text-[46px] leading-tight max-w-[720px] mb-5">
            We build <span className="gradient-text">digital bridges</span> between ideas and impact
          </h1>
          <p className="text-muted text-[16px] max-w-[660px] mb-8">
            Digital Chautari is a creative technology company in Kathmandu, Nepal, blending
            digital marketing, content creation, and health-tech software into one studio.
          </p>
          <div className="flex flex-wrap gap-4 mb-12">
            <Button variant="primary">Explore Services →</Button>
            <Button variant="ghost">View Products</Button>
          </div>
          <StatBar
            stats={[
              { icon: "🧩", number: "3", label: "Products" },
              { icon: "👥", number: "6+", label: "Team Members" },
              { icon: "💯", number: "100%", label: "Commitment" },
            ]}
          />
        </div>
      </section>

      {/* Feature strip */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Card key={f.title} icon={f.icon} title={f.title} chipIndex={i} index={i}>
              {f.text}
            </Card>
          ))}
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-[28px] mb-4">
              A <span className="gradient-text">Chautari</span> where ideas meet execution
            </h2>
            <p className="text-muted text-[15px] mb-4">
              "Chautari" is a resting place where travelers gather — and that's what we set out
              to build for brands and ideas: a place where strategy, creativity, and engineering
              meet.
            </p>
            <p className="text-muted text-[15px] mb-6">
              From marketing campaigns to full software products, our team turns ambitious ideas
              into things people actually use.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-6">
              {["Creative Strategy", "Brand Storytelling", "Full-Stack Engineering", "Health-Tech Expertise"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-2 text-[14px]">
                    <span className="text-teal">✓</span> {item}
                  </div>
                )
              )}
            </div>
            <Button variant="primary">Meet the Team →</Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {services.map((s, i) => (
              <Card key={s.title} icon={s.icon} title={s.title} chipIndex={i} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Dark stats banner */}
      <DarkBanner eyebrow="By the numbers" title="Results that speak for themselves">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["250+", "Projects Delivered"],
            ["40+", "Happy Clients"],
            ["1M+", "Content Views"],
            ["98%", "Client Retention"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-heading font-extrabold text-3xl text-gold">{n}</p>
              <p className="text-white/70 text-[13px]">{l}</p>
            </div>
          ))}
        </div>
      </DarkBanner>

      {/* Products teaser */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10">
          <h2 className="font-heading font-bold text-[28px] mb-8">Three ventures, one vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.map((p, i) => (
              <Card key={p.title} icon={p.icon} chipIndex={i} index={i}>
                <p className="eyebrow text-[12px] font-semibold text-teal mb-1">{p.label}</p>
                <h3 className="font-heading font-bold text-[16px] mb-2 text-ink">{p.title}</h3>
                <p className="mb-4">{p.desc}</p>
                <span className="text-teal font-semibold text-[14px]">Learn more →</span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10">
          <h2 className="font-heading font-bold text-[28px] mb-8">Sectors we serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
            {sectors.map((s, i) => (
              <Card key={s} icon="🏷️" title={s} chipIndex={i} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process (dark) */}
      <DarkBanner eyebrow="How we work" title="Our 4-step process">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {processSteps.map((s) => (
            <div key={s.n} className="bg-navy-card border border-navy-border rounded-card p-5">
              <p className="text-gold font-heading font-bold text-xl mb-2">{s.n}</p>
              <p className="font-heading font-semibold">{s.title}</p>
            </div>
          ))}
        </div>
      </DarkBanner>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10">
          <h2 className="font-heading font-bold text-[28px] mb-8">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div key={t.name} className="card-hover bg-white border border-line rounded-card p-[22px]">
                <p className="text-gold mb-3">★★★★★</p>
                <p className="text-muted text-[15px] mb-4">{t.quote}</p>
                <p className="font-heading font-semibold text-[14px]">{t.name}</p>
                <p className="text-muted text-[12px]">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10">
          <h2 className="font-heading font-bold text-[28px] mb-8">Latest from our blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.map((b) => (
              <div key={b.title} className="card-hover bg-white border border-line rounded-card overflow-hidden">
                <div className={`h-32 ${b.color}`} />
                <div className="p-[22px]">
                  <p className="eyebrow text-[12px] font-semibold text-teal mb-2">{b.tag}</p>
                  <p className="text-muted text-[12px] mb-2">{b.date}</p>
                  <h3 className="font-heading font-bold text-[16px] mb-2">{b.title}</h3>
                  <span className="text-teal font-semibold text-[14px]">Read more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10">
          <div
            className="rounded-card p-12 text-center text-white"
            style={{ background: "linear-gradient(120deg, #0F9488, #0B6F66)" }}
          >
            <h2 className="font-heading font-bold text-[28px] mb-4">
              Ready to build something extraordinary together?
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-teal font-semibold px-6 py-3 rounded-pill">
                Start a Project →
              </button>
              <button className="border border-white/50 text-white font-semibold px-6 py-3 rounded-pill">
                View Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
