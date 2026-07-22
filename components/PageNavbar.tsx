"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/#top", label: "Home" },
  { href: "/#treatments", label: "Treatments" },
  { href: "/#about", label: "About" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
];

export default function PageNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-rose/20 bg-white/90 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link href="/" onClick={() => setOpen(false)} className="flex shrink-0 items-center">
          <Image
            src="/logos.png"
            alt="Alpha Dental Studio"
            width={187}
            height={150}
            priority
            className="h-20"
          />
        </Link>

        {/* <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-semibold text-brand-ink transition-colors hover:text-brand-rust"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul> */}

        <div className="hidden items-center gap-5 md:flex">
          <a
            href="tel:+919363937900"
            className="text-sm font-semibold text-brand-sage transition-colors hover:text-brand-rust"
          >
            +91 936 393 7900
          </a>
          <a
            href="tel:+919363937900"
            className="inline-flex h-11 items-center justify-center rounded-full bg-brand-rust px-6 text-sm font-bold text-white shadow-lg shadow-brand-rust/25 transition-transform hover:-translate-y-0.5 hover:bg-brand-ink"
          >
            Book Free Consultation
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="primary-nav-panel"
          onClick={() => setOpen((value) => !value)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg bg-brand-rose/10 md:hidden"
        >
          <span
            className={`block h-0.5 w-5 rounded-full bg-brand-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-brand-ink transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-5 rounded-full bg-brand-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        id="primary-nav-panel"
        className={`${open ? "flex" : "hidden"} flex-col gap-1 border-t border-brand-rose/20 px-4 pb-4 pt-2 md:hidden`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-2 py-2.5 text-[15px] font-semibold text-brand-ink hover:bg-brand-rose/10 hover:text-brand-rust"
          >
            {link.label}
          </Link>
        ))}
        <a
          href="tel:+919363937900"
          className="mt-2 inline-flex h-11 items-center justify-center rounded-full bg-brand-rust px-6 text-sm font-bold text-white shadow-lg shadow-brand-rust/25"
        >
          Book Free Consultation
        </a>
      </div>
    </header>
  );
}
