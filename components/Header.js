"use client";
import { useState } from "react";
import Link from "next/link";
import Button from "./Button";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-line">
      <div className="max-w-content mx-auto px-[22px] md:px-10 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-heading font-bold text-sm"
            style={{ background: "linear-gradient(135deg, #0F9488, #7FAE3A)" }}
          >
            DC
          </span>
          <div className="leading-tight">
            <p className="font-heading font-bold text-sm">Digital Chautari</p>
            <p className="text-muted text-[11px] hidden sm:block">Ideas meet execution</p>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium text-ink hover:text-teal transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary">Contact Us</Button>
        </div>

        <button
          className="md:hidden text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-white px-[22px] py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[14px] font-medium">
              {l.label}
            </Link>
          ))}
          <Button variant="primary">Contact Us</Button>
        </div>
      )}
    </header>
  );
}
