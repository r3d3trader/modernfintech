
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send, Loader2, Check } from 'lucide-react';

const Contact = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      
      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-secondary to-white">
        <div className="container-custom text-center">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4 animate-fade-in">
            Contact Us
          </h5>
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6 animate-fade-in">
            We're Here to Help
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10 animate-fade-in">
            Have questions about our investment plans or need assistance? 
            Our team is ready to provide the information and support you need.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <h2 className="text-3xl font-bold text-brand-dark mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Whether you're curious about our investment plans, need help setting up your account, 
                or want to learn more about algorithmic trading, we're ready to answer your questions.
              </p>
              
              <div className="space-y-8 mb-8">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} className="text-brand" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-dark mb-1">Email</h3>
                    <p className="text-gray-600">support@ureturns.com</p>
                    <p className="text-gray-600">info@ureturns.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} className="text-brand" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-dark mb-1">Phone</h3>
                    <p className="text-gray-600">+44 (0) 123 456 7890</p>
                    <p className="text-gray-600">Available Mon-Fri, 9am-5pm GMT</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-brand" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-brand-dark mb-1">Location</h3>
                    <p className="text-gray-600">Registered in the United Kingdom</p>
                    <p className="text-gray-600">Company Number: 826917</p>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 bg-secondary/50">
                <h3 className="text-lg font-semibold text-brand-dark mb-4">Quick Response Guarantee</h3>
                <p className="text-gray-600">
                  We aim to respond to all inquiries within 24 hours. For urgent matters, 
                  please contact us by phone for immediate assistance.
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <div className="glass-card p-8">
                <h3 className="text-2xl font-bold text-brand-dark mb-6">Send Us a Message</h3>
                
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Check size={32} className="text-green-600" />
                    </div>
                    <h4 className="text-xl font-semibold text-brand-dark mb-2">Message Sent!</h4>
                    <p className="text-gray-600 mb-6">
                      Thank you for reaching out. We'll get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-brand focus:ring-2 focus:ring-brand/20 outline-none transition-all"
                        placeholder="How can we help you today?"
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-primary w-full flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Common <span className="gradient-text">Queries</span>
            </h2>
            <p className="section-subtitle mx-auto">
              Find quick answers to frequently asked questions about getting started with UReturns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-brand-dark mb-4">How do I get started?</h3>
              <p className="text-gray-600">
                Getting started is simple. Fill out the contact form above, and one of our 
                investment specialists will reach out to guide you through the account setup process.
              </p>
            </div>
            
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">What is the minimum investment?</h3>
              <p className="text-gray-600">
                Our Starter plan begins at $5,000. The Growth plan requires a minimum of $25,000, 
                and the Elite plan starts at $50,000.
              </p>
            </div>
            
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">How soon can I withdraw funds?</h3>
              <p className="text-gray-600">
                Standard plans allow withdrawals after 30 days. Elite plan members can withdraw 
                funds at any time without restrictions.
              </p>
            </div>
            
            <div className="glass-card p-6 animate-fade-in" style={{ animationDelay: '0.45s' }}>
              <h3 className="text-xl font-semibold text-brand-dark mb-4">Is my investment secure?</h3>
              <p className="text-gray-600">
                Yes, your capital is protected by our Escrow Vault system, and new investors 
                enjoy a 60-day money-back guarantee for additional peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
