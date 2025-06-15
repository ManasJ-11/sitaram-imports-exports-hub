
import { ArrowRight, Globe, TrendingUp, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 text-orange-900 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/20 animate-pulse"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-orange-900 animate-slide-in-right">
                Premium Indian
                <span className="block text-orange-600 animate-bounce">Exports Worldwide</span>
              </h1>
              <p className="text-xl text-orange-800 leading-relaxed animate-fade-in" style={{ animationDelay: "0.3s" }}>
                Bringing authentic Indian products to global markets. 
                Your trusted partner for premium quality exports from India.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in" style={{ animationDelay: "0.5s" }}>
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 hover:scale-105 transition-all duration-200 flex items-center gap-2 group shadow-lg">
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white hover:scale-105 transition-all duration-200 shadow-lg">
                Get Quote
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { value: "100+", label: "Countries Served" },
                { value: "500+", label: "Quality Products" },
                { value: "15+", label: "Years of Service" }
              ].map((stat, index) => (
                <div 
                  key={index}
                  className="text-center animate-fade-in hover:scale-110 transition-transform duration-200"
                  style={{ animationDelay: `${0.7 + index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-orange-600">{stat.value}</div>
                  <div className="text-sm text-orange-700">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 space-y-6 border-2 border-orange-200 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors duration-200 animate-slide-in-right">
                <Globe className="text-orange-600 animate-spin" size={32} style={{ animationDuration: "8s" }} />
                <div>
                  <h3 className="font-semibold text-lg text-orange-900">Global Reach</h3>
                  <p className="text-orange-700 text-sm">Worldwide distribution</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200 hover:bg-orange-100 transition-colors duration-200 animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
                <Star className="text-orange-600 animate-pulse" size={32} />
                <div>
                  <h3 className="font-semibold text-lg text-orange-900">Premium Quality</h3>
                  <p className="text-orange-700 text-sm">Authentic Indian products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
