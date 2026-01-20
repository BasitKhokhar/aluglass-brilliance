import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Residential Project",
    rating: 5,
    text: "AlumGlass Pro transformed our home with stunning aluminium windows and doors. The quality is exceptional, and the team was professional throughout the entire process. Highly recommend!",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    location: "Commercial Project",
    rating: 5,
    text: "Our new glass shop front has completely changed our business's curb appeal. The installation was quick, clean, and the results exceeded our expectations. Outstanding work!",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Roberts",
    role: "Interior Designer",
    location: "Office Renovation",
    rating: 5,
    text: "I've worked with many contractors, but AlumGlass Pro stands out for their attention to detail and custom solutions. The glass partitions they installed are simply beautiful.",
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Wilson",
    role: "Property Developer",
    location: "Multi-Unit Project",
    rating: 5,
    text: "Reliable, professional, and delivers quality work on time. We've used AlumGlass Pro for multiple projects and they never disappoint. They're our go-to for aluminium solutions.",
    avatar: "DW",
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-primary text-primary-foreground overflow-hidden">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            What Our Clients Say
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience working with us.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Quote Icon */}
          <Quote className="absolute -top-4 -left-4 w-16 h-16 text-accent/20" />

          {/* Testimonial Cards */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary-foreground/10">
                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>

                    {/* Text */}
                    <blockquote className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                        <span className="text-accent font-semibold text-lg">{testimonial.avatar}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-primary-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary-foreground/60">
                          {testimonial.role} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button 
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === activeIndex 
                      ? "bg-accent w-8" 
                      : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-primary-foreground/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
