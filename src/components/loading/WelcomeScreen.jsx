import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";

export const WelcomeScreen = () => (
  <motion.div
    className="absolute inset-0 flex flex-col items-center justify-center bg-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <motion.div
      initial={{ scale: 0, rotate: -30 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="mb-5 md:mb-7 p-5 rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-2xl shadow-violet-500/40"
    >
      <FaShoppingBag className="w-10 h-10 md:w-14 md:h-14 text-white" />
    </motion.div>

    <div className="text-center px-4">
      <motion.h1
        className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600 mb-1.5 md:mb-2 tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        உங்கள் கடைக்கு வரவேற்கிறோம்
      </motion.h1>
      <motion.p
        className="text-sm md:text-base text-slate-500 font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        உங்கள் ஷாப்பிங் அனுபவத்தை தயார் செய்கிறோம்...
      </motion.p>
    </div>

    <motion.div
      className="mt-6 md:mt-9 w-40 md:w-56 h-1 md:h-1.5 bg-slate-100 rounded-full overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-violet-600 to-indigo-600"
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.8, ease: [0.65, 0, 0.35, 1] }}
      />
    </motion.div>
  </motion.div>
);
