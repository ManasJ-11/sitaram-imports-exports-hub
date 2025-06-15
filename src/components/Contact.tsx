
import { Mail, Phone, MapPin, Clock, ExternalLink } from "lucide-react";

const Contact = () => {
  const handleContactUs = () => {
    window.open('https://airtable.com/appUbE0UdDtf1OiN4/shrEBaKODjfcHGjco', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to expand your global reach? Contact us today for personalized trade solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Mail size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-gray-300">info@sitaramexport.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Phone size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-gray-300">+91 98765 43210</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Address</div>
                    <div className="text-gray-300">
                      Sitaram Exports<br />
                      SP Road, Morbi 363641
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Clock size={24} />
                  </div>
                  <div>
                    <div className="font-medium">Business Hours</div>
                    <div className="text-gray-300">
                      Mon - Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 9:00 AM - 2:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3">Why Choose Sitaram?</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Competitive pricing and flexible terms</li>
                <li>• 24/7 customer support and tracking</li>
                <li>• Comprehensive insurance coverage</li>
                <li>• Expert customs and compliance handling</li>
              </ul>
            </div>
          </div>

          {/* Contact Us Button Section */}
          <div className="flex items-center justify-center">
            <div className="bg-white text-gray-900 p-8 rounded-xl text-center max-w-md w-full">
              <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
              <p className="text-gray-600 mb-8">
                Contact us today to discuss your export requirements and get a personalized quote for your business needs.
              </p>
              <button 
                onClick={handleContactUs}
                className="w-full bg-blue-600 text-white py-4 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 text-lg"
              >
                Contact Us
                <ExternalLink size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
