
import { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
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

  const plans = [
    {
      name: "Starter",
      description: "Perfect for beginning investors",
      price: "$5,000",
      roi: "3%",
      features: [
        "Monthly ROI: 3%",
        "Withdrawal after 30 days",
        "Basic performance reports",
        "Email support",
        "Free Escrow Vault (1 month)"
      ],
      popular: false
    },
    {
      name: "Growth",
      description: "Ideal for serious investors",
      price: "$25,000",
      roi: "6%",
      features: [
        "Monthly ROI: 6%",
        "Withdrawal after 30 days",
        "Detailed performance analytics",
        "Priority email & phone support",
        "Free Escrow Vault (3 months)",
        "Personalized investment strategy"
      ],
      popular: true
    },
    {
      name: "Elite",
      description: "For experienced investors",
      price: "$50,000",
      roi: "10%",
      features: [
        "Monthly ROI: 10%",
        "Withdrawal anytime",
        "Advanced performance analytics",
        "24/7 dedicated account manager",
        "Free Escrow Vault (lifetime)",
        "Custom investment strategy",
        "Exclusive investment opportunities"
      ],
      popular: false
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Investment Plans
          </h5>
          <h2 className="section-title">
            Choose Your <span className="gradient-text">Investment Path</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Select the investment plan that aligns with your financial goals, risk tolerance, and capital availability.
            All plans include our proprietary AI-driven trading technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`glass-card relative p-8 ${plan.popular ? 'border-gold ring-2 ring-gold/20' : ''} 
              ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gold text-white text-sm font-medium px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-brand-dark mb-2">{plan.name}</h3>
                <p className="text-gray-500 mb-4">{plan.description}</p>
                <div className="flex justify-center items-baseline mb-2">
                  <span className="text-3xl font-bold text-brand-dark">{plan.price}</span>
                  <span className="text-gray-500 ml-1">minimum</span>
                </div>
                <div className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  {plan.roi} Monthly ROI
                </div>
              </div>
              
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check size={18} className="text-green-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center justify-center w-full py-3 rounded-md font-medium transition-all ${
                    plan.popular 
                      ? 'bg-gold hover:bg-gold-light text-brand-dark' 
                      : 'bg-brand/10 hover:bg-brand/20 text-brand'
                  }`}
                >
                  Get Started
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
