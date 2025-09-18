import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Globe } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Improved Efficiency",
    "Better Product Reliability", 
    "Innovative Processes",
    "Increased Buyer Satisfaction"
  ];

  const stats = [
    { icon: Award, label: "Years Experience", value: "30+" },
    { icon: Globe, label: "Countries Served", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "1000+" },
    { icon: CheckCircle, label: "Projects Completed", value: "5000+" }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Granite Manufacturer & Exporter From India
            </h2>
            <h3 className="text-2xl md:text-3xl text-granite-gold mb-8">
              A Leading Certified Stone Co. In India
            </h3>
            <h4 className="text-xl md:text-2xl text-stone-gray mb-8">
              Powered by trust, driven by values
            </h4>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                For the past three decades, we have been achieving excellence through continuous 
                improvement and a holistic approach. We not only offer our buyers high-quality 
                stone products, but also reliability, integrity, and sustainability due to our 
                in-house capabilities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Excellence at Regatta is persistent across Product, People, and Process.
              </p>
              
              <div className="space-y-4">
                <h5 className="text-xl font-semibold text-primary mb-4">This results in:</h5>
                <div className="grid sm:grid-cols-2 gap-3">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-granite-gold flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="bg-gradient-card shadow-hover border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                      <div key={index} className="text-center space-y-3">
                        <div className="mx-auto w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mb-3">
                          <stat.icon className="w-8 h-8 text-accent-foreground" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-sm text-muted-foreground">{stat.label}</div>
                        </div>
                      </div>
                    ))}
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

export default AboutSection;