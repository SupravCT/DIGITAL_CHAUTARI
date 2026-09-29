import Button from "../../components/Button";
import Card from "../../components/Card";

const info = [
  { icon: "📍", title: "Address", text: "Kathmandu, Nepal" },
  { icon: "✉️", title: "Email", text: "hello@digitalchautari.com" },
  { icon: "📞", title: "Phone", text: "+977 98XXXXXXXX" },
  { icon: "🕐", title: "Business Hours", text: "Sun–Fri, 10am–6pm" },
];

const departments = [
  { title: "Marketing", email: "marketing@digitalchautari.com" },
  { title: "Content Studio", email: "content@digitalchautari.com" },
  { title: "Software Dev", email: "dev@digitalchautari.com" },
  { title: "Business Dev", email: "biz@digitalchautari.com" },
];

const pillTags = ["Marketing", "Content", "Software", "Branding", "Other"];

export default function Contact() {
  return (
    <div className="animate-fadeSlideIn">
      <section className="hero-bg pt-[84px] pb-12">
        <div className="hero-glow" />
        <div className="max-w-content mx-auto px-[22px] md:px-10 relative">
          <h1 className="font-heading font-extrabold text-[32px] md:text-[46px] max-w-[720px]">
            Let's start a <span className="gradient-text">conversation</span>
          </h1>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-2 md:grid-cols-4 gap-5">
          {info.map((c, i) => (
            <Card key={c.title} icon={c.icon} title={c.title} chipIndex={i} index={i}>
              {c.text}
            </Card>
          ))}
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10">
          <h2 className="font-heading font-bold text-[28px] mb-8">Reach the right team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {departments.map((d) => (
              <Card key={d.title} title={d.title}>{d.email}</Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-content mx-auto px-[22px] md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <form className="bg-white border border-line rounded-card p-[22px] space-y-4">
            <input className="w-full border border-line rounded-card px-4 py-2 text-[15px]" placeholder="Name" />
            <input className="w-full border border-line rounded-card px-4 py-2 text-[15px]" placeholder="Email" />
            <input className="w-full border border-line rounded-card px-4 py-2 text-[15px]" placeholder="Subject" />
            <div className="flex flex-wrap gap-2">
              {pillTags.map((t) => (
                <span key={t} className="border border-line rounded-pill px-4 py-1.5 text-[13px] cursor-pointer hover:border-teal">
                  {t}
                </span>
              ))}
            </div>
            <textarea className="w-full border border-line rounded-card px-4 py-2 text-[15px] h-28" placeholder="Message" />
            <Button variant="primary">Send Message</Button>
          </form>

          <div className="space-y-5">
            <div className="bg-white border border-line rounded-card h-48 flex items-center justify-center text-muted">
              Map placeholder
            </div>
            <div className="bg-navy text-white rounded-card p-5">
              Need quick answers?{" "}
              <span className="text-gold font-semibold">Visit FAQ page →</span>
            </div>
            <div className="bg-white border border-line rounded-card p-5 text-[14px] space-y-2">
              <p className="font-heading font-semibold mb-2">Response Time</p>
              <p>Email: 24h</p>
              <p>Proposals: 2–3 days</p>
              <p>Urgent: Same day</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
