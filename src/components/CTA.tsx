
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
    <section ref={sectionRef} className="section bg-[#104741] text-white" id="cta">
      <div className="container-custom">
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="inline-block mb-6">
            <Sparkles size={32} className="text-gold animate-pulse mx-auto" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-float">
            Your Future Self Will Thank You
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Start earning in 30 days with zero risk. Limited spots available!
          </p>
          
          <div className="inline-block relative">
            <div className="absolute -top-10 -right-10 bg-gold text-brand-dark text-sm font-bold px-3 py-1 rounded-full animate-pulse">
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
