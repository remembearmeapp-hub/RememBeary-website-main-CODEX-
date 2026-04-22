import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  MessageSquare,
  BookOpen,
  Lightbulb,
  Briefcase,
  Sparkles,
  Gift,
  Headphones,
  GraduationCap,
} from "lucide-react";

export function WhatsInside() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: <MessageSquare className="w-7 h-7" strokeWidth={2.4} />,
      title: "4800+ нужных фраз",
      description: "Фразы, которые реально нужны для повседневного общения",
      color: "from-[#55B8FF] to-[#4E7FFF]",
    },
    {
      icon: <Headphones className="w-7 h-7" strokeWidth={2.4} />,
      title: "Готовые конструкции",
      description: "Для повседневной жизни, бытовых ситуаций и работы",
      color: "from-[#9B7BFF] to-[#6F9BFF]",
    },
    {
      icon: <GraduationCap className="w-7 h-7" strokeWidth={2.4} />,
      title: "Профессиональные блоки",
      description: "Для таксистов, строителей, ремонтников и других профессий",
      color: "from-[#21D3A0] to-[#21B8CF]",
    },
    {
      icon: <BookOpen className="w-7 h-7" strokeWidth={2.4} />,
      title: "Фразы выживания",
      description: "Банк, больница, Walmart, аптека и другие важные места",
      color: "from-[#FFA06A] to-[#FF6B82]",
    },
    {
      icon: <Lightbulb className="w-7 h-7" strokeWidth={2.4} />,
      title: "3000+ нужных слов",
      description: "Ты учишь их сразу в живых фразах, а не отдельными словами",
      color: "from-[#F45E9C] to-[#B56DFF]",
    },
    {
      icon: <Briefcase className="w-7 h-7" strokeWidth={2.4} />,
      title: "Грамматика в цвете",
      description: "Красивая и понятная грамматика, чтобы видеть логику языка",
      color: "from-[#19A7FF] to-[#08C79A]",
    },
    {
      icon: <Sparkles className="w-7 h-7" strokeWidth={2.4} />,
      title: "Советы иммигранту",
      description: "Как перестать бояться говорить и справиться с языковым барьером",
      color: "from-[#7A6FFF] to-[#FFBC73]",
    },
    {
      icon: <Gift className="w-7 h-7" strokeWidth={2.4} />,
      title: "И это только начало",
      description: "Я постоянно буду добавлять новые блоки и новые полезные темы",
      color: "from-[#26C98F] to-[#57D2C5]",
    },
  ];

  return (
    <section id="features" ref={ref} className="relative overflow-hidden bg-[#F8FAFC] px-6 py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 h-[600px] w-[600px] rounded-full bg-[#47B8F5]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 h-[600px] w-[600px] rounded-full bg-[#5A8BFF]/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-[1300px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-24 space-y-6 text-center"
        >
          <div className="inline-block rounded-full border border-[#47B8F5]/10 bg-white px-6 py-2 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#47B8F5]">Что внутри</span>
          </div>
          <h2 className="mx-auto max-w-[1000px] text-[34px] font-extrabold leading-tight text-[#1E2430] md:text-[46px] lg:text-[52px]">
            В приложении есть всё для{" "}
            <span className="bg-gradient-to-r from-[#47B8F5] to-[#5A8BFF] bg-clip-text text-transparent">
              быстрого прогресса
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

interface FeatureCardProps {
  feature: Feature;
  index: number;
  isInView: boolean;
}

function FeatureCard({ feature, index, isInView }: FeatureCardProps) {
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
      className="group relative p-10 bg-white rounded-[40px] shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)] hover:shadow-[8px_8px_16px_rgba(163,177,198,0.28),-8px_-8px_28px_rgba(255,255,255,0.28),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)] transition-[box-shadow] duration-200 ease-out flex flex-col items-center text-center will-change-transform"
    >
      <div className={`mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-[24px] bg-gradient-to-br ${feature.color} text-white shadow-[0_16px_28px_rgba(32,50,74,0.14)] group-hover:scale-110 transition-transform duration-200 ease-out`}>
        {feature.icon}
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-extrabold text-[#1E2430] leading-snug group-hover:text-[#47B8F5] transition-colors duration-200 ease-out">
          {feature.title}
        </h3>
        <p className="text-[#667085] text-[15px] leading-relaxed font-medium">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
