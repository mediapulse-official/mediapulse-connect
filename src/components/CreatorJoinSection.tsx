import { ArrowRight, Sparkles } from "lucide-react";

const CreatorJoinSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      {/* Background Elements */}
      <div className="absolute inset-0 gradient-mesh opacity-50" />
      <div className="geo-circle w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse-soft" />
      
      <div className="section-container relative z-10">
        <div className="glass-card rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 rounded-2xl bg-foreground/5 flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-8 h-8 text-foreground" strokeWidth={1.5} />
          </div>

          {/* Content */}
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
            For Creators
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Become a part of<br />MediaPulse
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Join our exclusive network of creators and unlock opportunities with 
            premium brands. Elevate your content, expand your reach, grow your career.
          </p>

          {/* CTA Button */}
          <button className="btn-premium group">
            <span className="relative z-10 flex items-center gap-3">
              Join as Creator
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-border/50">
            <div className="text-center">
              <span className="font-display text-2xl font-bold block">Free</span>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">To Join</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <span className="font-display text-2xl font-bold block">24h</span>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">Response</span>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <span className="font-display text-2xl font-bold block">500+</span>
              <span className="font-body text-xs text-muted-foreground uppercase tracking-wider">Creators</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorJoinSection;
