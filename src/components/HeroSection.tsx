import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="South African students learning together"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-secondary/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/20 px-4 py-1.5 text-sm font-medium text-primary-foreground animate-fade-in">
            <BookOpen className="h-4 w-4" />
            Further Together
          </div>
          <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-secondary-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
            Your Partner in
            <span className="block text-primary"> Education & Skills</span>
            Development
          </h1>
          <p className="mb-8 max-w-lg font-body text-lg text-secondary-foreground/80 animate-fade-in-up [animation-delay:200ms]">
            Academic support, ECD training, craft &amp; tech skills, fashion design, and
            language programs — all under one roof in Centurion, South Africa.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row animate-fade-in-up [animation-delay:400ms]">
            <Button size="lg" asChild>
              <a href="#services">
                Explore Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
              <a href="https://wa.me/27760884005" target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-secondary-foreground/60 animate-fade-in-up [animation-delay:600ms]">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              No AI — 100% Human Written
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              4-Day Turnaround
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              10+ Institutions Covered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
