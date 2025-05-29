import React from 'react';

const ControlButtons = ({ 
  isRunning, 
  isTimeUp, 
  onStart, 
  onPause, 
  onReset, 
  onStopAlarm 
}) => {
  return (
    <div className="control-buttons">
      {!isRunning && !isTimeUp && (
        <button className="btn btn-start" onClick={onStart}>
          Iniciar
        </button>
      )}
      
      {isRunning && (
        <button className="btn btn-pause" onClick={onPause}>
          Pausar
        </button>
      )}
      
      {isTimeUp && (
        <button className="btn btn-stop-alarm" onClick={onStopAlarm}>
          Detener Alarma
        </button>
      )}
      
      <button className="btn btn-reset" onClick={onReset}>
        Reiniciar
      </button>
    </div>
  );
};

export default ControlButtons;