import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Headphones, Brain, Mic, MessageCircle } from "lucide-react";
import BearStudyFriend from "../../imports/Bear_StudyFriend_Clean.png";

export function Solution() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cueCards = [
    {
      icon: <Headphones className="w-7 h-7" />,
      label: "СЛУШАЕШЬ",
      tint: "from-[#FFFFFF] to-[#FFFFFF]",
      iconColor: "text-[#339CF0]",
      textColor: "text-[#339CF0]",
    },
    {
      icon: <Brain className="w-7 h-7" />,
      label: "ВСПОМИНАЕШЬ",
      tint: "from-[#FFFFFF] to-[#FFFFFF]",
      iconColor: "text-[#8D72FF]",
      textColor: "text-[#8D72FF]",
    },
    {
      icon: <Mic className="w-7 h-7" />,
      label: "ГОВОРИШЬ",
      tint: "from-[#FFFFFF] to-[#FFFFFF]",
      iconColor: "text-[#FF4D6D]",
      textColor: "text-[#FF4D6D]",
    },
  ];

  return (
    <section id="solution" ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white to-[#F7F9FC] px-6 py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 h-[540px] w-[540px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#72D8FF]/8 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[520px] w-[520px] translate-x-1/3 rounded-full bg-[#B9A7FF]/8 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1380px] lg:translate-x-[100px]">
        <div className="grid min-w-0 items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] xl:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.94 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-1 flex min-h-[600px] items-center justify-center overflow-visible lg:order-2"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[440px] w-[440px] rounded-full bg-white/60 blur-[105px]" />
            </div>

            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 lg:translate-x-8 lg:scale-[1.06]"
            >
              <img
                src={BearStudyFriend}
                alt="RememBeary bear"
                className="w-full max-w-[360px] lg:w-[790px] lg:max-w-none lg:-translate-x-[70px] drop-shadow-[0_2px_2px_rgba(69,88,120,0.22)] drop-shadow-[0_8px_14px_rgba(69,88,120,0.16)]"
              />
              <motion.div
                initial={{ opacity: 0, y: -16, rotate: 2 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: 2 } : {}}
                transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-[-10px] top-[-34px]"
              >
                <motion.div
                  animate={{ rotate: [2, 1.5, 2] }}
                  transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-[42px] border border-white/90 bg-white/96 px-10 py-7 shadow-[0_24px_54px_-24px_rgba(32,50,74,0.24)]"
                >
                  <div
                    className="absolute bottom-[-18px] left-[64px] h-10 w-7 rotate-[42deg] bg-white shadow-[0_14px_28px_-22px_rgba(32,50,74,0.18)]"
                    style={{ clipPath: "polygon(50% 100%, 0 0, 100% 18%)" }}
                  />
                  <div className="absolute bottom-[8px] left-[58px] h-4 w-4 rounded-full bg-white" />
                  <span className="relative z-10 text-[19px] font-bold leading-tight text-[#2F3446]">
                    “А как бы ты это сказал
                    <br />
                    по-английски?”
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 min-w-0 space-y-8 lg:order-1"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#FFFFFF] bg-white px-4 py-2 shadow-[0_6px_8px_rgba(18,22,31,0.24)]"
              >
                <MessageCircle className="w-4 h-4 text-[#59AEEF]" />
                <span className="text-sm font-semibold text-[#59AEEF]">Знакомься — это RememBeary</span>
              </motion.div>

              <h2 className="mb-8 max-w-[620px] text-4xl font-extrabold leading-tight tracking-[-0.03em] text-[#1E2430] md:text-5xl">
                Твой персональный
                <br />
                <span className="bg-gradient-to-r from-[#47B8F5] to-[#B9A7FF] bg-clip-text text-transparent">
                  англоязычный друг
                </span>
              </h2>

              <div className="max-w-[620px] min-w-0 space-y-6 text-lg font-normal leading-relaxed text-[#667085]">
                <p>
                  RememBeary — это не очередное приложение, где ты просто нажимаешь кнопки и проходишь упражнения.
                </p>

                <p>
                  Это как будто твой <span className="font-bold text-[#1E2430]">личный англоязычный друг</span>,
                  который всегда рядом и постоянно спрашивает:{" "}
                  <span className="font-bold text-[#1E2430]">«А как бы ты это сказал по-английски?»</span> Ты
                  пробуешь ответить. Он подсказывает правильный вариант. Ты повторяешь.
                </p>

                <p>
                  И так шаг за шагом речь начинает складываться сама.{" "}
                  <span className="font-bold text-[#15D38A]">Без стресса.</span> Без оценок. Без давления.
                </p>
              </div>
            </div>

            <div className="grid w-full max-w-[620px] grid-cols-3 gap-2 sm:gap-4">
              {cueCards.map((card, index) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 18 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.55, delay: 0.15 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex w-full flex-col items-center justify-center rounded-[28px] bg-gradient-to-br ${card.tint} px-2 py-5 text-center shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)] sm:rounded-[40px] sm:px-6 sm:py-8`}
                >
                  <div className={`${card.iconColor} mb-3 sm:mb-4`}>{card.icon}</div>
                  <span className={`text-[11px] font-extrabold tracking-[0.04em] ${card.textColor} sm:text-sm sm:tracking-[0.08em]`}>{card.label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-5 pt-2"
            >
              <div className="h-[42px] w-1 rounded-full bg-[#15D38A]" />
              <p className="max-w-[620px] text-[17px] italic font-normal leading-relaxed text-[#7B8798]">
                И мозг начинает работать точно так же, как в детстве.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
