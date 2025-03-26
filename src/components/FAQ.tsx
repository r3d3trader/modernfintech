
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

  const faqItems = [
    {
      question: "Is my money safe?",
      answer: "Yes! Funds are held in a regulated Escrow Vault—we never touch them directly. This provides an extra layer of security and ensures your capital is protected at all times."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 60-day money-back guarantee—no questions asked. If you're not completely satisfied with our service, we'll refund your investment in full."
    },
    {
      question: "Do I need experience?",
      answer: "No! Our experts manage everything. Just choose a plan that matches your investment goals and risk tolerance, and our team will handle the rest."
    },
    {
      question: "How soon can I withdraw?",
      answer: "After 30 days. There are no penalties or lock-ins, giving you the flexibility to access your funds when you need them."
    },
    {
      question: "Are you regulated?",
      answer: "UReturns is a UK-registered entity (Company #826917) with audited strategies. While we operate within all legal frameworks, we specifically structure our services to provide maximum returns without the limitations often imposed by traditional financial regulations."
    },
    {
      question: "Can I customize my plan?",
      answer: "Yes! High-net-worth clients get bespoke strategies tailored to their specific financial goals, risk tolerance, and investment horizon."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="section bg-gradient-to-b from-white to-secondary/30" id="faq">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Common Questions
          </h5>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Find answers to the most common questions about UReturns and our investment approach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`mb-4 glass-card rounded-lg overflow-hidden transition-all duration-300 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <h3 className="text-lg font-semibold text-brand-dark">{item.question}</h3>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-brand flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-brand flex-shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0 text-gray-600 border-t border-gray-100">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
