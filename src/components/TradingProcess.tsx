
import { useState, useEffect, useRef } from 'react';
import { Cpu, Brain, Users } from 'lucide-react';

const TradingProcess = () => {
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
    <section ref={sectionRef} className="section bg-white" id="trading-process">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Our Technology
          </h5>
          <h2 className="section-title">
            Precision Trading Powered by <span className="gradient-text">Technology and Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            We combine cutting-edge technology with human expertise to deliver consistent, 
            market-beating returns regardless of market conditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Supercomputers */}
          <div 
            className={`glass-card p-8 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.1s' }}
          >
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
              <Cpu size={32} className="text-brand" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">Supercomputers</h3>
            <p className="text-gray-600 mb-4">
              Execute trades at lightning speed for maximum efficiency, processing millions of data points in milliseconds.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>100+ trades executed daily</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>Microsecond execution speeds</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>24/7 market monitoring</span>
              </li>
            </ul>
          </div>
          
          {/* AI Algorithms */}
          <div 
            className={`glass-card p-8 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
              <Brain size={32} className="text-brand" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">AI Algorithms</h3>
            <p className="text-gray-600 mb-4">
              Analyze millions of data points to identify patterns and make smarter trading decisions in real-time.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>Predictive market analysis</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>Risk assessment optimization</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>Self-improving algorithms</span>
              </li>
            </ul>
          </div>
          
          {/* Human Traders */}
          <div 
            className={`glass-card p-8 text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
            style={{ animationDelay: '0.3s' }}
          >
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
              <Users size={32} className="text-brand" />
            </div>
            <h3 className="text-xl font-bold text-brand-dark mb-4">Human Traders</h3>
            <p className="text-gray-600 mb-4">
              Seasoned professionals oversee strategies to adapt to market shifts and unexpected events.
            </p>
            <ul className="text-left space-y-2">
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>Decades of market experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>Strategic oversight and adjustments</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand mr-2">•</span>
                <span>Risk management specialists</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 glass-card p-8 bg-brand/5">
          <h3 className="text-xl font-bold text-brand-dark mb-4">Why UReturns Outperforms:</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <div className="bg-brand text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">1</div>
              <div>
                <p className="text-gray-700 font-medium">Our cutting-edge AI algorithms analyze market trends in real-time, identifying opportunities faster than traditional brokers.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-brand text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">2</div>
              <div>
                <p className="text-gray-700 font-medium">Supercomputers execute 100+ trades daily, ensuring precision and speed that humans alone can't match.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-brand text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">3</div>
              <div>
                <p className="text-gray-700 font-medium">Human expertise ensures adaptability, blending technology with decades of trading experience to navigate volatile markets.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TradingProcess;
