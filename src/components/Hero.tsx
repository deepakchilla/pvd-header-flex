import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import heroIllustration from '@/assets/hero-illustration.jpg';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.9) 100%), url(${heroIllustration})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-center min-h-screen py-20">
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            {/* Hero Title */}
            <div className={`space-y-6 ${isVisible ? 'hero-fade-in' : ''}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins leading-tight">
                <span className="text-black block">
                  Empowering Your
                </span>
                <span className="text-black block">
                  Business with
                </span>
                <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent block">
                  Innovative Solutions
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`${isVisible ? 'hero-fade-in-delay' : ''}`}>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter text-black leading-relaxed max-w-3xl mx-auto">
                We deliver cutting-edge business solutions that drive growth, enhance efficiency, 
                and transform your vision into reality. Partner with us to unlock your potential.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
              <Button 
                variant="cta" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold font-inter group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold font-inter group"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className={`pt-8 ${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
              <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--primary))]">500+</div>
                  <div className="text-sm text-gray-600 font-inter">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--accent))]">98%</div>
                  <div className="text-sm text-gray-600 font-inter">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--primary))]">24/7</div>
                  <div className="text-sm text-gray-600 font-inter">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;