export default function DarkBanner({ eyebrow, title, children, className = "" }) {
  return (
    <section className={`bg-navy text-white py-16 ${className}`}>
      <div className="max-w-content mx-auto px-[22px] md:px-10">
        {eyebrow && (
          <p className="eyebrow text-gold text-[12px] font-semibold mb-3">
            {eyebrow}
          </p>
        )}
        {title && (
          <h2 className="font-heading font-bold text-[28px] md:text-[30px] mb-6">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
}
