import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackgroundParticles from "./BackgroundParticles";
import { female, man } from "../Data/youtube";

const HeroHeroYoutube = ({ to, children }) => {
  const navigate = useNavigate();

  const allCreators = [
    ...female.map((c) => ({ ...c, uniqueId: `f-${c.id}` })),
    ...man.map((c) => ({ ...c, uniqueId: `m-${c.id}` })),
  ];

  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0 0 15px rgba(255,255,255,0.3)" },
    tap: { scale: 0.95 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section
      className="w-full relative overflow-hidden"
      style={{
        background: "var(--bg-section, #000)",
        color: "var(--text-section, #fff)",
      }}
      id="excercices"
    >
      {/* Fondo de partículas */}
      <BackgroundParticles
        count={30}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />

      {/* Hero */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 space-y-8 max-w-4xl mx-auto text-center"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
          Explora la sección de ejercicios
        </h1>

      
<motion.button
  onClick={() => navigate(to)}
  className="px-8 py-4 text-white font-bold rounded-3xl shadow-lg relative z-10
             bg-gradient-to-r from-blue-500 to-blue-600
             hover:from-blue-600 hover:to-blue-700
             transition-all duration-300"
  variants={buttonVariants}
  whileHover="hover"
  whileTap="tap"
>
  {children}
</motion.button>

      </motion.div>

      {/* Youtube Section */}
      <div className="relative z-10 py-16 px-4 sm:px-6 lg:px-8" >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">
          Aprende más en{" "}
          <span style={{ color: "var(--color-primary)" }}>YouTube</span>
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allCreators.map((creator) => (
            <motion.div
              key={creator.uniqueId}
              className="relative w-full rounded-2xl bg-black shadow-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
              variants={cardVariants}
            >
              {/* Imagen ajustada */}
              <img
                src={creator.image}
                alt={creator.nombre}
                className="w-full h-64 sm:h-72 md:h-80 object-contain bg-black -mt-4"
              />

              {/* Footer fijo */}
              <div className="absolute bottom-0 left-0 w-full h-20 bg-black px-4 py-2 flex flex-col justify-center">
                <h3 className="text-white font-semibold text-lg sm:text-xl truncate">
                  {creator.nombre}
                </h3>
                <a
                  href={creator.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block px-3 py-1 rounded shadow 
                             bg-white/10 backdrop-blur-md border border-white/20 
                             text-white hover:bg-white/20 transition"
                >
                  Ver canal
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroHeroYoutube;
