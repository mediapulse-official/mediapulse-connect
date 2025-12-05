import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-mesh">
      {/* Geometric Decorations */}
      <div className="geo-circle w-[600px] h-[600px] -top-40 -right-40 animate-pulse-soft" />
      <div className="geo-circle w-[400px] h-[400px] -bottom-20 -left-20 animate-pulse-soft delay-200" />
      <div className="geo-line w-px h-40 top-20 left-1/4 animate-fade-in delay-500" />
      <div className="geo-line w-40 h-px bottom-40 right-1/4 animate-fade-in delay-600" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="section-container relative z-10 text-center">
        {/* Eyebrow Text */}
        <p className="font-body text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8 opacity-0 animate-fade-up">
          Creator × Brand Collaboration Agency
        </p>

        {/* Main Title */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter mb-6 opacity-0 animate-fade-up delay-100">
          MediaPulse
        </h1>

        {/* Motto */}
        <p className="font-display text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium tracking-wide max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up delay-200">
          "Where Creativity Meets Opportunities"
        </p>

        {/* CTA Button */}
        <div className="opacity-0 animate-fade-up delay-300">
          <button className="btn-premium group">
            <span className="relative z-10 flex items-center gap-3">
              Join as Creator
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
