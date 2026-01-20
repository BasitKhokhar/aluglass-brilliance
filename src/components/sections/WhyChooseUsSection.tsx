import { Users, Award, Palette, DollarSign, Shield, Clock } from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Skilled Professionals",
    description: "Our team of certified experts brings decades of combined experience to every project.",
  },
  {
    icon: Award,
    title: "High-Quality Aluminium",
    description: "We source only premium-grade aluminium materials that ensure durability and longevity.",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description: "Every project is unique. We design and fabricate solutions tailored to your specific needs.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium quality doesn't mean premium prices. We offer competitive rates without compromise.",
  },
  {
    icon: Shield,
    title: "Reliable Service",
    description: "Count on us for consistent, dependable service from initial consultation to final installation.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your timeline. Projects are completed efficiently without sacrificing quality.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-premium">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              The Trusted Choice for{" "}
              <span className="text-accent">Premium Quality</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              With over two decades of experience, we've built our reputation on quality craftsmanship, 
              reliable service, and customer satisfaction. Here's why clients trust us for their 
              aluminium and glass solutions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-muted">
                <div className="font-display text-3xl md:text-4xl font-bold text-accent mb-1">98%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right - Reasons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div 
                key={index}
                className="group flex gap-4 p-5 rounded-xl bg-card border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <reason.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
