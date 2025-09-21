import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import webBackground from "@/assets/webbackground.jpg";
import building1 from "@/assets/Building1.png";
import building2 from "@/assets/Building2.png";
import { useState } from 'react';

const Index = () => {
  // Slideshow data
  const slideData = [
    {
      id: 1,
      imageUrl: building1,
      category: 'Basic',
      labels: [
        {
          text: 'Standard Materials',
          description: 'Quality cement & bricks',
          position: { top: '20%', left: '15%' }
        },
        {
          text: 'Basic Electrical',
          description: 'Standard wiring system',
          position: { top: '40%', left: '70%' }
        },
        {
          text: 'Foundation',
          description: 'Strong concrete base',
          position: { top: '80%', left: '30%' }
        }
      ]
    },
    {
      id: 2,
      imageUrl: building2,
      category: 'Classic',
      labels: [
        {
          text: 'Premium Materials',
          description: 'High-grade steel & concrete',
          position: { top: '25%', left: '20%' }
        },
        {
          text: 'Advanced Electrical',
          description: 'Smart wiring & panels',
          position: { top: '35%', left: '75%' }
        },
        {
          text: 'Reinforced Structure',
          description: 'Enhanced durability',
          position: { top: '70%', left: '45%' }
        }
      ]
    },
    {
      id: 3,
      imageUrl: building1,
      category: 'Premium',
      labels: [
        {
          text: 'Luxury Materials',
          description: 'Imported quality materials',
          position: { top: '30%', left: '25%' }
        },
        {
          text: 'Smart Systems',
          description: 'Automated controls',
          position: { top: '45%', left: '65%' }
        },
        {
          text: 'Designer Finishes',
          description: 'Premium aesthetics',
          position: { top: '75%', left: '40%' }
        }
      ]
    }
  ];

  const categories = ['Basic', 'Classic', 'Premium', 'Royale'];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('Basic');

  // Filter slides by category
  const filteredSlides = slideData.filter(slide => slide.category === selectedCategory);
  const currentSlideData = filteredSlides[currentSlide] || slideData[0];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % filteredSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + filteredSlides.length) % filteredSlides.length);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentSlide(0);
  };
  return (
    <div 
      className="min-h-screen bg-background"
      style={{
        backgroundImage: `url(${webBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      
      {/* Hero Section */}
      <Hero />
      
      {/* Main content area */}
      <main>
        {/* Section One: All About PVD Enterprises */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-left max-w-5xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-black mb-8 leading-tight">
                All About PVD Enterprises
              </h1>
              <div className="text-lg lg:text-xl font-inter text-gray-700 leading-relaxed space-y-4">
                <p>
                  PVD Enterprises is India's leading construction company, specializing in premium residential and commercial construction services. 
                  We combine traditional craftsmanship with modern construction techniques to deliver exceptional quality homes and buildings.
                </p>
                <p>
                  With over 15 years of experience and 9000+ satisfied customers, we have established ourselves as a trusted name in the construction industry. 
                  Our commitment to transparency, quality control with 470+ QASCON checks, and zero-delay delivery makes us the preferred choice for dream home construction.
                </p>
                <p>
                  From luxury villas and independent houses to duplex homes and commercial buildings, we bring your vision to life with precision, 
                  dedication, and uncompromising quality standards that exceed expectations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Two: Home Consultation Services in Hyderabad */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-left max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-black mb-8 leading-tight">
                Home Consultation Services in Hyderabad
              </h2>
              <p className="text-lg lg:text-xl font-inter text-gray-700 mb-12">
                Expertise in delivering top-notch construction with precision, quality, and transparency.
              </p>
              
              {/* Service Cards */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Home Construction Card */}
                <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                    <img 
                      src={building1} 
                      alt="Home Construction Services"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                      Home Construction
                    </h3>
                    <p className="text-lg font-inter text-gray-700">
                      <span className="font-bold">Duplex Homes</span><br />
                      <span className="font-normal">Luxury Homes, Villas</span>
                    </p>
                  </div>
                </div>

                {/* Commercial Construction Card */}
                <div className="bg-white shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-w-16 aspect-h-10 overflow-hidden">
                    <img 
                      src={building2} 
                      alt="Commercial Construction Services"
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                      Commercial Construction
                    </h3>
                    <p className="text-lg font-inter text-gray-700">
                      PG/Rental, Schools, Hotels, Offices, Warehousing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Three: Why Choose PVD Enterprises */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-left max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-black mb-12 leading-tight">
                Why Choose PVD Enterprises?
              </h2>
              
              {/* Why Choose Us Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Safe Money Transaction */}
                <div className="bg-white border-2 border-gray-200 shadow-lg p-6 hover:shadow-xl hover:border-teal-500 transition-all duration-300">
                  <h3 className="text-xl font-bold font-poppins text-black mb-4">
                    Safe Money Transaction
                  </h3>
                  <p className="text-base font-inter text-gray-700 leading-relaxed">
                    No advance payments required. Contractors are paid only after the work is completed and approved, ensuring your money is always safe.
                  </p>
                </div>

                {/* Absolute Transparency */}
                <div className="bg-white border-2 border-gray-200 shadow-lg p-6 hover:shadow-xl hover:border-teal-500 transition-all duration-300">
                  <h3 className="text-xl font-bold font-poppins text-black mb-4">
                    Absolute Transparency
                  </h3>
                  <p className="text-base font-inter text-gray-700 leading-relaxed">
                    Clear and detailed quotations with no hidden costs. Online project tracking keeps you informed about every stage of construction.
                  </p>
                </div>

                {/* Assured Quality Control */}
                <div className="bg-white border-2 border-gray-200 shadow-lg p-6 hover:shadow-xl hover:border-teal-500 transition-all duration-300">
                  <h3 className="text-xl font-bold font-poppins text-black mb-4">
                    Assured Quality Control
                  </h3>
                  <p className="text-base font-inter text-gray-700 leading-relaxed">
                    470+ Quality (QASCON) checks performed by our team of experts to ensure the highest standards of construction quality.
                  </p>
                </div>

                {/* Zero Delay */}
                <div className="bg-white border-2 border-gray-200 shadow-lg p-6 hover:shadow-xl hover:border-teal-500 transition-all duration-300">
                  <h3 className="text-xl font-bold font-poppins text-black mb-4">
                    Zero Delay
                  </h3>
                  <p className="text-base font-inter text-gray-700 leading-relaxed">
                    We have zero tolerance for delays. Your project will be completed on time with strict adherence to agreed timelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Four: Construction Packages in Hyderabad */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-left max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-black mb-12 leading-tight">
                Construction Packages in Hyderabad
              </h2>
              
              {/* Package Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Basic Package */}
                <div className="bg-white border-2 border-gray-200 shadow-lg p-6 hover:shadow-xl hover:border-teal-500 transition-all duration-300 flex flex-col">
                  <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                    Basic
                  </h3>
                  <div className="text-3xl font-bold text-teal-500 mb-4">
                    ₹1,990
                    <span className="text-base font-normal text-gray-600">/sqft</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm font-inter text-gray-700 flex-grow">
                    <li>• Standard construction materials</li>
                    <li>• Basic electrical and plumbing</li>
                    <li>• Standard flooring options</li>
                    <li>• Basic paint and finishing</li>
                    <li>• 1-year warranty</li>
                    <li>• Essential safety features</li>
                  </ul>
                  <button className="w-full bg-teal-500 text-white py-3 px-6 font-semibold hover:bg-teal-600 transition-colors duration-300 mt-auto">
                    Learn More
                  </button>
                </div>

                {/* Classic Package */}
                <div className="bg-white border-2 border-teal-500 shadow-lg p-6 hover:shadow-xl transition-all duration-300 relative flex flex-col">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-500 text-white px-4 py-1 text-sm font-semibold">
                    Popular
                  </div>
                  <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                    Classic
                  </h3>
                  <div className="text-3xl font-bold text-teal-500 mb-4">
                    ₹2,155
                    <span className="text-base font-normal text-gray-600">/sqft</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm font-inter text-gray-700 flex-grow">
                    <li>• Premium construction materials</li>
                    <li>• Advanced electrical & plumbing</li>
                    <li>• Vitrified tile flooring</li>
                    <li>• Premium paint & textures</li>
                    <li>• 2-year warranty</li>
                    <li>• Enhanced safety & security</li>
                    <li>• Basic home automation</li>
                  </ul>
                  <button className="w-full bg-teal-500 text-white py-3 px-6 font-semibold hover:bg-teal-600 transition-colors duration-300 mt-auto">
                    Learn More
                  </button>
                </div>

                {/* Premium Package */}
                <div className="bg-white border-2 border-gray-200 shadow-lg p-6 hover:shadow-xl hover:border-teal-500 transition-all duration-300 flex flex-col">
                  <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                    Premium
                  </h3>
                  <div className="text-3xl font-bold text-teal-500 mb-4">
                    ₹2,550
                    <span className="text-base font-normal text-gray-600">/sqft</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm font-inter text-gray-700 flex-grow">
                    <li>• High-end construction materials</li>
                    <li>• Premium electrical & smart wiring</li>
                    <li>• Marble/granite flooring</li>
                    <li>• Designer paint & wall finishes</li>
                    <li>• 3-year warranty</li>
                    <li>• Advanced home automation</li>
                    <li>• Modular kitchen included</li>
                    <li>• Landscape design consultation</li>
                  </ul>
                  <button className="w-full bg-teal-500 text-white py-3 px-6 font-semibold hover:bg-teal-600 transition-colors duration-300 mt-auto">
                    Learn More
                  </button>
                </div>

                {/* Royale Package */}
                <div className="bg-white border-2 border-gray-200 shadow-lg p-6 hover:shadow-xl hover:border-teal-500 transition-all duration-300 flex flex-col">
                  <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                    Royale
                  </h3>
                  <div className="text-3xl font-bold text-teal-500 mb-4">
                    ₹2,780
                    <span className="text-base font-normal text-gray-600">/sqft</span>
                  </div>
                  <ul className="space-y-3 mb-6 text-sm font-inter text-gray-700 flex-grow">
                    <li>• Ultra-premium materials</li>
                    <li>• Smart home electrical systems</li>
                    <li>• Italian marble/imported tiles</li>
                    <li>• Luxury paint & wall treatments</li>
                    <li>• 5-year comprehensive warranty</li>
                    <li>• Full home automation system</li>
                    <li>• Designer modular kitchen</li>
                    <li>• Complete landscape design</li>
                    <li>• Personal project manager</li>
                  </ul>
                  <button className="w-full bg-teal-500 text-white py-3 px-6 font-semibold hover:bg-teal-600 transition-colors duration-300 mt-auto">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Five: Take a closer look */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-2 sm:px-4 lg:px-6">
            <div className="text-left max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-poppins text-black mb-12 leading-tight">
                Take a Closer Look
              </h2>
              
              {/* Category Selector */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`px-6 py-3 font-semibold transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-teal-500 text-white'
                        : 'bg-white border-2 border-teal-500 text-teal-500 hover:bg-teal-50'
                    }`}
                    aria-label={`View ${category} construction details`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Slideshow Container */}
              <div className="relative bg-white border-2 border-gray-200 shadow-lg overflow-hidden">
                {/* Navigation Arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 text-teal-500 hover:text-teal-600 p-3 shadow-lg transition-all duration-300"
                  aria-label="Previous slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-80 hover:bg-opacity-100 text-teal-500 hover:text-teal-600 p-3 shadow-lg transition-all duration-300"
                  aria-label="Next slide"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Slide Content */}
                <div className="relative aspect-w-16 aspect-h-9 lg:aspect-h-10">
                  <img
                    src={currentSlideData.imageUrl}
                    alt={`${currentSlideData.category} construction details`}
                    className="w-full h-96 lg:h-[500px] object-cover transition-opacity duration-500"
                  />
                  
                  {/* Label Pointers */}
                  {currentSlideData.labels.map((label, index) => (
                    <div
                      key={index}
                      className="absolute group"
                      style={{
                        top: label.position.top,
                        left: label.position.left,
                        transform: 'translate(-50%, -50%)'
                      }}
                    >
                      {/* Pointer Dot */}
                      <div className="w-4 h-4 bg-teal-500 border-2 border-white shadow-lg relative cursor-pointer transform hover:scale-110 transition-transform duration-200">
                        {/* Dotted Line (horizontal) */}
                        <div className="absolute top-1/2 left-4 w-16 border-t-2 border-dotted border-teal-500 transform -translate-y-1/2"></div>
                        
                        {/* Label Card */}
                        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-white border-2 border-teal-500 shadow-lg p-3 min-w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                          <h4 className="font-bold text-sm text-black mb-1">
                            {label.text}
                          </h4>
                          <p className="text-xs text-gray-600">
                            {label.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slide Indicator */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {filteredSlides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 transition-all duration-300 ${
                        index === currentSlide
                          ? 'bg-teal-500'
                          : 'bg-white border-2 border-teal-500'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Current Slide Info */}
              <div className="mt-6 text-center lg:text-left">
                <h3 className="text-2xl font-bold font-poppins text-black mb-2">
                  {currentSlideData.category} Construction Package
                </h3>
                <p className="text-lg font-inter text-gray-700">
                  Hover over the dots to explore detailed features and specifications of our {currentSlideData.category.toLowerCase()} construction package.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
      
      {/* Floating WhatsApp Icon */}
      <FloatingWhatsApp 
        phoneNumber="919133279912" 
        message="Hello! I'm interested in PVD Enterprises construction services. I would like to get a quote for my project."
      />
    </div>
  );
};

export default Index;