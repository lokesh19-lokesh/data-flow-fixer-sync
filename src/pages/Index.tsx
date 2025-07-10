
import CoachingNavigation from "@/components/coaching/CoachingNavigation";
import CoachingHero from "@/components/coaching/CoachingHero";
import ClientLogos from "@/components/coaching/ClientLogos";
import VideoSection from "@/components/coaching/VideoSection";
import AboutSection from "@/components/coaching/AboutSection";
import ProgramsSection from "@/components/coaching/ProgramsSection";
import SuccessStories from "@/components/coaching/SuccessStories";
import FreeResources from "@/components/coaching/FreeResources";
import CoachingFooter from "@/components/coaching/CoachingFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <CoachingNavigation />
      <CoachingHero />
      <ClientLogos />
      <VideoSection />
      <AboutSection />
      <ProgramsSection />
      <SuccessStories />
      <FreeResources />
      <CoachingFooter />
    </div>
  );
};

export default Index;
