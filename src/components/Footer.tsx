import { ExternalLink, Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/30 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="text-3xl font-playfair font-bold gradient-text mb-4">
              ClimateData
            </div>
            <p className="text-foreground/70 mb-6">
              Bringing climate science to everyone through beautiful visualizations 
              and actionable insights from leading research institutions.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-background" />
              </a>
            </div>
          </div>

          {/* Data Sources */}
          <div>
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-6">
              Data Sources
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://earth.gov/ghgcenter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  U.S. Greenhouse Gas Center
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://nasa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  NASA Climate Data
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://noaa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  NOAA Climate Monitoring
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
              <li>
                <a
                  href="https://ipcc.ch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center group"
                >
                  IPCC Reports
                  <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => document.getElementById("educate")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Learn About Climate Change
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("data")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Explore Climate Data
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("phenomena")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Climate Phenomena
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("suggestions")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-foreground/70 hover:text-primary transition-colors duration-300"
                >
                  Submit Solutions
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-foreground/60 text-sm">
              © 2024 ClimateData. Built with climate science from NASA and the U.S. Greenhouse Gas Center.
            </p>
            <p className="text-foreground/60 text-sm">
              Together for a sustainable future 🌍
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;