'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Fuel, Truck, Shield, ArrowRight, Factory, Leaf, Wrench, Car} from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"



export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold  mb-4 text-green-800">Our Services</h2>
          <p className="text-xl text-gray-900 font-sans">Comprehensive petroleum solutions for individuals and businesses</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col gap-4">
              <div className="flex gap-4">
               <Image src="/images/diesel.jpg" alt="Castrol Lubricant" width={350} height={120} className="rounded-md" />
               </div>
              <CardTitle className="font-extrabold">Retail Fuel Sales</CardTitle>
              <CardDescription className="text-gray-900">Premium gasoline, diesel, and other petroleum products for vehicles</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6  text-sm text-gray-900 ">
                <li>• Regular & Premium Gasoline</li>
                <li>• Diesel Fuel</li>
                <li>• Lubricants & Oil</li>
                <li>• 24/7 Service Available</li>
              </ul>
            </CardContent>

            <Button variant="outline" className="w-full group/btn hover:bg-green-600 hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col gap-4">
              <div className="flex gap-4">
              <Image src="/images/bulk.jpg" alt="Castrol Lubricant" width={350} height={120} className="rounded-md" />
              </div>
              <CardTitle className="font-extrabold">Bulk Distribution</CardTitle>
              <CardDescription className="text-gray-900">Wholesale fuel distribution to businesses and organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6  text-sm text-gray-900">
                <li>• Commercial Fleet Fueling</li>
                <li>• Industrial Supply</li>
                <li>• Agricultural Sector Support</li>
                <li>• Competitive Pricing</li>
                <li>• Quality Products</li>
              </ul>
            </CardContent>
             
             <Button variant="outline" className="w-full group/btn hover:bg-green-600 hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col gap-4">
              <div className="flex gap-4">
              <Image src="/images/storage.jpg" alt="Castrol Lubricant" width={350} height={120} className="rounded-md" />
              </div>
              <CardTitle className="font-extrabold">Storage & Logistics</CardTitle>
              <CardDescription className="text-gray-900">Safe storage and efficient distribution throughout the region</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6 text-sm text-gray-900">
                <li>• Secure Storage Facilities</li>
                <li>• Transportation Services</li>
                <li>• Supply Chain Management</li>
                <li>• Emergency Supply</li>
              </ul>
            </CardContent>
            <Button variant="outline" className="w-full group/btn hover:bg-green-600 hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col gap-4">
              <div className="flex gap-4">
              <Image src="/images/industry.jpg" alt="Castrol Lubricant" width={350} height={120} className="rounded-md" />
              </div>
              <CardTitle className="font-extrabold">Industrial Solutions</CardTitle>
              <CardDescription className="text-gray-900">Specialized petroleum solutions for manufacturing, mining, and industrial operations</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6  text-sm text-gray-900">
                <li>• Custom Solutions</li>
                <li>• Technical Support</li>
                <li>• Equipment supply</li>
                <li>• Maintenance services</li>
              </ul>
            </CardContent>
            <Button variant="outline" className="w-full group/btn hover:bg-green-600 hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col gap-4">
              <div className="flex gap-4">
              <Image src="/images/envt.png" alt="Castrol Lubricant" width={350} height={120} className="rounded-md" />
              </div>
              <CardTitle className="font-extrabold">Environmental Solutions</CardTitle>
              <CardDescription className="text-gray-900">Sustainable practices and environmental protection services for petroleum operations.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6  text-sm text-gray-900">
                <li>• Environmental Monitoring</li>
                <li>• Waste Management</li>
                <li>• Green Technologies</li>
                <li>• Sustainability Consulting</li>
              </ul>
            </CardContent>
            <Button variant="outline" className="w-full group/btn hover:bg-green-600 hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col gap-4">
               <div className="flex gap-4">
              <Image src="/images/wash.jpg" alt="Castrol Lubricant" width={350} height={120} className="rounded-md" />
              </div>
              <CardTitle className="font-extrabold">Car Washing Services</CardTitle>
              <CardDescription className="text-gray-900">Comprehensive car washing and detailing services to keep your vehicle looking pristine.</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-6  text-sm text-gray-900">
                <li>• Exterior Hand Wash</li>
                <li>• Interior Vacuuming</li>
                <li>• Waxing and Polishing</li>
                <li>• Engine Bay Cleaning</li>
                <li>• Detailing Packages Available</li>
              </ul>
            </CardContent>
            <Button variant="outline" className="w-full group/btn hover:bg-green-600 hover:text-white">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                </Button>
          </Card>
        </div>
      </div>
    </section>
  )
}
