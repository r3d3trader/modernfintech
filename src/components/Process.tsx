
import { useState, useEffect, useRef } from 'react';
import { List, FormInput, TrendingUp } from 'lucide-react';

const Process = () => {
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

  const steps = [
    {
      icon: <List size={32} className="text-brand" />,
      title: "Choose a Plan",
      description: "Explore Starter, Pro, or Elite plans to match your goals and investment capacity."
    },
    {
      icon: <FormInput size={32} className="text-gold" />,
      title: "Fill In Details and Fund Plan",
      description: "Complete a quick form, fund your account, and secure your funds in the Escrow Vault."
    },
    {
      icon: <TrendingUp size={32} className="text-green-600" />,
      title: "Watch Your Wealth Grow",
      description: "Enjoy monthly returns with 24/7 dashboard access. Withdraw anytime after 30 days."
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-white" id="process">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Simple 3-Step Process
          </h5>
          <h2 className="section-title">
            How UReturns <span className="gradient-text">Works For You</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Getting started with UReturns is simple, transparent, and designed with your convenience in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-brand text-white flex items-center justify-center text-xl font-bold">
                {index + 1}
              </div>
              
              {/* Step content */}
              <div className="glass-card p-8 pt-10">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center">{step.description}</p>
              </div>
              
              {/* Connector (not for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-5 w-10 h-2 bg-brand/20 transform translate-x-0 -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
