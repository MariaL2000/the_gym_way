import React from "react";
import Navbar from "./Navbar"; // Tu componente Navbar
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet /> {/* Aquí se renderizan todas las páginas */}
      </main>
    </div>
  );
};

export default Layout;
