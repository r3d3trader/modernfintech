
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-b from-white to-secondary">
      <div className="container-custom mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className={`w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-brand/10 text-brand rounded-full text-sm font-medium mb-6">
              Algorithmic Stock Trading
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-brand-dark mb-6">
            Consistent Returns Through <span className="gradient-text">AI-Driven Trading</span>
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl">
            UReturns leverages advanced algorithmic trading and quantitative strategies to generate 
            consistent monthly returns, with capital protection and quick access to your investments.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link to="/contact" className="btn-primary flex items-center justify-center sm:justify-start">
              Start Investing
              <ChevronRight size={18} className="ml-1" />
            </Link>
            <Link to="/services" className="btn-secondary flex items-center justify-center sm:justify-start">
              Explore Plans
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="ml-3 text-sm text-gray-500">
                <span className="font-medium text-brand-dark">1,500+</span> satisfied investors
              </span>
            </div>
            
            <div className="flex items-center">
              <Star size={18} className="text-gold" fill="#ffb000" />
              <Star size={18} className="text-gold" fill="#ffb000" />
              <Star size={18} className="text-gold" fill="#ffb000" />
              <Star size={18} className="text-gold" fill="#ffb000" />
              <Star size={18} className="text-gold" fill="#ffb000" />
              <span className="ml-2 text-sm font-medium">
                5.0 <span className="text-gray-500">(200+ reviews)</span>
              </span>
            </div>
          </div>
        </div>

        {/* Image/Visualization */}
        <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
          <div className="relative">
            <div className="glass-card rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                alt="AI-Driven Trading Platform" 
                className="w-full h-auto rounded-xl object-cover"
              />
              
              {/* Floating stat cards */}
              <div className="absolute top-10 -left-5 glass-card p-3 px-4 shadow-lg animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monthly Returns</p>
                    <p className="text-sm font-bold text-gray-900">3-10% ROI</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-16 -right-5 glass-card p-3 px-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Shield size={16} className="text-brand" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Capital Protection</p>
                    <p className="text-sm font-bold text-gray-900">Escrow Vault</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave shape divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path 
            fill="#ffffff" 
            fillOpacity="1" 
            d="M0,128L80,122.7C160,117,320,107,480,117.3C640,128,800,160,960,160C1120,160,1280,128,1360,112L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
