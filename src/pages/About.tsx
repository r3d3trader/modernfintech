
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
      <section className="py-20 bg-white">
        <div className="container-custom">
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member Cards */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card p-6 text-center animate-fade-in" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'men' : 'women'}/${i+10}.jpg`} 
                    alt="Team Member" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-brand-dark mb-1">Team Member {i}</h3>
                <p className="text-brand mb-3">Senior {i === 1 ? 'Analyst' : i === 2 ? 'Data Scientist' : 'Trader'}</p>
                <p className="text-gray-600 text-sm">
                  With over 10 years of experience in financial markets and algorithmic trading strategies.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
        <div className="container-custom">
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
      <section className="py-20 bg-white">
        <div className="container-custom">
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
      <section className="py-20 bg-brand-dark text-white">
        <div className="container-custom text-center">
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
