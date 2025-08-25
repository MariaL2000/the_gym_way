import React from "react";
import { motion } from "framer-motion";
import BackgroundParticles from "../BackgroundParticles";

const Hero = () => {
  return (
    <section
      style={{
        background: "var(--hero-bg)",
        color: "var(--color-text)",
        position: "relative",
        overflow: "hidden",
      }}
      className="w-full min-h-screen flex items-center px-4 sm:px-6 lg:px-8"
    >
      {/* Partículas de fondo que ocupan todo el section */}
      <BackgroundParticles count={20} />

      {/* Contenido */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Texto */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ color: "var(--color-text)" }}
          >
            Shape your{" "}
            <span style={{ color: "var(--color-primary)" }}>Health</span>
          </h1>
          <p
            className="mt-6 text-lg sm:text-xl md:text-2xl max-w-xl mx-auto md:mx-0"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Alcanzar tus metas nunca fue tan sencillo: ejercicios, rutinas y
            motivación en un solo lugar.
          </p>
        </div>

        {/* Imagen */}
        <motion.div
          className="flex justify-center md:justify-end items-center mt-8 md:mt-0"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="/Hero.png"
            alt="Hero"
            className="w-[250px] sm:w-[350px] md:w-[400px] lg:w-[500px] xl:w-[550px] drop-shadow-xl rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

