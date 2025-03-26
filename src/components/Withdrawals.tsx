
import { useState, useEffect, useRef } from 'react';
import { Calendar, Wallet, CreditCard, Bitcoin } from 'lucide-react';

const Withdrawals = () => {
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

  return (
    <section ref={sectionRef} className="section bg-white" id="withdrawals">
      <div className="container-custom">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Image/Visualization Side */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-auto glass-card p-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Easy Withdrawals"
                  className="w-full h-auto rounded-lg object-cover shadow-inner"
                />
                
                {/* Stats overlay */}
                <div className="absolute top-10 left-10 glass-card p-4 animate-float">
                  <div className="flex items-center gap-3">
                    <Calendar size={24} className="text-brand" />
                    <div>
                      <p className="text-xs text-gray-500">Withdrawal Timeframe</p>
                      <p className="text-sm font-bold text-gray-900">As little as 30 days</p>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-10 right-10 glass-card p-4 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <Wallet size={24} className="text-gold" />
                    <div>
                      <p className="text-xs text-gray-500">Withdrawal Methods</p>
                      <p className="text-sm font-bold text-gray-900">Multiple Options</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Easy Access
            </h5>
            <h2 className="section-title mb-6">
              Effortless Withdrawals, <span className="gradient-text">Anytime You Want</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Unlike traditional investments that lock your money for years, UReturns gives you 
              complete flexibility with your funds. Withdraw on your schedule, not ours.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Calendar size={24} className="text-brand" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-brand-dark mb-1">30-Day Access</h3>
                  <p className="text-gray-600">Withdraw your earnings in as little as 30 days. No penalties or lock-ins—your money, your rules.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <CreditCard size={24} className="text-brand" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-brand-dark mb-1">Bank Transfers</h3>
                  <p className="text-gray-600">Receive your funds directly to your bank account with our secure transfer system.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                  <Bitcoin size={24} className="text-brand" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-brand-dark mb-1">Crypto Options</h3>
                  <p className="text-gray-600">Crypto withdrawals available for added flexibility and faster processing times.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Withdrawals;
