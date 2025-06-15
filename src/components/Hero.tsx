
import { ArrowRight, Globe, TrendingUp, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 text-orange-900 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-orange-200/30 to-orange-300/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in text-orange-900">
                Premium Indian
                <span className="block text-orange-600">Exports Worldwide</span>
              </h1>
              <p className="text-xl text-orange-800 leading-relaxed">
                Bringing authentic Indian products to global markets. 
                Your trusted partner for premium quality exports from India.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-500 transition-all duration-200 flex items-center gap-2 group shadow-lg">
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all duration-200 shadow-lg">
                Get Quote
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">100+</div>
                <div className="text-sm text-orange-700">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-orange-700">Quality Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">15+</div>
                <div className="text-sm text-orange-700">Years of Service</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 space-y-6 border-2 border-orange-200 shadow-2xl">
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <Globe className="text-orange-600" size={32} />
                <div>
                  <h3 className="font-semibold text-lg text-orange-900">Global Reach</h3>
                  <p className="text-orange-700 text-sm">Worldwide distribution</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <Star className="text-orange-600" size={32} />
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
