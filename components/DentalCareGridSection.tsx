"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const TRUST_POINTS = [
  {
    title: "9 specialist dentists",
    description:
      "Implantologists, orthodontists, periodontists, cosmetic surgeons .",
    icon: "/icon-6.png",
  },
  {
    title: "Digital smile planning",
    description: "See your projected results before treatment starts, not after you've paid.",
    icon: "/icon-7.png",
  },
  {
    title: "Transparent pricing",
    description: "Patients specifically call our rates fairer than other clinics in metro cities.",
    icon: "/icon-8.png",
  },
  {
    title: "Calm, modern clinic",
    description: "Patients describe it as premium, hygienic, and genuinely stress-free.",
    icon: "/icon-9.png",
  },
  {
    title: "Led by Dr. S. Zeenath",
    description: "Managing Director & Chief Dental Surgeon, backed by a full team of MDS consultants.",
    icon: "/icon-10.png",
  },
  {
    title: "Open 6 days a week",
    description: "Mon–Sat, 10 AM – 8 PM. Easy to fit around your schedule, not the other way round.",
    icon: "/icon-11.png",
  },
];

export default function DentalCareGridSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

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
    const scroller = mobileScrollRef.current;
    if (!scroller) return;

    let frame = 0;
    let previousTime = performance.now();
    const move = (time: number) => {
      const elapsed = Math.min(time - previousTime, 40);
      previousTime = time;
      scroller.scrollLeft += elapsed * 0.03;
      const halfway = scroller.scrollWidth / 2;
      if (halfway > 0 && scroller.scrollLeft >= halfway) scroller.scrollLeft -= halfway;
      frame = requestAnimationFrame(move);
    };
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={sectionRef} className="overflow-hidden px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className={`mb-2 flex items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-rust transition-all delay-[350ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-sm max-[600px]:gap-2 max-[600px]:tracking-[0.2em] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <span aria-hidden="true" className="flex items-center">
            <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
            <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
          </span>
          <span>Why RA Puram </span>
          <span aria-hidden="true" className="flex items-center">
            <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
            <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
          </span>
        </p>
        <h2 className={`font-heading text-3xl font-bold tracking-[-1.5px] text-brand-ink transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-4xl lg:text-[52px] lg:leading-[1.1] lg:tracking-[-2px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
         Nine specialists. One <span className="text-brand-rust">transparent plan. </span>
        </h2>
        <p className={`mt-2 text-base text-brand-ink/60 transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-lg ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap justify-center gap-x-10 gap-y-8 max-[600px]:hidden">
        {TRUST_POINTS.map((point, index) => (
          <div
            key={point.title}
            style={{ transitionDelay: `${1400 + index * 350}ms`, transitionDuration: "1200ms" }}
            className={`group flex w-full flex-col items-center text-center transition-all ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:w-[calc(50%-20px)] lg:w-[calc(25%-30px)] ${revealed ? "translate-x-0 translate-y-0 opacity-100" : index % 2 === 0 ? "-translate-x-5 translate-y-10 opacity-0" : "translate-x-5 translate-y-10 opacity-0"}`}
          >
            <span className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-rose to-brand-rust">
              <span className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[#c6cfbe] transition-all duration-500 ease-out group-hover:w-full" />
              <Image
                src={point.icon}
                alt=""
                width={46}
                height={46}
                className="relative z-10 h-15 w-15 object-contain brightness-0 invert"
              />
            </span>
            <h3 className="mt-6 font-heading text-lg font-bold text-brand-rust transition-colors duration-300 group-hover:text-[#c6cfbe]">
              {point.title}
            </h3>
            <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-brand-ink/60">
              {point.description}
            </p>
          </div>
        ))}
      </div>

      <div ref={mobileScrollRef} className={`no-scrollbar -mx-4 mt-8 hidden overflow-x-auto px-4 transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:block ${revealed ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <div className="flex w-max gap-5 pr-5">
          {[...TRUST_POINTS, ...TRUST_POINTS].map((point, index) => (
            <article key={`${point.title}-${index}`} aria-hidden={index >= TRUST_POINTS.length} className="group flex w-[78vw] max-w-[300px] shrink-0 flex-col items-center px-3 py-4 text-center">
              <span className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-rose to-brand-rust">
                <span className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-[#c6cfbe] transition-all duration-500 ease-out group-hover:w-full" />
                <Image src={point.icon} alt="" width={46} height={46} className="relative z-10 h-15 w-15 object-contain brightness-0 invert" />
              </span>
              <h3 className="mt-6 font-heading text-lg font-bold text-brand-rust transition-colors duration-300 group-hover:text-[#c6cfbe]">{point.title}</h3>
              <p className="mt-2 max-w-[260px] text-sm leading-relaxed text-brand-ink/60">{point.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
