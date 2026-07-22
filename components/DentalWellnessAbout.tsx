"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { openConsultationModal } from "./ConsultationModal";

export default function DentalWellnessAbout() {
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
    }, { threshold: 0.12 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-label="The Problem"
      className="relative min-h-[590px] overflow-hidden bg-white text-[var(--color-brand-ink)] max-[900px]:min-h-0"
    >
      <svg
        className={`absolute top-[-15px] left-[17%] z-[1] w-[210px] fill-none stroke-[#f1e3dd] stroke-[5] transition-all duration-[1200ms] ease-out [stroke-linecap:round] [stroke-linejoin:round] motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:hidden ${revealed ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
        viewBox="0 0 260 210"
        aria-hidden="true"
      >
        <path d="M72 3 144 0l21 55-57 39-55-24-3-35L72 3Zm91 53 73 51-25 14-62-45M54 75 25 105 0 169" />
      </svg>
      <svg
        className={`absolute bottom-[80px] left-[-8px] z-[1] w-[220px] fill-none stroke-[#f1e3dd] stroke-[5] transition-all delay-[350ms] duration-[1200ms] ease-out [stroke-linecap:round] [stroke-linejoin:round] motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:hidden ${revealed ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
        viewBox="0 0 265 190"
        aria-hidden="true"
      >
        <path d="M0 105c17-48 55-75 101-66 42 8 53 46 29 74-25 29-64 32-81 10-18-24-3-60 25-66 26-6 47 14 38 37-13 32-48 58-85 74M132 111l98-7 25-30" />
      </svg>

      <div className="relative z-[2] mx-auto grid min-h-[550px] w-[min(1300px,calc(100%_-_70px))] grid-cols-[52%_48%] max-[1250px]:w-[calc(100%_-_35px)] max-[1250px]:grid-cols-2 max-[900px]:flex max-[900px]:min-h-0 max-[900px]:w-full max-[900px]:flex-col max-[600px]:hidden">
        <div className="relative min-h-[550px] max-[900px]:min-h-[500px] max-[600px]:min-h-[405px]">
          <div className={`absolute top-[108px] left-[9%] z-[2] h-[400px] w-[260px] overflow-hidden rounded-[20px] transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1250px]:left-[2%] max-[1250px]:w-[245px] max-[900px]:top-[90px] max-[900px]:left-[9%] max-[900px]:h-[375px] max-[900px]:w-[38%] max-[600px]:top-[78px] max-[600px]:left-[6%] max-[600px]:h-[300px] max-[600px]:w-[48%] max-[600px]:rounded-[15px] ${revealed ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
            <Image
              src="/avatar-6.jpg"
              alt="Dental specialist examining a patient"
              fill
              sizes="(max-width: 600px) 48vw, (max-width: 900px) 38vw, 260px"
              className="object-cover object-center"
            />
          </div>

          <div className={`absolute top-[25px] left-[53%] z-[1] h-[456px] w-[260px] overflow-hidden rounded-[20px] transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1250px]:left-[47%] max-[1250px]:w-[245px] max-[900px]:top-[22px] max-[900px]:left-[48%] max-[900px]:h-[415px] max-[900px]:w-[38%] max-[600px]:top-[20px] max-[600px]:left-[49%] max-[600px]:h-[325px] max-[600px]:w-[45%] max-[600px]:rounded-[15px] ${revealed ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}>
            <Image
              src="/hero/main-treatment.png"
              alt="Dentist providing professional treatment"
              fill
              sizes="(max-width: 600px) 45vw, (max-width: 900px) 38vw, 260px"
              className="object-cover object-center"
            />
          </div>

          <div className={`absolute top-[360px] left-[66%] z-[3] h-[165px] w-[225px] overflow-hidden rounded-[22px_22px_0_22px] border-[4px] border-white shadow-[0_15px_35px_rgba(0,0,0,.18)] transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1250px]:left-[58%] max-[1250px]:w-[245px] max-[900px]:top-[280px] max-[900px]:left-1/2 max-[900px]:h-[168px] max-[900px]:w-[36%] max-[600px]:top-[235px] max-[600px]:left-[45%] max-[600px]:h-[136px] max-[600px]:w-[49%] max-[600px]:rounded-[17px_17px_0_17px] max-[600px]:border-[3px] ${revealed ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <Image src="/teeth-image.jpg" alt="Close-up of a healthy, bright smile" fill sizes="(max-width: 600px) 49vw, (max-width: 900px) 36vw, 225px" className="object-cover object-center" />
          </div>
        </div>

        <div className="px-[15px] pt-[29px] pb-[25px] pl-[20px] max-[900px]:px-[8%] max-[900px]:pt-9 max-[900px]:pb-[55px] max-[600px]:px-[6%] max-[600px]:pt-[27px] max-[600px]:pb-12">
          <p className={`mb-[10px] flex items-center gap-3 font-sans text-[14px] font-bold tracking-[2.5px] text-[var(--color-brand-rust)] uppercase transition-all delay-[1750ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:mb-[14px] max-[600px]:gap-2 max-[600px]:text-[11px] max-[600px]:tracking-[1.8px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <span aria-hidden="true" className="flex items-center">
              <i className="block w-10 border-t border-[var(--color-brand-rust)] max-[600px]:w-6" />
              <i className="block h-2 w-2 rotate-45 border border-[var(--color-brand-rust)]" />
            </span>
            <span>The Problem</span>
            <span aria-hidden="true" className="flex items-center">
              <i className="block h-2 w-2 rotate-45 border border-[var(--color-brand-rust)]" />
              <i className="block w-10 border-t border-[var(--color-brand-rust)] max-[600px]:w-6" />
            </span>
          </p>
          <h2 id="about-title" className={`m-0 font-heading text-[56px] leading-[1.14] font-bold tracking-[-2px] transition-all delay-[2100ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1250px]:text-[49px] max-[900px]:text-[47px] max-[600px]:text-[35px] max-[600px]:leading-[1.1] max-[600px]:tracking-[-1.2px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
            Most dental visits leave you more <span className="text-[var(--color-brand-rust)]">confused than before.</span>
          </h2>
          <div className={`my-[24px] mb-[15px] max-w-[590px] text-[16px] leading-[1.7] text-[#6b5f58] transition-all delay-[2450ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1250px]:text-[15px] max-[900px]:max-w-none max-[600px]:mt-[19px] max-[600px]:text-[14px] max-[600px]:leading-[1.65] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
            <p className="mb-[13px]">A rushed check-up. Medical jargon you don&apos;t understand. A number quoted on the spot — for a treatment that will sit in your mouth for the rest of your life.</p>
            <p className="mb-[13px]">No real explanation. No comfort. No plan built around <em>you.</em></p>
          </div>
          <p className={`m-0 max-w-[590px] border-l-4 border-[var(--color-brand-rust)] bg-[#fbf3ef] px-[19px] py-4 text-[16px] leading-[1.5] font-bold text-[var(--color-brand-ink)] transition-all delay-[2800ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:px-[15px] max-[600px]:py-[14px] max-[600px]:text-[14px] ${revealed ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
            <em>That&apos;s not dentistry. That&apos;s guesswork — and your smile shouldn&apos;t be a guessing game.</em>
          </p>
        <div className={`mt-3 flex flex-col items-left gap-4 transition-all delay-[3500ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:mt-8 sm:flex-row sm:justify-center ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <button
            type="button"
            onClick={() => openConsultationModal("Testimonials Consultation CTA")}
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-rust px-8 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-ink"
          >
            Book Your Consultation
          </button>
        </div>
        </div>
      </div>

      <div className="relative z-[2] hidden px-[6%] pt-9 pb-12 max-[600px]:block">
        <p className={`mb-[14px] flex items-center gap-2 font-sans text-[11px] font-bold tracking-[1.8px] text-[var(--color-brand-rust)] uppercase transition-all delay-[350ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <span aria-hidden="true" className="flex items-center"><i className="block w-6 border-t border-[var(--color-brand-rust)]" /><i className="block h-2 w-2 rotate-45 border border-[var(--color-brand-rust)]" /></span>
          <span>The Problem</span>
          <span aria-hidden="true" className="flex items-center"><i className="block h-2 w-2 rotate-45 border border-[var(--color-brand-rust)]" /><i className="block w-6 border-t border-[var(--color-brand-rust)]" /></span>
        </p>

        <h2 id="about-title-mobile" className={`m-0 font-heading text-[35px] leading-[1.1] font-bold tracking-[-1.2px] transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          Most dental visits leave you more <span className="text-[var(--color-brand-rust)]">confused than before.</span>
        </h2>

        <div className={`mt-[19px]  text-[14px] leading-[1.65] text-[#6b5f58] transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <p className="mb-[13px] max-sm:mb-[5px]">A rushed check-up. Medical jargon you don&apos;t understand. A number quoted on the spot — for a treatment that will sit in your mouth for the rest of your life.</p>
          <p className="mb-0">No real explanation. No comfort. No plan built around <em>you.</em></p>
        </div>

        <div className="relative -mx-[6.4%] mt-5 max-sm:mt-0 min-h-[405px] overflow-hidden">
          <div className={`absolute top-[78px] left-[6%] z-[2] h-[300px] w-[48%] overflow-hidden rounded-[15px] border-[3px] border-white shadow-[0_15px_35px_rgba(0,0,0,.18)] transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
            <Image src="/avatar-6.jpg" alt="Dental specialist examining a patient" fill sizes="48vw" className="object-cover object-center" />
          </div>
          <div className={`absolute top-5 left-[49%] z-[1] h-[325px] w-[45%] overflow-hidden rounded-[15px] border-[3px] border-white shadow-[0_15px_35px_rgba(0,0,0,.18)] transition-all delay-[1750ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "-translate-y-12 opacity-0"}`}>
            <Image src="/hero/main-treatment.png" alt="Dentist providing professional treatment" fill sizes="45vw" className="object-cover object-center" />
          </div>
          <div className={`absolute top-[235px] left-[45%] z-[3] h-[136px] w-[49%] overflow-hidden rounded-[17px_17px_0_17px] border-[3px] border-white shadow-[0_15px_35px_rgba(0,0,0,.18)] transition-all delay-[2100ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <Image src="/teeth-image.jpg" alt="Close-up of a healthy, bright smile" fill sizes="49vw" className="object-cover object-center" />
          </div>
        </div>

        <p className={`m-0 border-l-4 border-[var(--color-brand-rust)] bg-[#fbf3ef] px-[15px] py-[14px] text-[14px] leading-[1.5] font-bold transition-all delay-[2450ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
          <em>That&apos;s not dentistry. That&apos;s guesswork — and your smile shouldn&apos;t be a guessing game.</em>
        </p>
        <div className={`mt-12 flex flex-col items-center gap-4 transition-all delay-[3500ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:mt-8 sm:flex-row sm:justify-center ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
          <button
            type="button"
            onClick={() => openConsultationModal("Testimonials Consultation CTA")}
            className="inline-flex h-14 items-center justify-center rounded-full bg-brand-rust px-8 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-brand-ink"
          >
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
