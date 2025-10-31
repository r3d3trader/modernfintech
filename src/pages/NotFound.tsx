import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 flex items-center justify-center min-h-[70vh]">
        <div className="container-custom text-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-brand-dark mb-4">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-brand mb-4">
              Page Not Found
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist. Let's get you back on track.
            </p>
            <Link to="/" className="btn-primary inline-flex items-center">
              <Home size={20} className="mr-2" />
              Return to Home
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;
