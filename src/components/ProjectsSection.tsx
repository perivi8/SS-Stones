import { Card, CardContent } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import graniteCountertops from "@/assets/granite-countertops.jpg";
import graniteProcessing from "@/assets/granite-processing.jpg";
import graniteSamples from "@/assets/granite-samples.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      country: "India",
      image: graniteProcessing,
      description: "Large-scale residential and commercial projects across major Indian cities"
    },
    {
      country: "Spain", 
      image: graniteCountertops,
      description: "Luxury hotel and residential granite installations throughout Spain"
    },
    {
      country: "Jamaica",
      image: graniteSamples,
      description: "Premium granite solutions for Caribbean construction projects"
    }
  ];

  return (
    <section className="py-20 bg-muted/30" id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Projects Around The World
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our premium granite products have been delivered to construction projects 
            and architectural developments across the globe.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group bg-card shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden border-0"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`Project in ${project.country}`}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-hero opacity-0 group-hover:opacity-60 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-5 h-5 text-granite-gold" />
                      <h3 className="text-xl font-bold text-primary">
                        {project.country}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;