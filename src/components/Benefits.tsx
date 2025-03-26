
import { useState, useEffect, useRef } from 'react';
import { TrendingUp, ShieldCheck, Clock } from 'lucide-react';

const Benefits = () => {
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

  const benefits = [
    {
      icon: <TrendingUp size={32} className="text-green-500" />,
      title: "Predictable Returns",
      description: "Earn 2-10% monthly ROI, guaranteed. No more guesswork. Our Pro and Elite plans deliver steady growth tailored to your risk appetite."
    },
    {
      icon: <ShieldCheck size={32} className="text-brand" />,
      title: "Bulletproof Security",
      description: "Your capital stays safe, always. Funds are held in a regulated Escrow Vault—we don't touch them until you withdraw."
    },
    {
      icon: <Clock size={32} className="text-blue-500" />,
      title: "Instant Liquidity",
      description: "Access returns in 30 days. No lock-ins. Withdraw profits or reinvest effortlessly."
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-gradient-to-b from-white to-secondary/30" id="benefits">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Key Benefits
          </h5>
          <h2 className="section-title">
            Why Investors <span className="gradient-text">Choose UReturns</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Experience a revolutionary approach to investing with benefits designed for modern investors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`flex flex-col items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3 text-center">{benefit.title}</h3>
              <p className="text-gray-600 text-center">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
