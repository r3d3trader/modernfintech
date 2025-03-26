
import { useState, useEffect, useRef } from 'react';
import { Check, X } from 'lucide-react';

const Features = () => {
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

  const comparisonItems = [
    {
      feature: "Fees",
      ureturns: "0% – No hidden charges, ever.",
      traditional: "1-3%+ in fees, eating into your profits."
    },
    {
      feature: "Access to Returns",
      ureturns: "Withdraw in 30 days – Fast and flexible.",
      traditional: "Locked-in for years – No liquidity."
    },
    {
      feature: "Expected Returns",
      ureturns: "2-10% monthly ROI (Starter: 2-4%, Pro: 5-7%, Elite: 8-10%).",
      traditional: "2-5% annually – Slow and unpredictable."
    },
    {
      feature: "Risk Management",
      ureturns: "AI-driven, real-time adjustments.",
      traditional: "Manual, reactive strategies."
    },
    {
      feature: "Capital Protection",
      ureturns: "Regulated Escrow Vault included.",
      traditional: "Self-managed, no guarantees."
    },
    {
      feature: "Trading Technology",
      ureturns: "Supercomputers + AI algorithms + human expertise.",
      traditional: "Basic tools, no advanced tech."
    },
    {
      feature: "Transparency",
      ureturns: "Fully audited strategies, clear reporting.",
      traditional: "Opaque processes, lack of clarity."
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-white" id="features">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Why Choose Us
          </h5>
          <h2 className="section-title">
            UReturns vs. Traditional Investing: <span className="gradient-text">The Smarter Choice</span>
          </h2>
          <p className="section-subtitle mx-auto">
            See how our innovative approach transforms your investment experience compared to outdated traditional methods.
          </p>
        </div>

        <div className={`glass-card overflow-hidden rounded-xl shadow-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-brand text-white">
            <div className="p-5 font-semibold">Feature</div>
            <div className="p-5 font-semibold text-center border-l border-white/20">UReturns</div>
            <div className="p-5 font-semibold text-center border-l border-white/20">Traditional Investing</div>
          </div>
          
          {/* Table Body */}
          {comparisonItems.map((item, index) => (
            <div key={index} className={`grid grid-cols-3 border-t border-gray-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
              <div className="p-5 font-medium text-gray-700">{item.feature}</div>
              <div className="p-5 border-l border-gray-200 flex items-center justify-center">
                <div className="flex items-start">
                  <Check size={20} className="text-green-600 mr-2 flex-shrink-0 mt-1" />
                  <span>{item.ureturns}</span>
                </div>
              </div>
              <div className="p-5 border-l border-gray-200 flex items-center justify-center">
                <div className="flex items-start">
                  <X size={20} className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{item.traditional}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 p-6 bg-brand/5 rounded-lg">
          <h3 className="text-xl font-bold text-brand-dark mb-4">Expected Returns Explained:</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check size={20} className="text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>Our <strong>Starter Plan</strong> is perfect for beginners, offering steady 2-4% monthly returns with minimal risk.</span>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>The <strong>Pro Plan</strong> targets moderate growth, delivering 5-7% monthly returns for intermediate investors.</span>
            </li>
            <li className="flex items-start">
              <Check size={20} className="text-green-600 mr-2 flex-shrink-0 mt-1" />
              <span>For those seeking maximum growth, the <strong>Elite Plan</strong> offers aggressive 8-10% monthly returns through active, AI-driven trading strategies.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
