import React from 'react';

const TimeInput = ({ hours, minutes, seconds, setHours, setMinutes, setSeconds }) => {
  const handleHoursChange = (e) => {
    const value = Math.max(0, Math.min(23, parseInt(e.target.value) || 0));
    setHours(value);
  };

  const handleMinutesChange = (e) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setMinutes(value);
  };

  const handleSecondsChange = (e) => {
    const value = Math.max(0, Math.min(59, parseInt(e.target.value) || 0));
    setSeconds(value);
  };

  return (
    <div className="time-input-container">
      <div className="input-group">
        <label htmlFor="hours">Horas</label>
        <input
          id="hours"
          type="number"
          min="0"
          max="23"
          value={hours}
          onChange={handleHoursChange}
          className="time-input"
        />
      </div>
      
      <div className="input-separator">:</div>
      
      <div className="input-group">
        <label htmlFor="minutes">Minutos</label>
        <input
          id="minutes"
          type="number"
          min="0"
          max="59"
          value={minutes}
          onChange={handleMinutesChange}
          className="time-input"
        />
      </div>
      
      <div className="input-separator">:</div>
      
      <div className="input-group">
        <label htmlFor="seconds">Segundos</label>
        <input
          id="seconds"
          type="number"
          min="0"
          max="59"
          value={seconds}
          onChange={handleSecondsChange}
          className="time-input"
        />
      </div>
    </div>
  );
};

export default TimeInput;