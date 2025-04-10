
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Services from '../components/Services';
import Benefits from '../components/Benefits';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Withdrawals from '../components/Withdrawals';
import EscrowVault from '../components/EscrowVault';
import TradingProcess from '../components/TradingProcess';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import InvestmentOptions from '../components/InvestmentOptions';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <div className="bg-[#f2f2f2]">
        <InvestmentOptions />
      </div>
      <Services />
      <div className="bg-[#f2f2f2]">
        <Benefits />
      </div>
      <Process />
      <div className="bg-[#f2f2f2]">
        <Testimonials />
      </div>
      <Features />
      <div className="bg-[#f2f2f2]">
        <Withdrawals />
      </div>
      <EscrowVault />
      <div className="bg-[#f2f2f2]">
        <TradingProcess />
      </div>
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
