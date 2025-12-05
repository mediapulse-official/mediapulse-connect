import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CreatorJoinSection from "@/components/CreatorJoinSection";
import BrandContactSection from "@/components/BrandContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <section id="about">
          <AboutSection />
        </section>
        <section id="services">
          <ServicesSection />
        </section>
        <section id="process">
          <ProcessSection />
        </section>
        <CreatorJoinSection />
        <section id="contact">
          <BrandContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
