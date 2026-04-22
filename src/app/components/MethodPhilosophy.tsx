import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

export function MethodPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-[#F7F9FC] to-white px-6 py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-24 h-[500px] w-[500px] rounded-full bg-[#B9A7FF]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-[520px] w-[520px] rounded-full bg-[#47B8F5]/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[980px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto text-center"
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#B9A7FF]/20 bg-white px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#B9A7FF]" />
            <span className="text-sm font-semibold text-[#B9A7FF]">От меня лично</span>
          </div>

          <h2 className="mx-auto max-w-[780px] text-[38px] font-extrabold leading-[1.08] text-[#1E2430] md:text-[56px]">
            Я делал это приложение
            <span className="bg-gradient-to-r from-[#B9A7FF] to-[#47B8F5] bg-clip-text text-transparent">
              {" "}
              для себя…
            </span>
            <br />
            а теперь и для тебя
          </h2>

          <div className="relative mx-auto mt-10 max-w-[800px] rounded-[36px] bg-white px-8 py-7 pl-16 text-left shadow-[6px_6px_12px_rgba(163,177,198,0.16),-6px_-6px_23.9px_rgba(255,255,255,0.22),inset_-1px_-1px_4px_rgba(0,0,0,0.10),inset_-2px_3px_1.5px_rgba(255,255,255,0.34)] md:px-10 md:py-8 md:pl-[72px]">
            <div className="pointer-events-none absolute left-5 top-1 text-[72px] font-bold leading-none text-[#B9A7FF]/18 md:left-7 md:top-2">
              “
            </div>
            <div className="pointer-events-none absolute bottom-0 right-6 text-[72px] font-bold leading-none text-[#47B8F5]/14 md:right-8">
              ”
            </div>

            <div className="relative z-10 space-y-4 text-[20px] leading-[1.72] text-[#667085]">
              <p>
                Я сам прилетел в Канаду несколько лет назад. И тогда наконец понял:{" "}
                <span className="font-bold text-[#1E2430]">слушать и говорить — это две огромные разницы</span>.
              </p>
              <p>
                До этого я никогда в жизни не говорил по-английски. Смотрел сериалы, понимал довольно многое — но
                открыть рот было совсем другим уровнем. Я знал кучу слов, но даже заказать кофе в{" "}
                <span className="font-bold text-[#1E2430]">Tim Hortons</span> было страшно.
              </p>
              <p>
                Тогда я придумал этот тренажёр по сути для себя. А потом понял — он нужен не только мне. И сейчас я
                уже спокойно общаюсь на работе, в магазине и просто с людьми.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-10 max-w-[760px] rounded-[34px] bg-gradient-to-br from-white to-[#F9FBFF] px-8 py-8 shadow-[6px_6px_12px_rgba(163,177,198,0.16),-6px_-6px_23.9px_rgba(255,255,255,0.22),inset_-1px_-1px_4px_rgba(0,0,0,0.10),inset_-2px_3px_1.5px_rgba(255,255,255,0.34)]"
          >
            <p className="text-[31px] font-bold italic leading-[1.45] text-[#1E2430]">
              «Если получилось у меня —
              <span className="box-decoration-clone bg-gradient-to-r from-[#47B8F5] to-[#15D38A] bg-clip-text px-[0.08em] text-transparent">
                {" "}
                получится и у тебя
              </span>
              ».
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
