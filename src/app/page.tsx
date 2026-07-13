import { Header } from "@/components/Header";
import { MagnifyingGlassDivider } from "@/components/MagnifyingGlassDivider";
import { Hero } from "@/components/sections/Hero";
import { SearchChanged } from "@/components/sections/SearchChanged";
import { Questions } from "@/components/sections/Questions";
import { Takeaways } from "@/components/sections/Takeaways";
import { PanelDiscussion } from "@/components/sections/PanelDiscussion";
import { EventDetails } from "@/components/sections/EventDetails";
import { Flowi } from "@/components/sections/Flowi";
import { FlowiAgentSection } from "@/components/sections/FlowiAgentSection";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MagnifyingGlassDivider />
        <SearchChanged />
        <Questions />
        <Takeaways />
        <PanelDiscussion />
        <EventDetails />
        <Flowi />
        <FAQ />
        <FlowiAgentSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
