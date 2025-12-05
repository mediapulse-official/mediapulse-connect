import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card py-4" : "py-6"
      }`}
    >
      <div className="section-container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="font-display text-xl font-bold tracking-tight">
            MediaPulse
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="btn-outline text-xs py-3 px-6">
              Join as Creator
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-border pt-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              <a 
                href="#about" 
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#services" 
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#process" 
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Process
              </a>
              <a 
                href="#contact" 
                className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button className="btn-outline text-xs py-3 px-6 mt-4 w-full">
                Join as Creator
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
