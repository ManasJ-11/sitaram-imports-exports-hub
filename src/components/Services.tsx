
import { Ship, Plane, Truck, Shield, Clock, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "Sea Freight",
      description: "Cost-effective ocean shipping solutions for bulk cargo and containers worldwide.",
      features: ["FCL & LCL Options", "Door-to-Door Service", "Customs Clearance"]
    },
    {
      icon: Plane,
      title: "Air Freight",
      description: "Fast and reliable air cargo services for time-sensitive shipments globally.",
      features: ["Express Delivery", "Temperature Control", "Live Tracking"]
    },
    {
      icon: Truck,
      title: "Land Transport",
      description: "Comprehensive ground transportation across major trade routes.",
      features: ["Cross-Border", "Last Mile Delivery", "Warehousing"]
    },
    {
      icon: Shield,
      title: "Customs & Compliance",
      description: "Expert handling of customs procedures and trade compliance requirements.",
      features: ["Documentation", "Duty Optimization", "Regulatory Support"]
    },
    {
      icon: Clock,
      title: "Supply Chain",
      description: "End-to-end supply chain management and logistics coordination.",
      features: ["Inventory Management", "Just-in-Time", "Risk Management"]
    },
    {
      icon: Users,
      title: "Consultation",
      description: "Strategic trade advisory and market entry consultation services.",
      features: ["Market Research", "Trade Finance", "Business Development"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive import and export solutions tailored to meet your global trade requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group hover:-translate-y-2">
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 p-4 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="text-blue-600 group-hover:text-white transition-colors duration-300" size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
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
