import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MarbleSlabs = () => {
  const marbleTypes = [
    {
      name: "Carrara White Marble",
      description: "Classic Italian-style white marble with elegant veining",
      image: "/api/placeholder/400/300",
      features: ["Pure White", "Natural Veining", "Premium Quality", "Polished Finish"]
    },
    {
      name: "Indian Green Marble",
      description: "Beautiful green marble with unique patterns and durability",
      image: "/api/placeholder/400/300",
      features: ["Rich Green", "Unique Patterns", "High Durability", "Versatile Use"]
    },
    {
      name: "Rajasthani Pink Marble",
      description: "Traditional pink marble known for its beauty and strength",
      image: "/api/placeholder/400/300",
      features: ["Pink Hue", "Traditional Style", "Strong Structure", "Easy Maintenance"]
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
                Marble Slabs
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Exquisite marble slabs for luxury interiors and architectural excellence
              </p>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Marble Collection</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover our premium marble slabs for luxury applications
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {marbleTypes.map((marble, index) => (
                <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={marble.image}
                      alt={marble.name}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-3">
                      {marble.name}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {marble.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-primary mb-3">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {marble.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-2 h-2 bg-granite-gold rounded-full mr-2"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
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
      </main>

      <Footer />
    </div>
  );
};

export default MarbleSlabs;
