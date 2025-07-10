import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/a593eba4-85aa-474f-a40e-e1e6fab6a709.png" 
                alt="Tareeq Al Marjan Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <div className="text-xl font-bold tracking-wider">TAREEQ</div>
                <div className="text-xs font-light tracking-widest opacity-90">AL MARJAN</div>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Trusted partners in industrial construction, maintenance, and renovation projects, 
              delivering excellence through innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold">Quick Links</h3>
            <div className="space-y-3">
              <a href="#home" className="block text-gray-300 hover:text-gold transition-colors">Home</a>
              <a href="#about" className="block text-gray-300 hover:text-gold transition-colors">About Us</a>
              <a href="#services" className="block text-gray-300 hover:text-gold transition-colors">Services</a>
              <a href="#gallery" className="block text-gray-300 hover:text-gold transition-colors">Gallery</a>
              <a href="#contact" className="block text-gray-300 hover:text-gold transition-colors">Contact</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold">Our Services</h3>
            <div className="space-y-3">
              <div className="text-gray-300">Industrial Construction</div>
              <div className="text-gray-300">Facility Maintenance</div>
              <div className="text-gray-300">Production Solutions</div>
              <div className="text-gray-300">Quality Materials</div>
              <div className="text-gray-300">Project Management</div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-gold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <div className="text-gray-300">06 7671744</div>
                  <div className="text-gray-300">+971588565476</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <div className="text-gray-300">sales@ta-reeq.com</div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">UAE, Al Marjan</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <div className="flex space-x-4">
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
                <Facebook className="h-6 w-6 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 text-gray-400 hover:text-gold cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2024 Tareeq Al Marjan. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-gold text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;