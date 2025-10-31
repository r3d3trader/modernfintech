
import { useState, useEffect, useRef } from 'react';
import { TrendingDown, Clock, DollarSign, AlertTriangle } from 'lucide-react';

const Problem = () => {
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

  const problems = [
    {
      icon: <DollarSign size={24} className="text-red-500" />,
      title: "High Fees Killed Profits",
      description: "Brokers and platforms ate into your returns, leaving you with minimal gains despite market success.",
    },
    {
      icon: <TrendingDown size={24} className="text-amber-500" />,
      title: "Passive Investments Flopped",
      description: "\"Buy and hold\" left you waiting years for mediocre gains while opportunities passed you by.",
    },
    {
      icon: <AlertTriangle size={24} className="text-purple-500" />,
      title: "Complex Tools Overwhelmed You",
      description: "Trading apps felt like rocket science, not investing, making it hard to take control of your finances.",
    },
    {
      icon: <Clock size={24} className="text-orange-500" />,
      title: "Locked-Up Capital",
      description: "Traditional investments tie up your money for years with hefty penalties for early withdrawal.",
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white relative" id="problem">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%">
          <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="#104741" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            The Problem
          </h5>
          <h2 className="section-title">
            Tired of Playing Safe? <span className="gradient-text">You're Not Alone.</span>
          </h2>
          <p className="section-subtitle mx-auto">
            You deserve better. Let's rewrite your story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`glass-card p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'} transform hover:scale-[1.03] transition-transform duration-300`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-start">
                <div className="icon-wrapper">{problem.icon}</div>
                <div className="ml-5">
                  <h3 className="text-xl font-semibold text-brand-dark mb-2">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
