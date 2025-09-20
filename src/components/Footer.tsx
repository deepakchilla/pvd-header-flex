import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Instagram
} from 'lucide-react';
import pvdLogoDark from '../assets/pvdlogodark.png';

const Footer = () => {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  // Custom WhatsApp SVG icon component
  const WhatsAppIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.434 3.178"/>
    </svg>
  );

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about-section' },
      { name: 'Our Services', href: '#services-section' },
      { name: 'Portfolio', href: '#' },
      { name: 'Careers', href: '#' },
    ],
    services: [
      { name: 'Enterprise Solutions', href: '#services-section' },
      { name: 'IT Consulting', href: '#services-section' },
      { name: 'Custom Software', href: '#services-section' },
      { name: 'Support & Maintenance', href: '#services-section' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact-section' },
      { name: 'Help Center', href: '#' },
      { name: 'Documentation', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ]
  };

  const socialLinks = [
    { name: 'WhatsApp', icon: WhatsAppIcon, href: '#', color: 'hover:text-green-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-sky-400' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'contact@pvdenterprises.com', href: 'mailto:contact@pvdenterprises.com' },
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: MapPin, text: '123 Business Ave, Tech City, TC 12345', href: '#' },
  ];

  return (
    <footer className="relative bg-accent/80 backdrop-blur-sm border-t border-accent-foreground/20">

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 opacity-0 animate-fade-in">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={pvdLogoDark} 
                alt="PVD Logo" 
                className="h-16 lg:h-20 w-auto drop-shadow-md" 
              />
            </div>
            <p className="text-white/90 mb-6 leading-relaxed font-inter">
              Delivering innovative solutions and exceptional service to help businesses thrive in the digital age. Your success is our commitment.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`
                      w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center
                      text-white/70 hover:text-white transition-all duration-300 hover:scale-110
                      hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:shadow-lg
                      border border-white/20 hover:border-white/40
                    `}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-white mb-6">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 font-inter hover:translate-x-1 inline-block"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-white mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 font-inter hover:translate-x-1 inline-block"
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        element?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold font-poppins text-white mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <li key={index}>
                    <a
                      href={contact.href}
                      className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-300 group"
                    >
                      <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-inter text-sm">{contact.text}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-white/70 font-inter text-sm">
              <span>© {currentYear} PVD Enterprises. All rights reserved.</span>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {footerLinks.support.slice(-2).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors duration-300 font-inter text-sm"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;