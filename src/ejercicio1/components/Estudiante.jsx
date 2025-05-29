import React from "react";
import Barcode from "./Barcode";
import studentPhoto from "../../assets/img_ejercicio1/student_placeholder.jpg";
import "../styles/Estudiante.css";

const Estudiante = ({ estudiante }) => {
  // Añadir este console.log para verificar que los datos llegan correctamente
  console.log("Datos del estudiante recibidos:", estudiante);

  const { id, university, name, birthdate, address, barcode } = estudiante;

  return (
    <div className="student-card">
      <div className="card-header">
        <div className="university-logo">
          <div className="logo-icon"></div>
          <div className="university-name">{university}</div>
        </div>
      </div>

      <div className="card-content">
        <div className="student-photo">
          <img src={studentPhoto} alt={name} />
        </div>

        <div className="student-id-title">STUDENT ID CARD</div>

        <div className="student-info">
          <h2 className="student-name">{name}</h2>

          <div className="info-row">
            <span className="info-label">Student Id</span>
            <span className="info-colon">:</span>
            <span className="info-value">{id}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Date</span>
            <span className="info-colon">:</span>
            <span className="info-value">{birthdate}</span>
          </div>

          <div className="info-row">
            <span className="info-label">Address</span>
            <span className="info-colon">:</span>
            <span className="info-value">{address}</span>
          </div>
        </div>
      </div>

      <div className="card-footer">
        <Barcode value={barcode} />
      </div>
    </div>
  );
};

export default Estudiante;
