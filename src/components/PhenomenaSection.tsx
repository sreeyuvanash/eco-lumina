import { useState, useEffect } from "react";
import { Waves, Sun, Cloud, Flame } from "lucide-react";

const PhenomenaSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const phenomena = [
    {
      icon: Waves,
      title: "Rising Sea Levels",
      description: "Thermal expansion and melting ice sheets cause sea levels to rise by 3.4mm annually.",
      stats: "+21cm since 1880",
      color: "climate-blue",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Sun,
      title: "Extreme Heat",
      description: "Global temperatures have risen 1.1°C since pre-industrial times, breaking records worldwide.",
      stats: "2023: Hottest year recorded",
      color: "climate-orange",
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: Cloud,
      title: "Intense Storms",
      description: "Warmer oceans fuel stronger hurricanes and more frequent extreme weather events.",
      stats: "2x more Category 5 storms",
      color: "climate-purple",
      gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
      icon: Flame,
      title: "Wildfire Expansion",
      description: "Fire seasons are longer and more severe, burning millions more acres annually.",
      stats: "Fire season +75 days longer",
      color: "climate-orange",
      gradient: "from-red-500/20 to-orange-500/20"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("phenomena");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % phenomena.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="phenomena" className="py-24 relative overflow-hidden">
      {/* Morphing Earth Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div className="relative w-96 h-96">
          {phenomena.map((item, index) => (
            <div
              key={index}
              className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.gradient} transition-all duration-1000 ${
                index === activeIndex ? "scale-100 opacity-100" : "scale-90 opacity-0"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold gradient-text mb-6">
            Climate Phenomena
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Witness the dramatic changes happening across our planet as climate patterns shift and intensify.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-8">
            {phenomena.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className={`glass rounded-3xl p-8 text-center cursor-pointer transition-all duration-500 ${
                    index === activeIndex
                      ? "shadow-glow scale-105 bg-surface-elevated"
                      : "hover:shadow-card"
                  }`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full bg-${item.color}/20 mb-6 transition-transform duration-300 ${
                    index === activeIndex ? "scale-110" : ""
                  }`}>
                    <IconComponent className={`w-10 h-10 text-${item.color}`} />
                  </div>
                  
                  <h3 className="text-2xl font-playfair font-semibold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  
                  <div className={`text-lg font-semibold mb-4 transition-colors duration-300 ${
                    index === activeIndex ? "text-primary" : "text-foreground/70"
                  }`}>
                    {item.stats}
                  </div>
                  
                  <p className="text-foreground/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden">
            <div className="glass rounded-3xl p-8 text-center min-h-[400px] flex flex-col justify-center">
              {phenomena.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className={`transition-all duration-500 ${
                      index === activeIndex ? "opacity-100" : "opacity-0 absolute"
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full bg-${item.color}/20 mb-6`}>
                      <IconComponent className={`w-12 h-12 text-${item.color}`} />
                    </div>
                    
                    <h3 className="text-3xl font-playfair font-semibold mb-4 text-foreground">
                      {item.title}
                    </h3>
                    
                    <div className="text-xl font-semibold mb-6 text-primary">
                      {item.stats}
                    </div>
                    
                    <p className="text-foreground/70 leading-relaxed text-lg">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile Indicator Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {phenomena.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "bg-primary shadow-glow"
                      : "bg-foreground/30 hover:bg-foreground/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhenomenaSection;