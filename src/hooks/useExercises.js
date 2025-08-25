// src/hooks/useExercises.js
import { useEffect, useState } from "react";
import { fetchData } from "../utils/fetchData";

export const useExercises = () => {
  const [exercises, setExercises] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getExercises = async () => {
      const data = await fetchData("/exercises.json");
      setExercises(data);
      setLoading(false);
    };
    getExercises();
  }, []);

  return { exercises, loading };
};
