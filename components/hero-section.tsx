"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center text-center justify-center"
      style={{
        backgroundImage: "url('/images/ybp-station.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Main content */}
      <div className="relative z-10  px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <span>
            <h2 className="text-4xl md:text-5xl mb-6 text-white font-extrabold leading-tight justify-between font-sans mt-5">
              WELCOME TO
            </h2>
          </span>
          <span>
            <h2 className="text-4xl md:text-5xl mb-6 text-white font-extrabold leading-tight justify-between font-sans">
              YBP OFFICIAL WEBSITE</h2>
          </span>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed font-sansS">
            Yetebaberut Beherawi Petroleum (YBP) Share Company provides reliable fuel distribution and petroleum
            services to the Bale Robe community and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 text-center justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-green-800 font-semibold px-8 py-3 text-lg"
              onClick={() =>
                document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-800 bg-transparent font-semibold px-8 py-3 text-lg"
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator added here */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
