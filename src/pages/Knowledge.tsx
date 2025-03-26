
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Search, BookOpen, FileText, HelpCircle, ChevronRight, ChevronDown } from 'lucide-react';

const Knowledge = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const articles = [
    {
      title: "How UReturns AI Trading Works",
      category: "Guides",
      excerpt: "Learn about the algorithms and strategies that power our trading platform.",
      icon: <BookOpen size={18} className="text-brand" />
    },
    {
      title: "Understanding the Escrow Vault",
      category: "Guides",
      excerpt: "A detailed explanation of how our Escrow Vault protects your investment.",
      icon: <BookOpen size={18} className="text-brand" />
    },
    {
      title: "Monthly ROI Calculations",
      category: "Tutorials",
      excerpt: "How we calculate and distribute monthly returns to investors.",
      icon: <FileText size={18} className="text-blue-500" />
    },
    {
      title: "Withdrawal Process Explained",
      category: "Tutorials",
      excerpt: "Step-by-step guide to withdrawing funds from your UReturns account.",
      icon: <FileText size={18} className="text-blue-500" />
    },
    {
      title: "Investment Risk Management",
      category: "Articles",
      excerpt: "How we mitigate risks and protect investments in volatile markets.",
      icon: <FileText size={18} className="text-purple-500" />
    },
    {
      title: "Getting Started with UReturns",
      category: "Guides",
      excerpt: "Complete guide for new investors to set up and fund their account.",
      icon: <BookOpen size={18} className="text-brand" />
    }
  ];

  const faqs = [
    {
      question: "What is the minimum investment amount?",
      answer: "The minimum investment amount is $5,000. This allows us to effectively implement our trading strategies while providing access to a wide range of investors."
    },
    {
      question: "How do I withdraw my funds?",
      answer: "You can request a withdrawal through your account dashboard. Funds are typically processed within 1-3 business days. Standard plans allow withdrawals after 30 days, while Elite plan members can withdraw anytime."
    },
    {
      question: "Is my investment secure?",
      answer: "Yes, your investment capital is secured through our proprietary Escrow Vault system, which isolates your principal from trading activities. Additionally, we offer a 60-day money-back guarantee for new investors."
    },
    {
      question: "How are returns calculated and distributed?",
      answer: "Returns are calculated monthly based on the performance of our trading algorithms. The monthly ROI ranges from 3-10% depending on your investment plan. Returns are added to your account and can be withdrawn according to your plan terms."
    },
    {
      question: "Can I upgrade my investment plan?",
      answer: "Yes, you can upgrade your investment plan at any time by increasing your investment amount to meet the minimum threshold of the higher tier plan. Contact your account manager to initiate the upgrade process."
    }
  ];

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container-custom text-center">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 animate-fade-in">
            Knowledge Base
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 animate-fade-in">
            Learn and Grow
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
            Explore our comprehensive resources to better understand algorithmic trading, 
            investment strategies, and how to maximize your returns with UReturns.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative animate-fade-in">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search articles, guides, FAQs..." 
                className="w-full px-5 py-4 pr-12 rounded-lg border border-gray-200 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
              />
              <Search size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Resources
            </h5>
            <h2 className="section-title">
              Popular <span className="gradient-text">Articles</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Explore our most-read guides, tutorials, and articles to deepen your understanding 
              of algorithmic trading and investment strategies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div 
                key={index}
                className="glass-card p-6 flex flex-col h-full animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    {article.icon}
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-500">{article.category}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-brand-dark mb-3">{article.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{article.excerpt}</p>
                
                <a href="#" className="flex items-center text-brand font-medium hover:underline mt-auto">
                  Read More
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="#" className="btn-secondary inline-flex items-center">
              View All Articles
              <ChevronRight size={18} className="ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Frequently Asked Questions
            </h5>
            <h2 className="section-title">
              Common <span className="gradient-text">Queries</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Find answers to the most common questions about UReturns, our investment plans, 
              and trading strategies.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="glass-card mb-4 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-brand-dark">{faq.question}</h3>
                  {openFaq === index ? (
                    <ChevronDown size={20} className="text-brand" />
                  ) : (
                    <ChevronRight size={20} className="text-brand" />
                  )}
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4 animate-fade-in">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Don't see the answer you're looking for?
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center">
              Ask Us Anything
              <HelpCircle size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Browse By Category
            </h5>
            <h2 className="section-title">
              Knowledge <span className="gradient-text">Categories</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Explore our resources by category to find exactly what you're looking for.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mx-auto mb-6">
                <BookOpen size={28} className="text-brand" />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Guides</h3>
              <p className="text-gray-600 mb-6">
                Step-by-step instructions and comprehensive guides to help you navigate our platform.
              </p>
              <a href="#" className="text-brand font-medium hover:underline">
                View Guides
              </a>
            </div>
            
            <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-6">
                <FileText size={28} className="text-blue-500" />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Tutorials</h3>
              <p className="text-gray-600 mb-6">
                Visual demonstrations and tutorials on using UReturns features and services.
              </p>
              <a href="#" className="text-brand font-medium hover:underline">
                View Tutorials
              </a>
            </div>
            
            <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-6">
                <HelpCircle size={28} className="text-purple-500" />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">FAQs</h3>
              <p className="text-gray-600 mb-6">
                Quick answers to commonly asked questions about investments, returns, and security.
              </p>
              <a href="#" className="text-brand font-medium hover:underline">
                View FAQs
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Knowledge;
