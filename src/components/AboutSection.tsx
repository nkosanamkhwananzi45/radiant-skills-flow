import { Award, Users, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "10+", label: "Institutions Served" },
  { icon: Award, value: "500+", label: "Students Supported" },
  { icon: Heart, value: "100%", label: "Human-Written Work" },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-2 font-body text-sm font-semibold uppercase tracking-wider text-primary">
              About Us
            </p>
            <h2 className="font-heading text-3xl font-bold text-foreground md:text-4xl">
              Founded on Passion, Driven by Purpose
            </h2>
            <p className="mt-4 font-body text-muted-foreground leading-relaxed">
              Asante Andi Consulting was founded by{" "}
              <strong className="text-foreground">Ingrid Andiswa Thomo</strong>{" "}
              with a simple belief: that every South African deserves access to
              quality education support and skills development — no matter where
              they are in their journey.
            </p>
            <p className="mt-4 font-body text-muted-foreground leading-relaxed">
              Based in Centurion, we serve students and professionals across the
              country — from SANTS Private College ECD practitioners to UNISA
              postgraduate researchers, and from aspiring fashion designers to
              multilingual professionals.
            </p>
            <p className="mt-4 font-body text-muted-foreground leading-relaxed">
              Our motto, <em className="text-primary font-semibold">"Further Together,"</em>{" "}
              reflects our commitment to walking alongside our clients every step
              of the way.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-xl border border-border bg-card p-6 text-center"
              >
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className="font-heading text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
