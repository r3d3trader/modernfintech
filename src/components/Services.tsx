
import { useState, useEffect, useRef } from 'react';
import { ChartLine, ShieldCheck, BarChart3 } from 'lucide-react';
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

  const services = [
    {
      icon: <ChartLine size={32} className="text-brand" />,
      title: "Portfolio Management",
      description: "AI-optimized trades for maximum growth with real-time adjustments based on market conditions."
    },
    {
      icon: <ShieldCheck size={32} className="text-gold" />,
      title: "Account Management",
      description: "Personalized oversight aligned with your financial goals and risk tolerance."
    },
    {
      icon: <BarChart3 size={32} className="text-green-600" />,
      title: "Fund Management",
      description: "Proactive strategies for sustainable long-term growth with capital preservation."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white" id="services">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 animate-pulse">
            Our Services
          </h5>
          <h2 className="section-title">
            Your Wealth, <span className="gradient-text">Our Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Experience comprehensive financial management through our suite of specialized services designed to maximize your returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`glass-card text-center p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'} hover:shadow-xl transition-shadow duration-300 transform hover:scale-105 transition-transform duration-500`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link 
                to="/services" 
                className="text-brand font-medium flex items-center justify-center hover:text-brand-dark transition-colors group"
              >
                Learn More
                <svg className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
