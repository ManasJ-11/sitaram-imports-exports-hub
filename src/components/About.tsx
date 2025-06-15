
import { Target, Eye, Heart, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: Globe, label: "Countries Reached", value: "100+" },
    { icon: TrendingUp, label: "Years of Service", value: "15+" },
    { icon: Heart, label: "Customer Rating", value: "99%" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To showcase India's finest products globally, spreading the essence of our rich heritage through authentic quality exports backed by tradition."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the world's most trusted gateway for authentic Indian products, celebrating our cultural heritage through global commerce."
    }
  ];

  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">About Sitaram Export</h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Celebrating India's rich heritage through premium exports to the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold text-orange-900">From India to the World</h3>
            <p className="text-orange-800 leading-relaxed">
              Sitaram Export has been representing India's finest products on the global stage for over 15 years. 
              We specialize in exporting authentic, premium-quality Indian goods including spices, textiles, 
              handicrafts, ayurvedic medicines, and traditional products that showcase our rich cultural heritage.
            </p>
            <p className="text-orange-800 leading-relaxed">
              Based in Ayodhya, we understand the soul of our products. From traditional Indian markets to 
              international destinations, we ensure that every product carries the authentic essence of 
              India while meeting global quality standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-orange-100 border border-orange-300 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200">
                <span className="text-orange-700 font-medium">Export License</span>
              </div>
              <div className="bg-white border border-orange-300 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200">
                <span className="text-orange-700 font-medium">ISO Certified</span>
              </div>
              <div className="bg-orange-200 border border-orange-400 px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200">
                <span className="text-orange-800 font-medium">Heritage Brand</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="bg-gradient-to-br from-orange-200 to-orange-400 rounded-2xl p-12 shadow-2xl border-2 border-orange-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-orange-500/20 animate-pulse"></div>
              <div className="relative z-10 text-center">
                <div className="bg-white/90 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
                  <Globe className="text-orange-600" size={48} />
                </div>
                <h4 className="text-2xl font-bold text-orange-900 mb-4">Global Reach</h4>
                <p className="text-orange-800">Connecting India to the world through authentic products and trusted partnerships</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg border-2 border-orange-300 animate-slide-in-right">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm font-medium">Years of Excellence</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-xl border-2 border-orange-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-orange-200 transition-colors duration-200">
                <stat.icon className="text-orange-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-orange-900 mb-2">{stat.value}</div>
              <div className="text-orange-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 animate-pulse">
                <value.icon className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-orange-900 mb-4">{value.title}</h3>
              <p className="text-orange-800 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
