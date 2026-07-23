"use client";

import { useEffect, useRef, useState } from "react";

const VIDEOS = [
  { src: "/video-7.mp4", label: "Patient story" },
  { src: "/video-8.mp4", label: "Treatment experience" },
  { src: "/video-9.mp4", label: "Smile journey" },
  { src: "/video-10.mp4", label: "Alpha Dental experience" },
] as const;

export default function PatientVideoCarousel() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
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

  function pauseOtherVideos(activeVideoIndex: number) {
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeVideoIndex && !video.paused) {
        video.pause();
      }
    });
  }

  function goTo(index: number) {
    const nextIndex = Math.max(0, Math.min(index, VIDEOS.length - 1));
    cardRefs.current[nextIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
    setActiveIndex(nextIndex);
  }

  function updateActiveSlide() {
    const track = trackRef.current;
    if (!track) return;

    const trackLeft = track.getBoundingClientRect().left;
    let closestIndex = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const distance = Math.abs(card.getBoundingClientRect().left - trackLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });
    setActiveIndex(closestIndex);
  }

  return (
    <section
      ref={sectionRef}
      aria-labelledby="patient-video-title"
      className="overflow-hidden bg-white py-8 sm:py-12"
    >
      <div className="mx-auto w-[min(1320px,92vw)]">
        <div className="relative mb-7 sm:mb-9">
          <div className="mx-auto max-w-4xl text-center">
            <p className={`flex items-center justify-center gap-3 text-xs font-bold tracking-[3px] text-brand-rust uppercase transition-all delay-[350ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 max-[600px]:gap-2 max-[600px]:tracking-[2px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
              <span aria-hidden="true" className="flex items-center"><i className="block w-10 border-t border-brand-rust max-[600px]:w-6" /><i className="block h-2 w-2 rotate-45 border border-brand-rust" /></span>
              <span>Patient Stories</span>
              <span aria-hidden="true" className="flex items-center"><i className="block h-2 w-2 rotate-45 border border-brand-rust" /><i className="block w-10 border-t border-brand-rust max-[600px]:w-6" /></span>
            </p>
            <h2
              id="patient-video-title"
              className={`mt-3 font-heading text-3xl leading-tight font-bold tracking-[-1.5px] text-brand-ink transition-all delay-700 duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:text-4xl lg:text-[52px] lg:leading-[1.1] lg:tracking-[-2px] ${revealed ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
            >
              Experiences shared in their <span className="text-brand-rust">own words</span>
            </h2>
            <p className={`mx-auto mt-3 max-w-xl text-sm leading-6 text-brand-ink/60 transition-all delay-[1050ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
              Hear directly from patients cared for by our specialist team in RA Puram.
            </p>
          </div>

          <div className={`absolute right-0 bottom-0 hidden shrink-0 gap-2 transition-all delay-[1200ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:flex ${revealed ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}>
            <button
              type="button"
              aria-label="Show previous patient video"
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-brand-ink shadow-sm transition hover:border-brand-rust hover:bg-brand-rust hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-l-2 border-current" />
            </button>
            <button
              type="button"
              aria-label="Show next patient video"
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === VIDEOS.length - 1}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-brand-ink shadow-sm transition hover:border-brand-rust hover:bg-brand-rust hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
            >
              <span className="h-2.5 w-2.5 rotate-45 border-t-2 border-r-2 border-current" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onScroll={updateActiveSlide}
          className="no-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto pb-3"
        >
          {VIDEOS.map((video, index) => (
            <article
              key={video.src}
              ref={(element) => {
                cardRefs.current[index] = element;
              }}
              style={{ transitionDelay: `${1400 + index * 300}ms`, transitionDuration: "1200ms" }}
              className={`relative aspect-[9/16] w-full shrink-0 snap-start overflow-hidden rounded-lg bg-brand-ink shadow-[0_12px_35px_rgba(58,46,41,.15)] ring-1 ring-brand-rose/15 transition-all ease-out motion-reduce:transform-none motion-reduce:opacity-100 sm:w-[42vw] sm:max-w-[340px] lg:w-[calc((100%_-_3rem)/4)] lg:max-w-none ${revealed ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`}
            >
              <video
                ref={(element) => {
                  videoRefs.current[index] = element;
                }}
                className="h-full w-full object-cover"
                controls
                muted
                playsInline
                preload="metadata"
                aria-label={video.label}
                onPlay={() => pauseOtherVideos(index)}
              >
                <source src={video.src} type="video/mp4" />
              </video>
              <div className="pointer-events-none absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent px-4 pt-4 pb-12">
                <h3 className="text-sm font-bold text-white">{video.label}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className={`mt-4 flex items-center justify-center gap-4 transition-all delay-[2700ms] duration-[1200ms] ease-out motion-reduce:transform-none motion-reduce:opacity-100 ${revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0"}`}>
          <button
            type="button"
            aria-label="Show previous patient video"
            onClick={() => goTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-brand-ink shadow-sm transition active:bg-brand-rust active:text-white disabled:cursor-not-allowed disabled:opacity-35 sm:hidden"
          >
            <span className="h-2.5 w-2.5 rotate-45 border-b-2 border-l-2 border-current" />
          </button>
          <div className="flex items-center justify-center gap-2" aria-label="Select a patient video">
            {VIDEOS.map((video, index) => (
              <button
                key={video.src}
                type="button"
                aria-label={`Show patient video ${index + 1}`}
                aria-current={activeIndex === index ? "true" : undefined}
                onClick={() => goTo(index)}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index
                    ? "w-7 bg-brand-rust"
                    : "w-2.5 bg-brand-rose/45 hover:bg-brand-rust/65"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Show next patient video"
            onClick={() => goTo(activeIndex + 1)}
            disabled={activeIndex === VIDEOS.length - 1}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-rose/40 bg-white text-brand-ink shadow-sm transition active:bg-brand-rust active:text-white disabled:cursor-not-allowed disabled:opacity-35 sm:hidden"
          >
            <span className="h-2.5 w-2.5 rotate-45 border-t-2 border-r-2 border-current" />
          </button>
        </div>
      </div>
    </section>
  );
}
