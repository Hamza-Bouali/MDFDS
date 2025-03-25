"use client"

import { Mail, Share2, Github, Linkedin, Instagram, MapPin } from "lucide-react"
import { Code, Sparkles, Brain, Trophy, Users, Target } from "lucide-react"
const imageModules = import.meta.glob('/src/images/img/*.{png,jpg,jpeg,svg}', { eager: true });
import code from "./assests/icon.png";

// Import components
import { HackathonTimeline } from "./components/HackathonTimeline";
import { CountdownTimer } from "./components/CountdownTimer";
import { Header } from "./components/Header";

// Import data
import { 
  testimonials, 
  teamMembers, 
  evaluationCriteria, 
  opportunityPoints, 
  participationBenefits,
  prizes
} from "./data";

const HackathonWebsite = () => {
  const images = Object.values(imageModules).map((module: any) => module.default);
  
  return (
    <div className="min-h-screen bg-[#010084] text-white relative overflow-hidden">
      {/* Header Section */}
      <Header />


      {/* Separator */}
      <div className="h-1 bg-gradient-to-r from-[#13157c] to-[#13157c] " />
      {/* Countdown Timer */}
      <section className="py-16 px-4 bg-[#010084]/50 backdrop-blur-sm">
        <CountdownTimer />
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-[#010084]/30 backdrop-blur-sm" id="about">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#C4E2ED] to-[#C4E2ED] text-transparent bg-clip-text">
              A Unique Opportunity
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {opportunityPoints.map((text, index) => (
                <div key={index} className="flex items-start gap-4 bg-[#010084]/40 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#C4E2ED]/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[#C4E2ED]" />
                    </div>
                  </div>
                  <p className="text-gray-300">{text}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-3xl filter blur-3xl" />
              <div className="relative bg-[#010084]/40 p-8 rounded-3xl backdrop-blur-sm border border-[#C4E2ED]/20">
                <h3 className="text-2xl font-bold mb-6 text-[#C4E2ED]">Why Participate?</h3>
                <div className="space-y-4">
                  {participationBenefits.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[#C4E2ED]/20 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-[#C4E2ED]" />
                      </div>
                      <p className="text-gray-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prize Section */}
      <section className="py-16 px-4" id="prizes">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#C4E2ED] to-[#C4E2ED] text-transparent bg-clip-text">
              Prizes & Rewards
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-900/90 to-blue-900/90 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <h3 className="text-xl font-bold mb-4 text-blue-300">{prize.title}</h3>
                <ul className="space-y-2">
                  {prize.details.map((detail, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      
    {/* Separator */}
    <div className="h-1 bg-gradient-to-r from-[#13157c] to-[#13157c] " />
      {/* Timeline Section */}
      
      <HackathonTimeline />
      

      {/* Evaluation Criteria */}
      {/*<section className="py-16 px-4 bg-[#010084]/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#C4E2ED] to-[#C4E2ED] text-transparent bg-clip-text">
              Evaluation Criteria
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {evaluationCriteria.map((criteria, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#010084]/40 to-[#010084]/40 p-6 rounded-xl backdrop-blur-sm border border-[#C4E2ED]/20 hover:border-[#C4E2ED]/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#C4E2ED]/20 to-[#C4E2ED]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 bg-[#C4E2ED]/20 rounded-full flex items-center justify-center mb-4">
                  <criteria.icon className="w-6 h-6 text-[#C4E2ED]" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#C4E2ED]">{criteria.title}</h3>
                <p className="text-gray-300">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Testimonials Section */}
      {/*<section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#C4E2ED] to-[#C4E2ED] text-transparent bg-clip-text">
              Community Feedback
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-900/90 to-blue-900/90 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex text-blue-400 mb-4">{"★".repeat(testimonial.stars)}</div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-bold text-blue-300">{testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Team Section */}
     {/* <section className="py-16 px-4 bg-[#010084]/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#C4E2ED] to-[#C4E2ED] text-transparent bg-clip-text">
              Innovation Team
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-[#010084]/40 to-[#010084]/40 p-6 rounded-xl backdrop-blur-sm border border-[#C4E2ED]/20 hover:border-[#C4E2ED]/40 transition-all duration-300 text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500/20"
                />
                <h3 className="text-xl font-bold mb-2 text-[#C4E2ED]">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* Separator */}
      <div className="h-1 bg-gradient-to-r from-[#13157c] to-[#13157c] " />
      {/* Gallery Section */}
      <section className="py-16 px-4 bg-[#010084]/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-[#C4E2ED] to-[#C4E2ED] text-transparent bg-clip-text">
              Last Edition Gallery
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
                key={index}
                className={`relative overflow-hidden rounded-xl ${
                  (index+1)%5==0  ? "col-span-2 row-span-2" : index==images.length-1 ? "col-span-23" : ""
                }`}
              >
                <img
                  src={image || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-blue-950/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Separator */}
      <div className="h-1 bg-gradient-to-r from-[#13157c] to-[#13157c] " />
      {/* Footer */}
      <footer className="bg-[#010084]/30 backdrop-blur-sm py-12 px-4 border-t border-[#C4E2ED]/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex flex-row  items-center gap-3 mb-4 text-center ">
                <img src={code} alt="CODE-ESI" className="w-12 h-12 rounded-full object-cover" />
                <h3 className="text-xl font-bold">CODE-ESI</h3>
              </div>
              <p className="text-gray-300 mb-4">One passion, one Family.</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Av. Allal Al Fassi,ESI, Rabat, Maroc</span>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span>code@esi.ac.ma</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/CODE-ESI-CLUB"
                  target="_blank"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  rel="noreferrer"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/code.esi/"
                  target="_blank"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  rel="noreferrer"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/codesi18/posts/?feedView=all"
                  target="_blank"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  rel="noreferrer"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-[#C4E2ED]/30 text-center text-gray-300">
            <p>© 2025 CODE-ESI. All rights reserved. Terms & Conditions • Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HackathonWebsite

