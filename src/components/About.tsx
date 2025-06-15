
import { Target, Eye, Heart, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Satisfied Clients", value: "1000+" },
    { icon: Globe, label: "Countries Reached", value: "100+" },
    { icon: TrendingUp, label: "Years Heritage", value: "15+" },
    { icon: Heart, label: "Quality Rating", value: "99%" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To showcase India's finest products globally, bridging cultures through authentic quality exports that represent the rich heritage of our nation."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To become the world's most trusted gateway for premium Indian products, celebrating our cultural heritage through global commerce."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">About Sitaram Export</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Celebrating India's heritage through premium exports to the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">From India to the World</h3>
            <p className="text-gray-300 leading-relaxed">
              Sitaram Export has been proudly representing India's finest products on the global stage for over 15 years. 
              We specialize in exporting authentic, premium-quality Indian goods including spices, textiles, handicrafts, 
              pharmaceuticals, and traditional products that showcase our rich cultural heritage.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Based in the spiritual heart of India, we understand the soul of our products. From the sacred ghats of 
              Ayodhya to international markets, we ensure that every product carries the essence of authentic India 
              while meeting global quality standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-amber-900/30 border border-amber-600 px-4 py-2 rounded-lg">
                <span className="text-amber-400 font-medium">Export License</span>
              </div>
              <div className="bg-green-900/30 border border-green-600 px-4 py-2 rounded-lg">
                <span className="text-green-400 font-medium">ISO Certified</span>
              </div>
              <div className="bg-purple-900/30 border border-purple-600 px-4 py-2 rounded-lg">
                <span className="text-purple-400 font-medium">Heritage Brand</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600" 
              alt="Ayodhya Temple - Cultural Heritage"
              className="rounded-2xl shadow-2xl border border-gray-700"
            />
            <div className="absolute -bottom-6 -left-6 bg-amber-600 text-black p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm font-medium">Years of Heritage</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
              <div className="bg-amber-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-amber-400" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-xl border border-gray-700">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <value.icon className="text-black" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
