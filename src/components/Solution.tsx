
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
      title: "Consistent Monthly Returns",
      description: "Our AI-driven algorithms generate 3-10% monthly ROI through sophisticated trading strategies.",
    },
    {
      icon: <Shield size={24} className="text-brand" />,
      title: "Escrow Vault Protection",
      description: "Your capital is secured in our proprietary Escrow Vault system, providing protection and peace of mind.",
    },
    {
      icon: <Timer size={24} className="text-blue-500" />,
      title: "30-Day Access to Funds",
      description: "Quick access to your investments with withdrawals available after just 30 days, not years.",
    },
    {
      icon: <LineChart size={24} className="text-purple-500" />,
      title: "Transparent Performance",
      description: "Real-time performance tracking and detailed reporting for complete investment transparency.",
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-gradient-to-b from-white to-secondary/30" id="solution">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left Content */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Our Solution
            </h5>
            <h2 className="section-title mb-6">
              AI-Driven Trading <span className="gradient-text">With Capital Protection</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              UReturns combines cutting-edge algorithmic trading with strong security measures 
              to deliver consistent returns while protecting your investment capital.
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
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 glass-card p-4 animate-float">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Average Monthly Return</p>
                    <p className="text-xl font-bold text-green-600">+5.8%</p>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 glass-card p-4 animate-float" style={{ animationDelay: '1.5s' }}>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">Success Rate</p>
                    <p className="text-xl font-bold text-brand">98.2%</p>
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
