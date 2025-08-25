// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./pages/HomePage";
import ResultsPage from "./pages/ResultsPage";
import Exercises from "./pages/Exercises";
import Layout from "./components/Navbar/Layout";

export default function App() {
  return (
    <Routes>
      {/* Todas las páginas usan Layout */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="exercises" element={<Exercises />} />
        <Route path="results" element={<ResultsPage />} />
      </Route>
    </Routes>
  );
}
