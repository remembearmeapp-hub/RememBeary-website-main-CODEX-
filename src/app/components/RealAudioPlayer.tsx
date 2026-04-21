import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import { Play, Pause, SkipBack, SkipForward, Shuffle, Repeat2 } from "lucide-react";
import PhoneMockup from "../../imports/iMockup_iPhone15ProMax_Current.png";
import BoatCover from "../../imports/Boat_Cover.png";
import PlayingEqualizer from "../../imports/playing_equalizer.json";
import Audio1 from "../../imports/1.mp3";
import Audio2 from "../../imports/2.mp3";
import Audio3 from "../../imports/3.mp3";
import Audio4 from "../../imports/4.mp3";
import Audio5 from "../../imports/5.mp3";

interface Track {
  id: number;
  title: string;
  audio: string;
  tone: string;
}

interface PitchPreservingAudioElement extends HTMLAudioElement {
  preservesPitch?: boolean;
  mozPreservesPitch?: boolean;
  webkitPreservesPitch?: boolean;
}

const tracks: Track[] = [
  { id: 1, title: "Конструкции вопросов 2", audio: Audio1, tone: "from-[#8D8D86] to-[#6C6F69]" },
  { id: 2, title: "Конструкции вопросов 2", audio: Audio2, tone: "from-[#F5F4F0] to-[#EAE6DE]" },
  { id: 3, title: "Конструкции вопросов 2", audio: Audio3, tone: "from-[#F5F4F0] to-[#EAE6DE]" },
  { id: 4, title: "Конструкции вопросов 2", audio: Audio4, tone: "from-[#F5F4F0] to-[#EAE6DE]" },
  { id: 5, title: "Конструкции вопросов 2", audio: Audio5, tone: "from-[#F5F4F0] to-[#EAE6DE]" },
];

function getRandomTrackIndex(currentIndex: number) {
  if (tracks.length <= 1) return currentIndex;

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * tracks.length);
  }

  return nextIndex;
}

