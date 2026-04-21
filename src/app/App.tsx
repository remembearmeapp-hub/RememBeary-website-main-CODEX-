import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { HowItWorks } from "./components/HowItWorks";
import { RealAudioPlayer } from "./components/RealAudioPlayer";
import { ProgramPrinciples } from "./components/ProgramPrinciples";
import { WhyRememberry } from "./components/WhyRememberry";
import { WhatsInside } from "./components/WhatsInside";
import { WhoItsFor } from "./components/WhoItsFor";
import { MethodPhilosophy } from "./components/MethodPhilosophy";
import { FinalCTA } from "./components/FinalCTA";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#EEF2F6]">
      <Header />
      <Hero />
      <Problem />
      <Solution />
      <HowItWorks />
      <RealAudioPlayer />
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
