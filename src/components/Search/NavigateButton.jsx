// src/components/HeroButton.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// función para estilo de partículas
const getParticleStyle = () => {
  const size = Math.random() * 20 + 10; // entre 10px y 30px
  return {
    width: size,
    height: size,
    borderRadius: "50%",
    background: "rgba(255,255,255,0.2)",
    left: `${Math.random() * 100}%`,
    bottom: "-30px",
  };
};

function HeroButton({ to, children }) {
  const navigate = useNavigate();

  return (
    <section
      style={{
        background: "var(--hero-bg)",
        position: "relative",
        overflow: "hidden",
      }}
      className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8" id="excercices"
    >
      {/* Partículas modernas */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={getParticleStyle()}
          animate={{
            y: [0, -700, 0],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}

      <h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-10 text-center drop-shadow-lg"
        style={{ color: "var(--color-text)" }}
      >
        Explora la sección de ejercicios
      </h1>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate(to)}
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
    </section>
  );
}

export default HeroButton;
