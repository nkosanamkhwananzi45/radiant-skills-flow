import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "SANTS 2 Assignments",
    price: "R550",
    period: "",
    features: [
      "2 assignment submissions",
      "4-day turnaround",
      "100% human written",
      "WhatsApp support",
    ],
    popular: false,
  },
  {
    name: "SANTS Full Semester",
    price: "R1,500",
    period: "per semester",
    features: [
      "All semester assignments",
      "Priority turnaround",
      "100% human written",
      "Dedicated support",
      "Progress tracking",
    ],
    popular: true,
  },
  {
    name: "Craft & Tech Bundle",
    price: "R4,000",
    period: "3 courses",
    features: [
      "Choose any 3 courses",
      "Save R500 vs individual",
      "Lifetime access to materials",
      "Certificate of completion",
      "WhatsApp community",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="section-padding bg-muted/50">
      <div className="container mx-auto">
        <div className="mx-auto max-w-2xl text-center mb-12 md:mb-16">
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-wider text-primary">
            Pricing
          </p>
          <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            Transparent, Affordable Packages
          </h2>
          <p className="mt-4 font-body text-muted-foreground">
            Invest in your future with packages designed for South African
            students and professionals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-xl border p-6 md:p-8 transition-all ${
                pkg.popular
                  ? "border-primary bg-card shadow-xl scale-[1.02]"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-lg font-bold text-card-foreground">
                {pkg.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-heading text-4xl font-bold text-foreground">
                  {pkg.price}
                </span>
                {pkg.period && (
                  <span className="text-sm text-muted-foreground">
                    /{pkg.period}
                  </span>
                )}
              </div>
              <ul className="mt-6 space-y-3">
                {pkg.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={pkg.popular ? "default" : "outline"}
                asChild
              >
                <a
                  href="https://wa.me/27760884005"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
