"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { openConsultationModal } from "./ConsultationModal";

const LEFT_AVATARS = [
  { src: "/avatar-1.avif", className: "-left-[8%] top-[16%] h-40 w-40 sm:h-52 sm:w-52 lg:h-56 lg:w-56" },
  { src: "/avatar-2.avif", className: "left-[12%] top-[46%] h-24 w-24 sm:h-32 sm:w-32 lg:h-36 lg:w-36" },
  { src: "/avatar-3.avif", className: "-left-[8%] top-[66%] h-28 w-28 sm:h-40 sm:w-40 lg:h-44 lg:w-44" },
];

const RIGHT_AVATARS = [
  { src: "/avatar-4.avif", className: "-right-[8%] top-[20%] h-20 w-20 sm:h-28 sm:w-28 lg:h-32 lg:w-32" },
  { src: "/avatar-5.avif", className: "right-[10%] top-[40%] h-24 w-24 sm:h-36 sm:w-36 lg:h-40 lg:w-40" },
  { src: "/avatar-6.jpg", className: "-right-[8%] top-[60%] h-28 w-28 sm:h-44 sm:w-44 lg:h-48 lg:w-48" },
];

export default function SmileCtaBanner() {
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
    }, { threshold: 0.15 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white px-4 py-0 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex min-h-[420px] max-w-6xl items-center justify-center sm:min-h-[368px] lg:min-h-[568px]">
        {LEFT_AVATARS.map((avatar, index) => (
          <div
            key={avatar.src}
            style={{ transitionDelay: `${350 + index * 700}ms`, transitionDuration: "1200ms" }}
            className={`absolute hidden overflow-hidden rounded-full bg-brand-rose/10 transition-all ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:block ${avatar.className} ${revealed ? "translate-x-0 scale-100 opacity-100" : "-translate-x-12 scale-90 opacity-0"}`}
          >
            <Image src={avatar.src} alt="" fill sizes="220px" className="object-cover" />
          </div>
        ))}

        {RIGHT_AVATARS.map((avatar, index) => (
          <div
            key={avatar.src}
            style={{ transitionDelay: `${700 + index * 700}ms`, transitionDuration: "1200ms" }}
            className={`absolute hidden overflow-hidden rounded-full bg-brand-rose/10 transition-all ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:block ${avatar.className} ${revealed ? "translate-x-0 scale-100 opacity-100" : "translate-x-12 scale-90 opacity-0"}`}
          >
            <Image src={avatar.src} alt="" fill sizes="220px" className="object-cover" />
          </div>
        ))}

        <div className="relative z-10 mx-auto max-w-xl text-center">
          <p className={`mb-4 flex items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-rust transition-all delay-[2450ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[639px]:delay-[350ms] max-[600px]:gap-2 max-[600px]:tracking-[0.2em] sm:text-sm ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <span aria-hidden="true" className="flex items-center">
              <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
              <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
            </span>
            <span>Start Your Smile Journey</span>
            <span aria-hidden="true" className="flex items-center">
              <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
              <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
            </span>
          </p>
          <h2 className={`font-heading text-3xl leading-tight font-bold tracking-[-1.5px] text-brand-ink transition-all delay-[2800ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[639px]:delay-700 sm:text-4xl lg:text-[52px] lg:leading-[1.1] lg:tracking-[-2px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            Your first step costs nothing but <span className="text-brand-rust">20 minutes.</span>
          </h2>
          <p className={`mt-4 text-base text-brand-ink/60 transition-all delay-[3150ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[639px]:delay-[1050ms] sm:text-lg ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            Book a free consultation at our RA Puram clinic. We&apos;ll assess your
            smile and walk you through your options honestly no pressure, no
            obligation.
          </p>
          <button
            type="button"
            onClick={() => openConsultationModal("Smile CTA Banner")}
            className={`mt-8 inline-flex h-14 items-center justify-center rounded-full bg-brand-rust px-8 text-xs font-bold uppercase tracking-wider text-white transition-all delay-[3500ms] duration-[1200ms] ease-out hover:-translate-y-0.5 hover:bg-brand-rust motion-reduce:transform-none motion-reduce:opacity-100 max-[639px]:delay-[1400ms] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            Book Free Consultation →
          </button>
          <p className={`mt-4 text-sm font-semibold text-brand-ink/60 transition-all delay-[3850ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[639px]:delay-[1750ms] ${revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>
            <Link href="tel:+919363937900" className="hover:text-brand-rust">
              +91 936 393 7900
            </Link>{" "}
            · Mon–Sat, 10 AM 8 PM
          </p>
        </div>
      </div>
    </section>
  );
}
