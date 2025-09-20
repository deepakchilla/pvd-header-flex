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
    <section className="relative min-h-screen bg-gradient-to-br from-[hsl(var(--hero-bg))] to-[hsl(var(--background))] overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-shape absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl" />
        <div className="decorative-shape absolute bottom-32 left-16 w-96 h-96 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-3xl" />
        <div className="decorative-shape absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-bl from-primary/5 to-accent/5 rounded-full blur-2xl" />
      </div>

      {/* Abstract Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-32 left-10 w-16 h-16 text-primary/20" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="currentColor" className="decorative-shape" />
        </svg>
        <svg className="absolute bottom-40 right-32 w-12 h-12 text-accent/20" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="currentColor" className="decorative-shape" />
        </svg>
        <svg className="absolute top-64 right-16 w-20 h-20 text-primary/15" viewBox="0 0 100 100">
          <rect x="20" y="20" width="60" height="60" fill="currentColor" className="decorative-shape" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Hero Title */}
            <div className={`space-y-6 ${isVisible ? 'hero-fade-in' : ''}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-poppins leading-tight">
                <span className="text-[hsl(var(--hero-title))] block">
                  Empowering Your
                </span>
                <span className="text-[hsl(var(--hero-title))] block">
                  Business with
                </span>
                <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent block">
                  Innovative Solutions
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className={`${isVisible ? 'hero-fade-in-delay' : ''}`}>
              <p className="text-lg sm:text-xl lg:text-2xl font-inter text-[hsl(var(--hero-subtitle))] leading-relaxed max-w-2xl">
                We deliver cutting-edge business solutions that drive growth, enhance efficiency, 
                and transform your vision into reality. Partner with us to unlock your potential.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 ${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
              <Button 
                variant="cta" 
                size="lg"
                className="hero-cta-hover px-8 py-4 text-lg font-semibold font-inter group"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold font-inter border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
              >
                <Play className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                Watch Demo
              </Button>
            </div>

            {/* Stats or Trust Indicators */}
            <div className={`pt-8 ${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
              <div className="grid grid-cols-3 gap-8 max-w-md">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--primary))]">500+</div>
                  <div className="text-sm text-muted-foreground font-inter">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--accent))]">98%</div>
                  <div className="text-sm text-muted-foreground font-inter">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold font-poppins text-[hsl(var(--primary))]">24/7</div>
                  <div className="text-sm text-muted-foreground font-inter">Support</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Illustration */}
          <div className={`relative ${isVisible ? 'hero-fade-in-delay' : ''}`}>
            <div className="relative">
              {/* Main Illustration */}
              <div className="hero-image-float relative z-10">
                <img 
                  src={heroIllustration} 
                  alt="PVD Enterprises - Professional Business Solutions"
                  className="w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-accent to-accent-hover rounded-full shadow-lg hero-image-float opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-full shadow-lg hero-image-float opacity-80" style={{ animationDelay: '-1s' }} />
              <div className="absolute top-1/3 -left-6 w-8 h-8 bg-gradient-to-br from-accent-hover to-accent rounded-full shadow-md hero-image-float opacity-60" style={{ animationDelay: '-2s' }} />
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