import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Download, Sparkles } from "lucide-react";
import AppScreen from "../../imports/App_screenshots_6.png";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Large gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#72D8FF]/20 via-[#B9A7FF]/15 to-[#15D38A]/10" />
      <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#47B8F5]/30 to-transparent rounded-full blur-[150px]" />
      <div className="absolute bottom-20 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#B9A7FF]/25 to-transparent rounded-full blur-[120px]" />

      <div className="max-w-[1200px] mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#47B8F5]/30 mb-6"
              >
                <span className="text-sm font-semibold bg-gradient-to-r from-[#47B8F5] to-[#5A8BFF] bg-clip-text text-transparent">
                  Начните прямо сейчас
                </span>
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E2430] leading-tight mb-6">
                Попробуйте бесплатно и почувствуйте{" "}
                <span className="bg-gradient-to-r from-[#47B8F5] to-[#15D38A] bg-clip-text text-transparent">
                  разницу
                </span>{" "}
                уже в первый день
              </h2>

              <p className="text-lg text-[#667085] leading-relaxed">
                5 полноценных пробных блоков. 125 озвученных фраз. Никакой платной подписки на старте — только чистая
                возможность попробовать метод и убедиться, что он работает для вас.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05, boxShadow: "0 16px 48px rgba(71, 184, 245, 0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#72D8FF] to-[#5A8BFF] text-white rounded-full font-bold text-lg shadow-[0_12px_40px_rgba(71,184,245,0.35)] transition-all duration-300"
              >
                <Download className="w-6 h-6" />
                Скачать приложение
              </motion.a>

              <motion.a
                href="#try"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-white text-[#47B8F5] rounded-full font-bold text-lg shadow-[0_8px_32px_rgba(32,50,74,0.15)] border-2 border-[#47B8F5]/30 transition-all duration-300"
              >
                Попробовать бесплатно
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#15D38A]/20"
            >
              <Sparkles className="w-5 h-5 text-[#15D38A] flex-shrink-0 mt-0.5" />
              <div className="text-sm text-[#1E2430]">
                <span className="font-bold">125 фраз бесплатно</span> — достаточно, чтобы почувствовать, как работает
                система и увидеть первые результаты
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <img
                src={AppScreen}
                alt="RememBeary App"
                className="w-full max-w-[350px] drop-shadow-[0_24px_72px_rgba(32,50,74,0.3)]"
              />

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 px-6 py-3 bg-white rounded-full shadow-[0_12px_40px_rgba(21,211,138,0.3)] border-2 border-[#15D38A]"
              >
                <span className="text-lg font-bold bg-gradient-to-r from-[#15D38A] to-[#47B8F5] bg-clip-text text-transparent">
                  Бесплатно!
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
