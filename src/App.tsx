import { useState, useEffect } from "react"
import { MapPin, Mail, Share2, ArrowRight, ChevronRight, Github, Linkedin, Calendar, Instagram } from "lucide-react"
import { Lock, Code, Sparkles, Atom, Brain, Trophy, Users, Target,X } from "lucide-react"
import HackathonTimeline from "./hackathon-timeline"
import CountdownTimer from "./components/countdown-timer.tsx"
const imageModules = import.meta.glob('/src/images/img/*.{png,jpg,jpeg,svg}', { eager: true });


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [activeFeature, setActiveFeature] = useState(0)
  const [currentBackground, setCurrentBackground] = useState(0)

  // Add this at the top of the Header component, after the imports
  // This is needed for the longer transition duration
  useEffect(() => {
    // Add custom CSS for longer transition duration
    const style = document.createElement("style")
    style.textContent = `
    .duration-2000 {
      transition-duration: 2000ms;
    }
  `
    document.head.appendChild(style)

    return () => {
      document.head.removeChild(style)
    }
  }, [])

  const techFeatures = [
    {
      name: "Advanced Tech",
      icon: Atom,
      description: "Cutting-edge technology and innovation platform",
    },
    {
      name: "Data Analysis",
      icon: Code,
      description: "Advanced data processing and analytics",
    },
    {
      name: "Innovation",
      icon: Sparkles,
      description: "Creative solutions for real-world challenges",
    },
    {
      name: "AI & ML",
      icon: Brain,
      description: "State-of-the-art artificial intelligence",
    },
    {
      name: "Mystery",
      icon: Lock,
      description: "Unlock the secrets of future technology",
    },
  ]

  // Background images for the carousel
  const backgroundImages = [
    "src/images/img/hero.jpeg",
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    setIsLoaded(true)

    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % techFeatures.length)
    }, 3000)

    // Background switching interval
    const backgroundInterval = setInterval(() => {
      setCurrentBackground((prev) => (prev + 1) % backgroundImages.length)
    }, 8000) // Switch every 8 seconds

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearInterval(interval)
      clearInterval(backgroundInterval)
    }
  }, [])

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Animated background elements - Image Carousel */}
      <div className="absolute inset-0 overflow-hidden">
        {backgroundImages.map((imageSrc, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ease-in-out ${
              index === currentBackground ? "opacity-100" : "opacity-0"
            }`}
          >
           { /* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center transform "
                    style={{ 
                    backgroundImage: `url(src/images/img/hero.jpeg)`,
                    }}
                  />
                  
                  {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-indigo-950/30" />
            
            {/* Additional overlay for depth */}
        {/*<div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-950/30 to-indigo-950/80" />*/}          
      
      </div>
        ))}
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-indigo-950/95 shadow-lg backdrop-blur-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src="https://club-code.esi.ma/assets/logo-RJEgxBZ1.svg" alt="CODE-ESI" className="w-16 h-16" />
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-200 to-purple-100 text-transparent bg-clip-text">
              CODE-ESI
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="hover:text-indigo-300 transition-colors">
              About
            </a>
            <a href="#prizes" className="hover:text-indigo-300 transition-colors">
              Prizes
            </a>
            <a href="#timeline" className="hover:text-indigo-300 transition-colors">
              Timeline
            </a>
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all transform hover:-translate-y-1">
              Join us
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto pt-32 px-6 flex flex-col md:flex-row items-center justify-between min-h-screen">
        <div className="max-w-2xl">
          <div
            className={`inline-block px-4 py-1 bg-indigo-500/10 rounded-full text-indigo-100 mb-6
              transition-all duration-700 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="animate-pulse">CODE-ESI PRESENTS</span>
          </div>

          <h1
            className={`text-5xl md:text-7xl font-bold mb-8 leading-tight
              transition-all duration-700 delay-100 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <span className="bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-100 text-transparent bg-clip-text">
              THE MOROCCAN DAYS OF
              <br />
              FUTURE DATA SCIENTISTS
            </span>
          </h1>

          <div
            className={`text-xl text-gray-300 mb-12 max-w-xl
              transition-all duration-700 delay-200 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            Join us for a 2-day hackathon to learn, collaborate, and compete with the best minds in the industry.
            Transform your ideas into reality with cutting-edge AI and machine learning.
          </div>

          <div
            className={`flex items-center gap-4 mb-12
              transition-all duration-700 delay-300 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <div className="bg-indigo-500/10 px-6 py-3 rounded-full flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              <span className="text-lg">05-06 April 2025</span>
            </div>
            <div className="bg-indigo-500/10 px-6 py-3 rounded-full flex items-center gap-2">
              <MapPin className="w-5 h-5 text-indigo-400" />
              <span className="text-lg">Rabat, Morocco</span>
            </div>
          </div>

          {/* Feature Showcase */}
          <div
            className={`relative h-32 mb-12 overflow-hidden
              transition-all duration-700 delay-400 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            {techFeatures.map((feature, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center gap-4 transition-all duration-500 transform
                  ${index === activeFeature ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}
              >
                <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center">
                  <feature.icon className="w-8 h-8 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">{feature.name}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4
              transition-all duration-700 delay-500 transform ${isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            <button className="group bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/20 transform hover:-translate-y-1 flex items-center gap-2">
              Submit your project
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group px-8 py-4 rounded-full font-semibold border border-indigo-500/20 hover:bg-indigo-800/30 transition-all flex items-center gap-2">
              Discover More
              <ChevronRight className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Decorative Right Side */}
        <div className="hidden md:block relative w-1/3">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full filter blur-3xl animate-pulse" />
          <div className="relative grid grid-cols-2 gap-4">
            {/*Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-2xl backdrop-blur-sm border border-white/10"
                style={{
                  animation: `float ${Math.random() * 2 + 3}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))*/}
          </div>
        </div>
      </div>
    </div>
  )
}


const HackathonWebsite = () => {

  const images = Object.values(imageModules).map((module: any) => module.default);

 

  
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openPreview = (image: string) => {
    setSelectedImage(image);
  };

  const closePreview = () => {
    setSelectedImage(null);
  };
  
  const testimonials = [
    {
      name: "Kamiya OUDGHIRI",
      text: "Thank you to all the trainers and participants for this exciting training day on AI. Can't wait to apply all this new knowledge in my daily work.",
      stars: 5,
    },
    {
      name: "Ahmed REHANE",
      text: "A big thank you to the entire CODE-ESI team for their professionalism and the quality of the content shared. I attended a Masterclass on advanced technology, and it's safe to say that it was well worth getting up on a Saturday to attend. Highly recommended.",
      stars: 5,
    },
    {
      name: "Hassan NAITALI",
      text: "CODE-ESI delivered an exceptional masterclass last month! Their expertise and engaging teaching style made complex concepts easily understandable. Grateful for the valuable insights gained—a truly enriching experience!",
      stars: 5,
    },
  ]

  const teamMembers = [
    {
      name: "Morad EL MAZYANI",
      role: "Tech entrepreneur and digital expert with 16+ years of experience in Blockchain, Generative AI, and UX design. Collaborated with multinational organizations and government entities.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      name: "Youssef ELYAMANI",
      role: "Technical Director at CODE-ESI with 16+ years in digital transformation. Simplifies AI for large organizations as an entrepreneur, trainer, and coach.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
    {
      name: "Meryem NAIRI",
      role: "Software Engineer, AI Developer at Crafters Lab, and Trainer at AIcorner. Combines software engineering and advanced AI to craft innovative solutions.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80",
    },
  ]

  return (
    <div className="min-h-screen bg-blue-950 text-white">
      {/* Header Section */}
      <Header />

      {/* Countdown Timer */}
      <section className="py-16 px-4 bg-blue-900/50 backdrop-blur-sm">
        <CountdownTimer />
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-blue-900/30 backdrop-blur-sm" id="about">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-200 to-blue-200 text-transparent bg-clip-text">
              A Unique Opportunity
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                "Learn cutting-edge technologies with AI, voice recognition, and advanced data processing.",
                "Collaborate with like-minded innovators and experienced technology mentors.",
                "Compete for a chance to turn your prototype into a market-ready solution.",
                "Network with industry leaders and top technology companies.",
              ].map((text, index) => (
                <div key={index} className="flex items-start gap-4 bg-blue-800/30 p-6 rounded-xl backdrop-blur-sm">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-blue-400" />
                    </div>
                  </div>
                  <p className="text-gray-300">{text}</p>
                </div>
              ))}
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-500/20 rounded-3xl filter blur-3xl" />
              <div className="relative bg-blue-800/30 p-8 rounded-3xl backdrop-blur-sm border border-blue-500/20">
                <h3 className="text-2xl font-bold mb-6 text-blue-300">Why Participate?</h3>
                <div className="space-y-4">
                  {[
                    { icon: Trophy, text: "Win amazing prizes worth 18,000 Dhs" },
                    { icon: Brain, text: "Access to cutting-edge AI resources" },
                    { icon: Users, text: "Network with industry experts" },
                    { icon: Target, text: "Launch your tech career" },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-blue-400" />
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
            <span className="bg-gradient-to-r from-blue-200 to-blue-200 text-transparent bg-clip-text">
              Prizes & Rewards
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "18,000 Dhs Cash Prize Pool",
                details: ["10,000 Dhs - 1st Place", "5,000 Dhs - 2nd Place", "3,000 Dhs - 3rd Place"],
              },
              {
                title: "Incubation Program",
                details: ["Full incubation support by CODE-ESI for the winning team"],
              },
              {
                title: "Business Support",
                details: ["Technical mentorship", "Market access support", "Business development"],
              },
              {
                title: "Launch Your Solution",
                details: ["Transform your prototype", "Market-ready product", "Industry connections"],
              },
            ].map((prize, index) => (
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

      {/* Timeline Section */}
      <HackathonTimeline />

      {/* Evaluation Criteria */}
      <section className="py-16 px-4 bg-blue-900/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-200 to-blue-200 text-transparent bg-clip-text">
              Evaluation Criteria
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Functionality",
                description: "Functional prototypes aligned with the mystery challenge.",
                icon: Code,
              },
              {
                title: "Innovation",
                description: "Original ideas and differentiating solutions.",
                icon: Sparkles,
              },
              {
                title: "Impact",
                description: "Real-world applicability and potential to transform the industry.",
                icon: Target,
              },
              {
                title: "Technical Quality",
                description: "Clean, well-documented, and efficient code.",
                icon: Brain,
              },
            ].map((criteria, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-800/50 to-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-4">
                  <criteria.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-blue-300">{criteria.title}</h3>
                <p className="text-gray-300">{criteria.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-200 to-blue-200 text-transparent bg-clip-text">
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
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-blue-900/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-200 to-blue-200 text-transparent bg-clip-text">
              Innovation Team
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-blue-800/50 to-blue-800/50 p-6 rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 text-center"
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-blue-500/20"
                />
                <h3 className="text-xl font-bold mb-2 text-blue-300">{member.name}</h3>
                <p className="text-gray-300 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Editions Section */}
     {/* <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-200 to-blue-200 text-transparent bg-clip-text">
              Previous Editions
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                year: "2024",
                theme: "AI for Sustainable Development",
                image: "/images/hackathon-2024.jpg",
                highlights: [
                  "Over 200 participants from across Morocco",
                  "12 innovative projects developed",
                  "Focus on environmental sustainability",
                ],
              },
              {
                year: "2023",
                theme: "Future of FinTech",
                image: "/images/hackathon-2023.jpg",
                highlights: [
                  "Partnership with major Moroccan banks",
                  "15 teams competed for 15,000 Dhs in prizes",
                  "2 projects received venture funding",
                ],
              },
              {
                year: "2022",
                theme: "Healthcare Innovation",
                image: "/images/hackathon-2022.jpg",
                highlights: [
                  "First national data science hackathon",
                  "10 mentors from leading tech companies",
                  "Winning solution deployed in local hospitals",
                ],
              },
            ].map((edition, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={edition.image || "/placeholder.svg"}
                    alt={`${edition.year} Hackathon`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-2xl font-bold text-white">{edition.year}</h3>
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-blue-900/90 to-blue-900/90">
                  <h4 className="text-xl font-semibold mb-3 text-blue-300">{edition.theme}</h4>
                  <ul className="space-y-2">
                    {edition.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/20 transform hover:-translate-y-1 flex items-center gap-2 mx-auto">
              View All Past Events
              <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>*/}

      {/* Gallery Section */}
      <section className="py-16 px-4 bg-blue-900/30 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-200 to-blue-200 text-transparent bg-clip-text">
              Event Gallery
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div
              key={index}
              onClick={() => openPreview(image)}
              className={`relative overflow-hidden rounded-xl ${
                index === 0 || index === 5 ? "col-span-2 row-span-2" : ""
              }`}
              >
              <img
                src={image}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-950/30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-blue-900/80 p-2 rounded-full">
                <Share2 className="w-6 h-6 text-white" />
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Image Preview Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              className="absolute top-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40 transition"
              onClick={closePreview}
            >
              <X className="w-6 h-6 bg-white text-black" />
            </button>
            <img
              src={selectedImage}
              alt="Selected preview"
              className="max-w-full max-h-screen rounded-lg"
            />
          </div>
        </div>
      )}
      {/* Footer */}
      <footer className="bg-blue-900/30 backdrop-blur-sm py-12 px-4 border-t border-blue-800/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-blue-400" />
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

          <div className="mt-8 pt-8 border-t border-blue-800/30 text-center text-gray-300">
            <p>© 2025 CODE-ESI. All rights reserved. Terms & Conditions • Privacy Policy</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HackathonWebsite

