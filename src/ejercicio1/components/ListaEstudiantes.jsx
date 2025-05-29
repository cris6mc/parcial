import React, { useState, useEffect } from "react";
import Estudiante from "./Estudiante";
import "../styles/ListaEstudiantes.css";

const ListaEstudiantes = ({ estudiantes }) => {
  // Añadir este console.log para verificar todos los estudiantes
  console.log("Lista de estudiantes:", estudiantes);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`lista-estudiantes ${
        isMobile ? "single-column" : "two-columns"
      }`}
    >
      {estudiantes.map((estudiante) => (
        <div className="estudiante-container" key={estudiante.id}>
          <Estudiante estudiante={estudiante} />
        </div>
      ))}
    </div>
  );
};

export default ListaEstudiantes;
