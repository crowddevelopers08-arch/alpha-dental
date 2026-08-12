import Link from "next/link";
import Script from "next/script";
import PageNavbar from "../../components/PageNavbar";

const nextSteps = [
  {
    number: "01",
    title: "We review your request",
    text: "Our RA Puram care coordinator checks your preferred treatment and appointment details.",
  },
  {
    number: "02",
    title: "We call to confirm",
    text: "You will receive a call from our team to confirm a convenient consultation time.",
  },
  {
    number: "03",
    title: "Meet the right specialist",
    text: "Your consultation is matched with the specialist best suited to your dental concern.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      {/* Google Ads - Phone Call Conversion Tracking */}
      <Script
        id="google-ads-phone-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            gtag('config', 'AW-18329828984/ZFrhCPjAo98cEPj8q6RE', {
              'phone_conversion_number': '081222 00767'
            });
          `,
        }}
      />

      {/* Meta Pixel - Submit Application */}
      <Script
        id="meta-pixel-submit-application"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            fbq('track', 'SubmitApplication');
          `,
        }}
      />

      <main>
        <section className="relative isolate px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div
            aria-hidden="true"
            className="absolute top-10 left-[-100px] -z-10 h-72 w-72 rounded-full bg-brand-rose/20 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute right-[-80px] bottom-0 -z-10 h-80 w-80 rounded-full bg-brand-sage/15 blur-3xl"
          />

          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[32px] border border-brand-rose/25 bg-white px-6 py-12 text-center shadow-[0_30px_80px_rgba(58,46,41,.10)] sm:px-12 lg:px-20">

              <span
                aria-hidden="true"
                className="absolute top-0 left-1/2 h-1.5 w-28 -translate-x-1/2 rounded-b-full bg-brand-rust"
              />

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-rust text-white shadow-[0_16px_38px_rgba(150,55,32,.25)]">
                <svg
                  className="h-10 w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="m5 12.5 4.2 4.2L19 7"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <p className="mt-7 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-brand-rust sm:text-sm">
                <span className="flex items-center" aria-hidden="true">
                  <i className="w-8 border-t border-brand-rust" />
                  <i className="h-2 w-2 rotate-45 border border-brand-rust" />
                </span>

                Request received

                <span className="flex items-center" aria-hidden="true">
                  <i className="h-2 w-2 rotate-45 border border-brand-rust" />
                  <i className="w-8 border-t border-brand-rust" />
                </span>
              </p>

              <h1 className="mx-auto mt-5 max-w-3xl font-heading text-4xl leading-[1.08] font-bold tracking-[-1.5px] sm:text-5xl lg:text-[58px] lg:tracking-[-2px]">
                Thank you for choosing{" "}
                <span className="text-brand-rust">
                  Alpha Dental Studio.
                </span>
              </h1>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-brand-ink/65 sm:text-lg">
                Your free consultation request has reached our RA Puram team.
                We&apos;ll contact you shortly to understand your concern and
                arrange the right specialist consultation.
              </p>

              <div className="mt-10 grid gap-4 text-left md:grid-cols-3">
                {nextSteps.map((step) => (
                  <article
                    key={step.number}
                    className="rounded-2xl border border-brand-rose/20 bg-[#fffaf7] p-5"
                  >
                    <span className="font-heading text-sm font-extrabold text-brand-rust/55">
                      {step.number}
                    </span>

                    <h2 className="mt-3 text-lg font-bold">
                      {step.title}
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-brand-ink/60">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="https://wa.me/918122200767?text=Hi%2C%20I%20submitted%20a%20consultation%20request%20for%20Alpha%20Dental%20Studio."
                  className="inline-flex h-13 min-w-[230px] items-center justify-center rounded-full bg-brand-rust px-7 text-sm font-bold text-white shadow-lg shadow-brand-rust/20 transition hover:-translate-y-0.5 hover:bg-brand-ink"
                >
                  Continue on WhatsApp →
                </a>

                <a
                  href="tel:+918122200767"
                  className="inline-flex h-13 min-w-[210px] items-center justify-center rounded-full border border-brand-rose/40 bg-white px-7 text-sm font-bold transition hover:-translate-y-0.5 hover:border-brand-rust hover:text-brand-rust"
                >
                  Call +91 8122200767
                </a>
              </div>

              <Link
                href="/"
                className="mt-7 inline-flex text-sm font-semibold text-brand-sage underline-offset-4 hover:text-brand-rust hover:underline"
              >
                ← Return to homepage
              </Link>
            </div>

            <p className="mt-6 text-center text-sm text-brand-ink/50">
              Alpha Dental Studio · RA Puram, Chennai · Mon–Sat, 10 AM–8 PM
            </p>
          </div>
        </section>
      </main>
    </>
  );
}