
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Users, TrendingUp, CircleDollarSign } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container-custom text-center">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 animate-fade-in">
            About Us
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 animate-fade-in">
            Our Mission & Team Values
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
            UReturns is a UK-registered holding company specializing in stock market investments. 
            We leverage advanced algorithmic trading and quantitative strategies to generate 
            consistent returns for our clients.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-[#f2f2f2] relative">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="teamPattern" width="30" height="30" patternUnits="userSpaceOnUse">
                <path d="M 15,0 0,15 15,30 30,15 Z" fill="none" stroke="#104741" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#teamPattern)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Our Team
            </h5>
            <h2 className="section-title">
              Meet The <span className="gradient-text">Experts</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Our team consists of professional traders, data scientists, and financial analysts 
              who design and manage our algorithmic trading models.
            </p>
          </div>

          <div className="glass-card p-6 mb-8 overflow-hidden">
            <img 
              src="/lovable-uploads/a3517571-2194-4ba3-b0d9-cfcfa3a4c43f.png" 
              alt="UReturns Team" 
              className="w-full h-auto rounded-lg shadow-md"
            />
            <div className="text-center mt-6">
              <h3 className="text-xl font-semibold text-brand-dark">The UReturns Team</h3>
              <p className="text-brand-medium mt-2">A team of experts with over 50 years of combined trading experience</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Our diverse team brings together expertise from various fields including finance, 
              data science, machine learning, and market analysis. Together, we've developed 
              proprietary algorithms that consistently outperform traditional investment methods.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white relative">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%">
            <pattern id="storyDots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="#104741" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#storyDots)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
                Our Journey
              </h5>
              <h2 className="section-title mb-6">
                Our Story <span className="gradient-text">So Far</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                UReturns was founded on the principle that sophisticated trading strategies should not 
                be limited to institutional investors. We've spent over a decade developing and 
                backtesting our proprietary trading algorithms.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a small team of financial analysts has grown into a comprehensive 
                platform offering secure, transparent, and profitable investment solutions through 
                cutting-edge technology.
              </p>
              <p className="text-lg text-gray-600">
                Today, we serve clients globally, providing them with access to the same sophisticated 
                trading strategies previously available only to large financial institutions.
              </p>
            </div>
            
            <div className="relative animate-fade-in-right">
              <div className="glass-card p-6 rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&q=80&w=1000" 
                  alt="Trading Floor" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-[#f2f2f2] relative">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="missionPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 L40 20 M20 0 L20 40" stroke="#104741" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#missionPattern)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
              Our Mission
            </h5>
            <h2 className="section-title">
              Why We <span className="gradient-text">Exist</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Our mission is to democratize high-frequency trading and offer secure, transparent, 
              and profitable investment solutions through cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-8 text-center animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Democratize Trading</h3>
              <p className="text-gray-600">
                Make sophisticated algorithmic trading accessible to individual investors worldwide.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-6">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Generate Returns</h3>
              <p className="text-gray-600">
                Provide consistent monthly returns through advanced quantitative trading strategies.
              </p>
            </div>
            
            <div className="glass-card p-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto mb-6">
                <CircleDollarSign size={28} />
              </div>
              <h3 className="text-xl font-semibold text-brand-dark mb-3">Protect Capital</h3>
              <p className="text-gray-600">
                Ensure the security of investor funds through our proprietary Escrow Vault system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark text-white relative">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ctaAboutPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="0.5" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ctaAboutPattern)" />
          </svg>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10 animate-fade-in">
            Join thousands of investors already benefiting from our AI-driven trading strategies.
          </p>
          <a 
            href="/contact" 
            className="btn-primary text-lg px-8 py-3 animate-fade-in"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
