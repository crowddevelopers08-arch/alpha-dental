"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function CountUp({ end, suffix = "" }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const reducedMotionFrame = requestAnimationFrame(() => setCount(end));
      return () => cancelAnimationFrame(reducedMotionFrame);
    }

    let frame = 0;
    let started = false;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting || started) return;
      started = true;
      const startTime = performance.now();
      const duration = 2800;

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(end * eased));
        if (progress < 1) frame = requestAnimationFrame(animate);
      };

      frame = requestAnimationFrame(animate);
      observer.disconnect();
    }, { threshold: 0.5 });

    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [end]);

  return <span ref={elementRef}>{count}{suffix}</span>;
}

function TypewriterText() {
  const phrase = "trusted specialists..";
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const reducedMotionTimer = window.setTimeout(() => setText(phrase), 0);
      return () => window.clearTimeout(reducedMotionTimer);
    }

    const complete = text === phrase;
    const empty = text.length === 0;
    const delay = complete && !deleting ? 1700 : empty && deleting ? 550 : deleting ? 65 : 105;

    const timer = window.setTimeout(() => {
      if (complete && !deleting) {
        setDeleting(true);
        return;
      }
      if (empty && deleting) {
        setDeleting(false);
        return;
      }
      setText(deleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, text]);

  return (
    <span aria-hidden="true" className="inline-flex w-[17ch] items-baseline text-left max-[760px]:w-[16ch] max-[425px]:w-[15ch] max-[375px]:w-[14.5ch] max-[340px]:w-[14ch]">
      <span className="text-[var(--color-brand-rust)]">{text}</span>
      <span className="ml-[2px] inline-block h-[.82em] w-[3px] animate-pulse bg-[var(--color-brand-rust)] motion-reduce:hidden" />
    </span>
  );
}

