import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    products: [
      { name: "Granite Slabs", href: "/granite-slabs" },
      { name: "Marble Slabs", href: "/marble-slabs" },
      { name: "Kitchen Countertops", href: "/kitchen-countertops" },
      { name: "Flooring Tiles", href: "/flooring-tiles" },
    ],
    company: [
      { name: "About Us", href: "/about-us" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Process & Quality", href: "/process-quality" },
      { name: "Careers", href: "/careers" },
    ],
    support: [
      { name: "Contact Us", href: "/contact-us" },
      { name: "Request Quote", href: "/request-quote" },
      { name: "Sample Request", href: "/sample-request" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Returns & Exchange", href: "/returns-exchange" },
      { name: "Shipping Policy", href: "/shipping-policy" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-stone-gray text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold mb-4">
                SS STONES
                <span className="text-granite-gold block text-sm font-normal tracking-widest mt-1">
                  Chittoor, Andhra Pradesh
                </span>
              </h3>
              <p className="text-stone-light leading-relaxed mb-6 max-w-md">
                Premium granite and marble supplier serving architects, builders, and homeowners across 
                South India with quality stone solutions.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-granite-gold" />
                  <span className="text-stone-light">+91 94908 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-granite-gold" />
                  <span className="text-stone-light">info@sstones.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-granite-gold mt-0.5" />
                  <span className="text-stone-light">Chittoor, Andhra Pradesh 517001</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-stone-light rounded-full flex items-center justify-center text-stone-gray hover:bg-granite-gold hover:text-accent-foreground transition-all duration-300 transform hover:scale-110"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            <div className="lg:col-span-3">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-granite-gold">Products</h4>
                  <ul className="space-y-3">
                    {footerLinks.products.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-stone-light hover:text-granite-gold transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-granite-gold">Company</h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-stone-light hover:text-granite-gold transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-granite-gold">Support</h4>
                  <ul className="space-y-3">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-stone-light hover:text-granite-gold transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-granite-gold">Legal</h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-stone-light hover:text-granite-gold transition-colors duration-200"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-stone-light/20 py-8">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <p className="text-stone-light text-center">
              &copy; 2025 SS Stones. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;