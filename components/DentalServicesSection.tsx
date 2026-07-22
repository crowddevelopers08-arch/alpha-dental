import Image from "next/image";

const ACCENT_STYLES = [
  { bg: "bg-brand-rose/15" },
  { bg: "bg-brand-sage/15" },
  { bg: "bg-brand-rust/15" },
] as const;

const SERVICES = [
  {
    number: "01",
    tag: "Fixed · Permanent",
    title: "Full-Mouth Implants",
    description:
      "Missing most or all your teeth? Get a complete, fixed set that looks, feels, and functions like your natural teeth — placed by consultant implantologists.",
    image: "/hero/main-treatment.png",
    icon: "/icon-1.png",
  },
  {
    number: "02",
    tag: "Designed Before You Decide",
    title: "Smile Designing",
    description:
      "A custom blueprint for your smile shape,shade, symmetry designed digitally before treatment begins, so you see your new smile before you commit to it.",
    image: "/hero/woman-avatar.png",
    icon: "/icon-2.png",
  },
  {
    number: "03",
    tag: "Invisalign Certified",
    title: "Invisible Aligners",
    description:
      "Straighten your teeth without a single metal wire. Nearly invisible, removable, guided by certified Invisalign providers — fix your bite on your own time.",
    image: "/Invisible.webp",
    icon: "/icon-3.png",
  },
  {
    number: "04",
    tag: "Crowns · Bridges · Implants",
    title: "Tooth Replacement",
    description:
      "One tooth or several — crowns, bridges, or implants — replaced with solutions built to last, not band-aid fixes that fail in a year.",
    image: "/Tooth.jpg",
    icon: "/icon-4.png",
  },
  {
    number: "05",
    tag: "Veneers · Whitening · Contouring",
    title: "Cosmetic Dentistry",
    description:
      "Veneers, whitening, contouring — small refinements that make a disproportionately big difference in how confident you feel every time you smile.",
    image: "/customatic.jpg",
    icon: "/icon-5.png",
  },
];

export default function DentalServicesSection() {
  return (
    <section className="bg-[#f7f3f0] px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-2 flex items-center justify-center gap-3 font-sans text-xs font-bold uppercase tracking-[0.3em] text-brand-rust sm:text-sm max-[600px]:gap-2 max-[600px]:tracking-[0.2em]">
          <span aria-hidden="true" className="flex items-center">
            <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
            <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
          </span>
          <span>Our Services</span>
          <span aria-hidden="true" className="flex items-center">
            <i className="block h-2 w-2 rotate-45 border border-brand-rust" />
            <i className="block w-10 border-t border-brand-rust max-[600px]:w-6" />
          </span>
        </p>
        <h2 className="font-heading text-3xl font-bold tracking-[-1.5px] text-brand-ink sm:text-4xl lg:text-[52px] lg:leading-[1.1] lg:tracking-[-2px]">
          What We <span className="text-brand-rust">Treat</span>
        </h2>
        <p className="mt-2 text-base text-brand-ink/60 sm:text-lg">
          one clinic everything dental solution you need.
        </p>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-wrap justify-center gap-6 lg:gap-8">
        {SERVICES.map((service, index) => {
          const accent = ACCENT_STYLES[index % ACCENT_STYLES.length];
          return (
            <div
              key={service.title}
              className="flex w-full flex-col rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-21.333px)]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <span className={`relative flex h-14 w-14 items-center justify-center rounded-full ${accent.bg}`}>
                    <Image src={service.icon} alt="" width={32} height={32} className="h-8 w-8" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-brand-rust/60">
                    {service.number}
                  </span>
                </div>

                <div className="flex flex-col items-end gap-2">
      
                  <h3 className="font-heading text-xl font-bold text-brand-ink">
                    {service.title}
                  </h3>
                   <span className="inline-flex w-fit rounded-full border border-black/10 px-3 py-1 text-xs font-semibold text-brand-ink/70">
                    {service.tag}
                  </span>
                </div>
              </div>

              <div className="mt-3 border-b border-black/10 pb-2" />

              <p className="mt-2 text-sm leading-relaxed text-brand-ink/55">
                {service.description}
              </p>

              <div className="group relative mt-3 aspect-[4/3] w-full overflow-hidden rounded-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                  className="scale-100 object-cover opacity-80 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span className="h-3 w-3 rounded bg-brand-rust opacity-0 transition-all duration-500 ease-out group-hover:h-full group-hover:w-full group-hover:opacity-30" />
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
