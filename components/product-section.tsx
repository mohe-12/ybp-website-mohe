"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import { ArrowRight } from "lucide-react"






const productCards = [
  {
    title: "Castrol Automotive Lubricants",
    description:
      "Optimize your vehicle's performance with Castrol's high-efficiency lubricants tailored for modern engines.",
    images: ["/images/product.png"],
    features: [
      "High-Performance Gasoline & Diesel",
      "Advanced Engine Lubricants",
      "Motor Oils for All Vehicle Types",
      "24/7 On-Demand Fueling Support",
    ],
  },
  {
    title: "Heavy-Duty Lubricants & Logistics",
    description:
      "Powering infrastructure with heavy-grade lubricants and dependable distribution networks.",
    images: ["/images/down.png"],
    features: [
      "Heavy Machinery Lubricants",
      "Secure Logistics Fleet",
      "Regional Supply Chains",
      "Emergency Fuel Distribution",
    ],
  },
  {
    title: "LPG & Gas Cylinder Solutions",
    description:
      "Safe and certified LPG solutions for residential, commercial, and industrial use cases.",
    images: ["/images/cylinder.png"],
    features: [
      "Multiple Cylinder Sizes",
      "Butane & Propane Mixes",
      "Cooking & Heating Energy",
      "Nationwide Delivery & Refill",
    ],
  },
  {
    title: "Engine Additives & Cooling Systems",
    description:
      "Extend your engine life with cutting-edge additives and cooling fluids for modern demands.",
    images: ["/images/mom.jpg"],
    features: [
      "Radiator Coolants",
      "Fuel Injector Cleaners",
      "Anti-Corrosion Systems",
      "Complete Engine Protection",
    ],
  },
]

export default function ProductSection() {
  const [openStates, setOpenStates] = useState<boolean[]>(
    Array(productCards.length).fill(false)
  )

  const toggleCard = (index: number) => {
    setOpenStates((prev) =>
      prev.map((state, i) => (i === index ? !state : state))
    )
  }

  return (
    <section id="product" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">
            Our Products
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-2xl mx-auto">
            Premium petroleum products and innovative energy solutions designed for businesses and communities across Ethiopia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {productCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <Card className="rounded-2xl overflow-hidden border border-gray-100 bg-white transition duration-300 shadow-sm hover:shadow-xl hover:border-green-600">
                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={card.images[0]}
                    alt={card.title}
                    fill
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text + Toggle */}
                <CardContent className="p-6 bg-white transition-colors duration-300 group-hover:bg-green-50">
                  <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                    {card.title}
                  </h4>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* Learn More Button */}
                  <button
                    onClick={() => toggleCard(index)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-green-600 text-green-700 rounded-md hover:bg-green-600 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    {openStates[index] ? "Hide Details" : "Learn More"}
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-300 ${
                        openStates[index] ? "rotate-90" : "translate-x-1"
                      }`}
                    />
                  </button>

                  {/* Feature List */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: openStates[index] ? "auto" : 0,
                      opacity: openStates[index] ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4"
                  >
                    <ul className="space-y-2 text-sm text-gray-600">
                      {card.features.map((feature, j) => (
                        <li key={j} className="flex items-start">
                          <svg
                            className="w-4 h-4 mt-1 text-green-500 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
