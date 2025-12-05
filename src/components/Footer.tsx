const Footer = () => {
  return (
    <footer className="py-16 md:py-20 relative">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div>
            <span className="font-display text-2xl font-bold tracking-tight">
              MediaPulse
            </span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-8">
            <a href="#about" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              About
            </a>
            <a href="#services" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Services
            </a>
            <a href="#process" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Process
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <div>
            <span className="font-body text-sm text-muted-foreground">
              © 2024 MediaPulse
            </span>
          </div>
        </div>

        {/* Bottom Decorative Line */}
        <div className="mt-16 flex items-center justify-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
