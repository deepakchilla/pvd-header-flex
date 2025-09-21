import { useEffect, useState } from 'react';
import { 
  Shield, 
  Eye, 
  CheckCircle, 
  Clock 
} from 'lucide-react';

const WhyChooseUs = () => {
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

    const cards = document.querySelectorAll('.why-choose-card');
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const features = [
    {
      icon: Shield,
      title: "Safe Money Transaction",
      description: "No Advance. Contractor is paid only once the work is complete"
    },
    {
      icon: Eye,
      title: "Absolute Transparency",
      description: "Clear and Detailed Quotation. Online tracking of projects"
    },
    {
      icon: CheckCircle,
      title: "Assured Quality Control",
      description: "470+ Quality (QASCON) Checks performed by team of experts"
    },
    {
      icon: Clock,
      title: "Zero Delays",
      description: "Zero tolerance for delays"
    }
  ];

  return (
    <section className="py-20 lg:py-32 bg-teal-600" id="why-choose-us-section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-white mb-6">
            Why Choose PVD Enterprises, the Best Construction Company
          </h2>
          <p className="text-lg lg:text-xl font-inter text-white max-w-3xl mx-auto leading-relaxed">
            We ensure peace of mind, trust, and transparent house construction services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                data-index={index}
                className={`
                  why-choose-card group bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl 
                  transition-all duration-500 hover:-translate-y-2 cursor-pointer
                  border border-white/20 hover:border-white/40 hover:bg-white/20
                  ${visibleCards[index] ? 'hero-fade-in' : 'opacity-0 translate-y-8'}
                `}
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-semibold font-poppins text-white">
                    {feature.title}
                  </h3>
                  <p className="text-base font-inter text-white/90 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;