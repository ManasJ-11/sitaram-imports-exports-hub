
import { Package, Globe, Shield, Clock, Users, Star } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Sacred Product Sourcing",
      description: "Divine sourcing of authentic Indian products from blessed manufacturers and traditional artisans.",
      features: ["Quality Verification", "Authentic Products", "Direct from Source"]
    },
    {
      icon: Globe,
      title: "Global Divine Export",
      description: "Comprehensive export services to deliver blessed Indian products worldwide with divine grace.",
      features: ["Worldwide Shipping", "Export Documentation", "Customs Clearance"]
    },
    {
      icon: Shield,
      title: "Sacred Quality Assurance",
      description: "Rigorous quality control ensuring only blessed products reach global markets with divine approval.",
      features: ["Quality Testing", "Sacred Certification", "Standards Compliance"]
    },
    {
      icon: Clock,
      title: "Blessed Delivery",
      description: "Reliable logistics blessed with divine timing for on-time global deliveries with spiritual precision.",
      features: ["Express Options", "Live Tracking", "Scheduled Delivery"]
    },
    {
      icon: Users,
      title: "Divine Customer Support",
      description: "Dedicated blessed support team ensuring smooth export processes and client satisfaction with grace.",
      features: ["24/7 Support", "Multilingual Team", "Personal Account Manager"]
    },
    {
      icon: Star,
      title: "Sacred Premium Products",
      description: "Curated selection of Bharat's finest blessed products including spices, textiles, and divine crafts.",
      features: ["Handpicked Selection", "Cultural Authenticity", "Premium Quality"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">Our Divine Export Services</h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Sacred export solutions to bring Bharat's blessed products to global markets with divine grace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-orange-50 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 p-8 group hover:-translate-y-2 border-2 border-orange-200">
              <div className="flex items-center mb-6">
                <div className="bg-orange-200 p-4 rounded-lg group-hover:bg-orange-600 transition-colors duration-300">
                  <service.icon className="text-orange-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-orange-900 mb-3">{service.title}</h3>
              <p className="text-orange-800 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-orange-700">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mr-3"></div>
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
