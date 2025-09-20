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
            <span className="text-xl font-semibold font-inter text-accent uppercase tracking-wider">Our Expertise & Vision</span>
          </div>
          
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-poppins text-black leading-tight mb-8">
            What We Do
          </h2>
          
          <p className="text-2xl lg:text-3xl font-inter text-black leading-relaxed font-medium max-w-5xl mx-auto">
            We transform businesses through innovative technology solutions, strategic consulting, and comprehensive support services that drive sustainable growth and competitive advantage in today's rapidly evolving digital landscape.
          </p>
        </div>

        {/* Block 1: Comprehensive Digital Solutions - Text Left, Image Right */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins text-accent mb-6">
              Comprehensive Digital Solutions
            </h3>
            <p className="text-xl lg:text-2xl font-inter text-black/90 leading-relaxed">
              At PVD Enterprises, we specialize in delivering end-to-end digital transformation solutions that revolutionize how businesses operate, compete, and succeed. Our expertise spans across enterprise software development, cloud infrastructure architecture, strategic IT consulting, cybersecurity implementation, and digital innovation initiatives that empower organizations to thrive in the modern technological ecosystem.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Digital Solutions & Technology Innovation"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-xl" />
          </div>
        </div>

        {/* Block 2: Personalized Approach - Image Left, Text Right */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          <div className="relative lg:order-1">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Strategic Planning & Personalized Solutions"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-primary/20 to-accent/20 rounded-2xl blur-xl" />
          </div>
          
          <div className="space-y-6 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins text-accent mb-6">
              Personalized Approach & Strategic Planning
            </h3>
            <p className="text-xl lg:text-2xl font-inter text-black/90 leading-relaxed">
              We understand that every business is unique with distinct challenges, goals, and market dynamics. That's why we take a deeply personalized approach to every project, beginning with comprehensive business analysis and strategic planning. From initial consultation and requirement gathering to solution architecture design, implementation roadmapping, final deployment, and ongoing optimization support, we ensure that our solutions not only meet your current operational needs but also scale seamlessly with your future growth ambitions and evolving market demands.
            </p>
          </div>
        </div>

        {/* Block 3: Collaborative Excellence - Text Left, Image Right */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins text-accent mb-6">
              Collaborative Excellence & Partnership
            </h3>
            <p className="text-xl lg:text-2xl font-inter text-black/90 leading-relaxed">
              Our collaborative methodology is built on the foundation of true partnership and shared success. We work intimately with your teams, stakeholders, and decision-makers to understand unique organizational challenges, analyze complex business goals, identify growth opportunities, and craft highly customized solutions that consistently exceed expectations. Through our innovation-driven approaches, rigorous quality assurance processes, and commitment to excellence, we deliver enterprise-grade solutions with comprehensive 24/7 technical support, scalable architecture design, robust security frameworks, and continuous performance optimization.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Team Collaboration & Partnership Excellence"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-2xl blur-xl" />
          </div>
        </div>

        {/* Block 4: End-to-End Service - Image Left, Text Right */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          <div className="relative lg:order-1">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="End-to-End Service Excellence & Support"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-2xl blur-xl" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-tl from-primary/20 to-accent/20 rounded-2xl blur-xl" />
          </div>
          
          <div className="space-y-6 lg:order-2">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins text-accent mb-6">
              End-to-End Service Excellence
            </h3>
            <p className="text-xl lg:text-2xl font-inter text-black/90 leading-relaxed">
              From strategic roadmap development and technology assessment to implementation, integration, testing, deployment, and long-term maintenance, we provide comprehensive coverage across the entire project lifecycle. Our commitment includes seamless system integration, thorough knowledge transfer, extensive team training, detailed documentation, and ongoing technical support. We ensure industry compliance standards adherence, implement advanced security protocols, maintain data privacy safeguards, and deliver continuous improvement initiatives that make us the trusted technology partner for businesses looking to leverage cutting-edge solutions for sustainable growth and lasting competitive advantage.
            </p>
          </div>
        </div>

        {/* Block 5: Innovation & Future-Ready - Text Left, Image Right */}
        <div className={`grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-24 ${isVisible ? 'hero-fade-in-delay' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold font-poppins text-accent mb-6">
              Innovation & Future-Ready Solutions
            </h3>
            <p className="text-xl lg:text-2xl font-inter text-black/90 leading-relaxed">
              We stay at the forefront of technological advancement, continuously researching and implementing emerging technologies including artificial intelligence, machine learning, blockchain, IoT, cloud computing, and automation solutions. Our innovation labs and research initiatives ensure that our clients always have access to cutting-edge solutions that provide significant competitive advantages. We focus on future-proofing your technology investments through modular architectures, API-first designs, microservices implementations, and scalable cloud-native solutions that evolve with your business needs and market opportunities.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aboutImage} 
                alt="Innovation & Future-Ready Technology Solutions"
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
              <div className="text-4xl lg:text-5xl font-bold font-poppins text-accent mb-2">500+</div>
              <div className="text-lg text-black/70 font-inter font-medium">Successful Projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold font-poppins text-primary mb-2">98%</div>
              <div className="text-lg text-black/70 font-inter font-medium">Client Satisfaction</div>
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="pt-8">
            <Button 
              variant="cta" 
              size="lg"
              className="hero-cta-hover px-10 py-5 text-xl font-semibold font-inter group"
            >
              Discover Our Solutions
              <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;