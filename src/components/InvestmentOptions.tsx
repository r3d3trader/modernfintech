
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Rocket, Target, Crown, Computer, ArrowRight, Clock, Shield, DollarSign } from 'lucide-react';

const InvestmentOptions = () => {
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
      icon: <Rocket size={28} className="text-brand" />,
      name: "Starter Plan",
      roi: "2-4%",
      duration: "over three months",
      features: [
        "Portfolio management",
        "Daily market updates",
        "Email support",
        "Access to basic trading tools"
      ],
      color: "from-brand/10 to-brand/5",
      buttonClass: "border-brand text-brand hover:bg-brand/10"
    },
    {
      icon: <Target size={28} className="text-gold" />,
      name: "Pro Plan",
      roi: "5-7%",
      duration: "over six months",
      features: [
        "All Starter Plan features",
        "Dedicated account manager",
        "Priority support",
        "Advanced trading tools"
      ],
      color: "from-gold/20 to-gold/5",
      buttonClass: "bg-gold hover:bg-gold-light text-brand-dark",
      featured: true
    },
    {
      icon: <Crown size={28} className="text-purple-500" />,
      name: "Elite Plan",
      roi: "8-10%",
      duration: "per month",
      features: [
        "All Pro Plan features",
        "VIP account management",
        "24/7 priority support",
        "Exclusive trading opportunities",
        "Comprehensive wealth advisory"
      ],
      color: "from-purple-500/20 to-purple-500/5",
      buttonClass: "border-purple-500 text-purple-500 hover:bg-purple-500/10"
    }
  ];

  const features = [
    {
      icon: <Clock size={24} className="text-brand" />,
      title: "Quick Access",
      description: "Withdraw your returns after just 30 calendar days."
    },
    {
      icon: <Shield size={24} className="text-gold" />,
      title: "Capital Protection",
      description: "Complimentary Escrow Vault service for secure fund management."
    },
    {
      icon: <DollarSign size={24} className="text-green-600" />,
      title: "Money-Back Guarantee",
      description: "Enjoy a 60-day money-back guarantee for added peace of mind."
    }
  ];

  const technologies = [
    {
      name: "High-Frequency Trading (HFT)",
      description: "Execute transactions in microseconds, capturing market opportunities most human traders miss."
    },
    {
      name: "Quantitative Trading",
      description: "Mathematical models identify optimal entry and exit points based on statistical analysis."
    },
    {
      name: "Algorithmic Trading",
      description: "Automated strategies execute trades based on predefined rules, eliminating emotional decisions."
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-white relative overflow-hidden" id="investment-options">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full -ml-48 -mb-48"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 animate-pulse">
            Investment Plans
          </h5>
          <h2 className="section-title">
            Smart Investment <span className="gradient-text">Options</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We redefine investment strategies for today's fast-paced market. Unlike traditional methods that require years to see growth, 
            we actively trade in the stock market daily to enhance your investment potential.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative rounded-xl overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'} ${plan.featured ? 'transform md:-translate-y-4' : ''}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.featured && (
                <div className="absolute top-0 left-0 w-full bg-gold text-brand-dark text-center py-1.5 font-semibold text-sm">
                  Most Popular
                </div>
              )}
              <div className={`glass-card p-8 h-full bg-gradient-to-br ${plan.color} ${plan.featured ? 'pt-12 border-2 border-gold' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark">{plan.name}</h3>
                </div>
                
                <div className="mb-6">
                  <span className="text-3xl font-bold text-brand-dark">{plan.roi}</span>
                  <span className="text-gray-600 ml-1">{plan.duration}</span>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="text-green-500 mr-2 mt-1">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="8" cy="8" r="8" fill="currentColor" fillOpacity="0.2"/>
                          <path d="M5.5 8.5L7 10L10.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className={`inline-flex items-center justify-center w-full py-3 px-6 rounded-md font-medium transition-all duration-300 ${plan.buttonClass} hover:scale-[1.02]`}
                >
                  Get Started
                  <ChevronRight size={16} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Investment details */}
        <div className="glass-card p-8 md:p-10 mb-20 bg-gradient-to-r from-brand/5 to-transparent">
          <h3 className="text-2xl font-bold text-brand-dark mb-6">Investment Details</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-brand-dark mb-2">Minimum Investment</span>
              <span className="text-2xl font-bold text-brand">$3,000 USD</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-brand-dark mb-2">Maximum Investment</span>
              <span className="text-2xl font-bold text-brand">$100,000 USD</span>
              <span className="text-sm text-gray-500 mt-1">Due to escrow service limitations</span>
            </div>
            
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-brand-dark mb-2">Escrow Vault</span>
              <span className="text-brand">First month free</span>
              <span className="text-sm text-gray-500 mt-1">From second month, fee covered by your investment</span>
            </div>
          </div>
        </div>

        {/* Services and Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Services */}
          <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Comprehensive Services</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 6H3C2.44772 6 2 6.44772 2 7V17C2 17.5523 2.44772 18 3 18H21C21.5523 18 22 17.5523 22 17V7C22 6.44772 21.5523 6 21 6Z" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 14C17.1046 14 18 13.1046 18 12C18 10.8954 17.1046 10 16 10C14.8954 10 14 10.8954 14 12C14 13.1046 14.8954 14 16 14Z" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 10L6 14" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 10V14" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-brand-dark mb-1">Portfolio Management</h4>
                  <p className="text-gray-600">Active management of your investment portfolio based on market conditions</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H8" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 2H9C8.44772 2 8 2.44772 8 3V5C8 5.55228 8.44772 6 9 6H15C15.5523 6 16 5.55228 16 5V3C16 2.44772 15.5523 2 15 2Z" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11H16" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16H16" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11H8.01" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 16H8.01" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-brand-dark mb-1">Account Management</h4>
                  <p className="text-gray-600">Personalized service to align your investments with your financial goals</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9H20" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 15H20" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 3L8 21" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 3L14 21" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-brand-dark mb-1">Brokerage Services</h4>
                  <p className="text-gray-600">Access to professional trading platforms and expert market insights</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17L12 22L22 17" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12L12 17L22 12" stroke="#006d5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-brand-dark mb-1">Wealth Management</h4>
                  <p className="text-gray-600">Comprehensive financial planning to help you build and preserve wealth</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Technology */}
          <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="flex items-center mb-6">
              <h3 className="text-2xl font-bold text-brand-dark">Cutting-Edge Technology</h3>
              <div className="ml-4 bg-brand/10 p-1 rounded-full">
                <Computer size={20} className="text-brand" />
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              We utilize modern technologies such as AI and supercomputers to execute trades with precision and speed.
              Our strategies have been rigorously backtested over the past decade across various markets.
            </p>
            
            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="glass-card p-5 transform transition-transform duration-300 hover:scale-[1.02]">
                  <h4 className="text-lg font-semibold text-brand-dark mb-2">{tech.name}</h4>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Key features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`glass-card p-6 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link 
            to="/contact" 
            className="btn-primary inline-flex items-center group animate-pulse px-8 py-4"
          >
            Start Your Investment Journey
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="text-gray-500 mt-4 text-sm">
            Join us today and experience a smarter approach to investing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestmentOptions;
