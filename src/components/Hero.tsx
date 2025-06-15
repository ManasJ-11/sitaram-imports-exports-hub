
import { ArrowRight, Globe, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
                Global Trade
                <span className="block text-blue-200">Excellence</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Connecting businesses worldwide through reliable import and export solutions. 
                Your trusted partner in international commerce for over a decade.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center gap-2 group">
                Explore Services
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-200">
                Contact Us
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">500+</div>
                <div className="text-sm text-blue-100">Global Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">50+</div>
                <div className="text-sm text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-200">10+</div>
                <div className="text-sm text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-20 rounded-lg">
                <Globe className="text-blue-200" size={32} />
                <div>
                  <h3 className="font-semibold text-lg">Global Network</h3>
                  <p className="text-blue-100 text-sm">Worldwide shipping solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white bg-opacity-20 rounded-lg">
                <TrendingUp className="text-blue-200" size={32} />
                <div>
                  <h3 className="font-semibold text-lg">Quality Assurance</h3>
                  <p className="text-blue-100 text-sm">ISO certified processes</p>
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
