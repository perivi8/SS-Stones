import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import Image4 from "@/assets/4.jpg";
import Image13 from "@/assets/13.jpeg";

const ProductsSection = () => {
  const products = [
    {
      title: "Madanpalli White", 
      image: Image4,
      description: "Elegant white granite with superior finish and durability",
      pricing: {
        small: 65,
        big: 95
      },
      unit: "per CBM"
    },
    {
      title: "Kuppum Black",
      image: Image13,
      description: "Premium black granite with exceptional quality and finish",
      pricing: {
        small: 100,
        big: 130
      },
      unit: "per CBM"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            SS Stones
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our premium granite products from Chittoor, Andhra Pradesh. 
            Specializing in high-quality Madanpalli White and Kuppum Black granite varieties.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="group bg-card shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden border-0"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {product.description}
                </p>
                <div className="space-y-2 border-t pt-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Small Size:</span>
                    <div className="flex items-center text-granite-gold font-semibold">
                      <DollarSign className="w-4 h-4" />
                      <span>{product.pricing.small}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Big Size:</span>
                    <div className="flex items-center text-granite-gold font-semibold">
                      <DollarSign className="w-4 h-4" />
                      <span>{product.pricing.big}</span>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    {product.unit}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Shop Existing Granite Products
            </h3>
            <p className="text-muted-foreground mb-6">
              Explore our complete collection of premium granite varieties. From elegant whites 
              to deep blacks, find the perfect granite for your project.
            </p>
          </div>
          <Link to="/shop">
            <Button variant="granite" size="xl" className="group">
              View All Granite Products
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;