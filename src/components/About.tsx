
import { Target, Eye, Heart, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "500+" },
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: TrendingUp, label: "Years Experience", value: "10+" },
    { icon: Heart, label: "Success Rate", value: "99%" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To facilitate seamless global trade by providing exceptional import and export services that connect businesses worldwide."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the most trusted and innovative import-export company, fostering international business relationships."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Sitaram</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building bridges across continents through trusted trade partnerships and exceptional service
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Connecting Global Markets</h3>
            <p className="text-gray-600 leading-relaxed">
              Sitaram Export Import has been at the forefront of international trade for over a decade. 
              We specialize in facilitating seamless import and export operations across diverse industries, 
              ensuring quality, compliance, and timely delivery.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our expertise spans agricultural products, textiles, electronics, machinery, and pharmaceuticals. 
              With a commitment to excellence and a global network of trusted partners, we help businesses 
              expand their reach and achieve their international trade goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-blue-50 px-4 py-2 rounded-lg">
                <span className="text-blue-800 font-medium">ISO Certified</span>
              </div>
              <div className="bg-green-50 px-4 py-2 rounded-lg">
                <span className="text-green-800 font-medium">Government Registered</span>
              </div>
              <div className="bg-purple-50 px-4 py-2 rounded-lg">
                <span className="text-purple-800 font-medium">Industry Leader</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600" 
              alt="Global Trade"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <value.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
