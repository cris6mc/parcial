import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./ejercicio2/App.css";
import Timer from "./ejercicio2/Timer";
import Ejercicio1 from "./ejercicio1/Ejercicio1";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ejercicio1" element={<Ejercicio1 />} />
        <Route
          path="/ejercicio2"
          element={
            <div className="container">
              <h1>Cronómetro Regresivo</h1>
              <Timer />
            </div>
          }
        />
      </Routes>
    </div>
  );
}

// Componente para la página principal
function Home() {
  return (
    <div className="home-container">
      <h1>Parcial - Selecciona un ejercicio</h1>
      <div className="cards-container">
        <Link to="/ejercicio1" className="card-link">
          <div className="module-card">
            <h2>Ejercicio 1</h2>
            <p>Directorio de Estudiantes</p>
            <div className="card-image student-card-image"></div>
          </div>
        </Link>
        <Link to="/ejercicio2" className="card-link">
          <div className="module-card">
            <h2>Ejercicio 2</h2>
            <p>Cronómetro Regresivo</p>
            <div className="card-image timer-card-image"></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default App;
