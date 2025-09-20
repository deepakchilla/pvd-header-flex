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
        style={{ filter: 'blur(3px) brightness(0.7)' }}
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/10 z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="flex items-center justify-start min-h-screen pt-32 lg:pt-40 py-20">
          {/* Left-aligned Content */}
          <div className="text-left space-y-8 max-w-4xl mt-8 lg:mt-12 ml-4 sm:ml-8 lg:ml-12">
            {/* Hero Title */}
            <div className={`space-y-6 ${isVisible ? 'hero-fade-in' : ''}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins leading-tight" style={{ textShadow: '0px 2px 6px rgba(0, 0, 0, 0.4)' }}>
                <span className="text-white block" style={{ textShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)' }}>
                  Empowering Your
                </span>
                <span className="text-white block" style={{ textShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)' }}>
                  Business with
                </span>
                <span className="text-teal-500 block font-bold" style={{ textShadow: '0px 2px 6px rgba(0, 0, 0, 0.4)' }}>
                  Innovative Solutions
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`${isVisible ? 'hero-fade-in-delay' : ''}`}>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter text-white leading-relaxed max-w-3xl" style={{ textShadow: '0px 2px 6px rgba(0, 0, 0, 0.4)' }}>
                We deliver cutting-edge business solutions that drive growth, enhance efficiency, 
                and transform your vision into reality. Partner with us to unlock your potential.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
              <Button 
                variant="cta" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold font-inter group"
                style={{ boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold font-inter group"
                style={{ boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.2)', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)' }}
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
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