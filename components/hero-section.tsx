"use client"
import { Button } from "@/components/ui/button"



export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] bg-white bg-cover bg-center bg-no-repeat flex flex-col justify-center pt-[20px]"
      style={{
       backgroundImage: "url('/images/ybp-station.jpg')",
   }}
>
      
{/* Dark overlay */}
<div className="absolute inset-0 bg-black bg-opacity-60" />

{/* Main content */}
<div className="relative z-10 px-4 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-36 lg:pb-32 text-center flex flex-col items-center justify-center">
  <div className="max-w-4xl">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 uppercase tracking-tight">
      Empowering Fuel Solutions for Bale Robe
    </h1>
    <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
      Yetebaberut Beherawi Petroleum (YBP) Share Company delivers reliable and efficient petroleum services that drive mobility, development, and sustainability in the Bale Robe region and beyond.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button
        size="lg"
        className="bg-yellow-500 hover:bg-yellow-600 text-green-900 font-semibold px-6 py-3 text-base sm:text-lg shadow-md transition"
        onClick={() =>
          document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
        }
      >
      Explore Services
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-2 border-white text-white hover:bg-white hover:text-green-800 bg-transparent font-semibold px-6 py-3 text-base sm:text-lg shadow-md transition"
        onClick={() =>
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
        }
      >
      Get in Touch
      </Button>
    </div>
  </div>
</div>

{/* Scroll Indicator */}     
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
