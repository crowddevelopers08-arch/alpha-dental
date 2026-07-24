"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AlphaDifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-brand-ink px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <Image
        src="/hero/main-treatment.png"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className={`object-cover transition-all duration-[1400ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-b from-brand-ink/95 via-brand-ink/90 to-brand-ink/95 transition-opacity delay-[200ms] duration-[1200ms] motion-reduce:opacity-100 ${revealed ? "opacity-100" : "opacity-0"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-rust/30 blur-3xl transition-all delay-[350ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-brand-sage/25 blur-3xl transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        <span className={`inline-flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-brand-rose transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:gap-2 max-[600px]:tracking-[0.2em] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <span aria-hidden="true" className="flex items-center">
            <i className="block w-10 border-t border-brand-rose max-[600px]:w-6" />
            <i className="block h-2 w-2 rotate-45 border border-brand-rose" />
          </span>
          <span>The Alpha Difference</span>
          <span aria-hidden="true" className="flex items-center">
            <i className="block h-2 w-2 rotate-45 border border-brand-rose" />
            <i className="block w-10 border-t border-brand-rose max-[600px]:w-6" />
          </span>
        </span>

        <h2 className={`mt-6 font-heading text-3xl leading-tight font-bold tracking-[-1.5px] text-white transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-4xl lg:text-[52px] lg:leading-[1.1] lg:tracking-[-2px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          Every treatment starts with a <span className="text-brand-rose">plan</span>
          <br className="hidden sm:block" /> not a <span className="text-brand-rust">drill</span>.
        </h2>

        <p className={`mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 transition-all delay-[1750ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-lg ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          We diagnose, explain, and design a treatment plan specific to your mouth,
          your budget, and your goals before we touch a single tooth. That&apos;s
          why patients travel across Chennai just to sit in our RA Puram chair.
        </p>
      </div>


      <div className={`relative mx-auto mt-12 flex max-w-4xl items-center justify-center gap-2 text-sm font-semibold text-white/50 transition-all delay-[2100ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
        <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-rose" fill="currentColor" aria-hidden="true">
          <path d="M12 2c-4.4 0-8 3.6-8 8 0 5.4 7 12 8 12s8-6.6 8-12c0-4.4-3.6-8-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
        </svg>
        RA Puram, Chennai
      </div>
    </section>
  );
}
