// src/components/Search/ExerciseCard.jsx
import React from "react";

const ExerciseCard = ({ ejercicio }) => (
  <div
    className="border rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
    style={{
      background: "var(--color-bg)",
      color: "var(--color-text)",
    }}
  >
    {/* Imagen */}
    <img
      src={ejercicio.imagen}
      alt={ejercicio.nombre}
      className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
      loading="lazy"
    />

    {/* Contenido */}
    <div className="p-4">
      <h3
        className="text-xl font-bold mb-2 capitalize"
        style={{ color: "var(--color-text)" }}
      >
        {ejercicio.nombre}
      </h3>
      <p
        className="mb-1"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {ejercicio.recomendacion}
      </p>
      <span
        className="text-sm"
        style={{ color: "var(--color-primary)" }}
      >
        {ejercicio.grupo}
      </span>
    </div>
  </div>
);

export default ExerciseCard;

