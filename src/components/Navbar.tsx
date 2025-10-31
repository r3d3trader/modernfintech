
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Knowledge Base', path: '/knowledge' },
    { name: 'Contact Us', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl border-b border-brand/20 py-3 shadow-sm' : 'bg-brand-dark/80 backdrop-blur-md border-b border-white/20 py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center"
        >
          <span className={`text-xl md:text-2xl font-bold ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
            <span className={scrolled ? 'text-brand' : 'text-gold'}>U</span>Returns
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`font-medium transition-all duration-300 ${
                scrolled 
                  ? location.pathname === link.path
                    ? 'text-brand'
                    : 'text-gray-600 hover:text-brand'
                  : 'text-white hover:text-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Login / Get Started Button */}
        <div className="hidden md:block">
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden focus:outline-none ${scrolled ? 'text-gray-700' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="glass-dark md:hidden h-screen w-full fixed inset-0 z-50 flex flex-col pt-20 px-6 animate-fade-in">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-lg font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'bg-white/10 text-white'
                    : 'text-gray-100 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary text-center mt-6"
            >
              Get Started
            </Link>
          </div>
          
          <button
            className="absolute top-5 right-6 text-white"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
