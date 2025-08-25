import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { carrouselData } from "../../Data/carousel";

const Goals = () => {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const intervalRef = useRef(null);

  // 🔥 Autoplay cada 6s
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      nextCard();
    }, 6000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const nextCard = () => {
    setIndex((prev) => (prev + 1) % carrouselData.length);
  };

  const prevCard = () => {
    setIndex((prev) =>
      prev === 0 ? carrouselData.length - 1 : prev - 1
    );
  };

  // 👉 Swipe en móviles
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextCard(); // swipe izquierda → siguiente
    } else if (diff < -50) {
      prevCard(); // swipe derecha → anterior
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-20 lg:px-32 bg-[var(--color-bg)] text-[var(--color-text)] transition-colors"
    >
      {/* Título con animación moderna */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center mb-6"
        style={{ color: "var(--color-primary)" }}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Nuestra Meta
      </motion.h2>

      <motion.p
        className="text-center max-w-3xl mx-auto text-lg md:text-xl mb-14 text-[var(--color-text-secondary)] leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        Creemos en el poder del entrenamiento como herramienta para transformar
        no solo el cuerpo, sino también la mente y los hábitos. Estos son los
        pilares que guían nuestro enfoque.
      </motion.p>

      {/* Carrusel */}
      <div
        className="relative flex justify-center items-center"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Botón Izquierdo */}
        <button
          onClick={() => {
            prevCard();
            startAutoPlay();
          }}
          className="absolute left-2 md:-left-14 bg-[var(--color-primary)] text-white rounded-full p-3 md:p-4 shadow-lg hover:scale-125 active:scale-95 transition-transform z-10"
        >
          ‹
        </button>

        {/* Contenedor */}
        <div className="w-full max-w-4xl h-[500px] overflow-hidden relative rounded-3xl shadow-2xl border border-gray-300 dark:border-gray-700 bg-[var(--color-bg)]">
          <AnimatePresence mode="wait">
            {carrouselData.map(
              (item, i) =>
                i === index && (
                  <motion.div
                    key={item.id}
                    className="absolute top-0 left-0 w-full h-full flex flex-col md:flex-row"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.6 }}
                  >
                    {/* Imagen con efecto parallax */}
                    <motion.div
                      className="w-full md:w-1/2 h-60 md:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.img})` }}
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                    />

                    {/* Texto con animación */}
                    <motion.div
                      className="w-full md:w-1/2 p-8 flex flex-col justify-center bg-[var(--color-bg)]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h3 className="text-2xl md:text-3xl font-semibold text-[var(--color-primary)] mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base md:text-lg text-[var(--color-text-secondary)] leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>

        {/* Botón Derecho */}
        <button
          onClick={() => {
            nextCard();
            startAutoPlay();
          }}
          className="absolute right-2 md:-right-14 bg-[var(--color-primary)] text-white rounded-full p-3 md:p-4 shadow-lg hover:scale-125 active:scale-95 transition-transform z-10"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex justify-center mt-8 gap-3">
        {carrouselData.map((_, i) => (
          <span
            key={i}
            onClick={() => {
              setIndex(i);
              startAutoPlay();
            }}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              i === index
                ? "bg-[var(--color-primary)] scale-125"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Goals;
