import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import bgVideo from '@/assets/bgvideo.mp4';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      className="relative min-h-screen overflow-hidden"
    >
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-center min-h-screen pt-32 lg:pt-40 py-20">
          {/* Centered Content */}
          <div className="text-center space-y-8 max-w-4xl mx-auto mt-8 lg:mt-12">
            {/* Hero Title */}
            <div className={`space-y-6 ${isVisible ? 'hero-fade-in' : ''}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins leading-tight" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}>
                <span className="text-white block" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }}>
                  Empowering Your
                </span>
                <span className="text-white block" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }}>
                  Business with
                </span>
                <span 
                  className="block relative"
                  style={{ 
                    background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--accent)) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  Innovative Solutions
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`${isVisible ? 'hero-fade-in-delay' : ''}`}>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter text-white leading-relaxed max-w-3xl mx-auto" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }}>
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
                style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)', textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)' }}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold font-inter group"
                style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.15)', textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)' }}
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className={`pt-8 ${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
              <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--primary))]" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }}>500+</div>
                  <div className="text-sm text-white font-inter" style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)' }}>Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--accent))]" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }}>98%</div>
                  <div className="text-sm text-white font-inter" style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)' }}>Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--primary))]" style={{ textShadow: '0px 2px 4px rgba(0, 0, 0, 0.4)' }}>24/7</div>
                  <div className="text-sm text-white font-inter" style={{ textShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)' }}>Support</div>
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