
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, Shield, Timer, LineChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solution = () => {
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

  const solutions = [
    {
      icon: <TrendingUp size={24} className="text-green-500" />,
      title: "AI-Driven Trading",
      description: "Our algorithms analyze market trends in real-time, identifying opportunities faster than traditional brokers.",
    },
    {
      icon: <Shield size={24} className="text-brand" />,
      title: "Escrow Vault Protection",
      description: "Your funds are securely held in our proprietary Escrow Vault, providing unmatched protection and peace of mind.",
    },
    {
      icon: <Timer size={24} className="text-blue-500" />,
      title: "30-Day Access to Funds",
      description: "Quick access to your investments with withdrawals available after just 30 days, not years.",
    },
    {
      icon: <LineChart size={24} className="text-purple-500" />,
      title: "60-Day Money-Back Guarantee",
      description: "We stand by our promises with a comprehensive 60-day money-back guarantee for complete peace of mind.",
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-secondary/30 relative" id="solution">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
              <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: '#333', strokeWidth: 1 }} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Our Solution
            </h5>
            <h2 className="section-title mb-6">
              We Built UReturns for You— <span className="gradient-text">The Smart, Secure Way to Grow Wealth.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Traditional investing is broken. Hidden fees, slow growth, and zero transparency? We fixed it.
              Backed by a decade of AI-driven trading data and a UK-registered team of financial scientists, 
              we execute 100+ tactical trades daily to maximize your returns—while you sleep.
            </p>
            
            <p className="text-lg text-gray-700 font-medium mb-8">
              Your Trust Matters: Your funds are shielded in our Escrow Vault, and we guarantee 
              results with a 60-day money-back promise. No risks, just rewards.
            </p>

            <div className="space-y-6 mb-8">
              {solutions.map((solution, index) => (
                <div key={index} className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center flex-shrink-0">
                    {solution.icon}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-dark mb-1">{solution.title}</h3>
                    <p className="text-gray-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link to="/services" className="btn-primary inline-flex">
              Explore Investment Plans
            </Link>
          </div>

          {/* Right Image/Illustration */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-auto glass-card p-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000" 
                  alt="AI Trading Dashboard"
                  className="w-full h-auto rounded-lg object-cover shadow-inner"
                />
                
                {/* Stats overlay */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 glass-card p-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Average Monthly Return</p>
                    <p className="text-xl font-bold text-green-600">+8.5%</p>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 glass-card p-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Success Rate</p>
                    <p className="text-xl font-bold text-brand">98.7%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;
