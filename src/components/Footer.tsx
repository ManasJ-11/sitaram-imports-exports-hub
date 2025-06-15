import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <h3 className="text-2xl font-bold text-white tracking-wider">SITARAM</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for premium Indian exports, bringing authentic 
              products from India to global markets with quality and integrity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200">
                <Facebook size={20} className="text-black" />
              </a>
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200">
                <Twitter size={20} className="text-black" />
              </a>
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200">
                <Linkedin size={20} className="text-black" />
              </a>
              <a href="#" className="bg-amber-600 p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200">
                <Instagram size={20} className="text-black" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Services</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Products</a></li>
              <li><a href="#certificates" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Certificates</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-amber-400 transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-amber-400" />
                <span className="text-gray-300 text-sm">
                  Sitaram Exports<br />
                  SP Road, Morbi 363641
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-300 text-sm">info@sitaramexport.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 SitaRam Export. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">Export Policy</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;