import { motion } from "motion/react";
import { Mail, Instagram, Twitter } from "lucide-react";
import Logo from "../../imports/Logo_2_.png";

export function Footer() {
  return (
    <footer className="py-16 px-6 bg-gradient-to-b from-white to-[#F7F9FC] border-t border-[#EEF2F6]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1fr] mb-12">
          {/* Left: Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={Logo} alt="RememBeary" className="w-[56px] h-[56px]" />
              <span className="font-bold text-xl text-[#1E2430]">
                Remem<span className="bg-gradient-to-r from-[#72D8FF] to-[#5A8BFF] bg-clip-text text-transparent">Beary</span>
              </span>
            </div>
            <p className="text-[#667085] leading-relaxed max-w-[400px]">
              Учите английский естественно — через живые фразы, повторение и активную речь. Без зубрёжки, без перегруза.
            </p>
            <div className="flex gap-3">
              <SocialButton href="#" icon={<Mail className="w-5 h-5" />} />
              <SocialButton href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialButton href="#" icon={<Twitter className="w-5 h-5" />} />
            </div>
          </div>

          {/* Middle: Navigation */}
          <div>
            <h4 className="font-bold text-[#1E2430] mb-4">Навигация</h4>
            <nav className="space-y-3">
              <FooterLink href="#problem">Проблема</FooterLink>
              <FooterLink href="#solution">Решение</FooterLink>
              <FooterLink href="#how">Как это работает</FooterLink>
              <FooterLink href="#features">Возможности</FooterLink>
              <FooterLink href="#faq">FAQ</FooterLink>
            </nav>
          </div>

          {/* Right: Download */}
          <div>
            <h4 className="font-bold text-[#1E2430] mb-4">Скачать</h4>
            <div className="space-y-3">
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block px-6 py-3 bg-gradient-to-r from-[#72D8FF] to-[#5A8BFF] text-white rounded-full font-semibold text-center shadow-[0_4px_20px_rgba(71,184,245,0.3)] transition-all duration-300"
              >
                App Store
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="block px-6 py-3 bg-white text-[#47B8F5] rounded-full font-semibold text-center shadow-[0_4px_20px_rgba(32,50,74,0.12)] border border-[#47B8F5]/20 transition-all duration-300"
              >
                Google Play
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-bold text-[#1E2430]">Документы</h4>
            <nav className="space-y-3">
              <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="/terms-of-use">Terms of Use</FooterLink>
            </nav>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="pt-8 border-t border-[#EEF2F6]">
          <p className="text-center text-sm text-[#667085]">
            © 2026 RememBeary. Все права защищены. Сделано с ❤️ для тех, кто хочет наконец заговорить.
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialButton({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-full bg-white shadow-[0_4px_16px_rgba(32,50,74,0.1)] border border-[#EEF2F6] flex items-center justify-center text-[#667085] hover:text-[#47B8F5] hover:border-[#47B8F5]/30 transition-colors duration-300"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="block text-[#667085] hover:text-[#47B8F5] transition-colors duration-300">
      {children}
    </a>
  );
}
