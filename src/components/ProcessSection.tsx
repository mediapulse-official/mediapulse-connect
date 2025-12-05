const steps = [
  {
    number: "01",
    title: "Share Your Goal",
    description: "Tell us about your brand, campaign objectives, target audience, and creative vision. We listen, understand, and strategize.",
  },
  {
    number: "02",
    title: "We Shortlist Creators",
    description: "Our team curates a selection of creators perfectly matched to your brand DNA, ensuring authenticity and reach.",
  },
  {
    number: "03",
    title: "Approvals & Delivery",
    description: "Review, approve, and watch as premium content comes to life. We handle everything until successful delivery.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-32 md:py-40 relative overflow-hidden">
      {/* Background Geometric */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-foreground/[0.02] blur-3xl -translate-y-1/2" />
      
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
          {/* Left Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
              How It Works
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Our Process
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed">
              A streamlined three-step process designed for efficiency and excellence.
            </p>
          </div>

          {/* Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="process-step group">
                  <div className="flex gap-8 items-start">
                    {/* Number */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:border-foreground/30 group-hover:bg-foreground/5 transition-all duration-500">
                      <span className="font-display text-lg font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-500">
                        {step.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="pt-3">
                      <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
                        {step.title}
                      </h3>
                      <p className="font-body text-muted-foreground leading-relaxed max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="ml-8 mt-8 w-px h-12 bg-gradient-to-b from-border to-transparent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
