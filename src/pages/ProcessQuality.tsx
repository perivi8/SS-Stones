import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Shield, Truck } from "lucide-react";

const ProcessQuality = () => {
  const processSteps = [
    {
      step: "01",
      title: "Stone Selection",
      description: "Careful selection of premium granite and marble from trusted quarries"
    },
    {
      step: "02", 
      title: "Quality Inspection",
      description: "Rigorous quality checks for color consistency, structural integrity, and finish"
    },
    {
      step: "03",
      title: "Precision Cutting",
      description: "Advanced cutting techniques to achieve exact dimensions and smooth finishes"
    },
    {
      step: "04",
      title: "Final Quality Check",
      description: "Comprehensive final inspection before packaging and delivery"
    }
  ];

  const qualityFeatures = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "Only the finest grade materials make it to our inventory"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Multi-stage quality control ensures consistent excellence"
    },
    {
      icon: CheckCircle,
      title: "Certified Standards",
      description: "All products meet international quality and safety standards"
    },
    {
      icon: Truck,
      title: "Safe Delivery",
      description: "Secure packaging and careful handling during transportation"
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
                Process & Quality
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Our commitment to excellence through rigorous processes and quality control
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From quarry to your doorstep, every step is carefully managed to ensure quality
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((process, index) => (
                <Card key={index} className="border-0 shadow-card text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-granite-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-bold text-white">{process.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">{process.title}</h3>
                    <p className="text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Features */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Quality Assurance</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                What sets SS Stones apart in quality and reliability
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
                <Card key={index} className="border-0 shadow-card text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-granite-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Quality Standards
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  At SS Stones, quality is not just a promise—it's our commitment. We adhere to 
                  strict quality standards throughout our operations, from material selection 
                  to final delivery.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-granite-gold" />
                    <span className="text-muted-foreground">ISO certified quality management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-granite-gold" />
                    <span className="text-muted-foreground">Regular third-party quality audits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-granite-gold" />
                    <span className="text-muted-foreground">Advanced testing equipment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-granite-gold" />
                    <span className="text-muted-foreground">Trained quality control team</span>
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Quality Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Customer Satisfaction</span>
                      <span className="text-granite-gold font-semibold">98%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-granite-gold h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">Quality Pass Rate</span>
                      <span className="text-granite-gold font-semibold">99.5%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-granite-gold h-2 rounded-full" style={{width: '99.5%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground">On-Time Delivery</span>
                      <span className="text-granite-gold font-semibold">96%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-granite-gold h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProcessQuality;
