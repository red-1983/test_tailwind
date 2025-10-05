'use client';

import { useState, useEffect } from 'react';
import StarIcon from '../Icon/StarIcon';
interface TimerProps {
  seconds: number;
}
const Timer = ({ seconds }: TimerProps) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const isBlinking = seconds > 0 && seconds <= 30;

  return (
    <div
      className={`relative flex items-center gap-2 font-bold text-[clamp(1.1rem,2.5vw,2.5rem)] ${isBlinking ? 'text-red-500 animate-blink' : 'text-[#FFBB00]'}`}
    >
      <StarIcon
        className={`${isBlinking ? 'text-red-500 animate-blink' : 'text-[#FFBB00]'}`}
      />
      <span className="flex">
        {String(minutes).padStart(2, '0')}&nbsp;&#58;&nbsp;
        {String(remainingSeconds).padStart(2, '0')}
      </span>
      <StarIcon
        className={`${isBlinking ? 'text-red-500 animate-blink' : 'text-[#FFBB00]'}`}
      />
    </div>
  );
};

export default Timer;
