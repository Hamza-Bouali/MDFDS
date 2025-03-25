import { useInView } from "react-intersection-observer";
import { TimelineEvent } from "../types";

interface TimelineItemProps {
  event: TimelineEvent;
  index: number;
}

export const TimelineItem = ({ event, index }: TimelineItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const isEven = index % 2 === 0;

  return (
    <div ref={ref} className={`relative flex items-center mb-16 gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}>
      {/* Content Card */}
      <div
        className={`w-[calc(50%-2rem)] transform transition-all duration-1000 ease-out ${
          inView ? "opacity-100 translate-y-0" : `opacity-0 ${isEven ? "-translate-x-16" : "translate-x-16"}`
        }`}
      >
        <div className="group relative">
          {/* Background Gradient */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
          />
          {/* Card Content */}
          <div className="relative bg-[#010084]/40 backdrop-blur-sm rounded-2xl p-6 border border-[#C4E2ED]/20 group-hover:border-[#C4E2ED]/30 transition-all duration-300">
            {/* Time Badge */}
            <div className="absolute top-0 transform -translate-y-1/2 px-4 py-1 bg-[#010084]/60 backdrop-blur-sm rounded-full border border-[#C4E2ED]/20 text-sm font-medium text-[#C4E2ED]">
              {event.time}
            </div>
            <span className="text-[#C4E2ED] font-medium block mb-2 transition-all duration-300 group-hover:text-[#C4E2ED]">
              {event.date}
            </span>
            <h3 className="text-xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-[#C4E2ED]">
              {event.title}
            </h3>
            <ul className="space-y-2">
              {event.description.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 text-sm flex items-start transition-all duration-300 group-hover:text-white"
                  style={{ transition: `all 300ms ease ${i * 100}ms` }}
                >
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C4E2ED] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Timeline Node */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-10">
        <div
          className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${event.color} p-0.5 transform transition-all duration-700 ease-out ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-0"
          }`}
          style={{ transition: `all 700ms ease-out 300ms` }}
        >
          {/* Inner Icon Container */}
          <div className="w-full h-full bg-[#010084]/60 backdrop-blur-sm rounded-xl flex items-center justify-center relative z-10">
            <event.icon className="w-7 h-7 text-[#C4E2ED] group-hover:text-white transition-colors duration-300" />
          </div>
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C4E2ED]/20 to-[#010084]/20 blur-xl opacity-50" />
        </div>
        {/* Connection Lines */}
        <div className="absolute w-8 h-px bg-gradient-to-r from-transparent via-[#C4E2ED]/50 to-transparent" />
      </div>
      {/* Empty space for the other side */}
      <div className="w-[calc(50%-2rem)]" />
    </div>
  );
};
