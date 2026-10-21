export type LearnMoreItem = {
  slug: string
  category: "Service" | "Product"
  title: string
  description: string
  image: string
  features: string[]
}

export const services: LearnMoreItem[] = [
  {
    slug: "retail-fuel-sales",
    category: "Service",
    title: "Retail Fuel Sales",
    description: "Premium gasoline, diesel, and other petroleum products for vehicles",
    image: "/images/diesel.jpg",
    features: [
      "Regular & Premium Gasoline",
      "Diesel Fuel",
      "Lubricants & Oil",
      "24/7 Service Available",
    ],
  },
  {
    slug: "bulk-distribution",
    category: "Service",
    title: "Bulk Distribution",
    description: "Wholesale fuel distribution to businesses and organizations",
    image: "/images/bulk.jpg",
    features: [
      "Commercial Fleet Fueling",
      "Industrial Supply",
      "Agricultural Sector Support",
      "Competitive Pricing",
      "Quality Products",
    ],
  },
  {
    slug: "storage-logistics",
    category: "Service",
    title: "Storage & Logistics",
    description: "Safe storage and efficient distribution throughout the region",
    image: "/images/storage.jpg",
    features: [
      "Secure Storage Facilities",
      "Transportation Services",
      "Supply Chain Management",
      "Emergency Supply",
    ],
  },
  {
    slug: "industrial-solutions",
    category: "Service",
    title: "Industrial Solutions",
    description:
      "Specialized petroleum solutions for manufacturing, mining, and industrial operations",
    image: "/images/industry.jpg",
    features: [
      "Custom Solutions",
      "Technical Support",
      "Equipment supply",
      "Maintenance services",
    ],
  },
  {
    slug: "environmental-solutions",
    category: "Service",
    title: "Environmental Solutions",
    description:
      "Sustainable practices and environmental protection services for petroleum operations",
    image: "/images/envt.png",
    features: [
      "Environmental Monitoring",
      "Waste Management",
      "Green Technologies",
      "Sustainability Consulting",
    ],
  },
  {
    slug: "car-washing",
    category: "Service",
    title: "Car Washing Services",
    description:
      "Comprehensive car washing and detailing services to keep your vehicle looking pristine",
    image: "/images/wash.jpg",
    features: [
      "Exterior Hand Wash",
      "Interior Vacuuming",
      "Waxing and Polishing",
      "Engine Bay Cleaning",
      "Detailing Packages Available",
    ],
  },
]

export const products: LearnMoreItem[] = [
  {
    slug: "castrol-automotive-lubricants",
    category: "Product",
    title: "Castrol Automotive Lubricants",
    description:
      "Optimize your vehicle's performance with Castrol's high-efficiency lubricants tailored for modern engines.",
    image: "/images/product.png",
    features: [
      "High-Performance Gasoline & Diesel",
      "Advanced Engine Lubricants",
      "Motor Oils for All Vehicle Types",
      "24/7 On-Demand Fueling Support",
    ],
  },
  {
    slug: "heavy-duty-lubricants-logistics",
    category: "Product",
    title: "Heavy-Duty Lubricants & Logistics",
    description:
      "Powering infrastructure with heavy-grade lubricants and dependable distribution networks.",
    image: "/images/down.png",
    features: [
      "Heavy Machinery Lubricants",
      "Secure Logistics Fleet",
      "Regional Supply Chains",
      "Emergency Fuel Distribution",
    ],
  },
  {
    slug: "engine-additives-cooling-systems",
    category: "Product",
    title: "Engine Additives & Cooling Systems",
    description:
      "Extend your engine life with cutting-edge additives and cooling fluids for modern demands.",
    image: "/images/mom.jpg",
    features: [
      "Radiator Coolants",
      "Fuel Injector Cleaners",
      "Anti-Corrosion Systems",
      "Complete Engine Protection",
    ],
  },
]

export const learnMoreItems = [...services, ...products]
