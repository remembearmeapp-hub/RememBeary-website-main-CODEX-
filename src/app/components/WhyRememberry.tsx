import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Bolt, Check, MessageCircleHeart, Mic2, RefreshCcw, Sparkles } from "lucide-react";

const points = [
  {
    icon: <MessageCircleHeart className="h-6 w-6" />,
    title: "Живые фразы вместо отдельных слов",
    text: "Ты учишь не отдельные слова, а готовые живые фразы — те, которые реально нужны в жизни.",
    color: "from-[#47B8F5] to-[#6ACBFF]",
  },
  {
    icon: <Bolt className="h-6 w-6" />,
    title: "Одно упражнение — все навыки одновременно",
    items: ["Произношение", "Интонация", "Темп речи", "Аудирование", "Порядок слов", "Активный словарь"],
    color: "from-[#15D38A] to-[#47B8F5]",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Пассивный запас становится активным",
    text: "Ты легко и быстро превращаешь свой пассивный словарный запас в активный, который реально используешь в речи.",
    color: "from-[#FF9800] to-[#FF5C77]",
  },
  {
    icon: <RefreshCcw className="h-6 w-6" />,
    title: "Больше никакого чувства вины",
    text: "Никакого стресса и раздражения. Даже если что-то не вспомнил, ты всё равно в плюсе, потому что хотя бы потренировал произношение.",
    color: "from-[#B78CFF] to-[#6ACBFF]",
  },
  {
    icon: <Mic2 className="h-6 w-6" />,
    title: "Подходит и новичкам, и тем, кто застрял",
    text: "Это приложение очень поможет и новичкам, и тем, кто уже давно учит английский язык, но так и не заговорил на нём из-за отсутствия практики.",
    color: "from-[#69C971] to-[#15D38A]",
  },
];

export function WhyRememberry() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white to-[#F7F9FC] px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[180px] h-[420px] w-[420px] rounded-full bg-[#47B8F5]/7 blur-[120px]" />
        <div className="absolute right-[-180px] bottom-[80px] h-[380px] w-[380px] rounded-full bg-[#15D38A]/7 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-[900px] text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#47B8F5]/15 bg-white px-5 py-2 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#47B8F5]">Чем выделяется</span>
          </div>

          <h2 className="text-[32px] font-extrabold leading-tight text-[#1E2430] md:text-[44px]">
            Почему это не просто{" "}
            <span className="bg-gradient-to-r from-[#47B8F5] to-[#15D38A] bg-clip-text text-transparent">
              ещё одно приложение
            </span>
          </h2>
        </motion.div>

        <div className="mt-[81px] grid gap-8 lg:grid-cols-2">
          {points.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, delay: 0.12 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-[40px] bg-white px-9 py-9 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]"
            >
              <div className="flex items-start gap-5">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-[20px] bg-gradient-to-br ${point.color} text-white shadow-[0_14px_28px_rgba(32,50,74,0.10)]`}>
                  {point.icon}
                </div>

                <div className="space-y-3">
                  <h3 className="text-[24px] font-extrabold leading-[1.15] text-[#1E2430]">{point.title}</h3>
                  {"items" in point ? (
                    <div className="grid gap-x-7 gap-y-3 pt-1 sm:grid-cols-2">
                      {point.items.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#34D399] text-white shadow-[0_8px_18px_rgba(52,211,153,0.18)]">
                            <Check className="h-4 w-4 stroke-[3]" />
                          </div>
                          <span className="text-[18px] font-medium leading-snug text-[#4B5565]">{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[18px] leading-[1.7] text-[#667085]">{point.text}</p>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
