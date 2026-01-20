import { Link } from "react-router-dom";
import { ArrowRight, Award, Clock, Shield, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Modern aluminium and glass building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      {/* Content */}
      <div className="container-premium relative z-10 pt-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 text-accent mb-8 animate-fade-up">
            <Award className="w-4 h-4" />
            <span className="text-sm font-medium">20+ Years of Excellence</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-up delay-100">
            Premium Aluminium & Glass Solutions{" "}
            <span className="text-metallic">Built to Last</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 leading-relaxed max-w-2xl animate-fade-up delay-200">
            Transform your spaces with expert craftsmanship. From elegant glass facades to 
            durable aluminium structures, we deliver quality that stands the test of time.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up delay-300">
            <Link to="/contact">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                View Our Projects
              </Button>
            </Link>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-up delay-400">
            {[
              { icon: Award, label: "20+ Years", sublabel: "Experience" },
              { icon: Wrench, label: "Expert", sublabel: "Fabrication" },
              { icon: Shield, label: "Premium", sublabel: "Materials" },
              { icon: Clock, label: "On-Time", sublabel: "Delivery" },
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 rounded-lg bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-primary-foreground">{feature.label}</p>
                  <p className="text-sm text-primary-foreground/60">{feature.sublabel}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 rounded-full bg-primary-foreground/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
