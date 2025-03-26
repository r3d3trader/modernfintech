
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-6">
              <span className="text-2xl font-bold">
                <span className="text-gold">U</span>Returns
              </span>
            </Link>
            <p className="text-gray-300 mb-6">
              UReturns leverages advanced algorithmic trading to generate consistent returns for investors worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-all">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-all">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-all">Services</Link>
              </li>
              <li>
                <Link to="/knowledge" className="text-gray-300 hover:text-white transition-all">Knowledge Base</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-all">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-all">Terms of Service</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-all">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-all">Cookie Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-all">Disclaimer</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:text-white transition-all">Risk Disclosure</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-gold flex-shrink-0 mt-1" />
                <span className="text-gray-300">Registered in the UK</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-gold flex-shrink-0" />
                <span className="text-gray-300">+44 (0) 123 456 7890</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-gold flex-shrink-0" />
                <span className="text-gray-300">support@ureturns.com</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-white/10 my-10" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {currentYear} UReturns. All rights reserved. Company Number: 826917
          </p>
          <div className="text-gray-400 text-sm">
            <p>
              Investment involves risk. Past performance is not indicative of future results.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
