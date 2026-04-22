import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Globe, Hammer, Plane, Sparkles, Heart, Users } from "lucide-react";

export function WhoItsFor() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-white to-[#F7F9FC] px-6 py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-[520px] w-[520px] rounded-full bg-[#47B8F5]/6 blur-[120px]" />
        <div className="absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#15D38A]/6 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1240px]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-16 max-w-[900px] text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#47B8F5]/15 bg-white px-5 py-2 shadow-sm">
            <Sparkles className="h-4 w-4 text-[#47B8F5]" />
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#47B8F5]">Для кого</span>
          </div>

          <h2 className="text-[38px] font-extrabold leading-[1.08] text-[#1E2430] md:text-[54px]">
            Кому особенно подойдёт{" "}
            <span className="bg-gradient-to-r from-[#47B8F5] to-[#5A8BFF] bg-clip-text text-transparent">
              RememBeary
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-[760px] text-[20px] leading-[1.75] text-[#667085]">
            Этот формат подойдёт тем, кому важно не просто понимать английский, а наконец начать использовать его в
            реальной жизни.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.42 }}
          className="mt-16"
        >
          <div className="mx-auto max-w-[1180px]">
            <div className="flex flex-wrap justify-center gap-5">
              <AudienceBubble
                color="from-[#47B8F5] to-[#72D8FF]"
                icon={<Globe className="h-5 w-5" />}
                text="Тем, кто уже живёт за границей и устал просто «кивать и улыбаться»."
              />
              <AudienceBubble
                color="from-[#15D38A] to-[#47B8F5]"
                icon={<Plane className="h-5 w-5" />}
                text="Тем, кто только собирается переезжать и хочет подготовиться заранее."
              />
              <AudienceBubble
                color="from-[#FFB067] to-[#FF7E8A]"
                icon={<Hammer className="h-5 w-5" />}
                text="Тем, кто работает руками и хочет напрямую говорить с заказчиками."
              />
              <AudienceBubble
                color="from-[#A98BFF] to-[#7C5CFF]"
                icon={<Sparkles className="h-5 w-5" />}
                text="Тем, кто пробовал популярные приложения и всё равно не заговорил."
              />
              <AudienceBubble
                color="from-[#47B8F5] to-[#A98BFF]"
                icon={<Heart className="h-5 w-5" />}
                text="Начинающим и продолжающим — всем, кто хочет учиться легко и с удовольствием."
              />
              <AudienceBubble
                color="from-[#15D38A] to-[#72D8FF]"
                icon={<Users className="h-5 w-5" />}
                text="Всем, кто хочет наконец-то заговорить, а не просто «знать»."
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function AudienceBubble({
  color,
  icon,
  text,
}: {
  color: string;
  icon: JSX.Element;
  text: string;
}) {
  return (
    <div
      className="flex w-full max-w-[490px] items-center gap-4 rounded-full bg-white px-6 py-5 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]"
    >
      <div
        className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${color} text-white shadow-[0_12px_22px_rgba(32,50,74,0.10)]`}
      >
        {icon}
      </div>
      <p className="text-[18px] leading-[1.6] text-[#1E2430]">{text}</p>
    </div>
  );
}
