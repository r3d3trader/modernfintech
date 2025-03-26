
import { useState, useEffect, useRef } from 'react';
import { Star, Play } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const testimonials = [
    {
      quote: "Earned 24% in 3 months—better than my pension!",
      name: "James D.",
      stars: 5,
    },
    {
      quote: "Finally, investing that's simple AND profitable.",
      name: "Priya L.",
      stars: 5,
    },
    {
      quote: "Took a risk, got my money back + profits in 60 days.",
      name: "David K.",
      stars: 5,
    }
  ];

  return (
    <section ref={sectionRef} className="section bg-gradient-to-b from-white to-secondary/30" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h5 className="inline-block px-3 py-1 bg-brand/10 text-brand rounded-full text-sm font-medium mb-4">
            Testimonials
          </h5>
          <h2 className="section-title">
            Join 500+ Investors Who <span className="gradient-text">Transformed Their Wealth</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Hear from our clients who have experienced the UReturns difference and achieved their financial goals.
          </p>
        </div>

        <div className="mb-16">
          <div className={`relative aspect-video glass-card overflow-hidden rounded-xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Video placeholder with play button overlay */}
            <div className="absolute inset-0 bg-brand-dark/10 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-brand flex items-center justify-center cursor-pointer hover:bg-brand-dark transition-colors">
                <Play size={32} className="text-white ml-1" fill="white" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-xl font-semibold">
                "How I Earned 8% Monthly with UReturns" – Watch Sarah's Story
              </h3>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
              alt="Testimonial video" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`glass-card p-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={20} className="text-gold" fill="#ffb000" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <p className="font-medium text-brand-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">Verified Investor</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
