'use client'

import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Fuel, Truck, Warehouse } from "lucide-react"







export default function ProductSection() {
  return (
    <section id="product" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-green-800">Our Products</h2>
          <p className="text-lg text-gray-900 mt-4 max-w-2xl mx-auto font-sans">
            High-quality petroleum products and distribution solutions tailored for businesses and communities across Ethiopia.
          </p>
        </div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {/* Fuel Products Card */}
  <Card className="group hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 rounded-2xl border border-gray-100">
    <CardHeader className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Image src="/images/product.jpg" alt="Castrol Lubricant" width={120} height={120} className="rounded-md" />
        <Image src="/images/product2.jpg" alt="Engine Oil" width={120} height={120} className="rounded-md" />
        <Image src="/images/do.png" alt="Engine Oil" width={120} height={120} className="rounded-md" />
      </div>
      <h4 className="text-xl font-extrabold text-gray-800">
        Castrol’s Automobiles Lubricants</h4>
      <p className="text-sm text-gray-900">
      Enhance engine performance and reliability with Castrol’s advanced gasoline, diesel, and lubricant solutions for everyday vehicles.
      </p>
    </CardHeader>
    <CardContent className="text-sm text-gray-700 mt-4 space-y-2">
      <ul className="space-y-2 list-disc list-inside text-gray-900">
        <li>Regular & Premium Gasoline</li>
        <li>Diesel Fuel</li>
        <li>Lubricants & Motor Oils</li>
        <li>24/7 Fueling Station Support</li>
      </ul>
    </CardContent>
  </Card>

  {/* Distribution Services Card */}
  <Card className="group hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 rounded-2xl border border-gray-100">
    <CardHeader className="flex flex-col gap-4">
      <div className="flex gap-3">
         <Image src="/images/oil.png" alt="Fuel Distribution" width={120} height={20} className="rounded-md " />
         <Image src="/images/download.png" alt="Fuel Distribution" width={120} height={20} className="rounded-md " />
         <Image src="/images/down.png" alt="Fuel Distribution" width={120} height={20} className="rounded-md " />
      </div>
      <h4 className="text-xl font-extrabold text-gray-800">
        Caltex Oil and Lubricants</h4>
      <p className="text-sm text-gray-900">
      Delivering dependable Caltex fuels and lubricants tailored for high-volume operations across industries and agriculture.
      </p>
    </CardHeader>
    <CardContent className="text-sm text-gray-900 mt-4 space-y-2">
      <ul className="space-y-2 list-disc list-inside">
        <li>Bulk Supply for Fleets</li>
        <li>Industrial Sector Delivery</li>
        <li>Agricultural Fuel Services</li>
        <li>Long-Term Supply Contracts</li>
      </ul>
    </CardContent>
  </Card>

  {/* Storage & Logistics Card */}
  <Card className="group hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 rounded-2xl border border-gray-100">
    <CardHeader className="flex flex-col gap-4">
      <div className="flex  gap-4">
        <Image src="/images/oil.webp" alt="Storage Facility" width={120} height={20} className="rounded-md" />
        <Image src="/images/service.png" alt="Logistics Service" width={120} height={20} className="rounded-md" />
        <Image src="/images/images.png" alt="Logistics Service" width={120} height={20} className="rounded-md" />
      </div>
      <h4 className="text-xl font-extrabold text-gray-800">
        Heavy-Duty Lubricants & Logistics</h4>
      <p className="text-sm text-gray-900">
        Powering large-scale machinery with Castrol-grade lubricants, backed by a secure and responsive fuel distribution network.
      </p>
    </CardHeader>
    <CardContent className="text-sm text-gray-900 mt-4 space-y-2">
      <ul className="space-y-2 list-disc list-inside">
        <li>Secure Storage Facilities</li>
        <li>Fleet Distribution Vehicles</li>
        <li>Emergency Supply Plans</li>
        <li>Regional Fuel Logistics</li>
      </ul>
    </CardContent>
  </Card>

  
          {/* LPG & Cylinder Products */}
          <Card className="group hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 rounded-2xl border border-gray-100 bg-white">
            <CardHeader className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Image src="/images/lpg.jpg" alt="LPG" width={120} height={20} className="rounded-md" />
                <Image src="/images/cylinder.jpg" alt="Gas Cylinder" width={120} height={20} className="rounded-md" />
                <Image src="/images/pump.jpg" alt="Gas Cylinder" width={120} height={20} className="rounded-md" />
              </div>
              <h4 className="text-xl font-extrabold text-gray-800">
                LPG & Gas Cylinders</h4>
              <p className="text-sm text-gray-900">
                Safe and efficient Liquefied Petroleum Gas (LPG) products for domestic and commercial use.
              </p>
            </CardHeader>
            <CardContent className="text-sm text-gray-900 mt-4 space-y-2">
              <ul className="space-y-2 list-disc list-inside">
                <li>Certified Gas Cylinders (Various Sizes)</li>
                <li>Butane/Propane Mix</li>
                <li>Cooking & Heating Solutions</li>
                <li>Safe Refill Programs</li>
              </ul>
            </CardContent>
          </Card>

          {/* YBP Engine Additives & Fluids */}
          <Card className="group hover:-translate-y-1 hover:shadow-xl transition-transform duration-300 rounded-2xl border border-gray-100 bg-white">
            <CardHeader className="flex flex-col gap-4">
              <div className="flex gap-4">
                <Image src="/images/ybp-additive.webp" alt="Fuel Additives" width={120} height={20} className="rounded-md" />
                <Image src="/images/ybp-coolant.png" alt="Coolants" width={120} height={20} className="rounded-md" />
                <Image src="/images/engine.jpg" alt="Coolants" width={120} height={20} className="rounded-md" />
              </div>
              <h4 className="text-xl font-extrabold text-gray-800">
                Engine Additives & Coolants</h4>
              <p className="text-sm text-gray-900">
                Advanced fluid technology to extend engine life, improve combustion, and reduce wear and tear.
              </p>
            </CardHeader>
            <CardContent className="text-sm text-gray-900 mt-4 space-y-2">
              <ul className="space-y-2 list-disc list-inside">
                <li>Radiator Coolants</li>
                <li>Fuel Injector Cleaners</li>
                <li>Antifreeze Solutions</li>
                <li>Fuel Treatment Products</li>
              </ul>
            </CardContent>
          </Card>
       </div>
      </div>
    </section>
  )
}
