
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/6472af89-7d35-4247-a97b-50141b8d605a.png" 
                alt="Sitaram Export Import" 
                className="h-10 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">SITARAM</h3>
                <p className="text-sm text-gray-400">EXPORT IMPORT</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in global trade, connecting businesses worldwide through reliable 
              import and export solutions for over a decade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors duration-200">Services</a></li>
              <li><a href="#products" className="text-gray-300 hover:text-white transition-colors duration-200">Products</a></li>
              <li><a href="#certificates" className="text-gray-300 hover:text-white transition-colors duration-200">Certificates</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Export Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Import Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Customs Clearance</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Logistics</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Consultation</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-blue-400" />
                <span className="text-gray-300 text-sm">
                  Trade Plaza, Business District<br />
                  Mumbai, Maharashtra 400001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-blue-400" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-blue-400" />
                <span className="text-gray-300 text-sm">info@sitaramexport.com</span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Sitaram Export Import. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
