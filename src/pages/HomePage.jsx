// src/pages/HomePage.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import SearchOverlay from "../components/Navbar/SearchOverlay";
//import SearchResults from "../components/Search/SearchResults";
import Info from "../components/Info/Info";
import Goals from "../components/Info/Goals"
import HeroHeroYoutube from "../components/Button"
import ReferenciaLibro from "../components/ReferenciaLibro"
import Footer from "../components/Footer"

const HomePage = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {/* Overlay de búsqueda */}
      <SearchOverlay searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

      {/* Navbar */}
      <Navbar setSearchOpen={setSearchOpen} />


      {/* Sección Hero */}
      <Hero />
      <Goals/>
      <Info/>

      <HeroHeroYoutube to="/exercises">Ver Ejercicios</HeroHeroYoutube>
      <ReferenciaLibro/>
      <Footer/>
     

      
    </>
  );
};

export default HomePage;
