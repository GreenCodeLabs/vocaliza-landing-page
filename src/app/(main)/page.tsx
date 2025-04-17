import { Footer } from "@/components/footer";
import { MobileSidebar } from "@/components/mobile-sidebar";
import { FaqSection } from "@/components/sections/faq";
import { FeaturesSection } from "@/components/sections/features";
import { HeroSection } from "@/components/sections/hero";
import { PricingSection } from "@/components/sections/pricing";
import { WaitListSection } from "@/components/sections/wait-list";

export default function HomePage() {
  return (
    <>
      <MobileSidebar />
      <div className="w-full min-h-screen px-5 overflow-x-hidden">
        <HeroSection />
        {/* <Carousel speed="fast" items={OurSponsors} /> */}
        {/* <Carousel reverse speed="fast" items={OurCustomers} /> */}
        <FeaturesSection />
        <PricingSection />
        <WaitListSection />
        <FaqSection />
      </div>
      <Footer />
    </>
  );
}
