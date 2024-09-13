"use client";
import React, { useState, useEffect } from 'react';

interface TimeDifference {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const LastUpdated: React.FC = () => {
  const [timeElapsed, setTimeElapsed] = useState<TimeDifference>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('2024-09-13T21:32:49'); // Replace with your last updated day and time in 24 hours format

    const calculateTimeElapsed = () => {
      const now = new Date();
      let years = now.getFullYear() - startDate.getFullYear();
      let months = now.getMonth() - startDate.getMonth();
      let days = now.getDate() - startDate.getDate();
      let hours = now.getHours() - startDate.getHours();
      let minutes = now.getMinutes() - startDate.getMinutes();
      let seconds = now.getSeconds() - startDate.getSeconds();

      // Adjust for negative values
      if (seconds < 0) {
        seconds += 60;
        minutes--;
      }
      if (minutes < 0) {
        minutes += 60;
        hours--;
      }
      if (hours < 0) {
        hours += 24;
        days--;
      }
      if (days < 0) {
        const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += previousMonth;
        months--;
      }
      if (months < 0) {
        months += 12;
        years--;
      }
      setTimeElapsed({ years, months, days, hours, minutes, seconds });
    };

    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderTimeSegment = (value: number, label: string) => {
    return value > 0 ? `${value} ${label}${value > 1 ? 's' : ''}, ` : '';
  };

  return (
    <div>
      <p>
        {renderTimeSegment(timeElapsed.years, 'year')}
        {renderTimeSegment(timeElapsed.months, 'month')}
        {renderTimeSegment(timeElapsed.days, 'day')}
        {renderTimeSegment(timeElapsed.hours, 'hour')}
        {timeElapsed.minutes > 0 ? `${timeElapsed.minutes} minute${timeElapsed.minutes > 1 ? 's' : ''}, ` : ''}
        {timeElapsed.seconds} second{timeElapsed.seconds !== 1 ? 's' : ''}.
      </p>
    </div>
  );
};
