import Image from "next/image"
import { Shield, Truck, Fuel, Users } from "lucide-react"



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
          <div>
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
            <h3 className="text-2xl font-extrabold text-gray-800 mb-6">Company Overview</h3>
            <p className="text-gray-900 mb-6 font-sans">
              Yetebaberut Beherawi Petroleum Share Company was founded in 2018 with a vision to become the leading petroleum distributor in the Bale Region. 
              Our Robe branch serves as a crucial hub for fuel distribution across southeastern Ethiopia.
            </p>
            <p className="text-gray-900 mb-6 font-sans">
             With state-of-the-art storage facilities and a dedicated team of professionals, 
             we ensure reliable supply of petroleum products to retail stations, commercial clients, and industrial customers throughout the region.</p>
             <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                <Shield className="h-5 w-5 text-green-600" />
                </motion.div>
                <span className="text-sm text-gray-900">Safety Certified</span>
              </div>

              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Truck className="h-5 w-5 text-green-600 animate-pulse" />
                </motion.div>
                <span className="text-sm text-gray-900">Fleet Management</span>
              </div>

              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} 
                >
                  <Fuel className="h-5 w-5 text-green-600 animate-pulse" />
                </motion.div>
                <span className="text-sm text-gray-900">Quality Fuel</span>
              </div>

              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Users className="h-5 w-5 text-green-600 animate-pulse" />
                </motion.div>
                <span className="text-sm text-gray-900">Expert Team</span>
              </div>
            </div>
           </div>
        </div>
      </div>
    </section>
  )
}
