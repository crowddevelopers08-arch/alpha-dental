import Link from "next/link";
import PageNavbar from "../../components/PageNavbar";

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-[#070b16] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_18%_16%,rgb(53_79_159_/_36%),transparent_30%),radial-gradient(circle_at_82%_20%,rgb(241_50_61_/_20%),transparent_26%),linear-gradient(135deg,rgb(255_255_255_/_7%)_0_1px,transparent_1px_16px)]" />
      <PageNavbar />

      <section className="relative z-10 mx-auto flex min-h-[calc(100vh-150px)] max-w-[920px] flex-col items-center justify-center py-12 text-center">
        <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#354f9f] shadow-[0_18px_45px_rgb(53_79_159_/_35%)]">
          <svg
            className="h-10 w-10 text-white"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="m5 12.5 4.3 4.3L19 7"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.7"
            />
          </svg>
        </div>

        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7dd9ff]">
          <span className="h-2 w-2 rounded-full bg-[#f6dc24]" />
          Thank You
        </span>

        <h1 className="max-w-[760px] text-[34px] font-extrabold leading-tight text-white sm:text-[48px] lg:text-[58px]">
          Your appointment request has been received.
        </h1>

        <p className="mt-5 max-w-[650px] text-[16px] font-medium leading-8 text-white/72 sm:text-[18px]">
          Our Hair O Graft team will contact you soon to confirm your
          consultation and guide you through the next step of your hair
          restoration journey.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex h-12 items-center justify-center rounded-full bg-[#f1323d] px-7 text-[15px] font-extrabold text-white transition-colors duration-200 hover:bg-[#354f9f]"
          >
            Back To Home
          </Link>
          <Link
            href="/#lead-form"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/18 bg-white/10 px-7 text-[15px] font-extrabold text-white transition-colors duration-200 hover:bg-white/18"
          >
            Book Again
          </Link>
        </div>
      </section>
    </main>
  );
}
