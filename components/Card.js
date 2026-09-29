"use client";
import { useEffect, useRef, useState } from "react";

const chipColors = ["bg-chip-mint", "bg-chip-teal", "bg-chip-gold", "bg-chip-lilac", "bg-chip-pink"];

export default function Card({ icon, title, children, chipIndex = 0, index = 0 }) {
  const chip = chipColors[chipIndex % chipColors.length];
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`group card-hover bg-white border border-line rounded-card p-[22px] transition-opacity duration-500 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{ transitionDelay: `${(index % 12) * 70}ms` }}
    >
      {icon && (
        <div
          className={`w-11 h-11 flex items-center justify-center rounded-chip ${chip} text-xl mb-4 transition-transform duration-300 group-hover:scale-[1.08]`}
        >
          {icon}
        </div>
      )}
      {title && <h3 className="font-heading font-bold text-[16px] mb-2">{title}</h3>}
      <div className="text-muted text-[15px]">{children}</div>
    </div>
  );
}
