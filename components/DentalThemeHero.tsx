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
    <span aria-hidden="true" className="inline-flex w-[17ch] items-baseline text-left max-[760px]:w-[16ch]">
      <span className="text-[var(--color-brand-rust)]">{text}</span>
      <span className="ml-[2px] inline-block h-[.82em] w-[3px] animate-pulse bg-[var(--color-brand-rust)] motion-reduce:hidden" />
    </span>
  );
}

function TeamPreview() {
  return (
    <div className="relative h-full w-full bg-white">
      <Image src="/hero/testimonial.png" alt="Dentist consulting a patient" fill sizes="253px" className="!h-[%] object-cover object-[center_37%]" />
      <div className="absolute right-0 bottom-0 left-20 h-[20%] bg-white px-[13px] pt-2 pb-[10px]">
        <small className="block text-[5px] tracking-[1px]">MEET DENTISTA</small>
        <b className="my-[5px] block text-[13px]">Professional Team</b>
      </div>
    </div>
  );
}

function BlogPreview() {
  return (
    <div className="relative h-full w-full bg-white">
      <div className="flex h-[57%] pt-4 pr-[14px] pl-[35px]">
        <div className="flex-1 pt-[18px]">
          <small className="text-[4px]">WELCOME TO DENTISTA</small>
          <b className="mt-[5px] mb-[10px] block text-[11px] leading-[1.15]">Reliable, Modern<br />Dentistry</b>
          <i className="m-[5px] block h-[3px] w-[70px] bg-[#efe0d7]" />
          <i className="m-[5px] block h-[3px] w-[70px] bg-[#efe0d7]" />
        </div>
        <Image src="/hero/main-treatment.png" alt="Dentist at work" width={98} height={115} className="object-cover object-[60%_center]" />
      </div>
      <div className="h-[43%] bg-[#fbf4f0] px-[25px] py-7 text-center">
        <b className="text-[10px]">Read the Blog</b>
        <div className="mt-[14px] flex gap-[7px]">
          {[0, 1, 2].map((item) => <i key={item} className="h-7 flex-1 border-t border-[#f0e0d6] bg-white" />)}
        </div>
      </div>
    </div>
  );
}

