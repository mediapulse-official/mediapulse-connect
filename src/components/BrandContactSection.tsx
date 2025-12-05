import { ArrowUpRight } from "lucide-react";

const BrandContactSection = () => {
  return (
    <section className="py-32 md:py-40 relative bg-secondary/30">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
              For Brands
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Work With Us
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Partner with MediaPulse to amplify your brand's voice through 
              authentic creator collaborations. Let's create campaigns that 
              resonate and convert.
            </p>
            <button className="btn-outline group flex items-center gap-3">
              Get in Touch
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Right - Contact Options */}
          <div className="space-y-6">
            {/* Email Card */}
            <a 
              href="mailto:hello@mediapulse.agency" 
              className="glass-card rounded-2xl p-8 flex items-center justify-between group hover:bg-foreground/5 transition-all duration-500 block"
            >
              <div>
                <span className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Email Us
                </span>
                <span className="font-display text-xl md:text-2xl font-semibold">
                  hello@mediapulse.agency
                </span>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            {/* Schedule Card */}
            <div className="glass-card rounded-2xl p-8 flex items-center justify-between group hover:bg-foreground/5 transition-all duration-500 cursor-pointer">
              <div>
                <span className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2 block">
                  Schedule a Call
                </span>
                <span className="font-display text-xl md:text-2xl font-semibold">
                  Book a Discovery Session
                </span>
              </div>
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-foreground transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandContactSection;
