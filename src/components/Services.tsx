import { useEffect, useState } from 'react';
import { 
  Building2, 
  Lightbulb, 
  Code, 
  Headphones 
} from 'lucide-react';

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 200); // Staggered animation
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const services = [
    {
      icon: Building2,
      title: "Enterprise Solutions",
      description: "Comprehensive enterprise-grade solutions designed to streamline operations, enhance productivity, and drive business growth across all departments."
    },
    {
      icon: Lightbulb,
      title: "IT Consulting",
      description: "Strategic IT consulting services to help businesses leverage technology effectively, optimize infrastructure, and make informed technology decisions."
    },
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built from the ground up to meet your specific business requirements, ensuring scalability and performance."
    },
    {
      icon: Headphones,
      title: "Support & Maintenance",
      description: "24/7 comprehensive support and maintenance services to ensure your systems run smoothly and efficiently with minimal downtime."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white/70 backdrop-blur-md" id="services-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-black mb-6">
            Our Services
          </h2>
          <p className="text-lg lg:text-xl font-inter text-black max-w-3xl mx-auto leading-relaxed">
            We offer comprehensive business solutions designed to help your enterprise thrive in today's competitive landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`
                  service-card group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                  transition-all duration-500 hover:-translate-y-2 cursor-pointer
                  border border-border/50 hover:border-primary/20 hover:bg-white/90
                  ${visibleCards[index] ? 'hero-fade-in' : 'opacity-0 translate-y-8'}
                `}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    <Icon className="w-8 h-8 text-[hsl(var(--primary))] group-hover:text-[hsl(var(--accent))] transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-semibold font-poppins text-black group-hover:text-[hsl(var(--accent))] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-base font-inter text-black leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect Arrow */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                  <span className="text-[hsl(var(--accent))] font-semibold font-inter text-sm">
                    Learn More →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;