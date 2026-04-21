import { motion, useInView } from "motion/react";
import { useRef } from "react";
import BearConfused from "../../imports/BearConfused_Compressed.png";

export function Problem() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" ref={ref} className="py-32 px-6 relative overflow-hidden bg-[#F1F5F9]">
      {/* Background blurred patterns on darker gray background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft pink glow behind the bear - slightly more visible on darker gray */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF5C77]/8 rounded-full blur-[140px]" />
        {/* Soft blue glow behind the text - slightly more visible on darker gray */}
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[600px] h-[600px] bg-[#72D8FF]/8 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1200px] mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left: Confused Bear Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            animate={isInView ? { opacity: 1, scale: 1.49, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center order-2 md:order-1"
          >
            <motion.img
              src={BearConfused}
              alt="Confused Bear"
              className="w-full max-w-[450px] drop-shadow-[0_30px_100px_rgba(32,50,74,0.12)] relative z-10"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8 order-1 md:order-2 relative z-10"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-white rounded-full shadow-sm border border-[#FF5C77]/10"
              >
                <span className="text-sm font-semibold text-[#FF5C77]">Знакомо?</span>
              </motion.div>

              <h2 className="max-w-[760px] text-4xl md:text-[3.4rem] lg:text-[3.25rem] font-extrabold text-[#1E2430] leading-[1.08] tracking-[-0.03em]">
                Почему обычные способы
                <br />
                <span className="bg-gradient-to-r from-[#FF5C77] to-[#FFC58F] bg-clip-text text-transparent">
                  не работают
                </span>
              </h2>

              <div className="max-w-[700px] space-y-5">
                <p className="text-[19px] text-[#667085] leading-relaxed font-normal opacity-90">
                  Друг, ты наверняка уже{" "}
                  <span className="font-bold text-[#1E2430]">пробовал всё</span>: программы, курсы, репетиторов. А в
                  итоге всё ещё{" "}
                  <span className="font-bold bg-gradient-to-r from-[#FF5C77] to-[#FFC58F] bg-clip-text text-transparent">
                    переводишь в голове
                  </span>
                  , стесняешься открыть рот и боишься заказать даже кофе.
                </p>

                <p className="text-[19px] text-[#667085] leading-relaxed font-normal opacity-90">
                  Ты знаешь{" "}
                  <span className="font-bold text-[#1E2430]">кучу слов</span>, понимаешь грамматику, смотришь сериалы
                  без субтитров... но когда нужно что-то сказать, в голове{" "}
                  <span className="font-bold bg-gradient-to-r from-[#FF5C77] to-[#FFC58F] bg-clip-text text-transparent">
                    пустота, ступор и стыд
                  </span>
                  . Я сам через это прошёл и знаю, как это бесит.
                </p>

                {/*
                <div className="rounded-[28px] bg-white/70 px-6 py-5 border border-white/70 shadow-[0_12px_30px_-24px_rgba(32,50,74,0.22)]">
                  <p className="text-[19px] text-[#4B5565] leading-relaxed font-normal">
                    Мы учим язык не так, как учат дети. Дети не зубрят времена — они{" "}
                    <span className="font-bold text-[#1E2430]">слушают, повторяют и говорят</span>. Именно поэтому они
                    <span className="font-bold bg-gradient-to-r from-[#47B8F5] to-[#15D38A] bg-clip-text text-transparent">
                      {" "}говорят свободно
                    </span>
                    , а мы — нет.
                  </p>
                </div>
                */}

                <div className="space-y-5">
                  <p className="text-[19px] text-[#667085] leading-relaxed font-normal opacity-90">
                    Дело в том, что классические приложения и курсы в основном учат{" "}
                    <span className="font-bold text-[#1E2430]">читать и писать</span>. А говорить они практически не
                    учат.
                  </p>

                  <div className="rounded-[24px] bg-white/75 px-6 py-5 border border-white/70 shadow-[0_12px_30px_-24px_rgba(32,50,74,0.22)]">
                    <p className="text-[19px] text-[#4B5565] leading-relaxed font-normal">
                      Поэтому я и создал{" "}
                      <span className="font-bold bg-gradient-to-r from-[#47B8F5] to-[#15D38A] bg-clip-text text-transparent">
                        Remem
                        Beary
                      </span>
                      {" "}— приложение, которое тренирует{" "}
                      <span className="font-bold bg-gradient-to-r from-[#47B8F5] to-[#15D38A] bg-clip-text text-transparent">
                        исключительно навык общения
                      </span>
                      . Здесь вы будете говорить, говорить и ещё раз говорить — без осуждения, без стресса и с
                      удовольствием от ежедневных маленьких побед.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
