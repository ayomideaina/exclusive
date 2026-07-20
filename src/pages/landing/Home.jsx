import HeroSection from "./components/HeroSection";
import FlashSalesSection from "./components/FlashSalesSection";
import CategoriesSection from "./components/CategoriesSection";
import BestSellingSection from "./components/BestSellingSection";
import MusicBanner from "./components/MusicBanner";
import ExploreProductsSection from "./components/ExploreProductsSection";
import NewArrivalSection from "./components/NewArrivalSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FlashSalesSection />
      <hr className="container-app border-border-light" />
      <CategoriesSection />
      <hr className="container-app border-border-light" />
      <BestSellingSection />
      <MusicBanner />
      <ExploreProductsSection />
      <NewArrivalSection />
      <FeaturesSection />
    </>
  );
}

