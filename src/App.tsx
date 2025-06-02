"use client"

import { Mail, Share2, Github, Linkedin, Instagram, MapPin } from "lucide-react"
import code from "./assests/icon.png";

// Import components
import { Header } from "./components/Header";


const HackathonWebsite = () => {

  return (
    <div className="min-h-screen bg-[#010084] text-white relative overflow-hidden">
      {/* Header Section */}
      <Header />

      <section className="py-20 px-4 flex items-center justify-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#C4E2ED] to-[#00CFFF] text-transparent bg-clip-text">
            See you in the next Edition!
          </h2>
          <p className="text-xl text-gray-300 mt-4">
            Stay tuned for updates.
          </p>
        </div>
      </section>

      {/* Countdown Timer */}
      {/* <section className="py-16 px-4 bg-[#010084]/50 backdrop-blur-sm">
        <CountdownTimer />
      </section> */}
      {/* Sponsors Section bg-gradient-to-b from-[#010084]/50 to-[#220066]/80 */}

      {false && null /* <section className="py-16 px-4  bg-transparent" id="sponsors">
        <p>Sponsors section</p>
      </section> */}

      {/* About Section */}
      {false && null /* <section className="py-16 px-4 bg-[#010084]/30 backdrop-blur-sm" id="about">
        <p>About section</p>
      </section> */}

                  
     {false && null /* <section className="py-16 px-4" id="prizes">
        <p>Prizes section</p>
      </section> */}

      {/* Timeline Section */}
     {false && null /* <HackathonTimeline /> */}

      {/* Evaluation Criteria */}
      {false && null /* <section className="py-16 px-4 bg-[#010084]/30 backdrop-blur-sm">
        <p>Evaluation Criteria section</p>
      </section> */}

      {/* Testimonials Section */}
      {false && null /* <section className="py-16 px-4">
        <p>Testimonials section</p>
      </section> */}

      {/* Team Section */}
      {false && null /* <section className="py-16 px-4 bg-[#010084]/30 backdrop-blur-sm">
        <p>Team section</p>
      </section> */}

      {/* Gallery Section */}
      {false && null /* <section className="py-16 px-4 bg-[#010084]/30 backdrop-blur-sm">
        <p>Gallery section</p>
      </section> */} {/* End of Gallery Section */}

      {/* Sponsors Section */}
      
          
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
