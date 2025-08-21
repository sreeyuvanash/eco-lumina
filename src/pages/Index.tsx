import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EducateSection from "@/components/EducateSection";
import MotivateSection from "@/components/MotivateSection";
import PhenomenaSection from "@/components/PhenomenaSection";
import DataSection from "@/components/DataSection";
import SuggestionsSection from "@/components/SuggestionsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <EducateSection />
      <MotivateSection />
      <PhenomenaSection />
      <DataSection />
      <SuggestionsSection />
      <Footer />
    </div>
  );
};

export default Index;
