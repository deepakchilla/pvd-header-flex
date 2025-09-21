import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import aboutImage from '@/assets/about-us-image.jpg';

const About = () => {
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

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section 
      id="about-section"
      className="py-24 lg:py-40 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-20 ${isVisible ? 'hero-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-8 h-8 text-accent mr-4" />
            <span className="text-xl font-semibold font-inter text-accent uppercase tracking-wider">Construction Excellence & Quality</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-black leading-tight mb-8">
            About PVD Enterprises
          </h2>
          
          <p className="text-2xl lg:text-3xl font-inter text-black leading-relaxed font-medium max-w-5xl mx-auto">
            We are India's leading construction company, transforming dreams into reality through innovative home construction, 
            superior quality materials, transparent processes, and unmatched customer satisfaction in residential and commercial projects.
          </p>
        </div>

        {/* Block 1: Construction Excellence - Text Left, Image Right */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins text-accent mb-6">
              Premium Home Construction Services
            </h3>
            <p className="text-xl lg:text-2xl font-inter text-black/90 leading-relaxed">
              At PVD Enterprises, we specialize in delivering world-class residential and commercial construction services. Our expertise encompasses luxury home construction, villa development, duplex houses, independent homes, and commercial buildings. We combine traditional craftsmanship with modern construction techniques, ensuring every project meets international quality standards while reflecting your unique vision and lifestyle requirements.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Premium Construction Services & Quality Building"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-xl" />
          </div>
        </div>

        {/* Block 2: Quality & Transparency - Image Left, Text Right */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          <div className="relative lg:order-1">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Quality Control & Transparent Construction Process"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-primary/20 to-accent/20 rounded-2xl blur-xl" />
          </div>
          
          <div className="space-y-6 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins text-accent mb-6">
              Quality Control & Transparent Process
            </h3>
            <p className="text-xl lg:text-2xl font-inter text-black/90 leading-relaxed">
              We understand that building your dream home is one of life's most significant investments. That's why we implement rigorous quality control measures with 470+ quality checks (QASCON) performed by our expert team throughout the construction process. From foundation laying to final finishing, we maintain complete transparency with regular progress updates, detailed quotations, and online project tracking systems that keep you informed at every stage.
            </p>
          </div>
        </div>

        {/* Block 3: Expert Team & Craftsmanship - Text Left, Image Right */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins text-accent mb-6">
              Expert Team & Superior Craftsmanship
            </h3>
            <p className="text-xl lg:text-2xl font-inter text-black/90 leading-relaxed">
              Our construction excellence is powered by a team of highly skilled architects, engineers, project managers, and craftsmen who bring decades of combined experience to every project. We work closely with leading suppliers to source premium quality materials, ensuring durability and aesthetic appeal. Our collaborative approach involves you in every decision, from architectural design and material selection to interior planning and landscape development, creating spaces that truly reflect your personality and lifestyle.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Expert Construction Team & Superior Craftsmanship"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-xl" />
          </div>
        </div>

        {/* Stats & CTA Section */}
        <div className={`text-center ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 py-12 border-t border-black/20 mb-12">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-poppins text-primary mb-2">15+</div>
              <div className="text-lg text-black/70 font-inter font-medium">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-poppins text-accent mb-2">9000+</div>
              <div className="text-lg text-black/70 font-inter font-medium">Happy Homeowners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-poppins text-primary mb-2">98%</div>
              <div className="text-lg text-black/70 font-inter font-medium">Customer Satisfaction</div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="pt-8">
            <Button 
              variant="cta" 
              size="lg"
              className="hero-cta-hover px-10 py-5 text-xl font-semibold font-inter group"
            >
              Start Your Dream Home
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;