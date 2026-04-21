import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2 } from "lucide-react";

interface Phrase {
  id: number;
  russian: string;
  english: string;
}

const demoPhrases: Phrase[] = [
  { id: 1, russian: "Привет!", english: "Hi!" },
  { id: 2, russian: "Здравствуйте!", english: "Hello!" },
  { id: 3, russian: "Доброе утро!", english: "Good morning!" },
  { id: 4, russian: "Добрый день!", english: "Good afternoon!" },
  { id: 5, russian: "Добрый вечер!", english: "Good evening!" },
];

type Phase = "russian" | "thinking" | "english" | "repeat";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>("russian");
  const [progress, setProgress] = useState(0);
  const [cycle, setCycle] = useState(1);

  const currentPhrase = demoPhrases[currentPhraseIndex];

  useEffect(() => {
    if (!isPlaying) return;

    const phaseTimings = {
      russian: 2000,
      thinking: 3000,
      english: 2000,
      repeat: 2000,
    };

    const timer = setTimeout(() => {
      if (phase === "russian") {
        setPhase("thinking");
      } else if (phase === "thinking") {
        setPhase("english");
      } else if (phase === "english") {
        setPhase("repeat");
      } else if (phase === "repeat") {
        // Move to next phrase
        if (currentPhraseIndex < demoPhrases.length - 1) {
          setCurrentPhraseIndex(currentPhraseIndex + 1);
          setPhase("russian");
        } else {
          // Cycle complete
          if (cycle < 3) {
            setCycle(cycle + 1);
            setCurrentPhraseIndex(0);
            setPhase("russian");
          } else {
            // End of demo
            setIsPlaying(false);
            setProgress(100);
          }
        }
      }
    }, phaseTimings[phase]);

    // Progress animation
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (phaseTimings[phase] / 50);
        return prev >= 100 ? 0 : prev + increment;
      });
    }, 50);

    return () => {
      clearTimeout(timer);
      clearInterval(progressTimer);
    };
  }, [isPlaying, phase, currentPhraseIndex, cycle]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentPhraseIndex(0);
    setPhase("russian");
    setProgress(0);
    setCycle(1);
  };

  const getPhaseText = () => {
    switch (phase) {
      case "russian":
        return "Слушаете фразу на русском";
      case "thinking":
        return "Пробуете вспомнить по-английски";
      case "english":
        return "Слышите правильный ответ";
      case "repeat":
        return "Повторяете вслух";
    }
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "russian":
        return "from-[#47B8F5] to-[#72D8FF]";
      case "thinking":
        return "from-[#B9A7FF] to-[#72D8FF]";
      case "english":
        return "from-[#15D38A] to-[#47B8F5]";
      case "repeat":
        return "from-[#FFC58F] to-[#FF5C77]";
    }
  };

  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#F7F9FC] to-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#47B8F5]/10 to-transparent rounded-full blur-[80px]" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-[#B9A7FF]/10 to-transparent rounded-full blur-[80px]" />

      <div className="max-w-[900px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#47B8F5]/20">
            <span className="text-sm font-semibold text-[#47B8F5]">Попробуйте прямо сейчас</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E2430]">
            Почувствуйте, как работает{" "}
            <span className="bg-gradient-to-r from-[#47B8F5] to-[#5A8BFF] bg-clip-text text-transparent">методика</span>
          </h2>
          <p className="text-lg text-[#667085]">Интерактивная демонстрация одного урока</p>
        </motion.div>

        {/* Player Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 md:p-12 bg-white rounded-[32px] shadow-[0_16px_64px_rgba(32,50,74,0.2)] border border-[#EEF2F6]"
        >
          {/* Phase Indicator */}
          <motion.div
            key={phase}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-center"
          >
            <div className={`inline-block px-6 py-3 rounded-full bg-gradient-to-r ${getPhaseColor()} mb-4`}>
              <span className="text-white font-bold">{getPhaseText()}</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <Volume2 className="w-5 h-5 text-[#667085]" />
              <span className="text-sm text-[#667085]">
                Фраза {currentPhraseIndex + 1} из {demoPhrases.length} • Круг {cycle} из 3
              </span>
            </div>
          </motion.div>

          {/* Phrase Display */}
          <div className="mb-8 min-h-[200px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {phase === "russian" && (
                <motion.div
                  key="russian"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-4"
                >
                  <div className="text-sm font-semibold text-[#667085] uppercase tracking-wide">По-русски</div>
                  <div className="text-4xl md:text-5xl font-bold text-[#1E2430]">{currentPhrase.russian}</div>
                </motion.div>
              )}

              {phase === "thinking" && (
                <motion.div
                  key="thinking"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center space-y-6"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-6xl"
                  >
                    🤔
                  </motion.div>
                  <div className="text-2xl font-semibold text-[#667085]">Попробуйте вспомнить...</div>
                  <div className="flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                        className="w-2 h-2 rounded-full bg-[#B9A7FF]"
                      />
                    ))}
                  </div>
                </motion.div>
              )}

              {phase === "english" && (
                <motion.div
                  key="english"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-4"
                >
                  <div className="text-sm font-semibold text-[#15D38A] uppercase tracking-wide">Правильный ответ</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#15D38A] to-[#47B8F5] bg-clip-text text-transparent">
                    {currentPhrase.english}
                  </div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.6, repeat: 2 }}
                    className="text-3xl"
                  >
                    🔊
                  </motion.div>
                </motion.div>
              )}

              {phase === "repeat" && (
                <motion.div
                  key="repeat"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="text-center space-y-4"
                >
                  <div className="text-sm font-semibold text-[#FF5C77] uppercase tracking-wide">Повторите вслух</div>
                  <div className="text-4xl md:text-5xl font-bold text-[#1E2430]">{currentPhrase.english}</div>
                  <motion.div
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                    className="text-3xl"
                  >
                    🎤
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="h-2 bg-[#EEF2F6] rounded-full overflow-hidden">
              <motion.div
                className={`h-full bg-gradient-to-r ${getPhaseColor()}`}
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4">
            <motion.button
              onClick={handleReset}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-4 rounded-full bg-[#F7F9FC] hover:bg-[#EEF2F6] transition-colors"
            >
              <RotateCcw className="w-6 h-6 text-[#667085]" />
            </motion.button>

            <motion.button
              onClick={handlePlayPause}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px rgba(71, 184, 245, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-[#72D8FF] to-[#5A8BFF] text-white rounded-full font-bold text-lg shadow-[0_8px_32px_rgba(71,184,245,0.3)] flex items-center gap-3"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
              {isPlaying ? "Пауза" : progress === 100 ? "Начать заново" : "Начать"}
            </motion.button>

            <div className="w-[52px]" />
          </div>
        </motion.div>

        {/* Info Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-[#667085] mt-8"
        >
          Это упрощённая демонстрация. В приложении — озвучка носителями языка и больше 4800 фраз
        </motion.p>
      </div>
    </section>
  );
}
