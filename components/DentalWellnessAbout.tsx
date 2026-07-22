"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
      aria-labelledby="about-title"
      className="relative min-h-[550px] overflow-hidden bg-white text-[var(--color-brand-ink)] max-[900px]:min-h-0"
    >
      <svg
        className={`absolute top-[-15px] left-[17%] z-[1] w-[210px] fill-none stroke-[#f1e3dd] stroke-[5] transition-all duration-[1200ms] ease-out [stroke-linecap:round] [stroke-linejoin:round] motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:left-[36%] max-[600px]:w-[145px] ${revealed ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
        viewBox="0 0 260 210"
        aria-hidden="true"
      >
        <path d="M72 3 144 0l21 55-57 39-55-24-3-35L72 3Zm91 53 73 51-25 14-62-45M54 75 25 105 0 169" />
      </svg>
      <svg
        className={`absolute bottom-[80px] left-[-8px] z-[1] w-[220px] fill-none stroke-[#f1e3dd] stroke-[5] transition-all delay-[350ms] duration-[1200ms] ease-out [stroke-linecap:round] [stroke-linejoin:round] motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:top-[245px] max-[600px]:bottom-auto max-[600px]:w-[150px] ${revealed ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"}`}
        viewBox="0 0 265 190"
        aria-hidden="true"
      >
        <path d="M0 105c17-48 55-75 101-66 42 8 53 46 29 74-25 29-64 32-81 10-18-24-3-60 25-66 26-6 47 14 38 37-13 32-48 58-85 74M132 111l98-7 25-30" />
      </svg>

      <div className="relative z-[2] mx-auto grid min-h-[550px] w-[min(1300px,calc(100%_-_70px))] grid-cols-[52%_48%] max-[1250px]:w-[calc(100%_-_35px)] max-[1250px]:grid-cols-2 max-[900px]:flex max-[900px]:min-h-0 max-[900px]:w-full max-[900px]:flex-col">
        <div className="relative min-h-[550px] max-[900px]:min-h-[500px] max-[600px]:min-h-[405px]">
          <div className={`absolute top-[108px] left-[9%] z-[2] h-[400px] w-[260px] overflow-hidden rounded-[20px] transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1250px]:left-[2%] max-[1250px]:w-[245px] max-[900px]:top-[90px] max-[900px]:left-[9%] max-[900px]:h-[375px] max-[900px]:w-[38%] max-[600px]:top-[78px] max-[600px]:left-[6%] max-[600px]:h-[300px] max-[600px]:w-[48%] max-[600px]:rounded-[15px] ${revealed ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
            <Image
              src="/hero/man-avatar.png"
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

          <div className={`absolute top-[360px] left-[66%] z-[3] h-[165px] w-[225px] rounded-[22px_22px_0_22px] bg-[var(--color-brand-rust)] px-[15px] py-[15px] text-white transition-all delay-[1400ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[1250px]:left-[58%] max-[1250px]:w-[245px] max-[900px]:top-[280px] max-[900px]:left-1/2 max-[900px]:h-[168px] max-[900px]:w-[36%] max-[900px]:p-[21px] max-[600px]:top-[235px] max-[600px]:left-[45%] max-[600px]:h-[136px] max-[600px]:w-[49%] max-[600px]:rounded-[17px_17px_0_17px] max-[600px]:p-4 ${revealed ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <span className="mb-[8px] block text-[42px] leading-none font-light max-[900px]:mb-[21px] max-[900px]:text-[34px] max-[600px]:mb-[11px] max-[600px]:text-[26px]" aria-hidden="true">↗</span>
            <strong className="block font-heading text-[43px] leading-none font-bold tracking-[-1.6px] max-[900px]:text-[34px] max-[600px]:text-[26px] max-[600px]:tracking-[-.8px]">6.5Million</strong>
            <small className="mt-[5px] block text-[16px] font-medium max-[600px]:mt-[6px] max-[600px]:text-[11px]">Customers Benefits</small>
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
          <a
            href="#about"
            className={`mt-6 flex h-[62px] w-[175px] items-center justify-center rounded-[11px_11px_0_11px] border-2 border-[var(--color-brand-rust)] text-[15px] font-semibold text-[var(--color-brand-rust)] no-underline shadow-[-8px_-7px_0_var(--color-brand-rust)] transition-all delay-[3150ms] duration-[1200ms] ease-out hover:-translate-y-0.5 hover:bg-[var(--color-brand-rust)] hover:text-white motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:mt-5 max-[600px]:h-[55px] max-[600px]:w-[165px] max-[600px]:text-[14px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
          >
            ABOUT US <span className="ml-[7px]" aria-hidden="true">♥</span>
          </a>
        </div>
      </div>
    </section>
  );
}
