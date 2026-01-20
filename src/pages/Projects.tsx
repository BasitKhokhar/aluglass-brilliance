import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = ["All", "Residential", "Commercial", "Custom"];

const projects = [
  {
    id: 1,
    title: "Modern Glass Facade",
    category: "Commercial",
    description: "Complete glass curtain wall installation for a corporate headquarters, featuring floor-to-ceiling glass panels with minimal aluminium framing.",
    location: "Business District",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    id: 2,
    title: "Luxury Beachfront Villa",
    category: "Residential",
    description: "Custom aluminium sliding doors and windows for a premium coastal property with marine-grade corrosion resistance.",
    location: "Coastal Area",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 3,
    title: "High-End Boutique Storefront",
    category: "Commercial",
    description: "Frameless glass shop front with automatic doors, creating maximum product visibility and an inviting entrance.",
    location: "Shopping Mall",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    id: 4,
    title: "Penthouse Glass Railings",
    category: "Residential",
    description: "Tempered glass balcony railings with brushed stainless steel posts for a luxury penthouse apartment.",
    location: "City Center",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
  },
  {
    id: 5,
    title: "Tech Office Renovation",
    category: "Commercial",
    description: "Modern glass partition system with integrated blinds for a technology company's new headquarters.",
    location: "Tech Park",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: 6,
    title: "Contemporary Family Home",
    category: "Residential",
    description: "Large-format aluminium sliding doors connecting indoor and outdoor living spaces seamlessly.",
    location: "Suburban Area",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
  {
    id: 7,
    title: "Art Gallery Windows",
    category: "Custom",
    description: "Custom-designed UV-protective glass installations to protect valuable artwork while maximizing natural light.",
    location: "Arts District",
    image: "https://images.unsplash.com/photo-1577720643272-265f09367456?w=800&q=80",
  },
  {
    id: 8,
    title: "Restaurant Renovation",
    category: "Commercial",
    description: "Bi-fold glass doors allowing the restaurant to open completely to the outdoor patio during good weather.",
    location: "Waterfront",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    id: 9,
    title: "Custom Skylight Installation",
    category: "Custom",
    description: "Architectural aluminium and glass skylight system for a historic building renovation.",
    location: "Historic District",
    image: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container-premium">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Portfolio
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Showcasing Excellence in Every Project
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              Explore our portfolio of completed projects that demonstrate our expertise 
              and commitment to quality in aluminium and glass solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-premium">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted text-foreground hover:bg-primary/10 border border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <ExternalLink className="text-primary-foreground w-8 h-8" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                      {project.category}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {project.location}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
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
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let us bring your vision to life. Contact us today for a free consultation 
              and quote for your aluminium and glass project.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl" className="group">
                Get Your Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
