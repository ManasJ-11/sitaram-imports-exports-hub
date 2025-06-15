
import { Package, Globe, Shield, Clock, Users, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Professional sourcing of authentic Indian products from verified manufacturers and traditional artisans.",
      features: ["Quality Verification", "Authentic Products", "Direct from Source"]
    },
    {
      icon: Globe,
      title: "Global Export Services",
      description: "Comprehensive export services to deliver quality Indian products worldwide with reliable logistics.",
      features: ["Worldwide Shipping", "Export Documentation", "Customs Clearance"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring only premium products reach global markets with proper certification.",
      features: ["Quality Testing", "Product Certification", "Standards Compliance"]
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable logistics and supply chain management for on-time global deliveries with precision tracking.",
      features: ["Express Options", "Live Tracking", "Scheduled Delivery"]
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated support team ensuring smooth export processes and client satisfaction with professional service.",
      features: ["24/7 Support", "Multilingual Team", "Personal Account Manager"]
    },
    {
      icon: Star,
      title: "Premium Products",
      description: "Curated selection of India's finest products including spices, textiles, and traditional crafts.",
      features: ["Handpicked Selection", "Cultural Authenticity", "Premium Quality"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">Our Export Services</h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Professional export solutions to bring India's finest products to global markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-orange-50 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-8 group hover:-translate-y-2 border-2 border-orange-200 animate-scale-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-6">
                <div className="bg-orange-200 p-4 rounded-lg group-hover:bg-orange-600 transition-all duration-300 animate-pulse group-hover:animate-bounce">
                  <service.icon className="text-orange-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">{service.title}</h3>
              <p className="text-orange-800 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-orange-700 hover:text-orange-600 transition-colors duration-200">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3 animate-pulse"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
