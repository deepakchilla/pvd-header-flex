import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-illustration.jpg';

const OurProjects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger card animations
          setTimeout(() => {
            setVisibleCards([true, false, false]);
            setTimeout(() => {
              setVisibleCards([true, true, false]);
              setTimeout(() => {
                setVisibleCards([true, true, true]);
              }, 200);
            }, 200);
          }, 300);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const projects = [
    {
      image: heroImage,
      title: "Comfort Meets Class",
      subtitle: "CRN 44418",
      type: "Luxury Villa"
    },
    {
      image: heroImage,
      title: "Modern Design. Homely Feel",
      subtitle: "CRN 135074", 
      type: "Independent House"
    },
    {
      image: heroImage,
      title: "Elegant Outside. Warm Inside",
      subtitle: "CRN 395815",
      type: "Duplex Home"
    }
  ];

  return (
    <section 
      id="projects-section"
      className="py-20 lg:py-32 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 ${isVisible ? 'hero-fade-in' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-black mb-6">
            Our Construction Projects
          </h2>
          <p className="text-lg lg:text-xl font-inter text-black max-w-3xl mx-auto leading-relaxed">
            Built with precision, quality, and trust, ensuring your dream home is crafted to perfection.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden
                hover:-translate-y-2 cursor-pointer
                ${visibleCards[index] ? 'hero-fade-in' : 'opacity-0 translate-y-8'}
              `}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                
                {/* Project Type Badge */}
                <div className="absolute top-4 left-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {project.type}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl lg:text-2xl font-semibold font-poppins text-black group-hover:text-teal-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm font-inter text-gray-500 font-medium">
                  {project.subtitle}
                </p>
                
                {/* View Project Link */}
                <div className="pt-2">
                  <span className="text-teal-500 font-semibold font-inter text-sm group-hover:text-teal-600 transition-colors duration-300">
                    View Project Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className={`text-center ${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
          <Button 
            variant="outline" 
            size="lg"
            className="px-10 py-5 text-lg font-semibold font-inter group border-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white"
          >
            View 12 more projects
            <ArrowRight className="ml-3 h-6 w-6 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Customer Testimonial Section */}
        <div className={`mt-20 text-center bg-white rounded-2xl p-12 shadow-lg ${isVisible ? 'hero-fade-in-delay' : ''}`}>
          <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-black mb-6">
            Our Happy Customers
          </h3>
          <p className="text-lg font-inter text-gray-600 mb-8">
            Trusted by 9000+ Happy Owners
          </p>
          
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-8 border-t border-gray-200 pt-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold font-poppins text-teal-500 mb-2">9000+</div>
              <div className="text-base text-gray-600 font-inter">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold font-poppins text-teal-500 mb-2">98%</div>
              <div className="text-base text-gray-600 font-inter">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold font-poppins text-teal-500 mb-2">500+</div>
              <div className="text-base text-gray-600 font-inter">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProjects;