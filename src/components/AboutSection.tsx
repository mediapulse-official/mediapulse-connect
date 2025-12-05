const AboutSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
              About Us
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
              Bridging the gap between{" "}
              <span className="text-muted-foreground">brands</span> and{" "}
              <span className="text-muted-foreground">creators</span>
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
              MediaPulse is a premium creator–brand collaboration agency that 
              connects visionary brands with influential content creators. We 
              orchestrate partnerships that resonate, campaigns that convert, 
              and content that captivates.
            </p>
            <p className="font-body text-base text-muted-foreground/70 leading-relaxed">
              Our curated network of creators spans every niche and platform, 
              ensuring your brand message reaches the right audience through 
              authentic voices they trust.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <span className="font-display text-3xl md:text-4xl font-bold block">500+</span>
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Creators</span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl font-bold block">150+</span>
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Brands</span>
              </div>
              <div>
                <span className="font-display text-3xl md:text-4xl font-bold block">98%</span>
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">Success</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
