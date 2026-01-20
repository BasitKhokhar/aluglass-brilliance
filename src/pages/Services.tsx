import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  DoorOpen, 
  Building2, 
  LayoutGrid, 
  ChefHat, 
  Cog, 
  Wrench,
  ArrowRight,
  CheckCircle 
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "doors-windows",
    icon: DoorOpen,
    title: "Aluminium Doors & Windows",
    description: "High-quality aluminium frames for residential and commercial properties.",
    details: "Our aluminium doors and windows are designed for durability, energy efficiency, and aesthetic appeal. We offer a wide range of styles including sliding, casement, awning, and bi-fold options.",
    features: [
      "Thermal break technology for energy efficiency",
      "Powder-coated finishes in various colors",
      "Double and triple glazing options",
      "Security locking systems",
      "Custom sizes and configurations",
    ],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "shop-fronts",
    icon: Building2,
    title: "Glass Shop Fronts",
    description: "Stunning glass facades that showcase your business with maximum visibility.",
    details: "Transform your storefront with our premium glass shop front solutions. We design and install frameless and framed glass systems that create an inviting, modern appearance for retail spaces.",
    features: [
      "Frameless and semi-frameless options",
      "Tempered safety glass",
      "Automatic door integration",
      "Anti-fingerprint coatings",
      "Custom branding options",
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: "partitions",
    icon: LayoutGrid,
    title: "Office Glass Partitions",
    description: "Modern glass partition systems for open, bright workspaces.",
    details: "Create flexible, modern office environments with our glass partition systems. From floor-to-ceiling installations to desk dividers, we provide solutions that enhance collaboration while maintaining privacy.",
    features: [
      "Full-height and partial partitions",
      "Frosted and tinted options",
      "Acoustic glass solutions",
      "Integrated blind systems",
      "Minimal aluminum framing",
    ],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "kitchens",
    icon: ChefHat,
    title: "Aluminium Kitchens & Cabinets",
    description: "Sleek, hygienic aluminium cabinetry for modern kitchens.",
    details: "Our aluminium kitchen cabinets offer a contemporary alternative to traditional wood. They're moisture-resistant, termite-proof, and incredibly durable, making them perfect for modern homes and commercial kitchens.",
    features: [
      "100% waterproof construction",
      "Termite and pest resistant",
      "Easy to clean and maintain",
      "Wide range of finishes",
      "Soft-close mechanisms",
    ],
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
  },
  {
    id: "fabrication",
    icon: Cog,
    title: "Custom Fabrication",
    description: "Bespoke aluminium solutions tailored to your unique requirements.",
    details: "From architectural features to specialized installations, our custom fabrication services bring your unique visions to life. Our skilled craftsmen work with precision to create one-of-a-kind aluminium solutions.",
    features: [
      "Custom design consultation",
      "Precision CNC cutting",
      "Complex structural elements",
      "Architectural metalwork",
      "Prototype development",
    ],
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "maintenance",
    icon: Wrench,
    title: "Repair & Maintenance",
    description: "Professional services to keep your installations in perfect condition.",
    details: "Keep your aluminium and glass installations performing at their best with our comprehensive repair and maintenance services. From minor adjustments to major repairs, we've got you covered.",
    features: [
      "Regular maintenance programs",
      "Emergency repair service",
      "Hardware replacement",
      "Seal and gasket renewal",
      "Performance upgrades",
    ],
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container-premium">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Services
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comprehensive Solutions for Every Need
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              From residential installations to large commercial projects, we offer 
              a complete range of aluminium and glass services tailored to your requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-premium">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Decorative element */}
                  <div className={`absolute -z-10 w-full h-full rounded-2xl bg-accent/10 ${
                    index % 2 === 0 ? "-bottom-4 -right-4" : "-bottom-4 -left-4"
                  }`} />
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.details}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact">
                    <Button variant="cta" size="lg" className="group">
                      Get a Quote
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Our team is ready to discuss your specific requirements and create 
              a tailored solution for your project.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl" className="group">
                Contact Us Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
