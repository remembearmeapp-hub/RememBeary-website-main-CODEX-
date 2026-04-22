import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { HowItWorks } from "./components/HowItWorks";
import { RealAudioPlayer } from "./components/RealAudioPlayer";
import { Results } from "./components/Results";
import { ProgramPrinciples } from "./components/ProgramPrinciples";
import { WhyRememberry } from "./components/WhyRememberry";
import { WhatsInside } from "./components/WhatsInside";
import { WhoItsFor } from "./components/WhoItsFor";
import { MethodPhilosophy } from "./components/MethodPhilosophy";
import { FinalCTA } from "./components/FinalCTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { LegalPage } from "./components/LegalPage";
import { privacyPolicyContent, termsOfUseContent } from "./legalContent";

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/privacy-policy") {
    return <LegalPage document={privacyPolicyContent} />;
  }

  if (pathname === "/terms-of-use") {
    return <LegalPage document={termsOfUseContent} />;
  }

  return (
    <div className="min-h-screen bg-[#EEF2F6]">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <RealAudioPlayer />
      <Results />
      <ProgramPrinciples />
      <WhyRememberry />
      <WhatsInside />
      <WhoItsFor />
      <MethodPhilosophy />
      <FinalCTA />
      <FAQ />
      <Footer />
    </div>
  );
}
