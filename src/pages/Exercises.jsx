import { useState } from "react";
import { useExercises } from "../hooks/useExercises";
import { motion, AnimatePresence } from "framer-motion";
import ExerciseCard from "../components/Search/ExerciseCard";

// Imágenes seguras de Unsplash para los grupos
const groupImages = {
  Pecho: "https://images.unsplash.com/photo-1597452485677-d661670d9640?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Espalda: "https://images.unsplash.com/photo-1744551472645-7fd56c0406ff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Brazo: "https://images.unsplash.com/photo-1585820114364-e6d77b1a3ca4?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Pierna: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  Abs: "https://images.unsplash.com/photo-1601986313624-28c11ac26334?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
};

function Exercises() {
  const { exercises, loading } = useExercises();
  const [openGroup, setOpenGroup] = useState(null);

  if (loading) return <p className="text-center mt-10">Cargando ejercicios...</p>;

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Ejercicios</h1>

      {/* GRID de categorías cuadradas */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-10">
        {Object.entries(exercises).map(([grupo]) => (
          <motion.div
            key={grupo}
            whileHover={{ scale: 1.05 }}
            className="relative rounded-2xl shadow-lg overflow-hidden cursor-pointer aspect-square"
            onClick={() => setOpenGroup(openGroup === grupo ? null : grupo)}
          >
            <img
              src={groupImages[grupo]}
              alt={grupo}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h2 className="text-white text-xl font-bold drop-shadow-md">
                {grupo}
              </h2>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contenido expandido abajo, ocupando todo el ancho */}
      <AnimatePresence>
        {openGroup && (
          <motion.div
            key={openGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-6"
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">
              {openGroup}
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {exercises[openGroup].map((ej) => (
                <ExerciseCard key={ej.id} ejercicio={ej} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Exercises;
