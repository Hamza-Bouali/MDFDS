import { timelineEvents } from "../data";
import { TimelineItem } from "./TimelineItem";

export const HackathonTimeline = () => {
  return (
    <section
      className="relative py-28 px-4 bg-gradient-to-b from-[#1E3A8A] via-[#1E3A8A]/90 to-[#1E3A8A] overflow-hidden"
      id="timeline"
    >
      {/* Enhanced background effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(147,197,253,0.3),rgba(255,255,255,0))] animate-pulse" />
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10" />
      </div>
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold text-center mb-20">
          <span className="bg-gradient-to-r from-[#93C5FD] via-white to-[#93C5FD] text-transparent bg-clip-text">
            Event Timeline
          </span>
        </h2>
        <div className="relative">
          {/* Enhanced vertical line with glow effect */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-transparent via-[#93C5FD] to-transparent shadow-[0_0_15px_2px_rgba(147,197,253,0.5)]" />
          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
