import React from 'react';

const TimeDisplay = ({ hours, minutes, seconds, isTimeUp }) => {
  const formatTime = (time) => {
    return time.toString().padStart(2, '0');
  };

  return (
    <div className={`time-display-container ${isTimeUp ? 'time-up' : ''}`}>
      <div className="display-group">
        <span className="time-label">Horas</span>
        <span className="time-value">{formatTime(hours)}</span>
      </div>
      
      <div className="display-separator">:</div>
      
      <div className="display-group">
        <span className="time-label">Minutos</span>
        <span className="time-value">{formatTime(minutes)}</span>
      </div>
      
      <div className="display-separator">:</div>
      
      <div className="display-group">
        <span className="time-label">Segundos</span>
        <span className="time-value">{formatTime(seconds)}</span>
      </div>
      
      {isTimeUp && (
        <div className="time-up-message">
          ¡TIEMPO TERMINADO!
        </div>
      )}
    </div>
  );
};

export default TimeDisplay;