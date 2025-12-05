import { Users, BarChart3, Video, Handshake } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Creator Shortlisting",
    description: "We identify and vet creators who align perfectly with your brand values, audience, and campaign objectives.",
  },
  {
    icon: BarChart3,
    title: "Campaign Management",
    description: "End-to-end campaign orchestration from strategy and briefing to execution and performance analysis.",
  },
  {
    icon: Video,
    title: "UGC Production",
    description: "High-quality user-generated content that feels authentic and drives engagement across all platforms.",
  },
  {
    icon: Handshake,
    title: "Influencer Coordination",
    description: "Seamless coordination between brands and influencers, handling contracts, timelines, and deliverables.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 md:py-40 relative bg-secondary/30">
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="font-body text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Our Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card rounded-2xl">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground/10 transition-colors duration-500">
                <service.icon className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <h3 className="font-display text-xl md:text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-foreground/20 to-transparent" />
                <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-foreground/20 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default ServicesSection;
