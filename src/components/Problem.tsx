
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
      icon: <TrendingDown size={24} className="text-red-500" />,
      title: "Low Market Returns",
      description: "Traditional investments often provide minimal returns, especially in today's economic climate.",
    },
    {
      icon: <Clock size={24} className="text-amber-500" />,
      title: "Long Lock-up Periods",
      description: "Many investment options tie up your capital for years with penalties for early withdrawal.",
    },
    {
      icon: <DollarSign size={24} className="text-purple-500" />,
      title: "High Management Fees",
      description: "Investment managers typically charge 1-2% annual fees plus performance fees, eroding your returns.",
    },
    {
      icon: <AlertTriangle size={24} className="text-orange-500" />,
      title: "Lack of Transparency",
      description: "Most funds provide limited visibility into how your money is being managed or performing.",
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-white" id="problem">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            The Problem
          </h5>
          <h2 className="section-title">
            Why Traditional Investments <span className="gradient-text">Fall Short</span>
          </h2>
          <p className="section-subtitle mx-auto">
            The financial landscape presents significant challenges for investors seeking reliable growth 
            and capital security in today's market conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className={`glass-card p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
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
