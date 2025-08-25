import { motion } from "framer-motion";

function AnimatedButton({ onClick, children }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      animate={{
        boxShadow: [
          "0 0 10px var(--color-primary), 0 0 20px rgba(74,158,207,0.6)",
          "0 0 20px var(--color-primary), 0 0 40px rgba(74,158,207,0.8)",
          "0 0 10px var(--color-primary), 0 0 20px rgba(74,158,207,0.6)",
        ],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{ background: "var(--color-primary)" }}
      className="
        w-full sm:w-auto
        px-12 sm:px-16 py-5 sm:py-6
        text-2xl sm:text-3xl
        text-white font-bold
        rounded-3xl
        transition-all duration-300
      "
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;
