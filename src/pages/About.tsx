import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Target, Eye, Heart, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every project, delivering work that exceeds expectations.",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Honest communication and transparent practices are the foundation of our business.",
  },
  {
    icon: Eye,
    title: "Innovation",
    description: "We embrace new technologies and techniques to deliver cutting-edge solutions.",
  },
];

const milestones = [
  { year: "2003", title: "Company Founded", description: "Started with a small team and a big vision" },
  { year: "2008", title: "100th Project", description: "Reached our first major milestone" },
  { year: "2015", title: "Expanded Services", description: "Added custom fabrication capabilities" },
  { year: "2020", title: "Industry Recognition", description: "Received excellence in craftsmanship award" },
  { year: "Today", title: "Industry Leader", description: "500+ projects and counting" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container-premium">
          <div className="max-w-3xl">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Excellence Since 2003
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              For over two decades, AlumGlass Pro has been the trusted name in premium 
              aluminium and glass solutions. Our commitment to quality and customer 
              satisfaction has made us a leader in the industry.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-premium">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Crafting Quality for Over 20 Years
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  AlumGlass Pro was founded in 2003 with a simple mission: to provide 
                  premium aluminium and glass solutions that combine exceptional quality 
                  with outstanding service.
                </p>
                <p>
                  What started as a small workshop has grown into a full-service 
                  fabrication and installation company, serving residential and 
                  commercial clients across the region. Our growth is a testament 
                  to our unwavering commitment to excellence.
                </p>
                <p>
                  Today, we're proud to be the trusted partner for architects, 
                  developers, homeowners, and businesses who demand the very best 
                  in aluminium and glass solutions.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Professional craftsman at work"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-card rounded-xl shadow-xl p-6 border border-border">
                <div className="text-center">
                  <div className="font-display text-4xl font-bold text-accent mb-1">20+</div>
                  <div className="text-muted-foreground text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-premium">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver premium aluminium and glass solutions that enhance spaces, 
                exceed expectations, and stand the test of time. We are committed to 
                combining expert craftsmanship with innovative design to create 
                lasting value for our clients.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-lg">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in aluminium and glass solutions, 
                recognized for our uncompromising quality, innovative designs, 
                and exceptional customer service. We aim to set the standard 
                for excellence in our industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-background">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              What Drives Us Forward
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-primary text-primary-foreground">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold">
              Milestones That Define Us
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-foreground/20 hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10">
                      <span className="text-accent font-bold text-lg">{milestone.year}</span>
                      <h3 className="font-display text-xl font-bold mt-1 mb-2">{milestone.title}</h3>
                      <p className="text-primary-foreground/70">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-accent flex-shrink-0 z-10" />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-muted">
        <div className="container-premium">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Let's discuss how we can bring your vision to life with our expertise.
            </p>
            <Link to="/contact">
              <Button variant="cta" size="xl" className="group">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
