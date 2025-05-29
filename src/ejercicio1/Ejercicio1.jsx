import React from "react";
import ComponentGeneral from "./components/ComponentGeneral";
import "./styles/Ejercicio1.css";
import { Link } from "react-router-dom";

const Ejercicio1 = () => {
  return (
    <div className="ejercicio1-container">
      <div className="nav-header">
        <Link to="/" className="home-button">
          ← Volver al inicio
        </Link>
        <h1>Directorio de Estudiantes</h1>
      </div>
      <ComponentGeneral />
    </div>
  );
};

export default Ejercicio1;
