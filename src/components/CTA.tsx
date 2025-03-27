
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section ref={sectionRef} className="section bg-[#104741] text-white relative" id="cta">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="0.5" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaPattern)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className={`text-center mx-auto max-w-3xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block mb-6">
            <Sparkles size={32} className="text-gold mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Your Future Self Will Thank You
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Start earning in 30 days with zero risk. Limited spots available!
          </p>
          
          <div className="inline-block relative">
            <div className="absolute -top-10 -right-10 bg-gold text-brand-dark text-sm font-bold px-3 py-1 rounded-full">
              Limited Time Offer!
            </div>
            <Link 
              to="/contact" 
              className="btn-primary bg-gold hover:bg-gold-light text-brand-dark text-lg px-8 py-4 inline-flex items-center group transform hover:scale-105 transition-all duration-300"
            >
              🚀 Claim My Free Plan Now
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          
          <p className="text-sm opacity-75 mt-6">
            No credit card required. Start your journey to financial freedom today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
