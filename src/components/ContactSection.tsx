import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 98765 43210",
      link: "tel:+919876543210"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@regattagranitesindia.com",
      link: "mailto:info@regattagranitesindia.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "Industrial Area, Granite Hub, Rajasthan, India",
      link: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your granite project? Get in touch with our team for 
            premium quality granite solutions delivered worldwide.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card shadow-hover border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Get Your Quote Today
                </h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Product Interest
                    </label>
                    <select className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground">
                      <option>Select a product</option>
                      <option>Granite Countertops</option>
                      <option>Granite Slabs</option>
                      <option>Granite Blocks</option>
                      <option>Monuments</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder="Tell us about your project requirements..."
                      rows={4}
                    />
                  </div>
                  <Button variant="quote" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Get In Touch
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We're here to help you with all your granite needs. Contact us today 
                  to discuss your project requirements and get a personalized quote.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((item, index) => (
                  <Card key={index} className="bg-card shadow-card hover:shadow-hover transition-all duration-300 border-0">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-6 h-6 text-accent-foreground" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary mb-1">
                            {item.title}
                          </h4>
                          {item.link.startsWith('#') ? (
                            <p className="text-muted-foreground text-sm">
                              {item.content}
                            </p>
                          ) : (
                            <a 
                              href={item.link}
                              className="text-granite-gold hover:text-granite-gold/80 text-sm transition-colors"
                            >
                              {item.content}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Call to Action */}
              <Card className="bg-gradient-hero text-white border-0 mt-8">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-bold mb-4">
                    Ready to Start Your Project?
                  </h4>
                  <p className="mb-6 opacity-90">
                    Join thousands of satisfied customers worldwide who trust 
                    Regatta Granites for their premium stone solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-primary">
                      View Catalog
                    </Button>
                    <Button variant="hero" size="lg">
                      Get Quote Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;