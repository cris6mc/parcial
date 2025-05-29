import React, { useEffect, useState } from 'react';
import ListaEstudiantes from './ListaEstudiantes';
import estudiantesData from '../estudiantes.json';
import '../styles/ComponentGeneral.css';

const ComponentGeneral = () => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data from a file
    setTimeout(() => {
      setEstudiantes(estudiantesData);
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="component-general">
      <h1>Directorio de Estudiantes</h1>
      {loading ? (
        <div className="loading">Cargando estudiantes...</div>
      ) : (
        <ListaEstudiantes estudiantes={estudiantes} />
      )}
    </div>
  );
};

export default ComponentGeneral;
