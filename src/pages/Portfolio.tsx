import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

// Import portfolio images
import Portfolio1 from "@/assets/portfolio 1.jpg";
import Portfolio2 from "@/assets/portfolio 2.jpg";
import Portfolio3 from "@/assets/portfolio 3.jpg";
import Portfolio4 from "@/assets/portfolio 4.jpg";
import Portfolio5 from "@/assets/portfolio 5.jpeg";
import Portfolio6 from "@/assets/portfolio 6.jpg";

const Portfolio = () => {
  const projects = [
    {
      title: "Luxury Villa - Chennai",
      category: "Residential",
      description: "Premium granite flooring and kitchen countertops",
      image: Portfolio1
    },
    {
      title: "Corporate Office - Bangalore",
      category: "Commercial",
      description: "Elegant marble lobby and granite workstations",
      image: Portfolio2
    },
    {
      title: "Hotel Resort - Hyderabad",
      category: "Hospitality",
      description: "Stunning granite facades and marble interiors",
      image: Portfolio3
    },
    {
      title: "Shopping Mall - Coimbatore",
      category: "Retail",
      description: "Durable granite flooring for high-traffic areas",
      image: Portfolio4
    },
    {
      title: "Residential Complex - Kochi",
      category: "Residential",
      description: "Multi-unit granite installations",
      image: Portfolio5
    },
    {
      title: "Educational Institute - Madurai",
      category: "Institutional",
      description: "Long-lasting granite solutions for campus",
      image: Portfolio6
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
                Our Portfolio
              </h1>
              <p className="text-xl max-w-3xl mx-auto">
                Showcasing our finest granite and marble installations across South India
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-granite-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-6">Project Statistics</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-granite-gold mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-granite-gold mb-2">50+</h3>
                <p className="text-muted-foreground">Cities Served</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-granite-gold mb-2">1000+</h3>
                <p className="text-muted-foreground">Happy Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-granite-gold mb-2">15+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
