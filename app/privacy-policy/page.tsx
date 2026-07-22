import PageNavbar from "../../components/PageNavbar";

const policySections = [
  {
    title: "Information We Collect",
    text: "We may collect your name, phone number, email address, treatment interest, and appointment details when you contact Hair O Graft through our website or forms.",
  },
  {
    title: "How We Use Your Information",
    text: "Your details are used to respond to enquiries, schedule consultations, share treatment information, improve our services, and provide patient support.",
  },
  {
    title: "Data Protection",
    text: "We take reasonable care to protect your personal information from unauthorized access, misuse, loss, or disclosure.",
  },
  {
    title: "Sharing Information",
    text: "We do not sell your personal information. We may share details only with trusted service providers or when required by law.",
  },
  {
    title: "Your Choices",
    text: "You can request correction or removal of your personal information by contacting our clinic team.",
  },
  {
    title: "Policy Updates",
    text: "This Privacy Policy may be updated from time to time. Any changes will be reflected on this page.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#070b16] px-5 py-10 text-white sm:px-8 lg:px-10">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_14%_18%,rgb(53_79_159_/_34%),transparent_30%),radial-gradient(circle_at_88%_12%,rgb(241_50_61_/_20%),transparent_24%),linear-gradient(135deg,rgb(255_255_255_/_7%)_0_1px,transparent_1px_16px)]" />

      <div className="relative z-10 mx-auto max-w-[980px]">
        <PageNavbar />

        <section className="py-12 sm:py-16">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#7dd9ff]">
            <span className="h-2 w-2 rounded-full bg-[#f6dc24]" />
            Privacy Policy
          </span>

          <h1 className="max-w-[760px] text-[34px] font-extrabold leading-tight text-white sm:text-[46px] lg:text-[56px]">
            Privacy Policy for Hair O Graft
          </h1>

          <p className="mt-5 max-w-[760px] text-[16px] font-medium leading-8 text-white/72 sm:text-[18px]">
            At Hair O Graft, we respect your privacy and are committed to
            protecting the personal information you share with us.
          </p>
        </section>

        <section className="grid gap-5 pb-12 sm:grid-cols-2">
          {policySections.map((section) => (
            <article
              className="rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-[0_18px_45px_rgb(0_0_0_/_12%)]"
              key={section.title}
            >
              <h2 className="text-[20px] font-extrabold text-white">
                {section.title}
              </h2>
              <p className="mt-3 text-[15px] font-medium leading-7 text-white/70">
                {section.text}
              </p>
            </article>
          ))}
        </section>

        <footer className="border-t border-white/10 py-7 text-center text-[14px] font-medium text-white/62">
          Copyright 2026{" "}
          <span className="font-extrabold text-white">Hair O Graft.</span> All
          rights reserved.
        </footer>
      </div>
    </main>
  );
}
