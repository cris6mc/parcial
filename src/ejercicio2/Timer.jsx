import React, { useState, useEffect, useRef } from 'react';
import TimeInput from './TimeInput';
import TimeDisplay from './TimeDisplay';
import ControlButtons from './ControlButtons';

const Timer = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isTimeUp, setIsTimeUp] = useState(false);
  
  const intervalRef = useRef(null);
  const audioRef = useRef(null);

  // Función para inicializar el audio
  useEffect(() => {
    audioRef.current = new Audio('/BeepExamen.mp3');
    audioRef.current.loop = true;
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Efecto para manejar el countdown
  useEffect(() => {
    if (isRunning && !isTimeUp) {
      intervalRef.current = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            setMinutes(prevMinutes => {
              if (prevMinutes > 0) {
                return prevMinutes - 1;
              } else {
                setHours(prevHours => {
                  if (prevHours > 0) {
                    return prevHours - 1;
                  } else {
                    // Tiempo terminado
                    setIsRunning(false);
                    setIsTimeUp(true);
                    playAlarm();
                    return 0;
                  }
                });
                return 59;
              }
            });
            return 59;
          }
        });
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, isTimeUp]);

  const playAlarm = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.error('Error playing audio:', err);
      });
    }
  };

  const stopAlarm = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const handleStart = () => {
    if (hours === 0 && minutes === 0 && seconds === 0) {
      alert('Por favor, establece un tiempo válido');
      return;
    }
    setIsRunning(true);
    setIsTimeUp(false);
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsTimeUp(false);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    stopAlarm();
  };

  const handleStopAlarm = () => {
    stopAlarm();
    setIsTimeUp(false);
  };

  return (
    <div className="timer-container">
      {!isRunning && !isTimeUp ? (
        <TimeInput 
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />
      ) : (
        <TimeDisplay 
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          isTimeUp={isTimeUp}
        />
      )}
      
      <ControlButtons 
        isRunning={isRunning}
        isTimeUp={isTimeUp}
        onStart={handleStart}
        onPause={handlePause}
        onReset={handleReset}
        onStopAlarm={handleStopAlarm}
      />
    </div>
  );
};

export default Timer;