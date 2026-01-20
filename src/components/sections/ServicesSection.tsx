import { Link } from "react-router-dom";
import { 
  DoorOpen, 
  Building2, 
  LayoutGrid, 
  ChefHat, 
  Cog, 
  Wrench,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: DoorOpen,
    title: "Aluminium Doors & Windows",
    description: "High-quality aluminium frames for residential and commercial properties. Energy-efficient, durable, and stylish.",
  },
  {
    icon: Building2,
    title: "Glass Shop Fronts",
    description: "Stunning glass facades that showcase your business. Custom-designed for maximum visibility and appeal.",
  },
  {
    icon: LayoutGrid,
    title: "Office Glass Partitions",
    description: "Modern glass partition systems that create open, bright workspaces while maintaining privacy.",
  },
  {
    icon: ChefHat,
    title: "Aluminium Kitchens & Cabinets",
    description: "Sleek, hygienic aluminium cabinetry perfect for modern kitchens. Built for durability and style.",
  },
  {
    icon: Cog,
    title: "Custom Fabrication",
    description: "Bespoke aluminium solutions tailored to your unique requirements. From design to installation.",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Professional repair and maintenance services to keep your aluminium and glass installations in perfect condition.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-muted">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Comprehensive Aluminium & Glass Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From concept to completion, we provide a full range of professional services 
            for all your aluminium and glass needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group premium-card p-8 hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link 
                to="/services" 
                className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <button className="inline-flex items-center gap-2 text-foreground font-semibold hover:text-accent transition-colors group">
              View All Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
