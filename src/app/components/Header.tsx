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
      <div className="rounded-full bg-white/68 backdrop-blur-2xl px-6 py-2 shadow-[0_28px_72px_-24px_rgba(32,50,74,0.4),0_14px_32px_-20px_rgba(71,184,245,0.36)]">
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
            whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(71, 184, 245, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-[#72D8FF] to-[#5A8BFF] text-white rounded-full font-semibold shadow-[0_4px_20px_rgba(71,184,245,0.3)] transition-all duration-300"
          >
            Скачать
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
