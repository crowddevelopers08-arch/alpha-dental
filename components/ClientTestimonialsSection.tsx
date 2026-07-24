"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { openConsultationModal } from "./ConsultationModal";

const TESTIMONIALS = [
  {
    quote:
      "My implant treatment completed on time and as per the plan. They charged me a very reasonable rate compared to other clinics in metro cities.",
    name: "Gokul",
  },
  {
    quote:
      "The clinic's modern vibe and welcoming staff added to the overall great experience. My teeth feel super clean!",
    name: "Sharmesh Kumar",
  },
  {
    quote:
      "Best Invisalign treatment in Chennai with affordable cost. I am so happy I am getting the smile I wanted.",
    name: "Duke Allwyn",
  },
];

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M7 12c0-2.8 1.7-4.6 4-4.6v1.7c-1.1.3-1.8 1.2-1.8 2.3H11v4.5H7V12Z" />
      <path d="M14 12c0-2.8 1.7-4.6 4-4.6v1.7c-1.1.3-1.8 1.2-1.8 2.3H18v4.5h-4V12Z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.5 15 9l7 1-5.2 4.9L18.2 22 12 18.3 5.8 22l1.4-7.1L2 10l7-1 3-6.5Z" />
    </svg>
  );
}

export default function ClientTestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => setActiveTestimonial((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const showNext = () => setActiveTestimonial((current) => (current + 1) % TESTIMONIALS.length);
  const mobileTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-brand-rose/10 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <Image
        src="/testmonial-bg.jpg"
        alt=""
        fill
        aria-hidden="true"
        sizes="100vw"
        className={`object-cover transition-all duration-[1400ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
      />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-gradient-to-br from-white/92 via-brand-rose/85 to-white/90 transition-opacity delay-[200ms] duration-[1200ms] motion-reduce:opacity-100 ${revealed ? "opacity-100" : "opacity-0"}`}
      />
      <span aria-hidden="true" className={`absolute top-0 left-6 h-1.5 w-16 origin-left rounded-b-full bg-brand-rust transition-all delay-[350ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`} />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-rose/40 blur-3xl transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}
      />

      <div className="relative mx-auto max-w-6xl">
        <p className={`mb-4 flex items-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-rust transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-sm max-[600px]:gap-2 max-[600px]:tracking-[0.2em] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <span aria-hidden="true" className="flex items-center">
            <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
            <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
          </span>
          <span>Patient Stories</span>
          <span aria-hidden="true" className="flex items-center">
            <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
            <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
          </span>
        </p>
        <h2 className={`font-heading text-4xl leading-[1.1] font-bold tracking-[-1.5px] text-brand-ink transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-5xl lg:text-[52px] lg:tracking-[-2px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          In Their <span className="text-brand-rust">Words</span>
        </h2>
        <span aria-hidden="true" className={`mt-3 block h-0.5 w-14 origin-left bg-brand-ink/40 transition-all delay-[1750ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"}`} />
        <p className={`mt-2 max-w-xl text-brand-ink/70 transition-all delay-[2100ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}>Don&apos;t take our word for it.</p>

        <div className="mt-8 grid grid-cols-1 gap-10 max-[600px]:hidden md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              style={{ transitionDelay: `${2450 + index * 350}ms`, transitionDuration: "1200ms" }}
              className={`flex gap-4 transition-all ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 translate-y-0 opacity-100" : index % 2 === 0 ? "-translate-x-6 translate-y-10 opacity-0" : "translate-x-6 translate-y-10 opacity-0"}`}
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-rust font-heading text-lg font-bold text-white ring-2 ring-white">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-ink">
                  <QuoteIcon className="h-4 w-4 text-white" />
                </span>
                <div className="mt-3 flex gap-1 text-brand-rust">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-brand-ink/80">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="mt-3 font-heading text-sm font-bold text-brand-ink">
                   {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-8 hidden transition-all delay-[2450ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:block ${revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <article key={mobileTestimonial.name} aria-live="polite" className="animate-slip-up is-visible min-h-[245px] rounded-2xl border border-brand-rose/25 bg-white/75 p-5 shadow-[0_14px_38px_rgba(58,46,41,.09)] backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-rose to-brand-rust font-heading text-lg font-bold text-white ring-2 ring-white">{mobileTestimonial.name.charAt(0)}</div>
              <div>
                <p className="font-heading text-base font-bold text-brand-ink">{mobileTestimonial.name}</p>
                <div className="mt-1 flex gap-1 text-brand-rust">
                  {Array.from({ length: 5 }).map((_, index) => <StarIcon key={index} className="h-4 w-4" />)}
                </div>
              </div>
              <span className="ml-auto flex h-9 w-9 items-center justify-center rounded-lg bg-brand-ink"><QuoteIcon className="h-4 w-4 text-white" /></span>
            </div>
            <p className="mt-5 text-sm leading-7 text-brand-ink/75">&ldquo;{mobileTestimonial.quote}&rdquo;</p>
          </article>

          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-center gap-2" aria-label="Testimonial pagination">
              {TESTIMONIALS.map((testimonial, index) => (
                <button key={testimonial.name} type="button" onClick={() => setActiveTestimonial(index)} aria-label={`Show testimonial from ${testimonial.name}`} aria-current={activeTestimonial === index ? "true" : undefined} className={`h-1.5 rounded-full transition-all ${activeTestimonial === index ? "w-7 bg-brand-rust" : "w-2 bg-brand-rose/50"}`} />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={showPrevious} aria-label="Show previous testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-xl text-brand-rust shadow-sm transition hover:bg-brand-rust hover:text-white">←</button>
              <button type="button" onClick={showNext} aria-label="Show next testimonial" className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-xl text-brand-rust shadow-sm transition hover:bg-brand-rust hover:text-white">→</button>
            </div>
          </div>
        </div>

        <div className={`mt-12 flex flex-col items-center gap-4 transition-all delay-[3500ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:mt-8 sm:flex-row sm:justify-center ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <button
            type="button"
            onClick={() => openConsultationModal("Testimonials Consultation CTA")}
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-rust px-8 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-ink"
          >
            Book Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
