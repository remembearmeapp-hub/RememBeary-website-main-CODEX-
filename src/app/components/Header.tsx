import { motion } from "motion/react";
import Logo from "../../imports/Logo_2_.png";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]"
    >
      <div className="rounded-full bg-white/78 backdrop-blur-2xl px-6 py-2 shadow-[0_22px_54px_-24px_rgba(32,50,74,0.34),0_12px_28px_-20px_rgba(71,184,245,0.24)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <img src={Logo} alt="RememBeary" className="w-[68px] h-[68px] -ml-[15px]" />
            <span className="font-bold text-xl text-[#1E2430] ml-[12px]">
              Remem<span className="text-[#6ACBFF]">Beary</span>
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#problem" className="text-[#667085] hover:text-[#47B8F5] transition-colors duration-300">
              Проблема
            </a>
            <a href="#solution" className="text-[#667085] hover:text-[#47B8F5] transition-colors duration-300">
              Решение
            </a>
            <a href="#how" className="text-[#667085] hover:text-[#47B8F5] transition-colors duration-300">
              Как это работает
            </a>
            <a href="#features" className="text-[#667085] hover:text-[#47B8F5] transition-colors duration-300">
              Возможности
            </a>
            <a href="#faq" className="text-[#667085] hover:text-[#47B8F5] transition-colors duration-300">
              FAQ
            </a>
          </nav>

          <motion.a
            href="#download"
            whileHover={{ scale: 1.05, boxShadow: "10px 10px 22px rgba(71,95,133,0.30), -10px -10px 30px rgba(255,255,255,0.10), inset -1px -1px 4px rgba(26,40,61,0.34), inset -2px 3px 1.5px rgba(255,255,255,0.18)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-[linear-gradient(135deg,#71CFFF_0%,#5D9CFF_52%,#4F84EA_100%)] text-white rounded-full font-semibold shadow-[8px_8px_18px_rgba(71,95,133,0.26),-8px_-8px_28px_rgba(255,255,255,0.08),inset_-1px_-1px_4px_rgba(26,40,61,0.34),inset_-2px_3px_1.5px_rgba(255,255,255,0.16)] border border-[rgba(255,255,255,0.12)] transition-all duration-300"
            style={{
              boxShadow:
                "8px 8px 18px rgba(71,95,133,0.26), -8px -8px 28px rgba(255,255,255,0.08), inset -1px -1px 4px rgba(26,40,61,0.34), inset -2px 3px 1.5px rgba(255,255,255,0.16)",
            }}
          >
            Скачать
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
