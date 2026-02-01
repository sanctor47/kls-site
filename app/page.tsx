import { CTABand } from "@/components/sections/CTABand";
import { HeroSection } from "@/components/sections/HeroSection";
import { HighlightsSection } from "@/components/sections/HighlightsSection";
import { IntroSection } from "@/components/sections/IntroSection";
import Partners from "@/components/sections/Partners";
import { PathwaysPreview } from "@/components/sections/PathwaysPreview";
import { TrustBar } from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TrustBar />
      <IntroSection />
      <HighlightsSection />
      <PathwaysPreview />
      <Partners />
      <CTABand />
    </div>
  );
}
