const Footer = () => {
  return (
    <footer className="border-t border-border bg-background px-4 py-8">
      <div className="container mx-auto flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <span className="font-heading text-lg font-bold text-primary">
            Asante Andi Consulting
          </span>
          <p className="mt-1 text-xs text-muted-foreground">
            Further Together — Centurion, South Africa
          </p>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Asante Andi Consulting. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
