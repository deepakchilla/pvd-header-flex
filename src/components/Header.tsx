import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Clients', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 header-fade-in
        ${isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
          : 'bg-transparent'
        }
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              className="font-poppins font-bold text-xl lg:text-2xl text-primary hover:text-primary/80 transition-colors duration-300 text-shadow"
            >
              PVD Enterprises PVTLTD
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-item-hover font-inter text-base font-medium text-foreground px-3 py-2 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden lg:flex">
            <Button 
              variant="cta"
              className="px-6 py-2 rounded-lg font-inter font-medium text-base"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`
          lg:hidden fixed inset-y-0 right-0 w-full max-w-sm bg-background border-l border-border shadow-xl
          mobile-menu ${isMobileMenuOpen ? 'open' : ''}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-poppins font-bold text-lg text-primary">
              PVD Enterprises
            </span>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-foreground hover:text-primary hover:bg-muted transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-lg font-inter text-base font-medium text-foreground hover:text-primary hover:bg-muted transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <div className="p-4 mt-auto border-t border-border">
            <Button 
              variant="cta"
              className="w-full px-6 py-3 rounded-lg font-inter font-medium text-base"
              size="lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-[-1]"
          onClick={toggleMobileMenu}
        />
      )}
    </header>
  );
};

export default Header;