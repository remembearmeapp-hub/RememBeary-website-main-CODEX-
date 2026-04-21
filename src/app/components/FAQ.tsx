import { motion, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const faqs = [
    {
      question: "Чем RememBeary отличается от обычных приложений для английского?",
      answer:
        "Большинство приложений тренируют узнавание слов или грамматические правила. RememBeary тренирует навык активной речи — вы не просто видите перевод, а сначала пытаетесь вспомнить фразу сами, затем слышите правильное произношение и повторяете вслух. Это развивает быстрое вспоминание, произношение и уверенность в разговоре.",
    },
    {
      question: "Мне подойдёт приложение, если я не новичок?",
      answer:
        "Да! RememBeary подходит для уровней от A2 до C1. Даже если вы уже знаете много слов, приложение поможет превратить пассивный словарный запас в активную речь. Многие пользователи говорят, что наконец-то начали использовать слова, которые 'знали, но никогда не могли вспомнить вовремя'.",
    },
    {
      question: "Сколько времени занимает одно занятие?",
      answer:
        "Один аудиоблок — это 5 фраз, которые повторяются по кругу. В среднем это занимает 3-7 минут. Вы сами контролируете темп — можете пройти один блок или несколько. Главное — регулярность, а не продолжительность.",
    },
    {
      question: "А если я не успеваю вспомнить фразы?",
      answer:
        "Это абсолютно нормально! Вся суть метода в том, что вы пробуете вспомнить, даже если не получается. Мозг всё равно активируется, и с каждым повторением вспоминать становится легче. Никакого давления — только спокойная практика.",
    },
    {
      question: "Нужно ли сразу покупать подписку?",
      answer:
        "Нет! Вы получаете 5 полноценных пробных блоков и 125 озвученных фраз абсолютно бесплатно. Этого достаточно, чтобы понять, подходит ли вам метод. Подписка нужна только если захотите продолжить и получить доступ ко всем 4800+ фразам и дополнительным разделам.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-32 px-6 bg-white relative">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Left: Title */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="md:sticky md:top-32 space-y-4"
          >
            <div className="inline-block px-4 py-2 bg-[#F7F9FC] rounded-full border border-[#47B8F5]/20">
              <span className="text-sm font-semibold text-[#47B8F5]">FAQ</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E2430] leading-tight">Частые вопросы</h2>
            <p className="text-[#667085] leading-relaxed">
              Всё, что нужно знать перед тем, как начать учиться с RememBeary
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onClick={() => toggleFAQ(index)}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FAQItemProps {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onClick: () => void;
  isInView: boolean;
}

function FAQItem({ faq, index, isOpen, onClick, isInView }: FAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(32,50,74,0.08)] border border-[#EEF2F6] overflow-hidden hover:shadow-[0_8px_32px_rgba(32,50,74,0.12)] transition-shadow duration-300"
    >
      <button
        onClick={onClick}
        className="w-full p-6 flex items-start justify-between gap-4 text-left hover:bg-[#F7F9FC]/50 transition-colors duration-200"
      >
        <span className="text-lg font-bold text-[#1E2430] flex-1 leading-tight">{faq.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 w-8 h-8 rounded-full bg-[#F7F9FC] flex items-center justify-center"
        >
          {isOpen ? <Minus className="w-5 h-5 text-[#47B8F5]" /> : <Plus className="w-5 h-5 text-[#667085]" />}
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-[#667085] leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
