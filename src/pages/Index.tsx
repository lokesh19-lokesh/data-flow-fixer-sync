
import InteriorNavigation from "@/components/interior/InteriorNavigation";
import InteriorHero from "@/components/interior/InteriorHero";
import InteriorServices from "@/components/interior/InteriorServices";
import InteriorPortfolio from "@/components/interior/InteriorPortfolio";
import InteriorAbout from "@/components/interior/InteriorAbout";
import InteriorTestimonials from "@/components/interior/InteriorTestimonials";
import InteriorContact from "@/components/interior/InteriorContact";
import InteriorFooter from "@/components/interior/InteriorFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <InteriorNavigation />
      <InteriorHero />
      <InteriorServices />
      <InteriorPortfolio />
      <InteriorAbout />
      <InteriorTestimonials />
      <InteriorContact />
      <InteriorFooter />
    </div>
  );
};

export default Index;
