import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Apple, KeyRound, Sparkles } from "lucide-react";

const kidsPrinciples = [
  {
    letter: "K",
    title: "Knowledge",
    description: "Язык через опыт и использование, а не заучивание правил.",
    badgeBg: "bg-[#FF4D8D]",
  },
  {
    letter: "I",
    title: "Immersion",
    description: "Погружение в среду через постоянное слушание и повторение.",
    badgeBg: "bg-[#4F8DF0]",
  },
  {
    letter: "D",
    title: "Discovery",
    description: "Открытие новых фраз и конструкций в живом контексте.",
    badgeBg: "bg-[#FFD33D]",
  },
  {
    letter: "S",
    title: "Speaking",
    description: "Фокус на свободном говорении в реальной жизни.",
    badgeBg: "bg-[#69C971]",
  },
];

const showInlineAppleBlock = false;

export function ProgramPrinciples() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FC] to-white px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-220px] top-[140px] h-[440px] w-[440px] rounded-full bg-[#47B8F5]/7 blur-[120px]" />
        <div className="absolute right-[-180px] top-[260px] h-[380px] w-[380px] rounded-full bg-[#B9A7FF]/7 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1280px] lg:translate-x-[40px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-[900px] text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#47B8F5]/15 bg-white px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#47B8F5]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#47B8F5]">Суть программы</span>
          </div>

          <h2 className="text-5xl font-extrabold leading-tight text-[#1E2430] md:text-6xl">
            Метод{" "}
            <span className="bg-gradient-to-r from-[#47B8F5] to-[#2D8CFF] bg-clip-text text-transparent">
              K.I.D.S.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-[760px] text-[20px] leading-[1.7] text-[#667085]">
            Мы воссоздали процесс, с помощью которого дети учат свой родной язык. Это самый естественный и эффективный
            путь к беглой речи.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-4">
          {kidsPrinciples.map((item, index) => (
            <motion.article
              key={item.letter}
              initial={{ opacity: 0, y: 36 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.12 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[40px] bg-white px-12 py-11 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]"
            >
              <div
                className={`mb-9 flex h-24 w-24 items-center justify-center rounded-[30px] ${item.badgeBg} text-[56px] font-extrabold text-white shadow-[0_18px_32px_rgba(32,50,74,0.12)]`}
              >
                {item.letter}
              </div>

              <h3 className="mb-5 text-[28px] font-extrabold leading-[1.15] text-[#1E2430]">{item.title}</h3>

              <p className="text-[17px] leading-[1.6] text-[#667085]">{item.description}</p>
            </motion.article>
          ))}
        </div>

        {showInlineAppleBlock && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 w-full rounded-[40px] bg-white px-10 py-11 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]"
          >
            <div className="grid gap-8 lg:grid-cols-[0.82fr_1.55fr] lg:items-center">
              <div className="space-y-4 lg:self-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-[24px] bg-gradient-to-br from-[#FF9800] to-[#FF5C77] text-white shadow-[0_16px_30px_rgba(255,120,80,0.18)]">
                  <Apple className="h-7 w-7" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-3xl font-extrabold text-[#1E2430]">Принцип Apple</h3>
                  <p className="text-[17px] leading-[1.65] text-[#667085]">
                    Не просто знать фразу, а доставать <br />
                    её из памяти так же быстро, как любое <br />
                    хорошо выученное слово.
                  </p>
                </div>
              </div>

              <div className="space-y-6 lg:self-center">
                <p className="text-[20px] leading-[1.75] text-[#667085]">
                  Учась в этой программе, твоим единственным ориентиром того, что ты всё хорошо запомнил, будет этот
                  принцип: <span className="font-bold text-[#1E2430]">мгновенное вспоминание любой фразы без задержки</span>.
                  Ты должен вспоминать любую фразу так же мгновенно, как слово{" "}
                  <span className="font-bold text-[#1E2430]">“apple”</span>. Разбуди тебя ночью и спроси, как по-английски
                  “яблоко”, и любой человек ответит мгновенно:{" "}
                  <span className="font-bold text-[#6ACBFF]">Apple</span>.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.72 }}
          className="mt-24"
        >
          <div className="mx-auto max-w-[980px] text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FFB48B]/20 bg-white px-5 py-2 shadow-sm">
              <Apple className="h-4 w-4 text-[#FF8A5C]" />
              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF8A5C]">Тестовый блок</span>
            </div>

            <h2 className="text-5xl font-extrabold leading-tight text-[#1E2430] md:text-6xl">
              Принцип{" "}
              <span className="bg-gradient-to-r from-[#FF9800] to-[#FF5C77] bg-clip-text text-transparent">
                Apple
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-[740px] text-[21px] leading-[1.8] text-[#667085]">
              Не просто знать фразу, а доставать её из памяти так же быстро, как любое хорошо выученное слово.
            </p>

            <div className="mx-auto mt-10 max-w-[980px] rounded-[40px] bg-white px-10 py-9 text-left shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]">
              <p className="text-[20px] leading-[1.75] text-[#667085]">
                Учась в этой программе, твоим единственным ориентиром того, что ты всё хорошо запомнил, будет этот
                принцип: <span className="font-bold text-[#1E2430]">мгновенное вспоминание любой фразы без задержки</span>.
                Ты должен вспоминать любую фразу так же мгновенно, как слово{" "}
                <span className="font-bold text-[#1E2430]">“apple”</span>. Разбуди тебя ночью и спроси, как по-английски
                “яблоко”, и любой человек ответит мгновенно: <span className="font-bold text-[#6ACBFF]">Apple</span>.
              </p>
              <div className="mt-5 flex items-center justify-center gap-3 text-[#FFD33D]">
                <KeyRound className="h-5 w-5" />
                <span className="text-[18px] font-bold">Это ключ.</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
