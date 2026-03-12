import { FaShoppingBag, FaUtensils, FaLeaf, FaCookieBite } from "react-icons/fa";
import { motion } from "framer-motion";

const iconMotion = (duration, scale, rotate) => ({
  animate: { scale: [1, scale, 1], rotate: [0, rotate, -rotate, 0] },
  transition: { repeat: Infinity, duration, ease: "easeInOut" },
});

export const LOADING_STEPS = [
  {
    icon: (
      <motion.div
        className="p-3 md:p-4 rounded-2xl bg-violet-100 border border-violet-200 flex items-center justify-center text-3xl md:text-5xl"
        {...iconMotion(3, 1.1, 5)}
      >
        <span role="img" aria-label="folded hands">🙏</span>
      </motion.div>
    ),
    message: "வணக்கம்! அன்புடன் வரவேற்கிறோம்...",
    color: "from-violet-600 to-indigo-600",
  },
  {
    icon: (
      <motion.div className="p-3 md:p-4 rounded-2xl bg-sky-100 border border-sky-200" {...iconMotion(4, 1.05, 3)}>
        <FaUtensils className="text-sky-600 w-8 h-8 md:w-12 md:h-12" />
      </motion.div>
    ),
    message: (
      <>
        இன்று புது சுவையான காய்கறிகள்!{" "}
        <span className="inline-block animate-bounce">🍅</span>{" "}
        <span className="inline-block animate-bounce delay-100">🧅</span>{" "}
        <span className="inline-block animate-bounce delay-200">🥕</span>
      </>
    ),
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: (
      <motion.div className="p-3 md:p-4 rounded-2xl bg-emerald-100 border border-emerald-200" {...iconMotion(3.5, 1.08, 5)}>
        <FaLeaf className="text-emerald-600 w-8 h-8 md:w-12 md:h-12" />
      </motion.div>
    ),
    message: (
      <>கருவேப்பிலை இலவசம்! <span className="inline-block animate-pulse">✨</span></>
    ),
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: (
      <motion.div className="p-3 md:p-4 rounded-2xl bg-amber-100 border border-amber-200" {...iconMotion(3.2, 1.12, 8)}>
        <FaCookieBite className="text-amber-600 w-8 h-8 md:w-12 md:h-12" />
      </motion.div>
    ),
    message: (
      <>சிறந்த தரமான அரிசி வந்துவிட்டது! <span className="inline-block animate-wiggle">🍚</span></>
    ),
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: (
      <motion.div className="p-3 md:p-4 rounded-2xl bg-violet-100 border border-violet-200" {...iconMotion(2.8, 1.15, 10)}>
        <FaShoppingBag className="text-violet-600 w-8 h-8 md:w-12 md:h-12" />
      </motion.div>
    ),
    message: (
      <>மகிழ்ச்சியான ஷாப்பிங்! நன்றி <span className="inline-block animate-heartbeat">❤️</span></>
    ),
    color: "from-violet-600 to-indigo-600",
  },
];
