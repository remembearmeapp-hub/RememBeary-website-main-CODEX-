import { motion, useInView } from "motion/react";
import { Brain, Languages, MessageCircleOff } from "lucide-react";
import { useRef } from "react";
import BearConfused from "../../imports/BearConfused_Compressed.png";

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" ref={ref} className="relative overflow-hidden bg-[#F8FAFC] px-6 pb-28 pt-36 lg:pt-40">
      {/* Background blurred patterns on darker gray background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft blue glow behind the text - slightly more visible on darker gray */}
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-[#72D8FF]/7 rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1120px]">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_440px] lg:items-start xl:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-1 relative z-10"
          >
            <div className="space-y-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-[#FFC2CC]/70 bg-[#FFE7EC] px-5 py-3 shadow-[0_12px_32px_rgba(255,109,140,0.10)]"
              >
                <span className="text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#7B2434]">Проблема</span>
              </motion.div>

              <div className="max-w-[560px] space-y-4">
                <h2 className="max-w-[500px] text-[34px] font-extrabold leading-[0.96] tracking-[-0.04em] text-[#1E2430] md:text-[48px] xl:text-[56px]">
                  Почему обычные
                  <br />
                  способы
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6E89] via-[#F38B8E] to-[#D68A7A] bg-clip-text text-transparent">
                    так и не помогают
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-[#FF6E89] via-[#F38B8E] to-[#D68A7A] bg-clip-text text-transparent">
                    заговорить
                  </span>
                </h2>

                <p className="mt-6 max-w-[540px] text-[17px] leading-[1.75] text-[#667085] md:text-[18px]">
                  Ты наверняка уже попробовал всё:{" "}
                  <span className="font-bold text-[#344054]">
                    книги, программы, языковые курсы
                  </span>
                  . Но так и не заговорил. Многие годы мы зубрим правила, составляем таблицы времён и переводим
                  тексты, но, оказываясь в реальной ситуации общения, всё равно впадаем в ступор. Знакомая ситуация?
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 36 }}
            animate={isInView ? { opacity: 1, scale: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="order-2 relative z-10 flex justify-center overflow-visible lg:justify-end lg:pt-4"
          >
            <motion.img
              src={BearConfused}
              alt="Растерянный медведь RememBeary"
              className="relative z-10 mx-auto w-full max-w-[672px] -translate-x-[34px] translate-y-[74px] scale-[1.18] drop-shadow-[0_24px_44px_rgba(24,50,70,0.18)] lg:origin-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>

        <div className="mt-28 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[26px] bg-white px-7 py-8 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]">
            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,#70A9FF_0%,#4E88E8_100%)] text-white shadow-[0_18px_34px_rgba(99,146,232,0.22),0_0_34px_rgba(112,169,255,0.18)]">
              <Languages className="h-10 w-10" strokeWidth={2.2} />
            </div>
            <h3 className="mt-6 text-[18px] font-bold leading-[1.25] text-[#1E2430]">Переводишь в голове</h3>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#667085]">
              Вместо того чтобы воспринимать речь напрямую, мозг тратит драгоценные секунды на внутренний перевод
              каждого слова.
            </p>
          </div>

          <div className="rounded-[26px] bg-white px-7 py-8 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]">
            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,#FF8A95_0%,#FF6D7B_100%)] text-white shadow-[0_18px_34px_rgba(255,120,132,0.22),0_0_34px_rgba(255,138,149,0.18)]">
              <MessageCircleOff className="h-10 w-10" strokeWidth={2.2} />
            </div>
            <h3 className="mt-6 text-[18px] font-bold leading-[1.25] text-[#1E2430]">Стесняешься открыть рот</h3>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#667085]">
              Страх ошибиться в грамматике или произношении сковывает настолько, что проще промолчать или ответить
              очень коротко.
            </p>
          </div>

          <div className="rounded-[26px] bg-white px-7 py-8 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)] md:col-span-2 xl:col-span-1">
            <div className="flex h-[88px] w-[88px] items-center justify-center rounded-[28px] bg-[linear-gradient(180deg,#73D4DA_0%,#57BEDA_100%)] text-white shadow-[0_18px_34px_rgba(98,198,216,0.22),0_0_34px_rgba(115,212,218,0.18)]">
              <Brain className="h-10 w-10" strokeWidth={2.2} />
            </div>
            <h3 className="mt-6 text-[18px] font-bold leading-[1.25] text-[#1E2430]">В голове пустота</h3>
            <p className="mt-4 text-[16px] leading-[1.8] text-[#667085]">
              Когда к тебе обращаются, даже знакомые слова внезапно исчезают, оставляя неловкую паузу и чувство
              внутренней паники.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[30px] border border-[rgba(255,255,255,0.12)] bg-[linear-gradient(135deg,#3A5276_0%,#456187_52%,#395275_100%)] px-7 py-8 shadow-[8px_8px_18px_rgba(71,95,133,0.26),-8px_-8px_28px_rgba(255,255,255,0.08),inset_-1px_-1px_4px_rgba(26,40,61,0.34),inset_-2px_3px_1.5px_rgba(255,255,255,0.16)] md:px-9 md:py-9">
          <div className="flex flex-col items-center gap-8 text-center">
            <div className="max-w-[620px]">
              <p className="text-[15px] font-semibold uppercase tracking-[0.14em] text-[#FFB4BF]">Что важно понять</p>
              <p className="mt-3 text-[24px] font-extrabold leading-[1.16] tracking-[-0.03em] text-white md:text-[32px]">
                И проблема тут не в тебе...
                <br />
                <span className="text-[#D6DCE8]">большинство способов учат понимать, но не учат говорить.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
