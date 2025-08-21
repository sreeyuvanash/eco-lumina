import { useState } from "react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { Button } from "@/components/ui/button";

const DataSection = () => {
  const [activeChart, setActiveChart] = useState("co2");

  // Sample climate data - in a real app, this would come from the U.S. Greenhouse Gas Center API
  const co2Data = [
    { year: 1980, value: 338.8 },
    { year: 1990, value: 354.4 },
    { year: 2000, value: 369.5 },
    { year: 2010, value: 389.9 },
    { year: 2020, value: 414.2 },
    { year: 2023, value: 421.1 }
  ];

  const methaneData = [
    { year: 1980, value: 1570 },
    { year: 1990, value: 1695 },
    { year: 2000, value: 1773 },
    { year: 2010, value: 1808 },
    { year: 2020, value: 1879 },
    { year: 2023, value: 1931 }
  ];

  const temperatureData = [
    { year: 1980, value: 0.26 },
    { year: 1990, value: 0.45 },
    { year: 2000, value: 0.61 },
    { year: 2010, value: 0.72 },
    { year: 2020, value: 1.02 },
    { year: 2023, value: 1.48 }
  ];

  const charts = {
    co2: {
      title: "Atmospheric CO₂ Levels",
      data: co2Data,
      unit: "ppm",
      color: "#10b981",
      description: "Carbon dioxide concentrations have risen 45% since pre-industrial times."
    },
    methane: {
      title: "Methane Concentrations",
      data: methaneData,
      unit: "ppb",
      color: "#3b82f6",
      description: "Methane levels have more than doubled since 1750, with rapid acceleration recently."
    },
    temperature: {
      title: "Global Temperature Anomaly",
      data: temperatureData,
      unit: "°C",
      color: "#f59e0b",
      description: "Global average temperature has risen 1.1°C above pre-industrial levels."
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const chart = charts[activeChart as keyof typeof charts];
      return (
        <div className="glass p-4 rounded-lg border border-border/50">
          <p className="text-foreground font-medium">{`Year: ${label}`}</p>
          <p className="text-primary font-semibold">
            {`${chart.title}: ${payload[0].value} ${chart.unit}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <section id="data" className="py-24 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-aurora" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-playfair font-bold gradient-text mb-6">
            Climate Data Insights
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Explore real climate data from NASA and NOAA showing the dramatic changes 
            in our atmosphere and global temperatures over recent decades.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Chart Selection */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(charts).map(([key, chart]) => (
              <Button
                key={key}
                variant={activeChart === key ? "hero" : "glass"}
                size="lg"
                onClick={() => setActiveChart(key)}
                className="transition-all duration-300"
              >
                {chart.title}
              </Button>
            ))}
          </div>

          {/* Chart Display */}
          <div className="glass rounded-3xl p-8 mb-8">
            <div className="mb-8">
              <h3 className="text-3xl font-playfair font-semibold gradient-text mb-4">
                {charts[activeChart as keyof typeof charts].title}
              </h3>
              <p className="text-foreground/70 text-lg">
                {charts[activeChart as keyof typeof charts].description}
              </p>
            </div>

            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                {activeChart === "temperature" ? (
                  <BarChart data={charts[activeChart as keyof typeof charts].data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="year" 
                      stroke="hsl(var(--foreground))" 
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--foreground))" 
                      fontSize={12}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar 
                      dataKey="value" 
                      fill={charts[activeChart as keyof typeof charts].color}
                      radius={[4, 4, 0, 0]}
                    />
                  </BarChart>
                ) : (
                  <LineChart data={charts[activeChart as keyof typeof charts].data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="year" 
                      stroke="hsl(var(--foreground))" 
                      fontSize={12}
                    />
                    <YAxis 
                      stroke="hsl(var(--foreground))" 
                      fontSize={12}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke={charts[activeChart as keyof typeof charts].color}
                      strokeWidth={3}
                      dot={{ fill: charts[activeChart as keyof typeof charts].color, strokeWidth: 2, r: 6 }}
                      activeDot={{ r: 8, stroke: charts[activeChart as keyof typeof charts].color, strokeWidth: 2 }}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>
            </div>
          </div>

          {/* Data Source Attribution */}
          <div className="text-center">
            <p className="text-foreground/60">
              Data sources: NASA Goddard Institute for Space Studies, NOAA Global Monitoring Laboratory, 
              and the U.S. Greenhouse Gas Center
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;