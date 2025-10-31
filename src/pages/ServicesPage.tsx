
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Services from '../components/Services';
import InvestmentOptions from '../components/InvestmentOptions';
import { Shield, Lock, CreditCard, BarChart4, Goal, History } from 'lucide-react';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-medium to-white">
        <div className="container-custom text-center">
          <h5 className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4 animate-fade-in">
            Our Services
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            How We Serve You
          </h1>
          <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in">
            UReturns provides a range of investment services designed to generate consistent returns 
            while ensuring the security of your capital.
          </p>
        </div>
      </section>

      {/* Investment Plans Section */}
      <InvestmentOptions />

      {/* Services Section */}
      <Services />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Key Features
            </h5>
            <h2 className="section-title">
              What Makes Us <span className="gradient-text">Different</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Our platform combines advanced technology with robust security measures to provide 
              a superior investment experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <BarChart4 size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">AI Trading</h3>
              <p className="text-gray-600">
                Our proprietary algorithms analyze market data in real-time to execute trades with 
                precision and speed beyond human capabilities.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Escrow Vault</h3>
              <p className="text-gray-600">
                Your capital is protected in our secure Escrow Vault, adding an additional layer of 
                security to your investments.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <History size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Quick Access</h3>
              <p className="text-gray-600">
                Unlike traditional investments with long lock-up periods, you can access your funds 
                after just 30 days.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.45s' }}>
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <Goal size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Predictable Returns</h3>
              <p className="text-gray-600">
                Our structured investment plans offer clear monthly ROI targets, helping you plan 
                your financial future with confidence.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <CreditCard size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Fee-Free Management</h3>
              <p className="text-gray-600">
                We don't charge management fees – our earnings come from optimized trading strategies, 
                aligning our interests with yours.
              </p>
            </div>
            
            <div className="glass-card p-8 animate-fade-in" style={{ animationDelay: '0.75s' }}>
              <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mb-6">
                <Lock size={24} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Guaranteed Security</h3>
              <p className="text-gray-600">
                Our 60-day money-back guarantee provides additional peace of mind for new investors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h5 className="inline-block px-3 py-1 bg-white/10 text-white rounded-full text-sm font-medium mb-4">
                Security First
              </h5>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Funds Are <span className="text-gold">Safe</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                At UReturns, security isn't just a feature—it's the foundation of everything we do.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Shield size={20} className="text-gold" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Escrow Vault System</h3>
                    <p className="text-gray-300">
                      Your investment capital is held in our proprietary Escrow Vault, isolated from trading 
                      activities to protect your principal.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <Lock size={20} className="text-gold" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Money-Back Guarantee</h3>
                    <p className="text-gray-300">
                      New investors enjoy a 60-day money-back guarantee, giving you confidence to try our 
                      platform risk-free.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CreditCard size={20} className="text-gold" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-2">Secure Transactions</h3>
                    <p className="text-gray-300">
                      All financial transactions are processed through secure, encrypted channels with 
                      multi-factor authentication.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000" 
                  alt="Security First" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 animate-fade-in">
            Start Your Plan Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
            Join thousands of investors already benefiting from our AI-driven trading strategies.
          </p>
          <a 
            href="/contact" 
            className="btn-primary text-lg px-8 py-3 animate-fade-in"
          >
            Get Started Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
