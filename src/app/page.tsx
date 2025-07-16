import AppreciationHeroSection from "@/components/AppreciationHeroSection";
import EarnHeroSection from "@/components/EarnHeroSection";
import Footer from "@/components/Footer";
import GardenCommunityStory from "@/components/GardenCommunityStory";
import HallOfFameUser from "@/components/HallOfFameUser";
import HeroSection from "@/components/HeroSection";
import RoadmapIntroSection from "@/components/RoadmapIntroSection";
import SeedTokenInfoSection from "@/components/SeedTokenInfoSection";
import UnderSpotLighte from "@/components/UnderSpotLighte";
import VirtualWorldToRealLife from "@/components/VirtualWorldToRealLife";

export default function Home() {
  return (
    <main className="">
     <HeroSection/>
     <GardenCommunityStory/>
     <UnderSpotLighte/>
        <EarnHeroSection/>
        <HallOfFameUser/>
        <VirtualWorldToRealLife/>
        <AppreciationHeroSection/>
        <SeedTokenInfoSection/>
        <div className="lg:block hidden">
          <RoadmapIntroSection/>
        </div>
        <Footer/>
         </main>
  );
}
