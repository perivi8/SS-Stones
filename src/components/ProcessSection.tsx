import { Card, CardContent } from "@/components/ui/card";
import { Factory, Shield, Package, Truck } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Our state-of-the-art manufacturing units give us an edge in the natural stone processing category. We have over 2 decades of industry expertise.",
      image: "🏭"
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Rigorous quality control processes ensure every granite product meets international standards and exceeds customer expectations.",
      image: "✓"
    },
    {
      icon: Package,
      title: "Packing",
      description: "Professional packaging solutions protect your granite during transit, ensuring products arrive in perfect condition worldwide.",
      image: "📦"
    },
    {
      icon: Truck,
      title: "Delivery",
      description: "Global logistics network ensures timely delivery to construction sites, architects, and granite importers across the world.",
      image: "🚚"
    }
  ];

  return (
    <section className="py-20 bg-background" id="process">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Our 4 Step Process Towards Business Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From quarry to delivery, our streamlined process ensures quality and reliability at every stage.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full bg-gradient-card shadow-card hover:shadow-hover transition-all duration-300 border-0 group">
                  <CardContent className="p-8 text-center h-full flex flex-col">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm shadow-card">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="mx-auto w-20 h-20 bg-stone-light rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <step.icon className="w-10 h-10 text-granite-blue" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 h-0.5 bg-gradient-accent" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-gradient-card shadow-hover border-0">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Advanced Manufacturing Capabilities
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We process rough granite blocks to cut granite slabs precisely, and prepare 
                    window sills, thresholds, tiles, and other stone articles professionally.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Moreover, we utilize advanced machinery and equipment to deliver optimally 
                    treated granite slabs, tiles, and other products to granite importers, 
                    architects, and construction companies worldwide.
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-block p-8 bg-stone-light rounded-2xl">
                    <Factory className="w-24 h-24 text-granite-blue mx-auto" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;