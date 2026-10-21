'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"
import { products } from "@/lib/learn-more"

export default function ProductSection() {
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

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {products.map((card) => (
            <Card
              key={card.slug}
              className="group relative flex flex-col overflow-hidden border hover:border-green-600 transition duration-300 shadow-sm hover:shadow-xl rounded-2xl"
            >
              {/* Image */}
              <div className="h-[220px] overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={180}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Header */}
              <CardHeader className="p-5">
                <CardTitle className="text-lg font-extrabold text-gray-900">
                  {card.title}
                </CardTitle>
                <CardDescription className="mt-2 text-gray-700">
                  {card.description}
                </CardDescription>
              </CardHeader>

              {/* Feature List + Button */}
              <CardContent className="px-5 pb-5 flex flex-col justify-between h-full">
                <ul className="space-y-3 text-sm text-gray-800 mb-6">
                  {card.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle className="text-green-600 w-4 h-4 mt-0.5 shrink-0" />
                      <span className="leading-snug">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant="outline"
                  className="w-full group hover:bg-green-600 hover:text-white transition-all duration-300"
                >
                  <a href={`/learn-more/${card.slug}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
