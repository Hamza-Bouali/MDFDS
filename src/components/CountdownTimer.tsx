import { useState, useEffect } from "react";
import { EVENT_DATE } from "../data";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isAnimating, setIsAnimating] = useState(false);

  // Hackathon start date
  const targetDate = new Date(EVENT_DATE).getTime();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      // Trigger animation when seconds change
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#93C5FD]">
        Countdown to the beginning of the event
      </h2>
      <div className="flex flex-wrap justify-center gap-4 md:gap-8">
        {timeUnits.map((unit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-24 h-24 md:w-32 md:h-32 bg-[#1E3A8A]/60 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-[#93C5FD]/50 transition-all duration-300 ${
                unit.label === "Seconds" && isAnimating ? "scale-105 bg-[#1E40AF]/70" : ""
              }`}
            >
              <span className="text-4xl md:text-5xl font-bold text-white">
                {unit.value < 10 ? `0${unit.value}` : unit.value}
              </span>
            </div>
            <span className="mt-2 text-[#93C5FD] font-medium">{unit.label}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-8 text-[#93C5FD] max-w-2xl mx-auto">
        <p className="italic">
          "The nature of the challenge remains shrouded in mystery. All will be revealed when the countdown reaches
          zero."
        </p>
      </div>
    </div>
  );
};
