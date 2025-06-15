
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-xl sticky top-0 z-50 border-b-2 border-orange-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo - SITARAM Text */}
          <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-orange-800 tracking-wider">
              SITARAM
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 font-semibold">Home</a>
            <a href="#about" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 font-semibold">About</a>
            <a href="#services" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 font-semibold">Services</a>
            <a href="#products" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 font-semibold">Products</a>
            <a href="#certificates" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 font-semibold">Certificates</a>
            <a href="#contact" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 font-semibold">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-orange-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 py-2 font-semibold">Home</a>
              <a href="#about" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 py-2 font-semibold">About</a>
              <a href="#services" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 py-2 font-semibold">Services</a>
              <a href="#products" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 py-2 font-semibold">Products</a>
              <a href="#certificates" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 py-2 font-semibold">Certificates</a>
              <a href="#contact" className="text-orange-800 hover:text-orange-600 transition-colors duration-200 py-2 font-semibold">Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
