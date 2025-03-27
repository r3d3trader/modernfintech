
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Star, Shield, TrendingUp, Check } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    <div className="relative min-h-screen flex flex-col justify-center pt-24 pb-12 overflow-hidden bg-[#104741]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <rect width="80" height="80" fill="url(#smallGrid)" />
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-custom mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Content */}
        <div className={`w-full lg:w-1/2 lg:pr-12 mb-12 lg:mb-0 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-medium mb-6">
              Smart Investments
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Unlock 8-10% Monthly Returns—<span className="text-gold">No Brokers, No Fees, Just Results.</span>
          </h1>
          
          <p className="text-lg text-gray-200 mb-8 max-w-2xl">
            Let our AI-driven expert traders grow your wealth effortlessly. 
            Start with a FREE personalized investment plan.
          </p>

          <div className="space-y-3 mb-8">
            <div className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
              <Check size={20} className="text-green-300 mr-2 flex-shrink-0" />
              <span className="text-gray-200 font-medium">Predictable Returns</span>
            </div>
            <div className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
              <Check size={20} className="text-green-300 mr-2 flex-shrink-0" />
              <span className="text-gray-200 font-medium">100% Capital Protection</span>
            </div>
            <div className="flex items-center transform hover:translate-x-1 transition-transform duration-300">
              <Check size={20} className="text-green-300 mr-2 flex-shrink-0" />
              <span className="text-gray-200 font-medium">Withdraw in 30 Days</span>
            </div>
          </div>

          {/* Buttons stacked vertically with space between */}
          <div className="flex flex-col gap-4 mb-10">
            <Link to="/contact" className="btn-primary flex items-center justify-center transition-transform duration-300 group">
              🚀 Get Your FREE Investment Plan
              <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link to="/services" className="bg-transparent border-2 border-white text-white font-medium px-6 py-2.5 rounded-md transition-all duration-300 hover:bg-white/10 flex items-center justify-center hover:scale-105">
              Explore Plans
            </Link>
          </div>

          {/* Updated Social Proof with new structure */}
          <div className="flex flex-col p-4 bg-white/10 backdrop-blur-sm rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            {/* Stars only on top */}
            <div className="flex justify-center mb-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={24} className="text-gold mx-0.5" fill="#ffb000" />
              ))}
            </div>
            
            {/* Profile images with count underneath */}
            <div className="flex flex-col items-center">
              <div className="flex -space-x-3 mb-2">
                <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-300">
                  <AvatarImage src="/lovable-uploads/41b5f8af-c47a-47e5-9f10-d5b72e0177d0.png" alt="Profile A" />
                  <AvatarFallback className="bg-brand-light text-white">A</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-300">
                  <AvatarImage src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=150&q=80" alt="Profile B" />
                  <AvatarFallback className="bg-brand-light text-white">B</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-300">
                  <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=150&q=80" alt="Profile C" />
                  <AvatarFallback className="bg-brand-light text-white">C</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white w-10 h-10 hover:scale-110 transition-transform duration-300">
                  <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=150&q=80" alt="Profile D" />
                  <AvatarFallback className="bg-brand-light text-white">D</AvatarFallback>
                </Avatar>
              </div>
              
              <span className="text-center text-white font-medium">
                726+ Happy Investors
              </span>
            </div>
          </div>
        </div>

        {/* Image/Visualization - Made larger */}
        <div className={`w-full lg:w-3/5 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
          <div className="relative">
            <div className="glass-card rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-[1.02] transition-transform duration-500">
              <img 
                src="/lovable-uploads/a7b15b9b-bbc3-49d8-8e32-674b3c0614f4.png" 
                alt="Father and son saving money together" 
                className="w-full h-auto rounded-xl object-cover"
                style={{ maxHeight: "500px" }}  /* Increased the height */
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#104741]/60 to-transparent rounded-xl"></div>
              
              {/* Floating stat cards */}
              <div className="absolute top-10 -left-5 glass-card p-3 px-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <TrendingUp size={16} className="text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Monthly Returns</p>
                    <p className="text-sm font-bold text-gray-900">8-10% ROI</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-16 -right-5 glass-card p-3 px-4 shadow-lg" style={{ animationDelay: '1s' }}>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto translate-y-[150px] lg:translate-y-[180px]">
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
