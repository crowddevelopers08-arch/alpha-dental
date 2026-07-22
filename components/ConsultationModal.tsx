"use client";

import { FormEvent, useEffect, useState } from "react";

const MODAL_EVENT = "alpha-open-consultation";

export function openConsultationModal(source = "Website Consultation CTA") {
  window.dispatchEvent(new CustomEvent(MODAL_EVENT, { detail: { source } }));
}

export default function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const [source, setSource] = useState("Website Consultation CTA");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const showModal = (event: Event) => {
      const detail = (event as CustomEvent<{ source?: string }>).detail;
      setSource(detail?.source || "Website Consultation CTA");
      setError("");
      setOpen(true);
    };

    window.addEventListener(MODAL_EVENT, showModal);
    return () => window.removeEventListener(MODAL_EVENT, showModal);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const form = new FormData(event.currentTarget);
    const location = String(form.get("location") || "");
    const concern = String(form.get("concern") || "");

    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          source,
          name: form.get("name"),
          phone: form.get("phone"),
          email: "",
          concern: `Location: ${location} | Concern: ${concern}`,
          pageUrl: window.location.href,
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to submit the form");
      }
      window.location.href = "/thank-you";
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try again.",
      );
      setSubmitting(false);
    }
  }

  if (!open) return null;

  const inputClass =
    "mt-1.5 h-12 w-full rounded-xl border border-brand-rose/30 bg-[#fffaf7] px-4 text-sm text-brand-ink outline-none transition placeholder:text-brand-ink/35 focus:border-brand-rust focus:ring-4 focus:ring-brand-rust/10";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/70 p-3 backdrop-blur-sm sm:p-6"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) setOpen(false);
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="consultation-title"
        className="relative max-h-[calc(100vh-24px)] w-full max-w-xl overflow-y-auto rounded-[28px] bg-white shadow-[0_30px_100px_rgba(0,0,0,.35)] sm:max-h-[calc(100vh-48px)]"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close consultation form"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-rose/25 bg-white text-2xl leading-none text-brand-ink shadow-sm transition hover:rotate-90 hover:bg-brand-rust hover:text-white"
        >
          ×
        </button>

        <form onSubmit={handleSubmit} className="p-6 pt-14 sm:p-10 sm:pt-12">
          <p className="text-xs font-bold uppercase tracking-[.22em] text-brand-rust">
            Alpha Dental Studio
          </p>
          <h2
            id="consultation-title"
            className="mt-2 pr-10 font-heading text-3xl leading-tight font-bold text-brand-ink"
          >
            Book your free consultation
          </h2>
          <p className="mt-2 text-sm leading-6 text-brand-ink/60">
            Share your details and our RA Puram team will contact you shortly.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <label className="text-xs font-bold text-brand-ink">
              Name *
              <input name="name" required autoFocus autoComplete="name" placeholder="Enter your name" className={inputClass} />
            </label>
            <label className="text-xs font-bold text-brand-ink">
              Phone number *
              <input name="phone" required inputMode="tel" autoComplete="tel" minLength={10} placeholder="+91 98765 43210" className={inputClass} />
            </label>
            <label className="text-xs font-bold text-brand-ink sm:col-span-2">
              Location *
              <input name="location" required autoComplete="address-level2" placeholder="Enter your location" className={inputClass} />
            </label>
            <label className="text-xs font-bold text-brand-ink sm:col-span-2">
              Concern *
              <textarea name="concern" required rows={3} placeholder="Tell us about your dental concern" className="mt-1.5 w-full resize-none rounded-xl border border-brand-rose/30 bg-[#fffaf7] px-4 py-3 text-sm text-brand-ink outline-none transition placeholder:text-brand-ink/35 focus:border-brand-rust focus:ring-4 focus:ring-brand-rust/10" />
            </label>
          </div>

          {error && (
            <p role="alert" className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
              {error}
            </p>
          )}
          <button type="submit" disabled={submitting} className="mt-5 inline-flex h-13 w-full items-center justify-center rounded-full bg-brand-rust px-6 text-sm font-bold text-white shadow-lg shadow-brand-rust/20 transition hover:-translate-y-0.5 hover:bg-brand-ink disabled:cursor-wait disabled:opacity-60">
            {submitting ? "Sending request…" : "Book My Free Consultation →"}
          </button>
          <p className="mt-3 text-center text-[11px] leading-4 text-brand-ink/45">
            By submitting, you agree to be contacted about your dental consultation. Your information is kept private.
          </p>
        </form>
      </section>
    </div>
  );
}
