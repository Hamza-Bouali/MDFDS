"use client"
import { ClipboardList, Code, Medal, Trophy, Mail, Brain, Target, Users } from "lucide-react"
import { useInView } from "react-intersection-observer"

const timelineEvents = [
  {
    date: "April 5th, 2025",
    title: "Phase 1: Opening Ceremony & Kickoff",
    description: [
      "Welcome address and event overview",
      "Team formation and registration",
      "Mystery challenge reveal",
      "Technical resources distribution"
    ],
    icon: ClipboardList,
    color: "from-blue-500/20 to-purple-500/20",
    time: "09:00 AM"
  },
  {
    date: "April 5th, 2025",
    title: "Phase 2: Development Sprint",
    description: [
      "Intensive coding and development",
      "Mentorship sessions",
      "Technical workshops",
      "Progress check-ins"
    ],
    icon: Code,
    color: "from-purple-500/20 to-pink-500/20",
    time: "11:00 AM"
  },
  {
    date: "April 5th, 2025",
    title: "Phase 3: Expert Sessions",
    description: [
      "AI/ML masterclass",
      "Industry expert talks",
      "Technical guidance",
      "Networking opportunities"
    ],
    icon: Brain,
    color: "from-indigo-500/20 to-blue-500/20",
    time: "03:00 PM"
  },
  {
    date: "April 6th, 2025",
    title: "Phase 4: Project Refinement",
    description: [
      "Code refinement",
      "Documentation completion",
      "Presentation preparation",
      "Final mentorship"
    ],
    icon: Target,
    color: "from-pink-500/20 to-rose-500/20",
    time: "09:00 AM"
  },
  {
    date: "April 6th, 2025",
    title: "Phase 5: Final Presentations",
    description: [
      "Project demonstrations",
      "Technical Q&A sessions",
      "Jury evaluation",
      "Community showcase"
    ],
    icon: Users,
    color: "from-emerald-500/20 to-teal-500/20",
    time: "02:00 PM"
  },
  {
    date: "April 6th, 2025",
    title: "Phase 6: Awards Ceremony",
    description: [
      "Winner announcements",
      "Prize distribution",
      "Networking session",
      "Closing ceremony"
    ],
    icon: Trophy,
    color: "from-amber-500/20 to-orange-500/20",
    time: "05:00 PM"
  }
]

export default function HackathonTimeline() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-indigo-950 via-purple-950 to-indigo-950" id="timeline">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 text-transparent bg-clip-text">
            Event Timeline
          </span>
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent" />

          {timelineEvents.map((event, index) => (
            <TimelineItem key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

type TimelineEvent = {
  date: string
  title: string
  description: string[]
  icon: any
  color: string
  time: string
}

type TimelineItemProps = {
  event: TimelineEvent
  index: number
}

function TimelineItem({ event, index }: TimelineItemProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const isEven = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex items-center mb-16 gap-8 ${isEven ? "flex-row" : "flex-row-reverse"}`}
    >
      {/* Content Card */}
      <div
        className={`w-[calc(50%-2rem)] transform transition-all duration-1000 ease-out ${
          inView
            ? "opacity-100 translate-y-0"
            : `opacity-0 ${isEven ? "-translate-x-16" : "translate-x-16"}`
        }`}
      >
        <div className="group relative">
          {/* Background Gradient */}
          <div className={`absolute inset-0 bg-gradient-to-br ${event.color} rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
          
          {/* Card Content */}
          <div className="relative bg-indigo-900/40 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 group-hover:border-indigo-400/30 transition-all duration-300">
            {/* Time Badge */}
            <div className="absolute top-0 transform -translate-y-1/2 px-4 py-1 bg-indigo-900/60 backdrop-blur-sm rounded-full border border-indigo-500/20 text-sm font-medium text-indigo-300">
              {event.time}
            </div>

            <span className="text-indigo-300 font-medium block mb-2 transition-all duration-300 group-hover:text-indigo-200">
              {event.date}
            </span>

            <h3 className="text-xl font-bold text-white mb-4 transition-all duration-300 group-hover:text-indigo-100">
              {event.title}
            </h3>

            <ul className="space-y-2">
              {event.description.map((item, i) => (
                <li
                  key={i}
                  className="text-gray-300 text-sm flex items-start transition-all duration-300 group-hover:text-white"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="mr-2 mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
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
          style={{ transitionDelay: "300ms" }}
        >
          {/* Inner Icon Container */}
          <div className="w-full h-full bg-indigo-900/60 backdrop-blur-sm rounded-xl flex items-center justify-center relative z-10">
            <event.icon className="w-7 h-7 text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300" />
          </div>

          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-xl opacity-50" />
        </div>

        {/* Connection Lines */}
        <div className="absolute w-8 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      </div>

      {/* Empty space for the other side */}
      <div className="w-[calc(50%-2rem)]" />
    </div>
  )
}