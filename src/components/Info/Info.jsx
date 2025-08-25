import { motion } from "framer-motion";
import { infoData } from "../../Data/info.js";
import { FiActivity, FiTrendingUp, FiTarget, FiHeart } from "react-icons/fi"; // Íconos ejemplo

// Relacionamos los íconos con cada card (puedes personalizarlos según infoData)
const icons = [FiActivity, FiTrendingUp, FiTarget, FiHeart];

const Info = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-[var(--color-bg)] transition-colors duration-300" >
      {/* Título */}
      <h2
        className="text-4xl md:text-5xl font-extrabold text-center mb-16 
        text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-400
        drop-shadow-md tracking-wide"
      >
        Conceptos Clave del Entrenamiento
      </h2>

      {/* Grid de Cards */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {infoData.map((item, index) => {
          const Icon = icons[index % icons.length]; // ciclo de íconos
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-2xl p-8 shadow-lg 
                bg-[var(--color-bg)]/80 border border-gray-200/40 dark:border-gray-700/40 
                backdrop-blur-xl transition-all
                hover:shadow-2xl hover:border-[var(--color-primary)]/60"
            >
              {/* Ícono */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="w-14 h-14 flex items-center justify-center rounded-full 
                  bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-6 
                  shadow-md"
              >
                <Icon size={28} />
              </motion.div>

              {/* Título */}
              <h3
                className="text-2xl md:text-3xl font-bold mb-4 
                text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-400
                drop-shadow-sm tracking-wide"
              >
                {item.title}
              </h3>

              {/* Descripción */}
              <p className="text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)] transition-colors">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Info;
