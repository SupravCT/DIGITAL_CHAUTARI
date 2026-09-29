import Button from "../../components/Button";
import DarkBanner from "../../components/DarkBanner";

const tiles = [
  { label: "Founded", value: "2025", tone: "bg-teal text-white" },
  { label: "Products", value: "3", tone: "bg-navy text-white" },
  { label: "HQ", value: "Kathmandu", tone: "bg-white border border-line" },
  { label: "Team Members", value: "7+", tone: "bg-gold text-white" },
];

const values = ["Passion", "Creativity", "Excellence", "Collaboration"];
const trust = ["ISO 9001 Ready", "Data Protection", "Global Delivery", "Pan-Nepal Network"];
const roles = [
  "Founder & CEO", "Co-Founder & COO", "Front-End Developer", "Back-End Developer",
  "Marketing Lead", "Sales Executive", "Business Development Officer",
];
const roadmap = [
  { year: "2025", title: "The Idea" },
  { year: "2025", title: "First Products" },
  { year: "2026", title: "Health-Tech Entry" },
  { year: "2026", title: "Company Registration" },
];

export default function About() {
  return (
    <div className="animate-fadeSlideIn">
      <section className="hero-bg pt-[84px] pb-12">
        <div className="hero-glow" />
        <div className="max-w-content mx-auto px-[22px] md:px-10 relative">
          <h1 className="font-heading font-extrabold text-[32px] md:text-[46px] max-w-[720px]">
            The people behind <span className="gradient-text">Digital Chautari</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="font-heading font-bold text-2xl mb-4">From a chautari to a digital powerhouse</h2>
            <p className="text-muted">
              What started as informal meetups turned into a full creative technology studio
              serving clients across Nepal and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {tiles.map((t) => (
              <div key={t.label} className={`rounded-card p-5 ${t.tone}`}>
                <p className="font-heading font-extrabold text-xl">{t.value}</p>
                <p className="text-[12px] opacity-80">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white border border-line rounded-card p-[22px]">
            <h3 className="font-heading font-bold text-lg mb-2">Mission</h3>
            <p className="text-muted text-[15px]">Bridging creative ideas with technology that makes a real impact.</p>
          </div>
          <div className="bg-white border border-line rounded-card p-[22px]">
            <h3 className="font-heading font-bold text-lg mb-2">Vision</h3>
            <p className="text-muted text-[15px]">To become Nepal's leading creative technology studio.</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {values.map((v) => (
            <div key={v} className="bg-white border border-line rounded-card p-5 text-center font-heading font-semibold">
              {v}
            </div>
          ))}
        </div>
      </section>

      <DarkBanner eyebrow="Trust" title="Committed to quality & trust">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trust.map((t) => (
            <div key={t} className="bg-navy-card border border-navy-border rounded-card p-4 text-[14px]">
              {t}
            </div>
          ))}
        </div>
      </DarkBanner>

      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {roles.map((r) => (
            <div key={r} className="bg-white border border-line rounded-card p-4 text-[14px] text-center">
              {r}
            </div>
          ))}
        </div>
      </section>

      <DarkBanner eyebrow="Roadmap" title="Our journey so far">
        <div className="space-y-6">
          {roadmap.map((r) => (
            <div key={r.title} className="flex items-center gap-4">
              <span className="w-3 h-3 rounded-full bg-leaf" />
              <span className="bg-gold text-ink text-[12px] font-semibold px-3 py-1 rounded-pill">{r.year}</span>
              <span className="font-heading font-semibold">{r.title}</span>
            </div>
          ))}
        </div>
      </DarkBanner>

      <section className="py-16 text-center">
        <h2 className="font-heading font-bold text-[28px] mb-6">Want to join our journey?</h2>
        <Button variant="primary">Get in Touch →</Button>
      </section>
    </div>
  );
}
