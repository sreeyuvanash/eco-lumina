import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Lightbulb } from "lucide-react";

const SuggestionsSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    suggestion: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.suggestion) {
      toast.error("Please fill in all fields");
      return;
    }
    
    // Here you would typically send the data to a server
    console.log("Suggestion submitted:", formData);
    
    toast.success("Thank you for your climate solution idea!");
    setFormData({ name: "", email: "", suggestion: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="suggestions" className="py-24 relative overflow-hidden">
      {/* Glowing Particles Background */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-6">
            <Lightbulb className="w-10 h-10 text-primary animate-glow-pulse" />
          </div>
          
          <h2 className="text-5xl md:text-6xl font-playfair font-bold gradient-text mb-6">
            Share Your Climate Solutions
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Have an idea to fight climate change? Share your innovative solutions with our community. 
            Every idea matters in building a sustainable future.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name *
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="bg-surface border-border focus:border-primary transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="bg-surface border-border focus:border-primary transition-colors duration-300"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="suggestion" className="block text-sm font-medium text-foreground mb-2">
                Your Climate Solution Idea *
              </label>
              <Textarea
                id="suggestion"
                name="suggestion"
                value={formData.suggestion}
                onChange={handleChange}
                placeholder="Describe your innovative idea to combat climate change. What problem does it solve? How would it work? Be as detailed as you'd like..."
                rows={6}
                className="bg-surface border-border focus:border-primary transition-colors duration-300 resize-none"
                required
              />
            </div>

            <div className="pt-4">
              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full group"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                Submit Your Idea
              </Button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <p className="text-sm text-foreground/60">
              By submitting your idea, you're contributing to a global conversation about climate solutions. 
              Together, we can create meaningful change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestionsSection;