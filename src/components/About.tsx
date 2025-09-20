import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
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
      className="py-20 lg:py-32 bg-[hsl(var(--hero-bg))]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isVisible ? 'hero-fade-in' : ''}`}>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-black">
                About Us
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg lg:text-xl font-inter text-black leading-relaxed">
                  PVD Enterprises is committed to delivering innovative solutions to enterprises, 
                  with a focus on quality and customer satisfaction.
                </p>
                
                <p className="text-base lg:text-lg font-inter text-muted-foreground leading-relaxed">
                  With years of experience in the industry, we have established ourselves as a trusted 
                  partner for businesses looking to leverage technology for growth. Our team of experts 
                  combines technical excellence with deep industry knowledge to deliver solutions that 
                  drive real business value.
                </p>
                
                <p className="text-base lg:text-lg font-inter text-muted-foreground leading-relaxed">
                  We believe in building long-term partnerships with our clients, understanding their 
                  unique challenges, and crafting customized solutions that exceed expectations.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-border/30">
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--primary))]">15+</div>
                <div className="text-sm text-muted-foreground font-inter">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--accent))]">200+</div>
                <div className="text-sm text-muted-foreground font-inter">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--primary))]">50+</div>
                <div className="text-sm text-muted-foreground font-inter">Team Members</div>
              </div>
            </div>

            {/* CTA Button */}
            <div className={`${isVisible ? 'hero-fade-in-delay' : ''}`}>
              <Button 
                variant="cta" 
                size="lg"
                className="hero-cta-hover px-8 py-4 text-lg font-semibold font-inter group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className={`relative ${isVisible ? 'hero-fade-in-delay' : ''}`}>
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10">
                <img 
                  src={aboutImage} 
                  alt="PVD Enterprises Team - Professional Business Solutions"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;