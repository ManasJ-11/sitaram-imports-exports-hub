
import { ArrowRight, Globe, TrendingUp, Star } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-900/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Premium Indian
                <span className="block text-amber-400">Exports Worldwide</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Bringing the finest authentic Indian products to global markets. 
                Your trusted partner for premium quality exports from the heart of India.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-amber-500 text-black px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-all duration-200 flex items-center gap-2 group">
                Explore Products
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-amber-500 text-amber-400 px-8 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-black transition-all duration-200">
                Get Quote
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">100+</div>
                <div className="text-sm text-gray-300">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">500+</div>
                <div className="text-sm text-gray-300">Products</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">15+</div>
                <div className="text-sm text-gray-300">Years Heritage</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white bg-opacity-5 backdrop-blur-lg rounded-2xl p-8 space-y-6 border border-gray-700">
              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg border border-gray-600">
                <Globe className="text-amber-400" size={32} />
                <div>
                  <h3 className="font-semibold text-lg text-white">Global Reach</h3>
                  <p className="text-gray-300 text-sm">Worldwide distribution network</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-10 rounded-lg border border-gray-600">
                <Star className="text-amber-400" size={32} />
                <div>
                  <h3 className="font-semibold text-lg text-white">Premium Quality</h3>
                  <p className="text-gray-300 text-sm">Authentic Indian products</p>
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