function ArticlesPreview() {
  const articles = [
    ["woman-avatar.png", "Maintaining good dental care habits"],
    ["man-avatar.png", "Are permanent retainers right?"],
    ["main-treatment.png", "Questions to ask your dentist"],
  ];

  return (
    <div className="relative h-full w-full bg-white px-[10px] py-3">
      <small className="block text-[5px] tracking-[1px]">NEWS &amp; INSIGHTS</small>
      <b className="my-[5px] block text-[12px]">Recent articles</b>
      <div className="grid grid-cols-3 gap-[7px]">
        {articles.map(([src, title]) => (
          <div key={src}>
            <Image src={`/hero/${src}`} alt="" width={82} height={58} className="h-[58px] w-full object-cover" />
            <strong className="mt-1 block text-[6px] leading-[1.1]">{title}</strong>
          </div>
        ))}
      </div>
      <div className="absolute right-0 bottom-0 left-0 border-t border-[#f1e3db] px-[10px] py-3 text-center text-[6px] text-[#c9b8ae]">SENSODYNEã€€âœ¥ã€€PARODONTAXã€€â—‡ã€€DISCUS</div>
    </div>
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
      className="relative isolate min-h-[730px] overflow-hidden bg-[radial-gradient(circle_at_48%_50%,#fbeee7_0,transparent_35%),linear-gradient(112deg,#fdf3ee_0%,#f7e6dd_52%,#fbf0e9_100%)] text-[var(--color-brand-ink)] before:absolute before:inset-0 before:-z-[1] before:content-[''] before:bg-[linear-gradient(120deg,rgba(255,255,255,.18),transparent_40%,rgba(255,255,255,.12))] max-[760px]:min-h-[840px]"
    >
      <div className={`absolute top-1 left-[-15px] h-64 w-[253px] overflow-hidden rounded-r-[24px] border-[3px] border-white/80 bg-[#f8fbfd] shadow-[0_3px_10px_rgba(45,92,124,.04)] transition-all duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1100px]:opacity-65 max-[760px]:left-[-58px] max-[760px]:h-[150px] max-[760px]:w-[145px] ${revealed ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
        <TeamPreview />
      </div>
      <div className={`absolute top-5 right-[-17px] h-[273px] w-[284px] overflow-hidden rounded-l-[25px] border-[3px] border-white/80 bg-[#f8fbfd] shadow-[0_3px_10px_rgba(45,92,124,.04)] transition-all delay-[350ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1100px]:opacity-65 max-[760px]:right-[-60px] max-[760px]:h-[155px] max-[760px]:w-[150px] ${revealed ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"}`}>
        <BlogPreview />
      </div>

      <div className="relative z-[5] mx-auto w-[min(1260px,76vw)] pt-[82px] text-center max-[1100px]:w-[82vw] max-[1100px]:pt-[100px] max-[760px]:w-[92vw] max-[760px]:pt-[85px]">
        <p className={`mb-6 flex items-center justify-center gap-4 font-sans text-[17px] font-bold tracking-[3.5px] text-[var(--color-brand-rust)] uppercase transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[760px]:mb-[18px] max-[760px]:gap-2 max-[760px]:text-[10px] max-[760px]:tracking-[1.8px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <span aria-hidden="true" className="flex items-center">
            <i className="block w-12 border-t border-[var(--color-brand-rust)] max-[760px]:w-5" />
            <i className="block h-2 w-2 rotate-45 border border-[var(--color-brand-rust)]" />
          </span>
          <span>Alpha Dental Studio <b className="mx-1 font-normal text-[var(--color-brand-sage)]">·</b> RA Puram</span>
          <span aria-hidden="true" className="flex items-center">
            <i className="block h-2 w-2 rotate-45 border border-[var(--color-brand-rust)]" />
            <i className="block w-12 border-t border-[var(--color-brand-rust)] max-[760px]:w-5" />
          </span>
        </p>
        <h1 id="dental-theme-title" aria-label="Your smile deserves Chennai's most trusted specialists" className={`m-0 font-heading text-[68px] leading-[1.06] font-bold tracking-[-2.4px] transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1100px]:text-[54px] max-[760px]:text-[39px] max-[760px]:leading-[1.08] max-[760px]:tracking-[-1.4px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          Your smile deserves Chennai&apos;s
          <span className="flex items-baseline justify-center gap-[.25em] whitespace-nowrap max-[760px]:text-[32px] max-[400px]:text-[28px]">
            <span>most</span>
            <TypewriterText />
          </span>
        </h1>
        <svg className={`mx-auto mt-px mb-[17px] block h-[21px] w-[430px] transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[760px]:mb-[14px] max-[760px]:w-[250px] ${revealed ? "scale-x-100 opacity-100" : "scale-x-50 opacity-0"}`} viewBox="0 0 430 20" aria-hidden="true">
          <path d="M3 15 C120 4 310 1 427 10" className="fill-none stroke-[var(--color-brand-sage)] stroke-[3.5]" />
        </svg>
        <div className={`mx-auto mb-[22px] flex w-[min(850px,72vw)] flex-col gap-1 text-[#39414a] transition-all delay-[1750ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[760px]:mb-[18px] max-[760px]:w-[92%] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <strong className="text-[17px] italic max-[760px]:text-[15px]">Not just another clinic.</strong>
          <span className="text-[14px] leading-[1.55] font-medium max-[760px]:text-[12px] max-[760px]:leading-[1.45]">Full-Mouth Implants, Smile Designing, Invisible Aligners, Tooth Replacement &amp; Cosmetic Dentistry â€” all under one roof, led by consultant specialists, not generalists.</span>
        </div>
        <div aria-label="Alpha Dental Studio highlights" className={`mx-auto mt-[17px] flex items-center justify-center gap-[19px] text-[var(--color-brand-ink)] transition-all delay-[2100ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[760px]:mt-[15px] max-[760px]:gap-[10px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          {[['RA Puram', 'Chennai'], ['200+', '5-star reviews'], ['9', 'Specialist dentists']].map(([value, label], index) => (
            <div key={value} className="contents">
              {index > 0 && <i aria-hidden="true" className="block h-[22px] w-px bg-[rgba(150,55,32,.18)] max-[760px]:h-[30px]" />}
              <div className="flex items-baseline gap-[6px] whitespace-nowrap max-[760px]:flex-col max-[760px]:items-center max-[760px]:gap-px">
                <strong className="font-heading text-[17px] font-extrabold max-[760px]:text-[14px]">
                  {value === '200+' ? <CountUp end={200} suffix="+" /> : value === '9' ? <CountUp end={9} /> : value}
                </strong>
                <span className="text-[12px] font-semibold text-[var(--color-brand-sage)] max-[760px]:text-[9px]">{label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={`mt-6 flex items-center justify-center gap-[13px] whitespace-nowrap transition-all delay-[2450ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[760px]:mt-5 max-[760px]:gap-[7px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <a href="https://wa.me/+919363937900?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20consultation%20at%20RA%20Puram" target="_blank" rel="noopener noreferrer" className="inline-flex h-[62px] min-w-[285px] items-center justify-center rounded-full bg-[var(--color-brand-rust)] px-[25px] text-[16px] font-bold text-white no-underline shadow-[0_10px_30px_rgba(150,55,32,.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-brand-ink)] max-[760px]:h-[51px] max-[760px]:w-[46%] max-[760px]:min-w-0 max-[760px]:px-[7px] max-[760px]:text-[11px]">Book My Free Consultation</a>
          <a href="tel:+919363937900" className="inline-flex h-[62px] min-w-[220px] items-center justify-center rounded-full border border-[rgba(190,148,133,.35)] bg-white px-[25px] text-[16px] font-bold text-[var(--color-brand-ink)] no-underline shadow-[0_10px_30px_rgba(150,55,32,.18)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#fbf3ef] max-[760px]:h-[51px] max-[760px]:w-[46%] max-[760px]:min-w-0 max-[760px]:px-[7px] max-[760px]:text-[11px]">Call +91 936 393 7900</a>
        </div>
      </div>

      <div className={`absolute bottom-[160px] left-30 h-[286px] w-[185px] overflow-hidden rounded-t-[94px] transition-all delay-[2800ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[760px]:h-[205px] max-[760px]:w-[130px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
        <Image src="/hero/woman-avatar.png" alt="Smiling dental patient" fill sizes="185px" className="object-cover object-center" />
      </div>

      <div className={`absolute top-[560px] left-[35%] h-[170px] w-[361px] overflow-hidden rounded-t-[27px] border-[3px] border-white/80 bg-[#f8fbfd] shadow-[0_3px_10px_rgba(45,92,124,.04)] transition-all delay-[3150ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1100px]:left-[46%] max-[760px]:hidden ${revealed ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}>
        <ArticlesPreview />
      </div>
      <div className={`absolute top-[386px] right-[156px] h-[178px] w-[177px] overflow-hidden rounded-[75px_75px_45px_45px] transition-all delay-[3500ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1100px]:right-[6%] max-[760px]:top-auto max-[760px]:right-[15px] max-[760px]:bottom-5 max-[760px]:h-[125px] max-[760px]:w-[125px] ${revealed ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
        <Image src="/hero/man-avatar.png" alt="Patient receiving a dental examination" fill sizes="177px" className="object-cover object-[center_52%]" />
      </div>
    </section>
  );
}


