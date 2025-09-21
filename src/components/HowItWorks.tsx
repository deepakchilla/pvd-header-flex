import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('how-it-works-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const steps = [
    {
      number: "1",
      title: "Raise a Request",
      description: "Contact us with your construction requirements and project details"
    },
    {
      number: "2", 
      title: "Meet our Expert",
      description: "Schedule a consultation with our construction specialists"
    },
    {
      number: "3",
      title: "Book with Us", 
      description: "Finalize your construction package and timeline"
    },
    {
      number: "4",
      title: "Receive Designs",
      description: "Get detailed architectural plans and 3D visualizations"
    },
    {
      number: "5",
      title: "Track & Transact",
      description: "Monitor construction progress and make secure payments"
    },
    {
      number: "6",
      title: "Settle In",
      description: "Move into your dream home with complete satisfaction"
    }
  ];

  return (
    <section 
      id="how-it-works-section"
      className="py-20 lg:py-32 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 ${isVisible ? 'hero-fade-in' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-black mb-6">
            How it works
          </h2>
          <p className="text-lg lg:text-xl font-inter text-black max-w-3xl mx-auto leading-relaxed">
            Our house construction steps are simple and easy to understand: Plan - Build - Track - Settle in.
          </p>
        </div>

        {/* Steps Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ${isVisible ? 'hero-fade-in-delay' : ''}`}>
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Step Card */}
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group-hover:border-teal-500">
                {/* Step Number */}
                <div className="w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center text-xl font-bold font-poppins mb-6 group-hover:scale-110 transition-transform duration-300">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl lg:text-2xl font-semibold font-poppins text-black group-hover:text-teal-500 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-base font-inter text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line (for larger screens) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 transform -translate-y-1/2 z-10">
                  <div className="absolute right-0 top-1/2 w-2 h-2 bg-gray-300 rounded-full transform -translate-y-1/2 translate-x-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`text-center ${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
          <Button 
            variant="cta" 
            size="lg"
            className="px-10 py-5 text-xl font-semibold font-inter group"
          >
            Learn More
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;