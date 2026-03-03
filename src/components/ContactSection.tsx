import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary text-secondary-foreground">
      <div className="container mx-auto">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-2 font-body text-sm font-semibold uppercase tracking-wider text-primary">
            Get In Touch
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to Go Further Together?
          </h2>
          <p className="mt-4 font-body text-secondary-foreground/70">
            Reach out via WhatsApp, email, or visit our Facebook page. We'd love
            to hear from you.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Phone,
                label: "WhatsApp",
                value: "076 088 4005",
                href: "https://wa.me/27760884005",
              },
              {
                icon: Mail,
                label: "Email",
                value: "info@asanteandi.co.za",
                href: "mailto:info@asanteandi.co.za",
              },
              {
                icon: MapPin,
                label: "Location",
                value: "Centurion, 0157",
                href: "#",
              },
              {
                icon: Facebook,
                label: "Facebook",
                value: "Asante Andi",
                href: "https://facebook.com/AsanteAndiConsulting",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex flex-col items-center rounded-xl border border-secondary-foreground/10 p-6 transition-colors hover:bg-secondary-foreground/5"
              >
                <item.icon className="mb-2 h-6 w-6 text-primary" />
                <span className="text-xs text-secondary-foreground/60">
                  {item.label}
                </span>
                <span className="mt-1 text-sm font-medium">{item.value}</span>
              </a>
            ))}
          </div>

          <Button size="lg" className="mt-10" asChild>
            <a href="https://wa.me/27760884005" target="_blank" rel="noopener noreferrer">
              Start a Conversation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
