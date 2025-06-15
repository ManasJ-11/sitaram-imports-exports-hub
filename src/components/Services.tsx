
import { Package, Globe, Shield, Clock, Users, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Product Sourcing",
      description: "Expert sourcing of authentic Indian products from trusted manufacturers and artisans.",
      features: ["Quality Verification", "Authentic Products", "Direct from Source"]
    },
    {
      icon: Globe,
      title: "Global Export",
      description: "Comprehensive export services to deliver Indian products worldwide efficiently.",
      features: ["Worldwide Shipping", "Export Documentation", "Customs Clearance"]
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous quality control ensuring only premium products reach global markets.",
      features: ["Quality Testing", "Certification", "Standards Compliance"]
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Reliable logistics and supply chain management for on-time global deliveries.",
      features: ["Express Options", "Live Tracking", "Scheduled Delivery"]
    },
    {
      icon: Users,
      title: "Customer Support",
      description: "Dedicated support team ensuring smooth export processes and client satisfaction.",
      features: ["24/7 Support", "Multilingual Team", "Personal Account Manager"]
    },
    {
      icon: Star,
      title: "Premium Products",
      description: "Curated selection of India's finest products including spices, textiles, and crafts.",
      features: ["Handpicked Selection", "Cultural Authenticity", "Premium Quality"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Export Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive export solutions to bring India's finest products to global markets
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-8 group hover:-translate-y-2 border border-gray-800">
              <div className="flex items-center mb-6">
                <div className="bg-amber-600/20 p-4 rounded-lg group-hover:bg-amber-600 transition-colors duration-300">
                  <service.icon className="text-amber-400 group-hover:text-black transition-colors duration-300" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-400">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
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
