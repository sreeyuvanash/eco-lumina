import { useState } from "react";
import { Leaf, Factory, Droplets, TreePine, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const EducateSection = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  const educationItems = [
    {
      icon: Factory,
      title: "Greenhouse Gases",
      color: "climate-orange"
    },
    {
      icon: Leaf,
      title: "Fossil Fuels",
      color: "climate-teal"
    },
    {
      icon: Droplets,
      title: "CO₂ vs Methane",
      color: "climate-blue"
    },
    {
      icon: TreePine,
      title: "Carbon Sinks",
      color: "climate-green"
    }
  ];

  const topicContent = {
    "Greenhouse Gases": {
      paragraph: "Greenhouse gases are atmospheric compounds that trap heat by absorbing and re-emitting infrared radiation, creating the greenhouse effect that keeps Earth warm enough to support life. The primary greenhouse gases include carbon dioxide (CO₂), methane (CH₄), nitrous oxide (N₂O), and fluorinated gases. Since the Industrial Revolution, human activities have dramatically increased concentrations of these gases, particularly CO₂ from fossil fuel combustion, which has risen from 280 ppm in pre-industrial times to over 420 ppm today. This enhanced greenhouse effect is driving global warming, with CO₂ being the most significant contributor due to its abundance and long atmospheric lifetime. Methane, while less abundant, is approximately 25 times more potent than CO₂ over a 100-year period. The continuous accumulation of these gases in the atmosphere is fundamentally altering Earth's energy balance, leading to rising global temperatures, melting ice caps, and shifting weather patterns that pose unprecedented challenges for human civilization and natural ecosystems worldwide.",
      chartData: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025'],
        datasets: [
          {
            label: 'CO₂ Concentration (ppm)',
            data: [354, 361, 369, 379, 389, 401, 414, 425],
            borderColor: 'hsl(180, 85%, 45%)',
            backgroundColor: 'hsl(180, 85%, 45%, 0.1)',
            tension: 0.4,
            pointBackgroundColor: 'hsl(180, 85%, 45%)',
            pointBorderColor: 'hsl(180, 85%, 45%)',
            pointHoverBackgroundColor: 'hsl(180, 85%, 65%)',
            pointHoverBorderColor: 'hsl(180, 85%, 65%)'
          }
        ]
      }
    },
    "Fossil Fuels": {
      paragraph: "Fossil fuels—coal, oil, and natural gas—are carbon-rich energy sources formed from ancient organic matter over millions of years. When burned for electricity, transportation, and industrial processes, they release stored carbon as CO₂ into the atmosphere, making them the largest source of greenhouse gas emissions. Coal is the most carbon-intensive, followed by oil and natural gas. Global fossil fuel emissions have increased from about 6 billion tons of CO₂ annually in 1990 to over 37 billion tons today. The rapid industrialization of developing nations, combined with continued reliance on fossil fuels in developed countries, has created an exponential growth in emissions. Transportation accounts for about 16% of global emissions, while electricity and heat production represent 25%. Despite growing renewable energy capacity, fossil fuels still provide approximately 80% of global energy consumption. The transition to clean energy is critical but challenging, requiring massive infrastructure changes, technological innovation, and international cooperation to reduce our dependence on these carbon-intensive energy sources while meeting growing global energy demands.",
      chartData: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025'],
        datasets: [
          {
            label: 'Global CO₂ Emissions (GT/year)',
            data: [22.7, 25.1, 28.2, 31.8, 35.1, 36.7, 34.9, 37.2],
            borderColor: 'hsl(25, 100%, 65%)',
            backgroundColor: 'hsl(25, 100%, 65%, 0.1)',
            tension: 0.4,
            pointBackgroundColor: 'hsl(25, 100%, 65%)',
            pointBorderColor: 'hsl(25, 100%, 65%)',
            pointHoverBackgroundColor: 'hsl(25, 100%, 75%)',
            pointHoverBorderColor: 'hsl(25, 100%, 75%)'
          }
        ]
      }
    },
    "CO₂ vs Methane": {
      paragraph: "Carbon dioxide and methane are the two most significant greenhouse gases, but they differ dramatically in their atmospheric behavior and warming potential. CO₂ is the most abundant anthropogenic greenhouse gas, representing about 76% of total emissions, with an atmospheric lifetime of 300-1000 years. Its concentration has increased 47% since pre-industrial times. Methane, while representing only 16% of emissions by volume, is 25-30 times more potent at trapping heat over 100 years and 80 times more potent over 20 years. Current methane concentrations are 156% above pre-industrial levels. CO₂ primarily comes from fossil fuel combustion and deforestation, while methane sources include agriculture (especially livestock), landfills, oil and gas operations, and wetlands. Methane's shorter atmospheric lifetime (about 9 years) means reducing methane emissions can provide relatively quick climate benefits. However, CO₂'s longevity means it accumulates over time, making it the primary driver of long-term warming. Addressing both gases requires different strategies: energy transition and reforestation for CO₂, and agricultural improvements and leak reduction for methane.",
      chartData: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025'],
        datasets: [
          {
            label: 'CO₂ Concentration (ppm)',
            data: [354, 361, 369, 379, 389, 401, 414, 425],
            borderColor: 'hsl(210, 100%, 60%)',
            backgroundColor: 'hsl(210, 100%, 60%, 0.1)',
            tension: 0.4,
            pointBackgroundColor: 'hsl(210, 100%, 60%)',
            pointBorderColor: 'hsl(210, 100%, 60%)',
            pointHoverBackgroundColor: 'hsl(210, 100%, 70%)',
            pointHoverBorderColor: 'hsl(210, 100%, 70%)'
          },
          {
            label: 'Methane Concentration (ppb)',
            data: [1695, 1732, 1773, 1774, 1808, 1834, 1867, 1890],
            borderColor: 'hsl(270, 70%, 65%)',
            backgroundColor: 'hsl(270, 70%, 65%, 0.1)',
            tension: 0.4,
            pointBackgroundColor: 'hsl(270, 70%, 65%)',
            pointBorderColor: 'hsl(270, 70%, 65%)',
            pointHoverBackgroundColor: 'hsl(270, 70%, 75%)',
            pointHoverBorderColor: 'hsl(270, 70%, 75%)'
          }
        ]
      }
    },
    "Carbon Sinks": {
      paragraph: "Carbon sinks are natural or artificial reservoirs that absorb and store more carbon dioxide from the atmosphere than they release, playing a crucial role in regulating Earth's carbon cycle. The primary natural carbon sinks include forests, oceans, and soil systems. Forests absorb approximately 2.4 billion tons of CO₂ annually through photosynthesis, storing carbon in biomass and soil. Oceans are the largest carbon sink, absorbing about 2.5 billion tons yearly, though this causes ocean acidification. Soil stores more carbon than the atmosphere and vegetation combined, holding organic matter from decomposed plants and animals. However, human activities are compromising these natural systems. Deforestation reduces forest carbon storage capacity by 1.1 billion tons annually. Climate change itself threatens sink effectiveness—warming temperatures can turn forests into carbon sources during droughts and fires, while ocean warming reduces CO₂ solubility. Agricultural practices, urbanization, and land degradation also diminish soil carbon storage. Protecting and restoring natural carbon sinks through reforestation, sustainable agriculture, wetland restoration, and marine conservation is essential for climate mitigation, as these systems provide cost-effective, scalable solutions for atmospheric carbon removal.",
      chartData: {
        labels: ['1990', '1995', '2000', '2005', '2010', '2015', '2020', '2025'],
        datasets: [
          {
            label: 'Ocean CO₂ Uptake (GT/year)',
            data: [1.8, 2.0, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7],
            borderColor: 'hsl(150, 80%, 50%)',
            backgroundColor: 'hsl(150, 80%, 50%, 0.1)',
            tension: 0.4,
            pointBackgroundColor: 'hsl(150, 80%, 50%)',
            pointBorderColor: 'hsl(150, 80%, 50%)',
            pointHoverBackgroundColor: 'hsl(150, 80%, 60%)',
            pointHoverBorderColor: 'hsl(150, 80%, 60%)'
          },
          {
            label: 'Land CO₂ Uptake (GT/year)',
            data: [0.9, 1.1, 1.3, 1.0, 1.5, 1.8, 1.2, 1.6],
            borderColor: 'hsl(120, 60%, 45%)',
            backgroundColor: 'hsl(120, 60%, 45%, 0.1)',
            tension: 0.4,
            pointBackgroundColor: 'hsl(120, 60%, 45%)',
            pointBorderColor: 'hsl(120, 60%, 45%)',
            pointHoverBackgroundColor: 'hsl(120, 60%, 55%)',
            pointHoverBorderColor: 'hsl(120, 60%, 55%)'
          }
        ]
      }
    }
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'hsl(180, 50%, 90%)',
          font: {
            family: 'Inter'
          }
        }
      },
      tooltip: {
        backgroundColor: 'hsl(220, 20%, 10%)',
        titleColor: 'hsl(180, 50%, 90%)',
        bodyColor: 'hsl(180, 50%, 90%)',
        borderColor: 'hsl(180, 85%, 45%)',
        borderWidth: 1
      }
    },
    scales: {
      x: {
        grid: {
          color: 'hsl(220, 15%, 20%)',
        },
        ticks: {
          color: 'hsl(180, 50%, 90%)',
          font: {
            family: 'Inter'
          }
        }
      },
      y: {
        grid: {
          color: 'hsl(220, 15%, 20%)',
        },
        ticks: {
          color: 'hsl(180, 50%, 90%)',
          font: {
            family: 'Inter'
          }
        }
      }
    }
  };

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
                
                <h3 className="text-2xl font-playfair font-semibold mb-6 text-foreground">
                  {item.title}
                </h3>
                
                <Button 
                  onClick={() => setSelectedTopic(item.title)}
                  variant="outline"
                  className="w-full"
                >
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        {/* Overlay */}
        {selectedTopic && (
          <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="max-w-6xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                {/* Close Button */}
                <Button
                  onClick={() => setSelectedTopic(null)}
                  variant="ghost"
                  size="icon"
                  className="absolute top-0 right-0 z-10 text-foreground hover:bg-surface"
                >
                  <X className="w-6 h-6" />
                </Button>

                {/* Content */}
                <div className="text-center mb-8">
                  <h2 className="text-6xl md:text-7xl font-playfair font-bold gradient-text mb-8">
                    {selectedTopic}
                  </h2>
                  
                  <div className="max-w-4xl mx-auto mb-12">
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {topicContent[selectedTopic as keyof typeof topicContent]?.paragraph}
                    </p>
                  </div>

                  {/* Chart */}
                  <div className="bg-surface/50 rounded-2xl p-8 backdrop-blur-lg border border-border/50">
                    <div className="h-96">
                      <Line 
                        data={topicContent[selectedTopic as keyof typeof topicContent]?.chartData} 
                        options={chartOptions} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EducateSection;