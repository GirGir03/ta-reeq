import { useEffect, useRef, useState } from "react";
import { Building2, Cog, Shield, Lightbulb } from "lucide-react";

const WelcomeSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Welcome Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            WELCOME TO <span className="text-gold">TAREEQ AL MARJAN</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Discover the advantages of selecting Tareeq Al Marjan for construction and maintenance services, 
            ensuring quality and reliability.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Production Solutions */}
          <div className={`service-card group ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gold-light/20 rounded-lg flex items-center justify-center group-hover:bg-gold-light/30 transition-colors">
                <Building2 className="h-8 w-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              With a deep understanding of the intricacies involved in designing, constructing, and maintaining 
              manufacturing facilities, we are committed to delivering high-quality results that enhance efficiency, 
              productivity, and competitiveness.
            </p>
          </div>

          {/* High Quality Materials */}
          <div className={`service-card group ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gold-light/20 rounded-lg flex items-center justify-center group-hover:bg-gold-light/30 transition-colors">
                <Shield className="h-8 w-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">High Quality Materials</h3>
            <p className="text-gray-600 leading-relaxed">
              Our dedication to excellence begins with the selection process, where we carefully look into the 
              suppliers and materials to ensure they meet our stringent standards for quality, durability, 
              and sustainability.
            </p>
          </div>

          {/* Quality Service */}
          <div className={`service-card group ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gold-light/20 rounded-lg flex items-center justify-center group-hover:bg-gold-light/30 transition-colors">
                <Cog className="h-8 w-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quality Service</h3>
            <p className="text-gray-600 leading-relaxed">
              We pride ourselves on delivering unmatched quality services to our clients in every aspect of our 
              contracting projects. With a commitment to excellence ingrained in our company culture, we strive 
              to exceed expectations.
            </p>
          </div>

          {/* Innovative Solutions */}
          <div className={`service-card group ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <div className="mb-4">
              <div className="w-16 h-16 mx-auto bg-gold-light/20 rounded-lg flex items-center justify-center group-hover:bg-gold-light/30 transition-colors">
                <Lightbulb className="h-8 w-8 text-gold" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovative Solutions</h3>
            <p className="text-gray-600 leading-relaxed">
              Innovation is at the core of everything we do. As a leading contracting company, we are committed 
              to delivering exceptional results through forward-thinking solutions that push the boundaries of 
              traditional construction practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;