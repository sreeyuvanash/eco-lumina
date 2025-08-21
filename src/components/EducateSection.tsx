import { Leaf, Factory, Droplets, TreePine } from "lucide-react";

const EducateSection = () => {
  const educationItems = [
    {
      icon: Factory,
      title: "Greenhouse Gases",
      description: "Carbon dioxide, methane, and other gases trap heat in Earth's atmosphere, causing global warming.",
      color: "climate-orange"
    },
    {
      icon: Leaf,
      title: "Fossil Fuels",
      description: "Burning coal, oil, and gas releases stored carbon, dramatically increasing atmospheric CO₂ levels.",
      color: "climate-teal"
    },
    {
      icon: Droplets,
      title: "CO₂ vs Methane",
      description: "While CO₂ is most abundant, methane is 25x more potent at trapping heat over 100 years.",
      color: "climate-blue"
    },
    {
      icon: TreePine,
      title: "Carbon Sinks",
      description: "Forests, oceans, and soil absorb CO₂ from the atmosphere, but they're becoming overwhelmed.",
      color: "climate-green"
    }
  ];

  return (
    <section id="educate" className="py-24 relative overflow-hidden">
      {/* Aurora Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-aurora animate-aurora opacity-30" />
        <div className="absolute top-1/3 left-0 w-full h-2 bg-gradient-aurora animate-aurora opacity-20" style={{ animationDelay: "5s" }} />
        <div className="absolute bottom-1/3 left-0 w-full h-2 bg-gradient-aurora animate-aurora opacity-25" style={{ animationDelay: "10s" }} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold gradient-text mb-6">
            Understanding Climate Change
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Climate change is one of the most pressing challenges of our time. 
            Let's explore the science behind it in simple terms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {educationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="glass rounded-2xl p-8 text-center group hover:shadow-glow transition-all duration-500 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${item.color}/20 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`w-8 h-8 text-${item.color}`} />
                </div>
                
                <h3 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                  {item.title}
                </h3>
                
                <p className="text-foreground/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EducateSection;