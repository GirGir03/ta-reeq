import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-industrial.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "INDUSTRIAL BUSINESS",
      subtitle: "We specialize in providing comprehensive contracting solutions tailored to the unique needs of industrial businesses. With extensive experience and expertise in industrial construction, maintenance, and renovation projects, we are trusted partners in helping industrial clients optimize their facilities and operations.",
      image: heroImage
    },
    {
      title: "PRODUCTION SOLUTIONS", 
      subtitle: "With a deep understanding of the intricacies involved in designing, constructing, and maintaining manufacturing facilities, we are committed to delivering high-quality results that enhance efficiency, productivity, and competitiveness.",
      image: heroImage
    },
    {
      title: "INNOVATIVE SOLUTIONS",
      subtitle: "Innovation is at the core of everything we do. As a leading contracting company, we are committed to delivering exceptional results through forward-thinking solutions that push the boundaries of traditional construction practices.",
      image: heroImage
    },
    {
      title: "QUALITY SERVICE",
      subtitle: "We pride ourselves on delivering unmatched quality services to our clients in every aspect of our contracting projects. With a commitment to excellence ingrained in our company culture, we strive to exceed expectations.",
      image: heroImage
    },
    {
      title: "HIGH QUALITY MATERIALS",
      subtitle: "Our dedication to excellence begins with the selection process, where we carefully look into the suppliers and materials to ensure they meet our stringent standards for quality, durability, and sustainability.",
      image: heroImage
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Slide Background */}
      <div className="absolute inset-0">
        <img
          src={slides[currentSlide].image}
          alt="Industrial facility"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay"></div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 w-12 h-12"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white hover:bg-white/20 w-12 h-12"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-wide animate-fade-in">
          {slides[currentSlide].title}
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed opacity-90 mb-8 animate-slide-in-right">
            {slides[currentSlide].subtitle}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="btn-gold px-8 py-3 text-lg animate-scale-in">
            Learn More
          </Button>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg animate-scale-in">
            Contact Us
          </Button>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/75"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;