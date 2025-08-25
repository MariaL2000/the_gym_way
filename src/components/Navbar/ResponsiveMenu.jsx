import React, { useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavbarMenu } from "../../Data/data"; // 👈 Importamos la data

const Responsivemenu = ({ open, setOpen }) => {
  const menuRef = useRef();

  // Detectar clicks fuera del menú para cerrarlo
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen]);

  // Función para hacer scroll suave o navegación
  const handleClick = (link) => {
    if (link.startsWith("#")) {
      const section = document.querySelector(link);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.location.href = link; // navegación normal si no es hash
    }
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-[var(--color-bg)] text-[var(--color-text)] z-40 flex justify-center items-center"
        >
          <div
            ref={menuRef}
            className="text-xl font-semibold uppercase py-10 m-6 rounded-3xl flex flex-col items-center gap-10"
          >
            {NavbarMenu.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item.link)}
                className="hover:opacity-80"
              >
                {item.title}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Responsivemenu;
