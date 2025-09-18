import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { IndianRupee, ArrowRight } from "lucide-react";

const GraniteSlabs = () => {
  const graniteTypes = [
    {
      name: "All Type of Indian Granite Stone",
      description: "Premium quality granite stones sourced from across India",
      pricing: { small: 850, big: 1000 },
      image: "/api/placeholder/400/300",
      features: ["Durable", "Heat Resistant", "Scratch Resistant", "Easy Maintenance"]
    },
    {
      name: "Madanpalli White",
      description: "Elegant white granite with superior finish and durability",
      pricing: { small: 650, big: 950 },
      image: "/api/placeholder/400/300",
      features: ["Pure White", "Consistent Pattern", "High Polish", "Premium Grade"]
    },
    {
      name: "Kuppum Black",
      description: "Premium black granite with exceptional quality and finish",
      pricing: { small: 1000, big: 1300 },
      image: "/api/placeholder/400/300",
      features: ["Deep Black", "Mirror Finish", "Dense Structure", "Luxury Grade"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Granite Slabs
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Premium Indian granite slabs for all your construction and design needs
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Granite Collection</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our premium granite slabs with competitive pricing per CBM
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {graniteTypes.map((granite, index) => (
                <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={granite.image}
                      alt={granite.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {granite.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {granite.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {granite.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-granite-gold rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="space-y-3 border-t pt-4 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Small Size:</span>
                        <div className="flex items-center text-granite-gold font-bold text-lg">
                          <IndianRupee className="w-5 h-5" />
                          <span>{granite.pricing.small}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Big Size:</span>
                        <div className="flex items-center text-granite-gold font-bold text-lg">
                          <IndianRupee className="w-5 h-5" />
                          <span>{granite.pricing.big}</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground text-center">per CBM</p>
                    </div>

                    <Button variant="granite" className="w-full group">
                      Get Quote
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Specifications</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Technical specifications for our granite slabs
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Thickness</h3>
                  <p className="text-muted-foreground">15mm - 30mm</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Size Range</h3>
                  <p className="text-muted-foreground">Small & Big Sizes</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Finish</h3>
                  <p className="text-muted-foreground">Polished, Honed</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Applications</h3>
                  <p className="text-muted-foreground">Flooring, Countertops</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GraniteSlabs;
