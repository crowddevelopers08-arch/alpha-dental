"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 21.5c-3.5-3.6-6-6.9-6-10.3a6 6 0 0 1 12 0c0 3.4-2.5 6.7-6 10.3Z" />
      <circle cx="12" cy="11" r="2.2" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 3h3l1.5 4.5-2 1.5a11 11 0 0 0 5 5l1.5-2 4.5 1.5v3c0 1-.9 1.8-1.9 1.6C9.8 17.4 6.6 14.2 5.9 7.4 5.7 6.4 5 5.5 6 3Z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5v5l3.3 2" />
    </svg>
  );
}

export default function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="overflow-hidden bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:py-8 max-sm:pt-0 max-sm:pb-5 text-center sm:px-6 lg:px-8">
        <Image
          src="/logos.png"
          alt="Alpha Dental Studio"
          width={187}
          height={150}
          className={`mx-auto h-16 w-auto transition-all delay-[350ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 scale-100 opacity-100" : "translate-y-8 scale-90 opacity-0"}`}
        />
        <p className={`mt-4 font-heading text-lg font-bold text-brand-ink transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          Alpha Dental Studio RA Puram
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 divide-y divide-brand-rose/25 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          <div className={`px-6 py-6 transition-all delay-[1050ms] duration-[1200ms] ease-out first:pt-0 motion-reduce:transform-none motion-reduce:opacity-100 sm:py-0 ${revealed ? "translate-x-0 translate-y-0 opacity-100" : "-translate-x-6 translate-y-8 opacity-0"}`}>
            <MapPinIcon className="mx-auto h-6 w-6 text-brand-rust" />
            <p className="mt-3 text-sm leading-relaxed text-brand-ink/70">
              Plot No. 65, 1st Floor, Thiruvengadam Street,
              <br />
              Next to CSI St. Luke&apos;s Church,
              <br />
              RA Puram, Chennai, TN 600028
            </p>
          </div>

          <div className={`px-6 py-6 transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:py-0 ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <PhoneIcon className="mx-auto h-6 w-6 text-brand-rust" />
            <div className="mt-3 space-y-1 text-sm text-brand-ink/70">
              <a href="tel:+918122200767" className="block transition-colors hover:text-brand-rust">
                +91 8122200767
              </a>
              <a href="tel:04435037900" className="block transition-colors hover:text-brand-rust">
                044 3503 7900
              </a>
              <a
                href="mailto:info@alphadentalstudios.com"
                className="block transition-colors hover:text-brand-rust"
              >
                info@alphadentalstudios.com
              </a>
            </div>
          </div>

          <div className={`px-6 py-6 transition-all delay-[1750ms] duration-[1200ms] ease-out last:pb-0 motion-reduce:transform-none motion-reduce:opacity-100 sm:py-0 ${revealed ? "translate-x-0 translate-y-0 opacity-100" : "translate-x-6 translate-y-8 opacity-0"}`}>
            <ClockIcon className="mx-auto h-6 w-6 text-brand-rust" />
            <p className="mt-3 text-sm text-brand-ink/70">Mon – Sat: 10 AM - 8 PM</p>
            <p className="text-sm text-brand-ink/70">Sunday: Closed</p>
          </div>
        </div>
      </div>

      <div className={`bg-brand-rust px-4 py-5 transition-all delay-[2100ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:px-6 lg:px-8 ${revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:gap-2">
          <p className={`text-xs text-white/80 transition-all delay-[2450ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"}`}>© 2026 Alpha Dental Studio. All Rights Reserved.</p>
          <Link
            href="/privacy-policy"
            className={`text-xs font-semibold text-white/80 underline-offset-2 transition-all delay-[2800ms] duration-[1200ms] ease-out hover:text-white hover:underline motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
          >
            Privacy Policy
          </Link>
          <p className={`text-xs font-semibold italic text-white transition-all delay-[3150ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 opacity-100" : "translate-x-5 opacity-0"}`}>
            Innovating Smiles. Inspiring Lives.
          </p>
        </div>
      </div>
    </footer>
  );
}
