import { useState, useEffect } from "react";
import { MapPin, Calendar, ChevronRight, ArrowRight } from "lucide-react";
import { backgroundImages, techFeatures, EVENT_DATE, EVENT_LOCATION } from "../data";
import MDFDS from "../assests/mdfds.png";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [currentBackground, setCurrentBackground] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    setIsLoaded(true);

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % techFeatures.length);
    }, 3000);

    // Background switching interval
    const backgroundInterval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length);
    }, 8000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      clearInterval(backgroundInterval);
    };
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Animated background elements - Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((imageSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentBackground ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${imageSrc})`,
              }}
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[#1E3A8A]/70" />
            {/* Additional overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1E3A8A]/30 to-[#1E3A8A]/80" />
          </div>
        ))}
      </div>
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#1E3A8A]/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://club-code.esi.ma/assets/logo-RJEgxBZ1.svg" alt="CODE-ESI" className="w-16 h-16" />
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-white font-medium hover:text-[#93C5FD] transition-colors">
              About
            </a>
            <a href="#prizes" className="text-white font-medium hover:text-[#93C5FD] transition-colors">
              Prizes
            </a>
            <a href="#timeline" className="text-white font-medium hover:text-[#93C5FD] transition-colors">
              Timeline
            </a>
            <button className="bg-gradient-to-r from-[#93C5FD] to-[#93C5FD] text-[#1E3A8A] px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1">
              Join us
            </button>
          </div>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white font-medium hover:text-[#93C5FD] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            Menu
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#1E3A8A]/95 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a href="#about" className="text-white font-medium hover:text-[#93C5FD] transition-colors">
                About
              </a>
              <a href="#prizes" className="text-white font-medium hover:text-[#93C5FD] transition-colors">
                Prizes
              </a>
              <a href="#timeline" className="text-white font-medium hover:text-[#93C5FD] transition-colors">
                Timeline
              </a>
              <button className="bg-gradient-to-r from-[#93C5FD] to-[#93C5FD] text-[#1E3A8A] px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-1">
                Join us
              </button>
            </div>
          </div>
        )}
      </nav>
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto pt-32 px-6 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <div className="max-w-2xl">
          <div
            className={`inline-block px-4 py-1 bg-[#1E3A8A]/10 rounded-full text-[#93C5FD] mb-6
              transition-all duration-700 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="animate-pulse">CODE-ESI PRESENTS</span>
          </div>
          <h1
            className={`text-5xl md:text-7xl font-bold mb-8 leading-tight
              transition-all duration-700 delay-100 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="bg-gradient-to-r from-[#93C5FD] via-white to-[#93C5FD] text-transparent bg-clip-text">
              THE MOROCCAN DAYS OF
              <br />
              FUTURE DATA SCIENTISTS
            </span>
          </h1>
          <div
            className={`text-xl text-gray-300 mb-12 max-w-xl
              transition-all duration-700 delay-200 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Join us for a 2-day hackathon to learn, collaborate, and compete with the best minds in the industry.
            Transform your ideas into reality with cutting-edge AI and machine learning.
          </div>
          <div
            className={`flex items-center gap-4 mb-12
              transition-all duration-700 delay-300 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="bg-[#1E3A8A]/10 px-6 py-3 rounded-full flex items-center gap-2">
              <Calendar className="w-5 h-5 text-[#93C5FD]" />
              <span className="text-lg">{EVENT_DATE.split(" ")[0]}</span>
            </div>
            <div className="bg-[#1E3A8A]/10 px-6 py-3 rounded-full flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#93C5FD]" />
              <span className="text-lg">{EVENT_LOCATION}</span>
            </div>
          </div>
          {/* Feature Showcase */}
          <div
            className={`relative h-32 mb-12 overflow-hidden
              transition-all duration-700 delay-400 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center gap-4 transition-all duration-500 transform
                  ${index === activeFeature ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <div className="w-16 h-16 bg-[#1E3A8A]/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-[#93C5FD]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#93C5FD]">{feature.name}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-12
              transition-all duration-700 delay-500 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <button className="group bg-gradient-to-r from-[#93C5FD] to-[#60A5FA] text-[#1E3A8A] px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 flex items-center gap-2">
              Submit your project
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-full font-semibold border border-[#60A5FA]/50 hover:bg-[#60A5FA]/20 text-[#60A5FA] transition-all flex items-center gap-2">
              Discover More
              <ChevronRight className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
        {/* Decorative Right Side */}
        <div className="hidden md:block relative w-1/3">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A8A]/20 to-[#93C5FD]/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="relative grid grid-cols-2 gap-4">
            {Array.from({ length: 1 }).map((_, i) => (
              <div
              key={i}
              className="bg-gradient-to-br from-[#1E3A8A]/10 to-[#93C5FD]/10 rounded-5xl backdrop-blur-sm border-[#93C5FD]/50 flex items-center justify-center"
              style={{
                animation: `float ${2.5}s ease-in-out infinite, pulse ${3}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
                width: "200%",
              }}
              >
              <img src={MDFDS} alt="MDFDS Logo" className="h-96 w-96 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
