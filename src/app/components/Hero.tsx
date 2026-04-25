import { motion } from "motion/react";
import { Headphones, MessageCircle, Play, Sparkles } from "lucide-react";
import AppScreen from "../../imports/App_screenshots_1.png";

interface HeroProps {
  compactDesktop?: boolean;
}

export function Hero({ compactDesktop = false }: HeroProps) {
  return (
    <section
      className={`relative min-h-screen flex items-center justify-center overflow-hidden px-6 ${
        compactDesktop ? "pt-28 pb-16" : "pt-32 pb-20"
      }`}
    >
      {/* Blurred gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-20 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#72D8FF]/30 to-[#5A8BFF]/20 rounded-full blur-[120px]"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#72D8FF]/40 via-[#47B8F5]/30 to-transparent rounded-full blur-[100px]"
        />
      </div>

      <div
        className={`relative max-w-[1400px] w-full grid md:grid-cols-2 items-center lg:translate-x-[100px] ${
          compactDesktop ? "gap-10" : "gap-12"
        }`}
      >
        {/* Left: Text Content */}
        <div className={compactDesktop ? "space-y-6" : "space-y-8"}>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block"
          >
            <div className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#47B8F5]/20 shadow-sm">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#47B8F5] to-[#5A8BFF] bg-clip-text text-transparent">
                4800+ живых разговорных фраз
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`font-extrabold text-[#1E2430] ${
              compactDesktop ? "text-5xl md:text-[3.35rem] leading-[1.02]" : "text-5xl md:text-6xl leading-tight"
            }`}
          >
            RememBeary — учи английский{" "}
            <span className="bg-gradient-to-r from-[#72D8FF] to-[#5A8BFF] bg-clip-text text-transparent">
              легко, естественно, с удовольствием
            </span>
          </motion.h1>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className={`text-lg text-[#667085] leading-relaxed max-w-[600px] ${
              compactDesktop ? "space-y-3" : "space-y-4"
            }`}
          >
            <p>
              RememBeary — это первый тренажёр, который работает по тому же принципу, по которому маленькие дети учат свой родной язык — через повторение и подражание.
            </p>
            <p>
              Они не зубрят времена и не делают тесты. Они просто слушают, как говорят родители, и повторяют за ними.
            </p>
            <p className="font-bold text-[#1E2430]">
              Вставь наушники, выйди на прогулку и уже через 20 минут почувствуешь:{" "}
              <span className="bg-gradient-to-r from-[#72D8FF] to-[#5A8BFF] bg-clip-text text-transparent">
                «Чёрт, да у меня получается!»
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`flex flex-wrap ${compactDesktop ? "gap-3" : "gap-4"}`}
          >
            <motion.a
              href="#download"
              whileHover={{ scale: 1.05, boxShadow: "10px 10px 22px rgba(71,95,133,0.30), -10px -10px 30px rgba(255,255,255,0.10), inset -1px -1px 4px rgba(26,40,61,0.34), inset -2px 3px 1.5px rgba(255,255,255,0.18)" }}
              whileTap={{ scale: 0.95 }}
              className="w-[260px] py-[18px] bg-[linear-gradient(135deg,#71CFFF_0%,#5D9CFF_52%,#4F84EA_100%)] text-white rounded-full font-bold text-lg shadow-[8px_8px_18px_rgba(71,95,133,0.26),-8px_-8px_28px_rgba(255,255,255,0.08),inset_-1px_-1px_4px_rgba(26,40,61,0.34),inset_-2px_3px_1.5px_rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.12)] transition-all duration-300 text-center"
              style={{
                boxShadow:
                  "8px 8px 18px rgba(71,95,133,0.26), -8px -8px 28px rgba(255,255,255,0.08), inset -1px -1px 4px rgba(26,40,61,0.34), inset -2px 3px 1.5px rgba(255,255,255,0.16)",
              }}
            >
              Скачать приложение
            </motion.a>
            <motion.a
              href="#try"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-[260px] py-[18px] bg-white text-[#47B8F5] rounded-full font-bold text-lg shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)] transition-all duration-300 text-center"
            >
              Попробовать бесплатно
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm text-[#667085] flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-[#15D38A]" />5 полноценных пробных блоков · 125 озвученных фраз · без
            подписки на старте
          </motion.p>
        </div>

        {/* Right: Phone Mockup with Floating Elements */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex justify-center"
        >
          {/* Phone */}
          <div className="relative z-10">
            <motion.img
              src={AppScreen}
              alt="RememBeary App"
              className={`w-full drop-shadow-[0_20px_60px_rgba(32,50,74,0.3)] ${
                compactDesktop ? "max-w-[300px]" : "max-w-[320px]"
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Floating Decorative Elements */}
          <FloatingElement delay={0.8} x={compactDesktop ? -195 : -210} y={compactDesktop ? -80 : -90} rotate={-15}>
            <div className="p-4 bg-white rounded-2xl shadow-[0_8px_32px_rgba(32,50,74,0.2)]">
              <Headphones className="w-6 h-6 text-[#47B8F5]" />
            </div>
          </FloatingElement>

          <FloatingElement delay={1} x={compactDesktop ? 194 : 210} y={compactDesktop ? -116 : -130} rotate={12}>
            <div className="p-4 bg-white rounded-2xl shadow-[0_8px_32px_rgba(32,50,74,0.2)]">
              <MessageCircle className="w-6 h-6 text-[#B9A7FF]" />
            </div>
          </FloatingElement>

          <FloatingElement delay={1.2} x={compactDesktop ? -196 : -210} y={compactDesktop ? 148 : 170} rotate={8}>
            <div className="p-4 bg-gradient-to-br from-[#15D38A] to-[#72D8FF] rounded-2xl shadow-[0_8px_32px_rgba(21,211,138,0.3)]">
              <Play className="w-6 h-6 text-white" />
            </div>
          </FloatingElement>

          <FloatingElement delay={1.4} x={compactDesktop ? 128 : 140} y={compactDesktop ? 212 : 240} rotate={0}>
            <div className="px-5 py-3 bg-gradient-to-r from-[#15D38A] to-[#47B8F5] rounded-2xl shadow-[0_12px_40px_rgba(21,211,138,0.4)]">
              <span className="text-sm font-bold text-white">+5 уроков бесплатно</span>
            </div>
          </FloatingElement>

          <FloatingElement delay={1.6} x={compactDesktop ? 186 : 200} y={compactDesktop ? 48 : 60} rotate={5}>
            <div className="w-12 h-12 bg-gradient-to-br from-[#FF5C77] to-[#FFC58F] rounded-full shadow-[0_8px_24px_rgba(255,92,119,0.3)]" />
          </FloatingElement>
        </motion.div>
      </div>
    </section>
  );
}

interface FloatingElementProps {
  children: React.ReactNode;
  delay: number;
  x: number;
  y: number;
  rotate: number;
}

function FloatingElement({ children, delay, x, y, rotate }: FloatingElementProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
      animate={{ opacity: 1, scale: 1, x, y }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
      style={{ rotate }}
    >
      <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
