import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send 
} from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section 
      id="contact-section"
      className="py-20 lg:py-32 bg-[hsl(var(--hero-bg))]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 lg:mb-20 ${isVisible ? 'hero-fade-in' : ''}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-[hsl(var(--hero-title))] mb-6">
            Get In Touch
          </h2>
          <p className="text-lg lg:text-xl font-inter text-[hsl(var(--hero-subtitle))] max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Contact us today to discuss your requirements and discover how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'hero-fade-in-delay' : ''}`}>
            <div className="space-y-8">
              <h3 className="text-2xl lg:text-3xl font-semibold font-poppins text-[hsl(var(--hero-title))]">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-poppins text-[hsl(var(--hero-title))] mb-2">Address</h4>
                    <p className="text-[hsl(var(--hero-subtitle))] font-inter leading-relaxed">
                      Ho no 2-76-172/722, Dwarakanagar Phase - I,<br />
                      Chengicherla, Medipally Medchel Malkajgiri,<br />
                      Telangana
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-poppins text-[hsl(var(--hero-title))] mb-2">Mobile</h4>
                    <p className="text-[hsl(var(--hero-subtitle))] font-inter">
                      <a href="tel:+919133279912" className="hover:text-[hsl(var(--accent))] transition-colors duration-300">
                        +91 9133279912
                      </a>
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-[hsl(var(--primary))]" />
                  </div>
                  <div>
                    <h4 className="font-semibold font-poppins text-[hsl(var(--hero-title))] mb-2">Email</h4>
                    <p className="text-[hsl(var(--hero-subtitle))] font-inter">
                      <a href="mailto:bhasker.ponnagante@gmail.com" className="hover:text-[hsl(var(--accent))] transition-colors duration-300">
                        bhasker.ponnagante@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-border/30">
              <h4 className="font-semibold font-poppins text-[hsl(var(--hero-title))] mb-4">Business Hours</h4>
              <div className="space-y-2 text-[hsl(var(--hero-subtitle))] font-inter">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'hero-fade-in-delay-2' : ''}`}>
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-border/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[hsl(var(--hero-title))] font-poppins font-medium">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border-border/50 focus:border-primary transition-colors duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[hsl(var(--hero-title))] font-poppins font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="border-border/50 focus:border-primary transition-colors duration-300"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-[hsl(var(--hero-title))] font-poppins font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="border-border/50 focus:border-primary transition-colors duration-300 resize-none"
                    placeholder="Tell us about your project or requirements..."
                  />
                </div>

                <Button 
                  type="submit"
                  variant="cta" 
                  size="lg"
                  className="w-full hero-cta-hover px-8 py-4 text-lg font-semibold font-inter group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;