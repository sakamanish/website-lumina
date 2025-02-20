import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, PenTool as Tool, Clock, CheckCircle, Award, Users, Briefcase } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const carouselImages = [
  {
    url: "https://drive.google.com/file/d/1swSj_9dFTlLQJTmv4XcMcuYsycI8Od8C/view?usp=drive_link",

    title: "Transformer Installation"
  },
  {
    url: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1200&h=600",
    title: "High Voltage Testing"
  },
  {
    url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&h=600",
    title: "Electrical Maintenance"
  },
  {
    url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&h=600",
    title: "Circuit Installation"
  }
];

const workPortfolio = [
  {
    url: "https://images.unsplash.com/photo-1605627079912-97c6d4751b91?auto=format&fit=crop&w=800&h=500",
    title: "Industrial Power Solutions"
  },
  {
    url: "https://images.unsplash.com/photo-1558346547-4439467bd1d5?auto=format&fit=crop&w=800&h=500",
    title: "Switchyard Maintenance"
  },
  {
    url: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?auto=format&fit=crop&w=800&h=500",
    title: "High Voltage Infrastructure"
  },
  {
    url: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&h=500",
    title: "Electrical Testing"
  }
];

const stats = [
  { number: "15+", label: "Years Experience", icon: Award },
  { number: "500+", label: "Projects Completed", icon: Briefcase },
  { number: "100+", label: "Expert Team Members", icon: Users },
  { number: "98%", label: "Client Satisfaction", icon: CheckCircle }
];

export default function Home() {
  const [mainCarouselRef] = useEmblaCarousel({ loop: true, align: "center" });
  const [portfolioCarouselRef] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });

  React.useEffect(() => {
    const interval = setInterval(() => {
      const emblaApi = mainCarouselRef.current;
      if (emblaApi) {
        emblaApi.scrollNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [mainCarouselRef]);

  return (
    <div>
      {/* Hero Section */}
      <div className="hero-pattern text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=150&h=150"
                alt="Lumina Enterprises Logo"
                className="w-32 h-32 rounded-full border-4 border-yellow-400"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Power Your Future with Lumina Enterprises
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for comprehensive electrical solutions. We deliver excellence in transformer services, testing & commissioning, and electrical infrastructure maintenance.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-yellow-400 text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="bg-white/10 text-white px-8 py-3 rounded-full font-bold hover:bg-white/20 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Carousel */}
      <div className="overflow-hidden" ref={mainCarouselRef}>
        <div className="flex">
          {carouselImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-center pb-16">
                <h3 className="text-white text-4xl font-bold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Highly skilled professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Top-grade equipment and reliable solutions</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tool className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Comprehensive Service</h3>
              <p className="text-gray-600">Full range of electrical solutions under one roof</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600">Round-the-clock assistance for emergencies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Work Portfolio Carousel */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Recent Work</h2>
          <div className="overflow-hidden" ref={portfolioCarouselRef}>
            <div className="flex gap-6">
              {workPortfolio.map((work, index) => (
                <div key={index} className="flex-[0_0_300px] min-w-0">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={work.url}
                        alt={work.title}
                        className="w-full h-full object-cover transition-transform hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-lg">{work.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Power Your Success?</h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Let us help you with your electrical infrastructure needs. Our team of experts is ready to provide you with the best solutions.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-primary px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}
