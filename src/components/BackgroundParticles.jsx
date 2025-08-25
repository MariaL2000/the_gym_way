import { motion } from "framer-motion";

const getParticleStyle = () => ({
  width: Math.random() * 40 + 20,
  height: Math.random() * 40 + 20,
  borderRadius: "50%",
  background: `radial-gradient(circle, var(--color-primary) 0%, transparent 70%)`,
  opacity: 0.15,
  bottom: -50,
  left: `${Math.random() * 100}%`,
});

function BackgroundParticles({ count = 12 }) {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={getParticleStyle()}
          animate={{
            y: [0, -700, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 6 + 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundParticles;
