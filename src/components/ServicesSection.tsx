import {
  GraduationCap,
  Baby,
  Scissors,
  ShoppingBag,
  Languages,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Academic Support",
    description:
      "Guided writing assistance for SANTS, UNISA, UJ, Wits, and 10+ SA institutions. From certificates to postgrad.",
    highlight: "From R550",
  },
  {
    icon: Baby,
    title: "ECD Online Training",
    description:
      "Level 4 & 5 practitioner tutoring via Microsoft Teams. Includes WhatsApp Q&A and free CV revamps.",
    highlight: "From R250",
  },
  {
    icon: Scissors,
    title: "Craft & Tech Skills",
    description:
      "Cricut, Balloon Styling, Laser Cutting, Gift Packaging, Canva, Graphic Design, and Book Binding.",
    highlight: "From R1,500",
  },
  {
    icon: ShoppingBag,
    title: "Fashion Design",
    description:
      "Learn shoe making, bag design, belts & sandals. Start your own fashion brand with hands-on training.",
    highlight: "From R3,000",
  },
  {
    icon: Languages,
    title: "Language Programs",
    description:
      "KiSwahili, Mandarin, Sign Language, and IsiZulu courses taught by experienced instructors.",
    highlight: "From R2,000",
  },
  {
    icon: FileText,
    title: "Research Support",
    description:
      "Dissertations, proposals, literature reviews, data analysis (SPSS/R/Excel), and Turnitin guidance.",
    highlight: "Custom Quote",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-wider text-primary">
            What We Offer
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Services Built for Your Success
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            From academic excellence to entrepreneurial skills — we've got every
            step of your journey covered.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-xl border border-border bg-card p-6 transition-all hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-card-foreground">
                {service.title}
              </h3>
              <p className="mb-4 font-body text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <span className="inline-block rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent-foreground">
                {service.highlight}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
