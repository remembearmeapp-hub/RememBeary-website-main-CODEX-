import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const results = [
  {
    icon: "🏆",
    title: "Маленькие победы каждый день",
    text: "Каждый выученный блок — это достижение. Вы будете гордиться собой.",
  },
  {
    icon: "💪",
    title: "Уверенность в разговоре",
    text: "Вы точно знаете, как сказать — потому что уже говорили это сотни раз.",
  },
  {
    icon: "⚡",
    title: "Мгновенное вспоминание",
    text: "Слова приходят автоматически, без \"э-э-э\" и мучительных пауз.",
  },
  {
    icon: "✨",
    title: "Естественная речь",
    text: "Говорите с правильной интонацией и темпом — как носители языка.",
  },
];

export function Results() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white to-[#F7F9FC] px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[120px] h-[460px] w-[460px] rounded-full bg-[#FFB48B]/6 blur-[120px]" />
        <div className="absolute right-[-180px] top-[180px] h-[520px] w-[520px] rounded-full bg-[#47B8F5]/7 blur-[120px]" />
        <div className="absolute left-1/2 top-[55%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#15D38A]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-[920px] text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#15D38A]/18 bg-[#EFFFF7] px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#15D38A]" />
            <span className="text-sm font-semibold text-[#15D38A]">Результаты</span>
          </div>

          <h2 className="text-[38px] font-extrabold leading-[1.08] text-[#1E2430] md:text-[58px]">
            Что вы{" "}
            <span className="bg-gradient-to-r from-[#15D38A] to-[#47B8F5] bg-clip-text text-transparent">
              получите
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[860px] text-[21px] leading-[1.75] text-[#667085]">
            Не абстрактные "навыки" и "уровни", а конкретные, измеримые результаты, которые изменят вашу жизнь.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-10">
          {results.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.12 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative text-center xl:px-4"
            >
              <div className="mx-auto mb-7 flex h-[74px] w-[74px] items-center justify-center text-[48px] leading-none">
                {item.icon}
              </div>

              <h3 className="text-[25px] font-extrabold leading-[1.2] text-[#1E2430]">{item.title}</h3>
              <p className="mt-5 text-[18px] leading-[1.75] text-[#667085]">{item.text}</p>

              {index < results.length - 1 && (
                <div className="pointer-events-none absolute right-[-20px] top-8 hidden h-[180px] w-px bg-gradient-to-b from-transparent via-[#DDE5F0] to-transparent xl:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
