// src/hooks/useExercisesSearch.js
import { useState } from "react";

export const useExercisesSearch = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (!search.trim()) return [];

    try {
      const res = await fetch("/exercises.json");
      if (!res.ok) throw new Error("No se pudo cargar el JSON");
      const data = await res.json();

      let results = [];

      Object.entries(data).forEach(([grupo, lista]) => {
        const filtrados = lista.filter(
          (ej) =>
            ej.nombre.toLowerCase().includes(search.toLowerCase()) ||
            grupo.toLowerCase().includes(search.toLowerCase())
        );

        results.push(
          ...filtrados.map((ej) => ({
            ...ej,       // id, nombre, imagen, recomendacion
            grupo,       // para mostrar el grupo
          }))
        );
      });

      return results;
    } catch (err) {
      console.error("Error buscando ejercicios:", err);
      return [];
    }
  };

  return { search, setSearch, handleSearch };
};
