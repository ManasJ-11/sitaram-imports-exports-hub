
import { Target, Eye, Heart, Users, Globe, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Users, label: "Blessed Clients", value: "1000+" },
    { icon: Globe, label: "Countries Reached", value: "100+" },
    { icon: TrendingUp, label: "Years of Service", value: "15+" },
    { icon: Heart, label: "Divine Rating", value: "99%" }
  ];

  const values = [
    {
      icon: Target,
      title: "Our Sacred Mission",
      description: "To showcase India's divine products globally, spreading the spiritual essence of our sacred motherland through authentic quality exports blessed by tradition."
    },
    {
      icon: Eye,
      title: "Our Divine Vision",
      description: "To become the world's most trusted gateway for sacred Indian products, celebrating our spiritual heritage through global commerce with divine blessings."
    }
  ];

  return (
    <section id="about" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-orange-900 mb-4">About Sitaram Export</h2>
          <p className="text-xl text-orange-800 max-w-3xl mx-auto">
            Celebrating Bharat's sacred heritage through divine exports to the world
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-orange-900">From Sacred Bharat to the World</h3>
            <p className="text-orange-800 leading-relaxed">
              Sitaram Export has been blessed to represent India's finest products on the global stage for over 15 years. 
              We specialize in exporting authentic, premium-quality Indian goods including sacred spices, divine textiles, 
              spiritual handicrafts, ayurvedic medicines, and traditional products that showcase our rich spiritual heritage.
            </p>
            <p className="text-orange-800 leading-relaxed">
              Based in the sacred land of Ayodhya, we understand the divine soul of our products. From the holy temples of 
              Ram Janmabhoomi to international markets, we ensure that every product carries the blessed essence of sacred 
              Bharat while meeting global quality standards with divine grace.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-orange-100 border border-orange-300 px-4 py-2 rounded-lg">
                <span className="text-orange-700 font-medium">Export License</span>
              </div>
              <div className="bg-white border border-orange-300 px-4 py-2 rounded-lg">
                <span className="text-orange-700 font-medium">ISO Certified</span>
              </div>
              <div className="bg-orange-200 border border-orange-400 px-4 py-2 rounded-lg">
                <span className="text-orange-800 font-medium">Sacred Heritage Brand</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=600" 
              alt="Sacred Hindu Temple - Divine Heritage"
              className="rounded-2xl shadow-2xl border-2 border-orange-200"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-xl shadow-lg border-2 border-orange-300">
              <div className="text-2xl font-bold">15+</div>
              <div className="text-sm font-medium">Years of Divine Service</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl border-2 border-orange-200 shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
            <div key={index} className="bg-gradient-to-br from-white to-orange-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg">
              <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mb-6">
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
