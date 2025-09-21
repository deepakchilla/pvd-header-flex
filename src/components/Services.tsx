import { useEffect, useState } from 'react';
import { 
  Home, 
  Building, 
  Hammer, 
  Shield 
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
      icon: Home,
      title: "Home Construction",
      description: "Complete residential construction services including independent houses, luxury homes, and custom-designed living spaces with modern amenities and quality materials."
    },
    {
      icon: Building,
      title: "Villa & Duplex Construction",
      description: "Elegant villa and duplex home construction with spacious layouts, premium finishes, and architectural excellence tailored to your lifestyle and preferences."
    },
    {
      icon: Hammer,
      title: "Commercial Construction",
      description: "Professional commercial building services for offices, retail spaces, warehouses, and industrial facilities with focus on functionality and compliance."
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "470+ Quality (QASCON) checks performed by our team of experts ensuring the highest standards of construction quality and safety compliance."
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-white/70 backdrop-blur-md" id="services-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-black mb-6">
            Home Construction Services
          </h2>
          <p className="text-lg lg:text-xl font-inter text-black max-w-3xl mx-auto leading-relaxed">
            Expertise in delivering top-notch construction with precision, quality, and transparency.
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