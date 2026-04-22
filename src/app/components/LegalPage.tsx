import { useEffect } from "react";
import Logo from "../../imports/Logo_2_.png";
import type { LegalDocumentContent } from "../legalContent";

export function LegalPage({ document: legalDocument }: { document: LegalDocumentContent }) {
  useEffect(() => {
    document.title = `${legalDocument.title} - RememBeary`;
  }, [legalDocument.title]);

  return (
    <div className="min-h-screen bg-[#EEF2F6]">
      <div className="relative overflow-hidden bg-gradient-to-b from-[#F7FAFD] to-white px-6 pb-16 pt-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-[#72D8FF]/10 blur-[120px]" />
          <div className="absolute -right-32 top-24 h-[460px] w-[460px] rounded-full bg-[#47B8F5]/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-[1100px]">
          <div className="rounded-full bg-white/78 px-6 py-3 shadow-[0_22px_54px_-24px_rgba(32,50,74,0.34),0_12px_28px_-20px_rgba(71,184,245,0.24)] backdrop-blur-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <a href="/" className="flex items-center gap-2">
                <img src={Logo} alt="RememBeary" className="h-[56px] w-[56px]" />
                <span className="text-xl font-bold text-[#1E2430]">
                  Remem<span className="text-[#6ACBFF]">Beary</span>
                </span>
              </a>

              <a
                href="/"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#47B8F5] shadow-[6px_6px_12px_rgba(163,177,198,0.18),-6px_-6px_23.9px_rgba(255,255,255,0.20),inset_-1px_-1px_4px_rgba(0,0,0,0.10),inset_-2px_3px_1.5px_rgba(255,255,255,0.34)] transition-colors hover:text-[#5A8BFF]"
              >
                Вернуться на сайт
              </a>
            </div>
          </div>

          <div className="mx-auto mt-12 max-w-[900px] rounded-[40px] bg-white px-8 py-10 shadow-[6px_6px_12px_rgba(163,177,198,0.20),-6px_-6px_23.9px_rgba(255,255,255,0.22),inset_-1px_-1px_4px_rgba(0,0,0,0.10),inset_-2px_3px_1.5px_rgba(255,255,255,0.36)] md:px-12 md:py-12">
            <div className="border-b border-[#EEF2F6] pb-8">
              <div className="inline-flex rounded-full border border-[#47B8F5]/10 bg-[#F8FBFF] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#47B8F5]">
                Legal
              </div>
              <h1 className="mt-5 text-[34px] font-extrabold leading-[1.08] text-[#1E2430] md:text-[48px]">
                {legalDocument.title}
              </h1>
              <p className="mt-4 text-[15px] font-medium text-[#667085]">Last updated: {legalDocument.lastUpdated}</p>
              {legalDocument.intro ? (
                <p className="mt-6 max-w-[760px] text-[18px] leading-[1.75] text-[#667085]">{legalDocument.intro}</p>
              ) : null}
            </div>

            <div className="mt-10 space-y-10 text-[17px] leading-[1.8] text-[#667085]">
              {legalDocument.sections.map((section) => (
                <section key={section.title}>
                  <h2 className="text-[24px] font-extrabold leading-[1.2] text-[#1E2430]">{section.title}</h2>
                  <div className="mt-4 space-y-4">{section.content}</div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
