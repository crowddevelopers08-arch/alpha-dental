"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const ACCENT_STYLES = [
  { bg: "bg-brand-rose/15" },
  { bg: "bg-brand-sage/15" },
  { bg: "bg-brand-rust/15" },
] as const;

const SERVICES = [
  {
    number: "01",
    tag: "Fixed · Permanent",
    title: "Full-Mouth Implants",
    description:
      "Missing most or all your teeth? Get a complete, fixed set that looks, feels, and functions like your natural teeth — placed by consultant implantologists.",
    image: "/hero/main-treatment.png",
    icon: "/icon-1.png",
  },
  {
    number: "02",
    tag: "Designed Before You Decide",
    title: "Smile Designing",
    description:
      "A custom blueprint for your smile shape,shade, symmetry designed digitally before treatment begins, so you see your new smile before you commit to it.",
    image: "/hero/woman-avatar.png",
    icon: "/icon-2.png",
  },
  {
    number: "03",
    tag: "Invisalign Certified",
    title: "Invisible Aligners",
    description:
      "Straighten your teeth without a single metal wire. Nearly invisible, removable, guided by certified Invisalign providers — fix your bite on your own time.",
    image: "/Invisible.webp",
    icon: "/icon-3.png",
  },
  {
    number: "04",
    tag: "Crowns · Bridges · Implants",
    title: "Tooth Replacement",
    description:
      "One tooth or several — crowns, bridges, or implants — replaced with solutions built to last, not band-aid fixes that fail in a year.",
    image: "/Tooth.jpg",
    icon: "/icon-4.png",
  },
  {
    number: "05",
    tag: "Veneers · Whitening · Contouring",
    title: "Cosmetic Dentistry",
    description:
      "Veneers, whitening, contouring — small refinements that make a disproportionately big difference in how confident you feel every time you smile.",
    image: "/customatic.jpg",
    icon: "/icon-5.png",
  },
];

export default function DentalServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveService((current) => (current + 1) % SERVICES.length);
    }, 5000);
    return () => window.clearInterval(interval);
  }, []);

  const showPrevious = () => setActiveService((current) => (current - 1 + SERVICES.length) % SERVICES.length);
  const showNext = () => setActiveService((current) => (current + 1) % SERVICES.length);
  const mobileService = SERVICES[activeService];
  const mobileAccent = ACCENT_STYLES[activeService % ACCENT_STYLES.length];

  return (
    <section ref={sectionRef} className="overflow-hidden bg-[#f7f3f0] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className={`mb-2 flex items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-rust transition-all delay-[350ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-sm max-[600px]:gap-2 max-[600px]:tracking-[0.2em] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <span aria-hidden="true" className="flex items-center">
            <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
            <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
          </span>
          <span>Our Services</span>
          <span aria-hidden="true" className="flex items-center">
            <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
            <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
          </span>
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-[-1.5px] text-brand-ink transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-4xl lg:text-[52px] lg:leading-[1.1] lg:tracking-[-2px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          What We <span className="text-brand-rust">Treat</span>
        </h2>
        <p className={`mt-2 text-base text-brand-ink/60 transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-lg ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          one clinic everything dental solution you need.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-6 max-[600px]:hidden lg:gap-8">
        {SERVICES.map((service, index) => {
          const accent = ACCENT_STYLES[index % ACCENT_STYLES.length];
          return (
            <div
              key={service.title}
              style={{ transitionDelay: `${1400 + index * 350}ms`, transitionDuration: "1200ms" }}
              className={`flex w-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all ease-out hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:opacity-100 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.333px)] ${revealed ? "translate-x-0 translate-y-0 opacity-100" : index % 2 === 0 ? "-translate-x-5 translate-y-12 opacity-0" : "translate-x-5 translate-y-12 opacity-0"}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className={`relative flex h-14 w-14 items-center justify-center rounded-full ${accent.bg}`}>
                    <Image src={service.icon} alt="" width={32} height={32} className="h-8 w-8" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-brand-rust/60">
                    {service.number}
                  </span>
                </div>

                <div className="flex flex-col items-end gap-2">
      
                  <h3 className="font-heading text-xl font-bold text-brand-ink">
                    {service.title}
                  </h3>
                   <span className="inline-flex w-fit rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-brand-ink/70">
                    {service.tag}
                  </span>
                </div>
              </div>

              <div className="mt-3 border-b border-black/10 pb-2" />

              <p className="mt-2 text-sm leading-relaxed text-brand-ink/55">
                {service.description}
              </p>

              <div className="group relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="scale-100 object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="h-3 w-3 rounded bg-brand-rust opacity-0 transition-all duration-500 ease-out group-hover:h-full group-hover:w-full group-hover:opacity-30" />
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className={`relative mx-auto max-sm:mt-3 mt-8 hidden max-w-md px-10 max-sm:px-2 transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:block ${revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <button type="button" onClick={showPrevious} aria-label="Show previous dental service" className="absolute top-1/2 left-[-15px] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-xl text-brand-rust shadow-lg transition hover:bg-brand-rust hover:text-white">←</button>

        <article key={mobileService.title} aria-live="polite" className="animate-slip-up is-visible flex w-full flex-col rounded-2xl border border-black/5 bg-white p-5 shadow-[0_16px_45px_rgba(58,46,41,.10)]">
          <div className="flex items-start justify-between gap-0">
            <div className="flex items-center gap-2">
              <span className={`relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${mobileAccent.bg}`}>
                <Image src={mobileService.icon} alt="" width={28} height={28} className="h-7 w-7" />
              </span>
              <span className="text-xs font-bold tracking-widest text-brand-rust/60">{mobileService.number}</span>
            </div>
            <div className="flex flex-col items-end gap-2 text-right">
              <h3 className="font-heading text-lg leading-tight font-bold text-brand-ink">{mobileService.title}</h3>
              <span className="inline-flex w-fit rounded-full border border-black/10 px-2.5 py-1 text-[10px] font-semibold text-brand-ink/70">{mobileService.tag}</span>
            </div>
          </div>
          <div className="mt-3 border-b border-black/10" />
          <p className="mt-3 text-sm leading-relaxed text-brand-ink/55">{mobileService.description}</p>
          <div className="relative mt-4 aspect-[4/3] w-full overflow-hidden rounded-xl">
            <Image src={mobileService.image} alt={mobileService.title} fill sizes="80vw" className="object-cover" />
          </div>
        </article>

        <button type="button" onClick={showNext} aria-label="Show next dental service" className="absolute top-1/2 right-[-15px] z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-xl text-brand-rust shadow-lg transition hover:bg-brand-rust hover:text-white">→</button>

        <div className="mt-5 flex justify-center gap-2" aria-label="Service carousel pagination">
          {SERVICES.map((service, index) => (
            <button key={service.number} type="button" onClick={() => setActiveService(index)} aria-label={`Show ${service.title}`} aria-current={activeService === index ? "true" : undefined} className={`h-1.5 rounded-full transition-all ${activeService === index ? "w-7 bg-brand-rust" : "w-2 bg-brand-rose/40"}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
