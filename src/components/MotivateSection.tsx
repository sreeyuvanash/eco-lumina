import { useState, useEffect } from "react";
import wildfireImg from "@/assets/wildfire.jpg";
import meltingIceImg from "@/assets/melting-ice.jpg";
import stormImg from "@/assets/storm.jpg";

const MotivateSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const motivationItems = [
    {
      image: wildfireImg,
      quote: "Every fraction of a degree matters. Every year matters. Every choice matters.",
      author: "UN Secretary-General António Guterres",
      background: "gradient-fire"
    },
    {
      image: meltingIceImg,
      quote: "Climate change is not a distant threat. It is happening now.",
      author: "NASA Climate Scientists",
      background: "gradient-water"
    },
    {
      image: stormImg,
      quote: "We are the first generation to feel the sting of climate change, and the last generation that can do something about it.",
      author: "Washington State Governor Jay Inslee",
      background: "gradient-fire"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % motivationItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="act" className="py-24 relative overflow-hidden">
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        {/* Fire Sparks */}
        <div className="absolute top-1/4 left-1/4">
          {[...Array(5)].map((_, i) => (
            <div
              key={`fire-${i}`}
              className="absolute w-1 h-1 bg-climate-orange rounded-full animate-fire-spark"
              style={{
                left: `${i * 20}px`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
        
        {/* Water Ripples */}
        <div className="absolute bottom-1/4 right-1/4">
          {[...Array(3)].map((_, i) => (
            <div
              key={`water-${i}`}
              className="absolute w-4 h-4 border border-climate-blue/30 rounded-full animate-water-ripple"
              style={{
                animationDelay: `${i * 1}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold gradient-text mb-6">
            Why Action is Urgent
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            The window for limiting global warming is rapidly closing. 
            These images and voices remind us what's at stake.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden glass">
            {motivationItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt="Climate impact"
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-${item.background} opacity-60`} />
                
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center max-w-4xl">
                    <blockquote className="text-2xl md:text-4xl font-playfair font-medium text-foreground mb-6 leading-relaxed">
                      "{item.quote}"
                    </blockquote>
                    <cite className="text-lg text-foreground/80 font-medium">
                      — {item.author}
                    </cite>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicator Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {motivationItems.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary shadow-glow"
                    : "bg-foreground/30 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivateSection;