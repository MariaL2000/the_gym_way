// src/pages/ResultsPage.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Stack, Button, Typography } from "@mui/material";
import ExerciseCard from "../components/Search/ExerciseCard";

const ResultsPage = () => {
  const location = useLocation();
  const exercises = location.state?.exercises || [];
  const navigate = useNavigate();

  if (!exercises.length) {
    return (
      <Stack
        spacing={3}
        alignItems="center"
        justifyContent="center"
        sx={{ mt: 8, textAlign: "center" }}
      >
        <Typography
          variant="h5"
          sx={{
            animation: "pulse 1.5s infinite",
            color: "#FF4C4C",
            fontWeight: "bold",
          }}
        >
          No se encontraron resultados
        </Typography>
        <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
          Volver atrás
        </Button>
        <style>{`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 1; }
            50% { transform: scale(1.1); opacity: 0.7; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </Stack>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Resultados</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {exercises.map((ejercicio) => (
          <ExerciseCard key={ejercicio.id} ejercicio={ejercicio} />
        ))}
      </div>
    </div>
  );
};

export default ResultsPage;
