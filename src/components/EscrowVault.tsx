
import { useState, useEffect, useRef } from 'react';
import { Shield, LockKeyhole, BadgeCheck } from 'lucide-react';

const EscrowVault = () => {
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
    <section ref={sectionRef} className="section bg-gradient-to-b from-white to-secondary/30" id="escrow-vault">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 animate-pulse">
              Capital Protection
            </h5>
            <h2 className="section-title mb-6">
              Your Capital, <span className="gradient-text">Fully Protected</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Our proprietary Escrow Vault system provides an unmatched level of security for your investment capital. 
              We've eliminated the trust barrier that exists with traditional investments.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Shield size={24} className="text-brand" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-brand-dark mb-1">Regulated Security</h3>
                  <p className="text-gray-600">Funds are securely stored in a regulated Escrow Vault with bank-level encryption and security protocols.</p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 animate-pulse" style={{ animationDelay: '0.5s' }}>
                  <LockKeyhole size={24} className="text-brand" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-brand-dark mb-1">Untouchable Capital</h3>
                  <p className="text-gray-600">Your principal investment remains untouched until you decide to withdraw, creating a true safety net.</p>
                </div>
              </div>
              
              <div className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
                <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0 animate-pulse" style={{ animationDelay: '1s' }}>
                  <BadgeCheck size={24} className="text-brand" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-brand-dark mb-1">60-Day Guarantee</h3>
                  <p className="text-gray-600">Our 60-day money-back guarantee gives you complete peace of mind when investing with UReturns.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image/Visualization Side */}
          <div className={`w-full lg:w-1/2 ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
            <div className="relative">
              <div className="w-full h-auto glass-card p-4 overflow-hidden transform hover:scale-[1.02] transition-transform duration-500 hover:shadow-xl">
                <img 
                  src="/lovable-uploads/0fbb8e87-e78a-4741-bb21-4ba9de43ced9.png" 
                  alt="Escrow Vault Security" 
                  className="w-full h-auto rounded-lg object-cover shadow-inner"
                />
                
                <div className="absolute inset-0 bg-gradient-to-br from-brand/30 to-transparent rounded-lg flex items-center justify-center">
                  <div className="glass-card p-6 text-center max-w-xs animate-float">
                    <Shield size={48} className="text-brand mb-4 mx-auto" />
                    <h3 className="text-xl font-bold text-brand-dark mb-2">Escrow Vault Protected</h3>
                    <p className="text-gray-700">Your investment is secured by our proprietary protection system</p>
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

export default EscrowVault;
