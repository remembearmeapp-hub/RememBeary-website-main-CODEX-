import { useEffect, useState } from "react";
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

const DESKTOP_BREAKPOINT = 1024;
const PRESERVE_4K_WIDTH = 1900;
const PRESERVE_4K_HEIGHT = 1000;
const REFERENCE_VIEWPORT_WIDTH = 1520;
const REFERENCE_VIEWPORT_HEIGHT = 860;

function getDesktopViewportState() {
  if (typeof window === "undefined") {
    return { isDesktop: false, scale: 1, scaledHeight: 0, canvasWidth: 0 };
  }

  const isDesktop = window.innerWidth >= DESKTOP_BREAKPOINT;

  if (!isDesktop) {
    return { isDesktop, scale: 1, scaledHeight: 0, canvasWidth: 0 };
  }

  if (window.innerWidth >= PRESERVE_4K_WIDTH && window.innerHeight >= PRESERVE_4K_HEIGHT) {
    return { isDesktop, scale: 1, scaledHeight: 0, canvasWidth: 0 };
  }

  const widthScale = window.innerWidth / REFERENCE_VIEWPORT_WIDTH;
  const heightScale = window.innerHeight / REFERENCE_VIEWPORT_HEIGHT;
  const scale = Math.min(widthScale, heightScale, 1);
  const scaledHeight = Math.round(window.innerHeight / scale);
  const canvasWidth = Math.max(REFERENCE_VIEWPORT_WIDTH, Math.ceil(window.innerWidth / scale));

  return { isDesktop, scale, scaledHeight, canvasWidth };
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";
  const [desktopViewport, setDesktopViewport] = useState(getDesktopViewportState);

  useEffect(() => {
    const updateDesktopViewport = () => {
      setDesktopViewport(getDesktopViewportState());
    };

    updateDesktopViewport();
    window.addEventListener("resize", updateDesktopViewport);

    return () => {
      window.removeEventListener("resize", updateDesktopViewport);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const previousScrollRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const resetScrollPosition = () => {
      window.scrollTo(0, 0);
    };

    resetScrollPosition();
    requestAnimationFrame(resetScrollPosition);
    window.addEventListener("beforeunload", resetScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", resetScrollPosition);
      window.history.scrollRestoration = previousScrollRestoration;
    };
  }, [pathname]);

  if (pathname === "/privacy-policy") {
    return <LegalPage document={privacyPolicyContent} />;
  }

  if (pathname === "/terms-of-use") {
    return <LegalPage document={termsOfUseContent} />;
  }

  const shouldScaleDesktop = desktopViewport.isDesktop && desktopViewport.scale < 1;
  const scaledContentTopOffset = shouldScaleDesktop ? Math.round(32 / desktopViewport.scale) : 0;
  const desktopViewportStyle = shouldScaleDesktop
    ? {
        minHeight: `${desktopViewport.scaledHeight + scaledContentTopOffset}px`,
      }
    : undefined;
  const desktopCanvasStyle = shouldScaleDesktop
    ? {
        width: `${desktopViewport.canvasWidth}px`,
        minHeight: `${desktopViewport.scaledHeight + scaledContentTopOffset}px`,
        transform: `scale(${desktopViewport.scale})`,
        transformOrigin: "top center",
      }
    : undefined;
  const desktopContentStyle = shouldScaleDesktop
    ? {
        paddingTop: `${scaledContentTopOffset}px`,
      }
    : undefined;
  const pageContent = (
    <>
      <Hero compactDesktop={shouldScaleDesktop} />
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
    </>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#EEF2F6]">
      <Header />
      <div className={shouldScaleDesktop ? "mx-auto flex justify-center" : undefined} style={desktopViewportStyle}>
        {shouldScaleDesktop ? (
          <div style={desktopCanvasStyle}>
            <div style={desktopContentStyle}>{pageContent}</div>
          </div>
        ) : (
          pageContent
        )}
      </div>
    </div>
  );
}