export function RealAudioPlayer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(0.9);
  const [isLooping, setIsLooping] = useState(true);
  const [isShuffle, setIsShuffle] = useState(false);
  const [shuffleHistory, setShuffleHistory] = useState<number[]>([]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      if (isLooping) {
        // Loop current track
        audio.currentTime = 0;
        audio.play();
      } else if (isShuffle) {
        setShuffleHistory((prev) => [...prev, currentTrack]);
        setCurrentTrack(getRandomTrackIndex(currentTrack));
      } else if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1);
      } else {
        setIsPlaying(false);
        setCurrentTrack(0);
      }
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentTrack, isLooping, isShuffle]);

  useEffect(() => {
    const audio = audioRef.current as PitchPreservingAudioElement | null;
    if (audio) {
      // Keep the original voice pitch when slowing down or speeding up audio.
      audio.preservesPitch = true;
      audio.mozPreservesPitch = true;
      audio.webkitPreservesPitch = true;
      audio.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  // Handle track changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Reset audio when track changes
    audio.pause();
    audio.load();
    setProgress(0);
    setCurrentTime(0);
  }, [currentTrack]);

  // Handle play/pause
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = async () => {
      try {
        await audio.play();
      } catch (error) {
        console.log("Playback prevented:", error);
        setIsPlaying(false);
      }
    };

    if (isPlaying) {
      handlePlay();
    } else {
      audio.pause();
    }
  }, [isPlaying, currentTrack]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const nextTrack = () => {
    if (isShuffle) {
      setShuffleHistory((prev) => [...prev, currentTrack]);
      setCurrentTrack(getRandomTrackIndex(currentTrack));
    } else if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
    }
  };

  const prevTrack = () => {
    if (isShuffle && shuffleHistory.length > 0) {
      setShuffleHistory((prev) => {
        const history = [...prev];
        const previousTrack = history.pop();
        if (previousTrack !== undefined) {
          setCurrentTrack(previousTrack);
        }
        return history;
      });
    } else if (currentTrack > 0) {
      setCurrentTrack(currentTrack - 1);
    }
  };

  const toggleSpeed = () => {
    const speeds = [0.85, 0.9, 1.0, 1.2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    setPlaybackSpeed(speeds[nextIndex]);
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
  };

  const toggleShuffle = () => {
    setIsShuffle((prev) => !prev);
    setShuffleHistory([]);
  };

  return (
    <section ref={ref} className="py-32 px-6 bg-gradient-to-b from-white to-[#F7F9FC] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-[#15D38A]/10 to-transparent rounded-full blur-[80px]" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-[#47B8F5]/10 to-transparent rounded-full blur-[80px]" />
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.25 }}
        className="pointer-events-none absolute left-[130px] top-[470px] hidden md:block"
      >
        <div className="relative h-[118px] w-[230px] rotate-[-8deg] opacity-90">
          <div className="absolute inset-0 rounded-[999px] bg-gradient-to-r from-[#FFD24D] via-[#FFC94A] to-[#FFB93C] shadow-[0_18px_40px_rgba(255,190,60,0.18)]" />
          <div className="absolute -left-[42px] top-[-24px] h-[86px] w-[104px] rounded-[999px] bg-[#F7F9FC]" />
          <div className="absolute left-[72px] bottom-[-28px] h-[92px] w-[116px] rounded-[999px] bg-[#F7F9FC]" />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.35 }}
        className="pointer-events-none absolute right-[120px] top-[610px] hidden md:block"
      >
        <div className="relative h-[120px] w-[240px] rotate-[10deg] opacity-85">
          <div className="absolute inset-0 rounded-[999px] bg-gradient-to-r from-[#FFD24D] via-[#FFC94A] to-[#FFB93C] shadow-[0_18px_40px_rgba(255,190,60,0.16)]" />
          <div className="absolute left-[56px] top-[-26px] h-[90px] w-[112px] rounded-[999px] bg-[#F7F9FC]" />
          <div className="absolute right-[14px] bottom-[-20px] h-[84px] w-[104px] rounded-[999px] bg-[#F7F9FC]" />
        </div>
      </motion.div>

      <div className="max-w-[1200px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#15D38A]/20">
            <span className="text-sm font-semibold text-[#15D38A]">Попробуйте прямо сейчас</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#1E2430]">
            Послушайте настоящий урок из{" "}
            <span className="bg-gradient-to-r from-[#15D38A] to-[#47B8F5] bg-clip-text text-transparent">
              приложения
            </span>
          </h2>
          <p className="text-lg text-[#667085]">Реальные фразы с озвучкой носителями языка</p>
        </motion.div>

        <div className="mt-[100px] flex flex-col items-center justify-center gap-[90px] md:flex-row">
          {/* Phone Mockup with Controls Overlay */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-[320px]"
          >
            {/* Background Phone Image */}
            <img
              src={PhoneMockup}
              alt="RememBeary Player"
              className="w-full drop-shadow-[8px_2px_2.4px_rgba(0,0,0,0.3)] drop-shadow-[18px_16px_8.5px_rgba(0,0,0,0.22)]"
            />

            {/* Controls Overlay - positioned to match the reference */}
            <div className="absolute inset-0 flex -translate-y-[25px] flex-col justify-end px-[8.5%] pb-0">
              {/* Main Controls */}
              <div className="flex items-center justify-center gap-[20px] mb-5">
                {/* Shuffle Button */}
                <motion.button
                  onClick={toggleShuffle}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`h-[40px] w-[40px] rounded-[12px] flex items-center justify-center transition-all ${
                    isShuffle
                      ? "bg-[#6ACBFF] text-white"
                      : "border border-[#6ACBFF] text-[#6ACBFF]"
                  }`}
                >
                  <Shuffle className="w-[17px] h-[17px] stroke-[2.3]" />
                </motion.button>

                {/* Previous Button */}
                <motion.button
                  onClick={prevTrack}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={!isShuffle && currentTrack === 0}
                  className="h-8 w-8 flex items-center justify-center text-[#57576A] disabled:opacity-30"
                >
                  <SkipBack className="w-[18px] h-[18px] fill-current stroke-[2.5]" />
                </motion.button>

                {/* Play/Pause Button - Large Green Circle */}
                <motion.button
                  onClick={togglePlayPause}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="h-[54px] w-[54px] shrink-0 rounded-full border-0 outline-none ring-0 bg-[#13D84D] flex items-center justify-center text-white"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-[2px]" />}
                </motion.button>

                {/* Next Button */}
                <motion.button
                  onClick={nextTrack}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  disabled={!isShuffle && currentTrack === tracks.length - 1}
                  className="h-8 w-8 flex items-center justify-center text-[#57576A] disabled:opacity-30"
                >
                  <SkipForward className="w-[18px] h-[18px] fill-current stroke-[2.5]" />
                </motion.button>

                {/* Loop Button - Red (Active by default) */}
                <motion.button
                  onClick={toggleLoop}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-[40px] h-[40px] rounded-[12px] flex items-center justify-center text-white transition-all ${
                    isLooping
                      ? "bg-[#FF5C77]"
                      : "bg-gray-300"
                  }`}
                >
                  <div className="relative h-[18px] w-[18px]">
                    <Repeat2 className="h-[18px] w-[18px] stroke-[2.2]" />
                    <span className="absolute -bottom-[5px] right-[-4px] text-[9px] font-extrabold leading-none text-white">
                      1
                    </span>
                  </div>
                </motion.button>
              </div>

              {/* Speed Control - Orange Capsule */}
              <div className="flex justify-center mb-[18px]">
                <motion.button
                  onClick={toggleSpeed}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center px-3.5 py-[7px] rounded-full bg-[#FF9B0A] shadow-[0_5px_14px_rgba(255,155,10,0.32)]"
                >
                  <span className="text-sm font-bold text-white">{playbackSpeed}x</span>
                </motion.button>
              </div>

              {/* Track List Preview - Show all 5 tracks */}
              <div className="space-y-[12px] max-h-[170px] overflow-y-auto overflow-x-hidden pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {tracks.map((track, index) => (
                  <motion.button
                    key={track.id}
                    onClick={() => {
                      if (currentTrack !== index) {
                        setIsPlaying(false);
                        setTimeout(() => {
                          setCurrentTrack(index);
                          setIsPlaying(true);
                        }, 50);
                      } else {
                        setIsPlaying(!isPlaying);
                      }
                    }}
                    whileHover={{ scale: 1.01 }}
                    className={`w-full flex items-center gap-[10px] rounded-[16px] px-2 py-[2px] transition-all ${
                      currentTrack === index
                        ? ""
                        : "bg-transparent"
                    }`}
                  >
                    <span className="w-4 text-left text-[14px] font-medium text-[#1E2430]">{track.id}</span>
                    <div className={`h-[40px] w-[40px] rounded-[11px] bg-gradient-to-br ${track.tone} flex items-center justify-center flex-shrink-0 overflow-hidden shadow-[0_3px_8px_rgba(32,50,74,0.12)]`}>
                      {currentTrack === index ? (
                        <PlayingTrackIcon isPlaying={isPlaying} />
                      ) : (
                        <img src={BoatCover} alt="" className="h-full w-full object-cover" />
                      )}
                    </div>
                    <div className="min-w-0 text-left">
                      <div className="text-[12px] leading-none text-[#C4CBD6]">{track.id}</div>
                      <span className="mt-[3px] block truncate text-[13px] font-medium text-[#8CA0B2]">{track.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Hidden Audio Element */}
            <audio ref={audioRef} src={tracks[currentTrack].audio} />
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-[500px] space-y-6"
          >
            <div className="rounded-[40px] bg-white p-8 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]">
              <h3 className="text-2xl font-bold text-[#1E2430] mb-4">Как это работает?</h3>
                <div className="space-y-4">
                  <InfoStep
                    number={1}
                    text="Нажмите Play и слушайте фразы"
                    color="from-[#15D38A] to-[#18D64B]"
                />
                <InfoStep
                  number={2}
                  text="Красная кнопка зацикливает трек — слушайте один и тот же файл для лучшего запоминания"
                  color="from-[#FF5C77] to-[#FF7A63]"
                />
                  <InfoStep
                    number={3}
                    text="Меняйте скорость (0.85x - 1.2x) и выбирайте любой из 5 треков"
                    color="from-[#FF9800] to-[#FFB347]"
                  />
                  <InfoStep
                    number={4}
                    text="Кнопка Shuffle перемешивает треки и запускает их в случайном порядке"
                    color="from-[#6ACBFF] to-[#8EDCFF]"
                  />
                </div>
            </div>

            <div className="rounded-[40px] bg-white p-8 shadow-[6px_6px_12px_rgba(163,177,198,0.25),-6px_-6px_23.9px_rgba(255,255,255,0.25),inset_-1px_-1px_4px_rgba(0,0,0,0.25),inset_-2px_3px_1.5px_rgba(255,255,255,0.70)]">
              <p className="text-[#1E2430] leading-relaxed">
                Это{" "}
                <span className="bg-gradient-to-r from-[#15D38A] to-[#47B8F5] bg-clip-text font-bold text-transparent">
                  настоящее аудио
                </span>{" "}
                из приложения! В полной версии вас ждёт более 4800 озвученных фраз на разные темы, которые аккуратно
                распределены по категориям.
              </p>
            </div>

            <div className="flex gap-4">
              <motion.a
                href="#download"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-6 py-4 bg-gradient-to-r from-[#72D8FF] to-[#5A8BFF] text-white rounded-full font-bold text-center shadow-[0_8px_32px_rgba(71,184,245,0.35)]"
              >
                Скачать приложение
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PlayingTrackIcon({ isPlaying }: { isPlaying: boolean }) {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  useEffect(() => {
    if (!lottieRef.current) return;

    if (isPlaying) {
      lottieRef.current.play();
    } else {
      lottieRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={BoatCover}
        alt=""
        className="h-full w-full object-cover brightness-[0.5] scale-105 transition-all duration-300"
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-[3px]">
        <Lottie
          lottieRef={lottieRef}
          animationData={PlayingEqualizer}
          loop={true}
          autoplay={true}
          className="h-full w-full"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-[11px] ring-1 ring-white/10" />
    </div>
  );
}

interface InfoStepProps {
  number: number;
  text: string;
  color: string;
}

function InfoStep({ number, text, color }: InfoStepProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${color} flex items-center justify-center flex-shrink-0`}>
        <span className="text-white font-bold text-sm">{number}</span>
      </div>
      <p className="text-[#667085]">{text}</p>
    </div>
  );
}
