
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/6472af89-7d35-4247-a97b-50141b8d605a.png" 
              alt="Sitaram Export Import" 
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-900">SITARAM</h1>
              <p className="text-sm text-blue-600 tracking-wide">EXPORT IMPORT</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Services</a>
            <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Products</a>
            <a href="#certificates" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Certificates</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">Services</a>
              <a href="#products" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">Products</a>
              <a href="#certificates" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">Certificates</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors duration-200 py-2">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
