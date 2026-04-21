import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Headphones, Zap, Volume2, Mic } from "lucide-react";

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: <Headphones className="w-8 h-8" />,
      title: "В наушниках звучит фраза на русском",
      description: "Например: «Мне нужно, чтобы ты починил дверь»",
      color: "from-[#47B8F5] to-[#72D8FF]",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Короткая пауза — вы пытаетесь вспомнить",
      description: "Пробуете сами сказать фразу по-английски. Если не вспомнили — это нормально",
      color: "from-[#B9A7FF] to-[#72D8FF]",
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Слышите правильный ответ",
      description: "Далее звучит: «I need you to fix the door»",
      color: "from-[#15D38A] to-[#47B8F5]",
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Повторяете за диктором вслух",
      description: "Копируете интонацию, ритм и произношение носителя",
      color: "from-[#FF5C77] to-[#B9A7FF]",
    },
  ];

  return (
    <section id="how" ref={ref} className="py-32 px-6 relative overflow-hidden bg-[#F8FAFC]">
      {/* Background gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#47B8F5]/5 to-[#B9A7FF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 space-y-6"
        >
          <div className="inline-block px-6 py-2 bg-white rounded-full border border-[#47B8F5]/10 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#47B8F5]">Методика</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E2430] leading-tight">
            Как проходит одно занятие
          </h2>
          <p className="text-lg text-[#667085] max-w-[700px] mx-auto font-medium opacity-80">
            Простая, понятная система из 5 шагов — без хаоса, без перегруза
          </p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <div className="grid grid-cols-4 items-center gap-14 px-12">
              {steps.map((_, index) => (
                <div key={index} className="relative h-10">
                  {index < steps.length - 1 && (
                    <>
                      <div
                        className={`absolute left-[calc(50%+72px)] top-1/2 border-t-2 border-dashed border-[#B9C7D8] ${
                          index < steps.length - 2 ? "right-[-68px]" : "right-[-92px]"
                        }`}
                      />
                      {index < steps.length - 2 && (
                        <div className="absolute right-[-68px] top-1/2 -translate-y-1/2 text-[#B9C7D8]">
                          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 6L16 11L11 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">
            {steps.map((step, index) => (
              <StepCard key={index} step={step} index={index} isInView={isInView} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-20 max-w-[1080px] rounded-[28px] bg-white px-8 py-7 text-center shadow-[6px_6px_12px_rgba(163,177,198,0.22),-6px_-6px_23.9px_rgba(255,255,255,0.22),inset_-1px_-1px_4px_rgba(0,0,0,0.18),inset_-2px_3px_1.5px_rgba(255,255,255,0.6)]"
        >
          <p className="text-[19px] leading-relaxed text-[#667085]">
            В каждом мини-блоке всего <span className="font-bold text-[#1E2430]">5 фраз</span>. Они зациклены. И за{" "}
            <span className="font-bold text-[#1E2430]">15 минут</span> ты услышишь и повторишь их десятки раз. А к
            концу урока они будут{" "}
            <span className="bg-gradient-to-r from-[#47B8F5] to-[#15D38A] bg-clip-text font-bold text-transparent">
              вылетать из тебя сами
            </span>{" "}
            — без задержки и перевода в уме.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface StepCardProps {
  step: Step;
  index: number;
  isInView: boolean;
}

function StepCard({ step, index, isInView }: StepCardProps) {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: hasEntered ? 0.18 : 0.7,
        delay: hasEntered ? 0 : index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{
        y: -10,
        transition: { duration: 0.18, ease: [0.16, 1, 0.3, 1], delay: 0 },
      }}
      onAnimationComplete={() => {
        if (isInView && !hasEntered) setHasEntered(true);
      }}
      className="group relative p-10 bg-white rounded-[40px] shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)] hover:shadow-[8px_8px_16px_rgba(163,177,198,0.28),-8px_-8px_28px_rgba(255,255,255,0.28),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)] transition-[box-shadow] duration-200 ease-out will-change-transform"
    >
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.6,
              delay: index * 0.12 + 0.12,
              type: "spring",
              stiffness: 220,
              damping: 16,
            }}
            className={`w-16 h-16 flex items-center justify-center rounded-[24px] bg-gradient-to-br ${step.color} text-white shadow-md group-hover:scale-110 transition-transform duration-200 ease-out`}
          >
            {step.icon}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: 10 }}
            animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{
              duration: 0.55,
              delay: index * 0.12 + 0.18,
              type: "spring",
              stiffness: 240,
              damping: 17,
            }}
            className="w-12 h-12 rounded-full bg-[#F1F5F9] flex items-center justify-center border border-[#EEF2F6]"
          >
            <span className="text-xl font-extrabold text-[#47B8F5]">{index + 1}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: index * 0.12 + 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          <h3 className="text-xl font-extrabold text-[#1E2430] leading-snug group-hover:text-[#47B8F5] transition-colors duration-200 ease-out">
            {step.title}
          </h3>
          <p className="text-[#667085] text-[15px] leading-relaxed font-medium">
            {step.description}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
