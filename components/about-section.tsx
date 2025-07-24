'use client'
import Image from "next/image"
import { Shield, Truck, Fuel, Users, MapPin } from "lucide-react"


export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">About Company</h2>
          <p className="text-xl text-gray-900 max-w-3xl mx-auto font-sans">
            Established as a leading petroleum distribution company in Bale Robe city, we are committed to providing
            quality fuel and exceptional service to our community.
          </p>
        </div>
                                      
        <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative w-fit">
         <Image
          src="/images/ybp-facility.png"
          alt="YBP Distribution Facility"
          width={600}
          height={400}
          className="rounded-lg shadow-lg"
        />
       <div className="absolute inset-0 flex items-end justify-center p-4">
        <div className="flex items-center gap-2 bg-black bg-opacity-50 px-4 py-2 rounded">
          <MapPin className="text-green-500 w-6 h-6" />
          <h2 className="text-white text-sm font-bold">
           Empowering Fuel Solutions
         </h2>
       </div>
       </div>
        </div>

           <div>
            <div>
              <h3 className="text-2xl font-extrabold text-gray-800 mb-6">Welcome! </h3>
            </div>
            <h3 className="text-2xl font-extrabold text-gray-800 mb-6">You have a business to run. </h3>
            <p className="text-gray-900 mb-6 font-sans">
              YBP petroleum share Company makes it easy for you, your people, and your company. Our Robe branch serves as a crucial hub for fuel distribution across southeastern Ethiopia.
              Your equipment is running on-time, all the time, with lubricants and the highest quality fuels. You take pride in your equipment and we do the same. 
              Distribution centers, delivery fleets, technical services, specialty products, and highly trained operators combine to provide you and your business the best value, service, know-how, and products.
            </p>
            <p className="text-gray-900 mb-6 font-sans">
             With state-of-the-art storage facilities and a dedicated team of professionals, 
             we ensure reliable supply of petroleum products to retail stations, commercial clients, and industrial customers throughout the region.</p>
             <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-900">Safety Certified</span>
              </div>

              <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-green-600 animate-pulse" />
                <span className="text-sm text-gray-900">Fleet Management</span>
              </div>

              <div className="flex items-center space-x-2">
                  <Fuel className="h-5 w-5 text-green-600 animate-pulse" />
                <span className="text-sm text-gray-900">Quality Fuel</span>
              </div>

              <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-green-600 animate-pulse" />
                <span className="text-sm text-gray-900">Expert Team</span>
              </div>
            </div>
           </div>
        </div>
      </div>
    </section>
  )
}
