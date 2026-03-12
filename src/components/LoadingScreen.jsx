import { useEffect, useState } from "react";
import { FaShoppingBag, FaLeaf, FaUtensils, FaCookieBite } from "react-icons/fa";
import { motion } from "framer-motion";
import { LOADING_STEPS } from "./loading/stepsConfig";
import { WelcomeScreen } from "./loading/WelcomeScreen";
import { ShutterOverlay } from "./loading/ShutterOverlay";

const FLOATING_ICONS = [FaLeaf, FaUtensils, FaCookieBite, FaShoppingBag];

export const LoadingScreen = ({ onComplete }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);
  const [shutterOpen, setShutterOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    if (!shutterOpen) return;
    if (activeStep < LOADING_STEPS.length - 1) {
      const t = setTimeout(() => setActiveStep((p) => p + 1), isMobile ? 1800 : 2200);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setShowWelcome(true);
      setTimeout(onComplete, isMobile ? 1500 : 1800);
    }, isMobile ? 1000 : 1200);
    return () => clearTimeout(t);
  }, [activeStep, shutterOpen, onComplete, isMobile]);

  const { icon, message, color } = LOADING_STEPS[activeStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-violet-50/30 text-slate-900 overflow-hidden">

      {/* Floating particles */}
      {[...Array(isMobile ? 10 : 20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gradient-to-br from-violet-400/10 to-indigo-400/10"
          style={{
            width: Math.random() * (isMobile ? 3 : 5) + 2 + "px",
            height: Math.random() * (isMobile ? 3 : 5) + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
          }}
          animate={{ y: [0, Math.random() * 100 - 50], x: [0, Math.random() * 100 - 50], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: "reverse" }}
        />
      ))}

      {/* Floating icons */}
      {FLOATING_ICONS.map((Icon, i) => (
        <motion.div
          key={i}
          className="absolute text-violet-400/10 text-2xl md:text-4xl"
          style={{ top: `${10 + i * 20}%`, left: `${5 + i * 25}%` }}
          animate={{ y: [0, 15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ repeat: Infinity, duration: 8 + i * 2, ease: "easeInOut" }}
        >
          <Icon />
        </motion.div>
      ))}

      {/* Main content */}
      {!showWelcome ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="relative z-10 text-center p-5 md:p-7 w-full max-w-xs md:max-w-md bg-white rounded-3xl shadow-2xl shadow-slate-200/80 border border-slate-100 mx-4"
        >
          {/* Logo */}
          <div className="mx-auto mb-4 md:mb-5 w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-xl shadow-violet-500/30 flex items-center justify-center">
            <FaShoppingBag className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>

          <h1 className="text-xl md:text-2xl font-black mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 tracking-tight">
            உங்கள் கடை
          </h1>

          {/* Step content */}
          <div className="min-h-[100px] md:min-h-[140px] flex flex-col items-center justify-center gap-3">
            <div className={`rounded-2xl bg-gradient-to-br ${color} shadow-lg`}>
              {icon}
            </div>
            <motion.p
              key={activeStep}
              className="text-sm md:text-base text-slate-700 font-semibold leading-relaxed text-center px-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {message}
            </motion.p>
          </div>

          {/* Progress */}
          <div className="mt-4 md:mt-6">
            <div className="flex justify-center gap-1.5 md:gap-2 mb-2 md:mb-3">
              {LOADING_STEPS.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeStep ? "bg-gradient-to-r from-violet-600 to-indigo-600 shadow-md scale-125" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <div className="h-1 md:h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 transition-all duration-700"
                style={{ width: `${((activeStep + 1) / LOADING_STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        </motion.div>
      ) : (
        <WelcomeScreen />
      )}

      {!shutterOpen && <ShutterOverlay isMobile={isMobile} onOpen={() => setShutterOpen(true)} />}
    </div>
  );
};
