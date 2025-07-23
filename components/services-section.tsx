'use client'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"




const services = [
  {
    title: "Retail Fuel Sales",
    description: "Premium gasoline, diesel, and other petroleum products for vehicles",
    image: "/images/diesel.jpg",
    features: [
      "Regular & Premium Gasoline",
      "Diesel Fuel",
      "Lubricants & Oil",
      "24/7 Service Available"
    ]
  },
  {
    title: "Bulk Distribution",
    description: "Wholesale fuel distribution to businesses and organizations",
    image: "/images/bulk.jpg",
    features: [
      "Commercial Fleet Fueling",
      "Industrial Supply",
      "Agricultural Sector Support",
      "Competitive Pricing",
      "Quality Products"
    ]
  },
  {
    title: "Storage & Logistics",
    description: "Safe storage and efficient distribution throughout the region",
    image: "/images/storage.jpg",
    features: [
      "Secure Storage Facilities",
      "Transportation Services",
      "Supply Chain Management",
      "Emergency Supply"
    ]
  },
  {
    title: "Industrial Solutions",
    description: "Specialized petroleum solutions for manufacturing, mining, and industrial operations",
    image: "/images/industry.jpg",
    features: [
      "Custom Solutions",
      "Technical Support",
      "Equipment supply",
      "Maintenance services"
    ]
  },
  {
    title: "Environmental Solutions",
    description: "Sustainable practices and environmental protection services for petroleum operations",
    image: "/images/envt.png",
    features: [
      "Environmental Monitoring",
      "Waste Management",
      "Green Technologies",
      "Sustainability Consulting"
    ]
  },
  {
    title: "Car Washing Services",
    description: "Comprehensive car washing and detailing services to keep your vehicle looking pristine",
    image: "/images/wash.jpg",
    features: [
      "Exterior Hand Wash",
      "Interior Vacuuming",
      "Waxing and Polishing",
      "Engine Bay Cleaning",
      "Detailing Packages Available"
    ]
  }
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-800 mb-4">Our Services</h2>
          <p className="text-lg md:text-xl text-gray-700">Comprehensive petroleum solutions for individuals and businesses</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="group relative flex flex-col overflow-hidden border hover:border-green-600 transition duration-300 shadow-sm hover:shadow-xl rounded-2xl">
              <div className="h-[180px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={180}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader className="p-5">
                <CardTitle className="text-lg font-extrabold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="mt-2 text-gray-700">{service.description}</CardDescription>
              </CardHeader>
  <CardContent className="px-5 pb-5 flex flex-col justify-between h-full">
  <ul className="space-y-3 text-sm text-gray-800 mb-6">
    {service.features.map((feature, idx) => (
      <li key={idx} className="flex items-start gap-2">
        <CheckCircle className="text-green-600 w-4 h-4 mt-0.5 shrink-0" />
        <span className="leading-snug">{feature}</span>
      </li>
    ))}
  </ul>

  <Button
    variant="outline"
    className="w-full group hover:bg-green-600 hover:text-white transition-all duration-300"
  >
    Learn More
    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
  </Button>
</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


