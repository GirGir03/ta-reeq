import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, Linkedin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "HOME", href: "#home" },
    { label: "ABOUT", href: "#about" },
    { label: "SERVICES", href: "#services" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT", href: "#contact" }
  ];

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-white border-b border-gray-200 py-3 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <div>
                  <div className="text-sm font-medium text-gray-800">Contact Us</div>
                  <div className="text-xs">06 7671744</div>
                  <div className="text-xs">+971588565476</div>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <div>
                  <div className="text-sm font-medium text-gray-800">Email Us</div>
                  <div className="text-xs">sales@ta-reeq.com</div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-800">Follow Us</span>
              <div className="flex space-x-2">
                <Linkedin className="h-4 w-4 text-gray-600 hover:text-gold cursor-pointer transition-colors" />
                <Facebook className="h-4 w-4 text-gray-600 hover:text-gold cursor-pointer transition-colors" />
                <Instagram className="h-4 w-4 text-gray-600 hover:text-gold cursor-pointer transition-colors" />
                <Twitter className="h-4 w-4 text-gray-600 hover:text-gold cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-gold shadow-lg" : "nav-gold"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-8 h-8 bg-gold rounded transform rotate-45 relative">
                    <div className="absolute inset-1 bg-white rounded-sm transform -rotate-45"></div>
                  </div>
                </div>
                <div className="text-white">
                  <div className="text-xl font-bold tracking-wider">TAREEQ</div>
                  <div className="text-xs font-light tracking-widest opacity-90">AL MARJAN</div>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-white font-medium text-sm tracking-wide hover:text-yellow-200 transition-colors duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-yellow-200 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gold border-t border-yellow-600">
            <nav className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-white font-medium text-sm tracking-wide py-2 hover:text-yellow-200 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-yellow-600 pt-4 mt-4">
                <div className="space-y-2 text-white">
                  <div className="text-sm font-medium">Contact: 06 7671744</div>
                  <div className="text-sm font-medium">Email: sales@ta-reeq.com</div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;