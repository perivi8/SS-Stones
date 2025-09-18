import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About SS Stones
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Your trusted partner for premium granite and marble solutions in South India
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Founded in 2018, SS Stones has been serving the construction and architectural industry 
                  with premium granite and marble solutions. Based in Chittoor, Andhra Pradesh, 
                  we specialize in providing high-quality stone materials for residential 
                  and commercial projects.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our commitment to quality and customer satisfaction has made us a 
                  preferred choice for architects, builders, and homeowners across South India.
                </p>
                <div className="grid grid-cols-2 gap-6 mt-8">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-granite-gold mb-2">500+</h3>
                    <p className="text-muted-foreground">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-bold text-granite-gold mb-2">50+</h3>
                    <p className="text-muted-foreground">Stone Varieties</p>
                  </div>
                </div>
              </div>
              <div className="bg-muted/30 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  To provide exceptional quality granite and marble products that enhance 
                  the beauty and value of every space we touch.
                </p>
                <h3 className="text-2xl font-bold text-primary mb-6">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading stone supplier in South India, known for our quality, 
                  reliability, and customer service excellence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-granite-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">Q</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Quality</h3>
                <p className="text-muted-foreground">
                  We source only the finest materials and maintain strict quality standards
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-granite-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">R</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Reliability</h3>
                <p className="text-muted-foreground">
                  Consistent delivery and dependable service you can count on
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-granite-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">S</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Service</h3>
                <p className="text-muted-foreground">
                  Exceptional customer service from consultation to installation
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
