import { FaDumbbell } from "react-icons/fa";
import BackgroundParticles from "./BackgroundParticles";
import { NavbarMenu } from "../Data/data";

const Footer = () => {
  return (
    <footer
      className="relative w-full border-t px-4 sm:px-8 lg:px-20 py-16 overflow-hidden"
      style={{
        color: "var(--color-text)",
        borderColor: "var(--color-text-secondary)",
        background: "var(--hero-bg)",
      }}
    >
      {/* Fondo de partículas */}
      <BackgroundParticles
        count={50}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      />

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 z-10 overflow-hidden">
        {/* Logo + texto explicativo */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 font-bold uppercase text-2xl sm:text-3xl lg:text-4xl tracking-tight">
            <FaDumbbell
              className="drop-shadow-lg flex-shrink-0"
              style={{ color: "var(--color-primary)" }}
              size={40}
            />
            <p className="whitespace-nowrap">The Gym</p>
            <p
              style={{ color: "var(--color-primary)" }}
              className="whitespace-nowrap"
            >
              Way
            </p>
          </div>

          <p
            className="text-sm sm:text-base leading-relaxed max-w-md mx-auto md:mx-0"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Un espacio para enriquecer la cultura fitness en la{" "}
            <span className="font-semibold">
              Universidad de las Ciencias Informáticas
            </span>
            , con el objetivo de ayudarte a aprender, explorar y ejecutar
            rutinas de entrenamiento de forma correcta y efectiva.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <h3 className="text-lg sm:text-xl font-semibold">Quick Links</h3>
          <ul className="flex flex-col gap-3 text-sm sm:text-base">
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="transition-all hover:text-[var(--color-primary)] hover:translate-x-1"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacto / Logo alternativo */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <img
            src="/Logo2.png"
            alt="Logo Enciclopedia"
            className="max-w-[8rem] sm:max-w-[10rem] lg:max-w-[12rem] h-auto object-contain drop-shadow-xl transition-transform duration-300 hover:scale-110"
          />
          <a
            href="mailto:lmaria@estudiantes.uci.cu"
            className="text-sm sm:text-base font-medium transition-colors hover:opacity-80 break-words text-center md:text-right"
            style={{ color: "var(--color-primary)" }}
          >
            lmaria@estudiantes.uci.cu
          </a>
        </div>
      </div>

      {/* Línea inferior */}
      <div
        className="relative mt-12 pt-6 border-t text-center text-xs sm:text-sm z-10"
        style={{
          borderColor: "var(--color-text-secondary)",
          color: "var(--color-text-secondary)",
        }}
      >
        © {new Date().getFullYear()} The Gym Way. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
