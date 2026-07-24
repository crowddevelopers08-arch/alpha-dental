import Link from "next/link";
import PageNavbar from "../../components/PageNavbar";

const policySections = [
  {
    number: "01",
    title: "Information we collect",
    text: "When you enquire or book an appointment, we may collect your name, phone number, email address, preferred appointment time, dental concern, and any information you voluntarily share with our clinic team.",
  },
  {
    number: "02",
    title: "Dental and health information",
    text: "During clinical care, Alpha Dental Studio may maintain consultation notes, medical and dental history, prescriptions, diagnostic images, treatment plans, consent records, invoices, and progress photographs where relevant to your care.",
  },
  {
    number: "03",
    title: "How we use information",
    text: "We use your information to respond to enquiries, schedule and remind you about appointments, provide dental care, coordinate with the appropriate specialist, prepare treatment plans, process payments, and improve patient service.",
  },
  {
    number: "04",
    title: "Calls, WhatsApp and email",
    text: "If you contact us or submit a form, our team may respond by phone, WhatsApp, SMS, or email regarding your enquiry, appointment, treatment follow-up, or clinic-related updates. You may ask us to stop non-essential messages at any time.",
  },
  {
    number: "05",
    title: "Sharing and specialist care",
    text: "We do not sell personal information. Information may be shared only with authorised Alpha Dental team members, consultant specialists involved in your care, essential service providers under confidentiality obligations, or authorities when required by law.",
  },
  {
    number: "06",
    title: "Security and retention",
    text: "We use reasonable administrative and technical safeguards to protect patient information. Records are retained only for as long as necessary for clinical, legal, accounting, and patient-support purposes, then securely deleted or disposed of where appropriate.",
  },
  {
    number: "07",
    title: "Website data and cookies",
    text: "Our website may use essential cookies and basic analytics information such as browser type, device type, referring page, and pages visited. This helps us maintain performance and understand how visitors use the website.",
  },
  {
    number: "08",
    title: "Your choices and rights",
    text: "You may ask to review or correct personal information held by us, withdraw optional communication consent, or request deletion where it does not conflict with clinical record-keeping or legal requirements. We may verify your identity before acting on a request.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#fbf7f4] text-brand-ink">
      <PageNavbar />

      <header className="relative isolate overflow-hidden border-b border-brand-rose/20 px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <div aria-hidden="true" className="absolute top-[-100px] left-[-80px] -z-10 h-80 w-80 rounded-full bg-brand-rose/20 blur-3xl" />
        <div aria-hidden="true" className="absolute right-[-80px] bottom-[-130px] -z-10 h-96 w-96 rounded-full bg-brand-sage/15 blur-3xl" />
        <div className="mx-auto max-w-6xl">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[.3em] text-brand-rust sm:text-sm">
            <span className="flex items-center" aria-hidden="true"><i className="w-10 border-t border-brand-rust" /><i className="h-2 w-2 rotate-45 border border-brand-rust" /></span>
            Patient privacy
            <span className="flex items-center" aria-hidden="true"><i className="h-2 w-2 rotate-45 border border-brand-rust" /><i className="w-10 border-t border-brand-rust" /></span>
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl leading-[1.08] font-bold tracking-[-1.5px] sm:text-5xl lg:text-[64px] lg:tracking-[-2.5px]">
            Your information deserves the same <span className="text-brand-rust">care as your smile.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-ink/65 sm:text-lg">
            This Privacy Policy explains how Alpha Dental Studio, RA Puram collects, uses, protects, and manages personal and dental information shared through our website and clinic.
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-sage">Last updated: 22 July 2026</p>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[250px_1fr] lg:px-8 lg:py-16">
        <aside className="lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-2xl border border-brand-rose/25 bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-brand-rust">Need help?</p>
            <p className="mt-3 text-sm leading-6 text-brand-ink/60">Contact our RA Puram team with any privacy or patient-record question.</p>
            <a href="mailto:info@alphadentalstudios.com" className="mt-4 block break-all text-sm font-bold text-brand-rust hover:text-brand-ink">info@alphadentalstudios.com</a>
            <a href="tel:+918122200767" className="mt-2 block text-sm font-bold text-brand-rust hover:text-brand-ink">+91 8122200767</a>
            <Link href="/" className="mt-5 inline-flex text-sm font-semibold text-brand-sage hover:text-brand-rust">← Back to home</Link>
          </div>
        </aside>

        <section className="grid gap-5 sm:grid-cols-2">
          {policySections.map((section) => (
            <article key={section.number} className="group rounded-2xl border border-brand-rose/20 bg-white p-6 shadow-[0_12px_35px_rgba(58,46,41,.05)] transition hover:-translate-y-1 hover:border-brand-rust/30 hover:shadow-[0_18px_45px_rgba(58,46,41,.09)]">
              <span className="font-heading text-sm font-extrabold text-brand-rust/45">{section.number}</span>
              <h2 className="mt-3 font-heading text-xl font-bold group-hover:text-brand-rust">{section.title}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-ink/62">{section.text}</p>
            </article>
          ))}
        </section>
      </div>

      <footer className="border-t border-brand-rose/20 bg-white px-4 py-7 text-center text-sm text-brand-ink/55">
        © 2026 <strong className="text-brand-ink">Alpha Dental Studio</strong> · RA Puram, Chennai. All rights reserved.
      </footer>
    </main>
  );
}
