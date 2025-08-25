import { motion } from "framer-motion";

const ReferenciaLibro = () => {
  return (
    <section
      id="referencia-libro"
      className="w-full py-16 px-6 sm:px-12 lg:px-20"
      style={{
        background: "var(--bg-section)",
        color: "var(--text-section)",
      }}
      
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-20" id="more">
        
        {/* Primera referencia */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Texto explicativo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Fuente de referencia
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Los ejercicios presentados en esta plataforma fueron tomados como 
              referencia del libro{" "}
              <span style={{ color: "var(--color-primary)" }}>
                "Enciclopedia de Ejercicios"
              </span>{" "}
              de Oscar Morejón Esquerdo.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Esta obra constituye un compendio detallado de movimientos y técnicas 
              que sirven como base para la correcta ejecución de rutinas de entrenamiento.
            </p>
          </motion.div>

          {/* Imagen del libro 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <img
              src="https://thfvnext.bing.com/th/id/OIP.XB_aZSda41l-FHZavSH-SQAAAA?pid=ImgDet&rs=1"
              alt="Enciclopedia de Ejercicios - Oscar Morejón Esquerdo"
              className="rounded-2xl shadow-lg max-h-96 object-contain"
            />
          </motion.div>
        </div>

        {/* Segunda referencia: Delavier */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center md:flex-row-reverse">
          {/* Imagen del libro 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:order-1"
          >
            <img
              src="https://th.bing.com/th/id/R.b6008b331564a512263966107639a7da?rik=4IvRyHIGosm0Lw&pid=ImgRaw&r=0"
              alt="Guía de los Movimientos de Musculación - Frédéric Delavier"
              className="rounded-2xl shadow-lg max-h-96 object-contain"
            />
          </motion.div>

          {/* Texto explicativo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:order-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold">
              Referencia adicional
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              También hemos utilizado como referencia el libro{" "}
              <span style={{ color: "var(--color-primary)" }}>
                "Guía de los Movimientos de Musculación"
              </span>{" "}
              de Frédéric Delavier.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Reconocido mundialmente, este libro ilustra con detalle la 
              biomecánica del entrenamiento de fuerza, mostrando gráficos 
              anatómicos de los músculos en acción y ofreciendo consejos 
              prácticos para evitar lesiones y mejorar el rendimiento.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReferenciaLibro;
