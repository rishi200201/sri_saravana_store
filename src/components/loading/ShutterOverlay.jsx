import { motion } from "framer-motion";
import PropTypes from "prop-types";

export const ShutterOverlay = ({ isMobile, onOpen }) => (
  <motion.div
    className="absolute inset-0 z-[100] origin-top flex items-center justify-center overflow-hidden"
    initial={{ scaleY: 1 }}
    animate={{ scaleY: 0 }}
    transition={{
      duration: 1.8,
      ease: [0.34, 1.56, 0.64, 1],
      onComplete: onOpen,
    }}
    style={{
      backgroundImage: `
        repeating-linear-gradient(
          to bottom,
          #4a4a4a 0px,
          #4a4a4a ${isMobile ? "3px" : "5px"},
          #3a3a3a ${isMobile ? "3px" : "5px"},
          #3a3a3a ${isMobile ? "6px" : "10px"}
        ),
        linear-gradient(to bottom, #555555, #2a2a2a)
      `,
      backgroundBlendMode: "hard-light",
      boxShadow: "inset 0 -15px 20px rgba(0,0,0,0.8), inset 0 5px 10px rgba(255,255,255,0.1), 0 3px 20px rgba(0,0,0,0.9)",
      borderBottom: `${isMobile ? "3px" : "6px"} solid #1a1a1a`,
    }}
  >
    {/* Metallic sheen */}
    <div
      className="absolute inset-0 opacity-20 md:opacity-30"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, transparent 70%),
          linear-gradient(135deg,
            rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 20%,
            rgba(255,255,255,0.05) 40%, rgba(255,255,255,0) 60%,
            rgba(255,255,255,0.05) 80%, rgba(255,255,255,0) 100%
          )
        `,
      }}
    />

    {/* Handle */}
    <motion.div
      className="flex flex-col items-center absolute bottom-0"
      animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
      transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
    >
      <div className={`${isMobile ? "w-16 h-2" : "w-24 h-3"} rounded-t-sm mb-1 bg-gray-700 border border-gray-600 border-b-0`} />
      <div
        className={`${isMobile ? "w-16 h-6" : "w-24 h-8"} rounded-md bg-gradient-to-b from-gray-400 to-gray-600 border border-gray-700 flex items-center justify-center`}
        style={{ boxShadow: "0px 3px 6px rgba(0,0,0,0.5), inset 0px 1px 2px rgba(255,255,255,0.3), inset 0px -2px 3px rgba(0,0,0,0.4)" }}
      >
        <div
          className={`${isMobile ? "w-12 h-2" : "w-16 h-3"} rounded-full bg-gradient-to-b from-gray-700 to-gray-800`}
          style={{ boxShadow: "inset 0px -1px 2px rgba(255,255,255,0.1), inset 0px 1px 2px rgba(0,0,0,0.5)" }}
        />
      </div>
    </motion.div>
  </motion.div>
);

ShutterOverlay.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
};