export default function DentalThemeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const section = heroRef.current;
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

  return (
    <section
      ref={heroRef}
      aria-labelledby="dental-theme-title"
      className="relative isolate min-h-[630px] overflow-hidden text-[var(--color-brand-ink)] before:absolute before:inset-0 before:-z-[1] before:content-[''] before:bg-[radial-gradient(circle_at_48%_50%,rgba(251,238,231,.78)_0,transparent_40%),linear-gradient(112deg,rgba(253,243,238,.93)_0%,rgba(247,230,221,.87)_52%,rgba(251,240,233,.93)_100%)] max-[760px]:min-h-[840px] max-[600px]:min-h-0 max-[600px]:before:bg-[linear-gradient(112deg,rgba(253,243,238,.95)_0%,rgba(247,230,221,.92)_52%,rgba(251,240,233,.95)_100%)]"
    >
      <div className={`absolute inset-0 -z-[2] overflow-hidden transition-opacity duration-[1600ms] ease-out motion-reduce:opacity-100 ${revealed ? "opacity-100" : "opacity-0"}`}>
        <Image
          src="/testmonial-bg.jpg"
          alt="Dental specialist treating a patient at Alpha Dental Studio"
          fill
          priority
          sizes="100vw"
          className="animate-hero-background-zoom object-cover object-center"
        />
      </div>

      <div className="relative z-[5] mx-auto grid w-[82vw] grid-cols-1 items-center gap-10 pt-[50px] pb-[40px] text-center min-[1101px]:w-[min(1320px,90vw)] min-[1101px]:grid-cols-[3fr_2fr] min-[1101px]:gap-0 min-[1101px]:pb-[82px] min-[1101px]:text-left max-[1100px]:pt-[100px] max-[760px]:w-[92vw] max-[760px]:pt-[20px] max-[600px]:pb-[50px] max-[425px]:w-[94vw] max-[425px]:pt-[9px] max-[425px]:pb-[50px] max-[375px]:pt-[14px] max-[375px]:pb-[70px] max-[340px]:pt-[14px] max-[340px]:pb-[60px]">
        <div>
          <p className={`mb-6 flex items-center justify-center gap-4 font-sans text-[17px] font-bold tracking-[3.5px] text-[var(--color-brand-rust)] uppercase transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 min-[1101px]:justify-start max-[760px]:mb-[18px] max-[760px]:gap-2 max-[760px]:text-[11px] max-[760px]:tracking-[1.8px] max-[600px]:[text-shadow:0_1px_0_rgba(255,255,255,.9)] max-[425px]:gap-1.5 max-[426px]:text-[11px] max-[425px]:tracking-[1.5px] max-[375px]:text-[9.5px] max-[375px]:tracking-[1.3px] max-[340px]:text-[9px] max-[340px]:tracking-[1.1px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <span aria-hidden="true" className="flex items-center">
              <i className="block w-12 border-t border-[var(--color-brand-rust)] max-[760px]:w-5 max-[375px]:w-3" />
              <i className="block h-2 w-2 rotate-45 border border-[var(--color-brand-rust)]" />
            </span>
            <span>Alpha Dental Studio <b className="mx-1 font-normal text-[var(--color-brand-sage)]">·</b> RA Puram</span>
            <span aria-hidden="true" className="flex items-center">
              <i className="block h-2 w-2 rotate-45 border border-[var(--color-brand-rust)]" />
              <i className="block w-12 border-t border-[var(--color-brand-rust)] max-[760px]:w-5 max-[375px]:w-3" />
            </span>
          </p>
          <h1 id="dental-theme-title" aria-label="Your smile deserves Chennai's most trusted specialists" className={`m-0 font-heading text-[68px] leading-[1.06] font-bold tracking-[-2.4px] transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1100px]:text-[54px] max-[760px]:text-[39px] max-[760px]:leading-[1.08] max-[760px]:tracking-[-1.4px] max-[600px]:font-extrabold max-[600px]:[text-shadow:0_2px_0_rgba(255,255,255,.72)] max-[425px]:text-[36px] max-[375px]:text-[33px] max-[340px]:text-[30px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            Your smile deserves Chennai&apos;s
            <span className="flex items-baseline justify-center gap-[.25em] whitespace-nowrap min-[1101px]:justify-start max-[760px]:text-[32px] max-[425px]:text-[29px] max-[375px]:text-[26px] max-[340px]:text-[23px]">
              <span>most</span>
              <TypewriterText />
            </span>
          </h1>
          <svg className={`mx-auto mt-px mb-[17px] block h-[21px] w-[430px] transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 min-[1101px]:mx-0 max-[760px]:mb-[14px] max-[760px]:w-[250px] max-[425px]:w-[230px] max-[375px]:w-[210px] max-[340px]:w-[190px] ${revealed ? "scale-x-100 opacity-100" : "scale-x-50 opacity-0"}`} viewBox="0 0 430 20" aria-hidden="true">
            <path d="M3 15 C120 4 310 1 427 10" className="fill-none stroke-[var(--color-brand-sage)] stroke-[3.5]" />
          </svg>
          <div className={`mx-auto mb-[22px] flex w-[min(850px,72vw)] flex-col gap-1 text-[#39414a] transition-all delay-[1750ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 min-[1101px]:mx-0 min-[1101px]:w-full min-[1101px]:max-w-[520px] max-[760px]:mb-[18px] max-[760px]:w-[92%] max-[600px]:text-[var(--color-brand-ink)] max-[600px]:[text-shadow:0_1px_0_rgba(255,255,255,.85)] max-[425px]:w-[94%] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <strong className="text-[17px] italic max-[760px]:text-[15px] max-[425px]:text-[14px] max-[375px]:text-[13px] max-[340px]:text-[12px]">Not just another clinic.</strong>
            <span className="text-[14px] leading-[1.55] font-medium max-[760px]:text-[12px] max-[760px]:leading-[1.45] max-[600px]:font-semibold max-[425px]:text-[11.5px] max-[425px]:leading-[1.55] max-[375px]:text-[11px] max-[340px]:text-[10.5px]">Full-Mouth Implants, Smile Designing, Invisible Aligners, Tooth Replacement &amp; Cosmetic Dentistry — all under one roof, led by consultant specialists, not generalists.</span>
          </div>
          <div aria-label="Alpha Dental Studio highlights" className={`mx-auto mt-[17px] flex items-center justify-center gap-[19px] text-[var(--color-brand-ink)] transition-all delay-[2100ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 min-[1101px]:mx-0 min-[1101px]:justify-start max-[760px]:mt-[15px] max-[760px]:gap-[10px] max-[600px]:[text-shadow:0_1px_0_rgba(255,255,255,.9)] max-[375px]:gap-[6px] max-[340px]:gap-1 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            {[['RA Puram', 'Chennai'], ['200+', '5-star reviews'], ['9', 'Specialist dentists']].map(([value, label], index) => (
              <div key={value} className="contents">
                {index > 0 && <i aria-hidden="true" className="block h-[22px] w-px bg-[rgba(150,55,32,.18)] max-[760px]:h-[30px]" />}
                <div className="flex items-baseline gap-[6px] whitespace-nowrap max-[760px]:flex-col max-[760px]:items-center max-[760px]:gap-px">
                  <strong className="font-heading text-[17px] font-extrabold max-[760px]:text-[14px] max-[375px]:text-[12px] max-[340px]:text-[11px]">
                    {value === '200+' ? <CountUp end={200} suffix="+" /> : value === '9' ? <CountUp end={9} /> : value}
                  </strong>
                  <span className="text-[12px] font-semibold text-[var(--color-brand-sage)] max-[760px]:text-[9px] max-[375px]:text-[8px] max-[340px]:text-[7.5px]">{label}</span>
                </div>
              </div>
            ))}
          </div>
          <div className={`mt-6 flex max-sm:ml-10 items-center justify-center gap-[13px] whitespace-nowrap transition-all delay-[2450ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 min-[1101px]:justify-start max-[760px]:mt-5 max-[760px]:gap-[7px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            <a href="https://wa.me/+919363937900?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation%20at%20RA%20Puram" target="_blank" rel="noopener noreferrer" className="inline-flex h-[62px] min-w-[285px] items-center justify-center rounded-full bg-[var(--color-brand-rust)] px-[25px] text-[16px] font-bold text-white no-underline shadow-[0_10px_30px_rgba(150,55,32,.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-brand-ink)] max-[760px]:h-[51px] max-[760px]:w-[46%] max-[760px]:min-w-0 max-[760px]:px-[7px] max-[760px]:text-[11px] max-[425px]:h-[48px] max-[425px]:text-[10px] max-[375px]:px-1 max-[375px]:text-[9px]"><span className="max-[375px]:hidden">Book My Free Consultation</span><span className="hidden max-[375px]:inline">Free Consultation</span></a>
            <a href="tel:+919363937900" className="inline-flex h-[62px] min-w-[220px] items-center justify-center rounded-full border border-[rgba(190,148,133,.35)] bg-white px-[25px] text-[16px] font-bold text-[var(--color-brand-ink)] no-underline shadow-[0_10px_30px_rgba(150,55,32,.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fbf3ef] max-[760px]:h-[51px] max-[760px]:w-[46%] max-[760px]:min-w-0 max-[760px]:px-[7px] max-[760px]:text-[11px] max-[425px]:h-[48px] max-[425px]:text-[10px] max-[375px]:px-1 max-[375px]:text-[9px]">Call +91 936 393 7900</a>
          </div>
        </div>

        <div className={`relative mx-auto mb-8 w-[340px] transition-all delay-[2800ms] duration-[1200ms] ease-out motion-reduce:scale-100 motion-reduce:opacity-100 min-[1101px]:mx-0 min-[1101px]:mb-0 min-[1101px]:w-full min-[1101px]:max-w-[420px] min-[1101px]:justify-self-end ${revealed ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}>
          <div aria-hidden="true" className="absolute -right-4 -bottom-4 aspect-[3/4] w-full rotate-3 rounded-[28px] bg-[var(--color-brand-sage)]/25 min-[1101px]:-right-6 min-[1101px]:-bottom-6" />
          <div aria-hidden="true" className="absolute -top-5 -left-5 h-16 w-16 rounded-full border-[6px] border-[var(--color-brand-rust)]/20 min-[1101px]:-top-7 min-[1101px]:-left-7 min-[1101px]:h-20 min-[1101px]:w-20" />

          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[28px] shadow-[0_25px_60px_rgba(150,55,32,.25)] ring-1 ring-white/70">
            <video
              className="h-full w-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/testmonial-bg.jpg"
            >
              <source src="REPLACE_WITH_HERO_VIDEO_URL" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
            <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
              <span className="absolute h-16 w-16 animate-ping rounded-full bg-white/40 motion-reduce:hidden" />
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[var(--color-brand-rust)] shadow-[0_10px_25px_rgba(0,0,0,.25)]">
                <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-current"><path d="M8 5v14l11-7z" /></svg>
              </span>
            </span>
          </div>

          <div className="absolute -bottom-6 left-1/2 z-[2] flex -translate-x-1/2 items-center gap-2 rounded-full border border-[rgba(190,148,133,.35)] bg-white px-5 py-[10px] whitespace-nowrap shadow-[0_10px_30px_rgba(150,55,32,.18)] min-[1101px]:left-8 min-[1101px]:translate-x-0">
            <strong className="font-heading text-[17px] font-extrabold text-[var(--color-brand-ink)]"><CountUp end={200} suffix="+" /></strong>
            <span className="text-[12px] font-semibold text-[var(--color-brand-sage)]">5-star reviews</span>
          </div>
        </div>
      </div>

    </section>
  );
}
