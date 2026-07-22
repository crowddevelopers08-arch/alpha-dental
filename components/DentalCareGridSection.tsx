type IconProps = { className?: string };

const TOOTH_PATH =
  "M12 2c-2.2 0-3.4 1-4.5 1-1.4 0-2.5.9-2.5 3 0 2.4.6 4.7 1.1 7 .4 1.7.7 4.9 2 4.9 1.4 0 1.2-3.7 1.9-5.6.3-.8.7-1.3 1-1.3s.7.5 1 1.3c.7 1.9.5 5.6 1.9 5.6 1.3 0 1.6-3.2 2-4.9.5-2.3 1.1-4.6 1.1-7 0-2.1-1.1-3-2.5-3-1.1 0-2.3-1-4.5-1Z";

function CavityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={TOOTH_PATH} fill="currentColor" />
      <path
        d="M3.5 15.2 6 14.3l2.5.9v2.3c0 1.9-1.3 2.9-2.5 3.4-1.2-.5-2.5-1.5-2.5-3.4v-2.3Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ImplantDentistryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={TOOTH_PATH} fill="currentColor" />
      <path
        d="M10 19.5h4M9.5 21h5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CosmeticIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={TOOTH_PATH} fill="currentColor" />
      <path
        d="M18.5 2c.3 1.6.8 2.1 2.4 2.4-1.6.3-2.1.8-2.4 2.4-.3-1.6-.8-2.1-2.4-2.4 1.6-.3 2.1-.8 2.4-2.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ParodontosisIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={TOOTH_PATH} fill="currentColor" />
      <path d="M17 9.5 14.3 13h1.8L14.5 17l3.7-4.5h-1.8L17 9.5Z" fill="currentColor" />
    </svg>
  );
}

function RadiographyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={TOOTH_PATH} fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
        <circle cx="18" cy="4.5" r="1.3" fill="none" />
        <path d="M18 1.6v.9M20.4 3v.9M20.4 6v-.9M18 7.4v-.9M15.6 4.5h.9M20.5 4.5h.9" />
      </g>
    </svg>
  );
}

function RestorationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d={TOOTH_PATH} fill="currentColor" />
      <circle cx="18.5" cy="17.5" r="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M18.5 16.1v2.8M17.1 17.5h2.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function SedationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 3.5 20.5 9M13.6 4.9l1.9-1.9 3.5 3.5-1.9 1.9M6 12.5l5.6-5.6 3.5 3.5L9.5 16" />
      <path d="M9.5 16 5 20.5M5 20.5 3.5 22M6.7 18.2 4.8 20.1" />
      <path d="M11.6 6.9l1.5-1.5" />
    </svg>
  );
}

function CrownsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M7.5 4c.9 0 1.3.5 2.7.5S12.6 4 13.5 4c1.1 0 1.7.9 1.7 2.4 0 2.1-.8 3.9-1.3 5.1-.3.6-.5 1.5-.9 1.5s-.5-1-.7-1.5c-.2-.5-.5-.8-.8-.8s-.6.3-.8.8c-.2.5-.3 1.5-.7 1.5s-.6-.9-.9-1.5C8.6 10.3 7.8 8.5 7.8 6.4 7.8 4.9 8.4 4 7.5 4Z"
        fill="currentColor"
      />
      <path
        d="M14.5 4c.9 0 1.3.5 2.7.5S19.6 4 20.5 4c1.1 0 1.7.9 1.7 2.4 0 2.1-.8 3.9-1.3 5.1-.3.6-.5 1.5-.9 1.5s-.5-1-.7-1.5c-.2-.5-.5-.8-.8-.8s-.6.3-.8.8c-.2.5-.3 1.5-.7 1.5s-.6-.9-.9-1.5C15.6 10.3 14.8 8.5 14.8 6.4c0-1.5.6-2.4-.3-2.4Z"
        fill="currentColor"
        opacity="0.55"
      />
    </svg>
  );
}

const SERVICES = [
  {
    title: "Cavity Protection",
    description: "Will help strengthen teeth and leave your mouth feeling fresh.",
    Icon: CavityIcon,
  },
  {
    title: "Implant Dentistry",
    description: "Dental implants are the closest you can get to healthy, natural teeth.",
    Icon: ImplantDentistryIcon,
  },
  {
    title: "Cosmetic Dentistry",
    description: "Cosmetic Dentistry improve the appearance of an individual's teeth.",
    Icon: CosmeticIcon,
  },
  {
    title: "Parodontosis",
    description: "Timely treated parodontosis disease can save you from tooth loss.",
    Icon: ParodontosisIcon,
  },
  {
    title: "Dental Radiography",
    description: "Dental X-rays are a useful tool that help to diagnose and plan treatments.",
    Icon: RadiographyIcon,
  },
  {
    title: "Tooth Restorations",
    description: "We can replace missing teeth or repair missing parts of the tooth structure.",
    Icon: RestorationIcon,
  },
  {
    title: "Sedation Dentistry",
    description: "We can use medication to help patients relax during dental procedures.",
    Icon: SedationIcon,
  },
  {
    title: "Crowns & Bridges",
    description: "We'll design, produce and insert ceramic structure all in one single appointment.",
    Icon: CrownsIcon,
  },
];

export default function DentalCareGridSection() {
  return (
    <section className="bg-[#f4f7f8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <div key={service.title} className="group flex flex-col items-center text-center">
            <span className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-brand-rose to-brand-rust">
              <span className="pointer-events-none absolute inset-y-0 left-0 w-0 bg-brand-sage transition-all duration-500 ease-out group-hover:w-full" />
              <service.Icon className="relative z-10 h-9 w-9 text-white" />
            </span>
            <h3 className="mt-6 font-heading text-lg font-bold text-brand-rust">
              {service.title}
            </h3>
            <p className="mt-2 max-w-[230px] text-sm leading-relaxed text-brand-ink/60">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
