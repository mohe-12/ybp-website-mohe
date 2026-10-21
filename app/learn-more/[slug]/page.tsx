import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"

import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { learnMoreItems } from "@/lib/learn-more"

type LearnMorePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return learnMoreItems.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({
  params,
}: LearnMorePageProps): Promise<Metadata> {
  const { slug } = await params
  const item = learnMoreItems.find((entry) => entry.slug === slug)

  return {
    title: item ? `${item.title} | YBP - Bale Robe` : "Learn More | YBP - Bale Robe",
    description: item?.description,
  }
}

export default async function LearnMorePage({ params }: LearnMorePageProps) {
  const { slug } = await params
  const item = learnMoreItems.find((entry) => entry.slug === slug)

  if (!item) {
    notFound()
  }

  const section = item.category === "Service" ? "services" : "product"

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 pb-20 pt-32">
        <Link
          href={`/#${section}`}
          className="mb-8 inline-flex items-center gap-2 font-medium text-green-800 hover:text-green-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to {item.category.toLowerCase()}s
        </Link>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-lg sm:min-h-[420px]">
            <Image
              src={item.image}
              alt={item.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 font-semibold uppercase tracking-widest text-green-700">
              {item.category}
            </p>
            <h1 className="mb-5 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              {item.title}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-gray-700">
              {item.description}
            </p>

            <h2 className="mb-4 text-xl font-bold text-gray-900">
              What we offer
            </h2>
            <ul className="mb-8 grid gap-4 sm:grid-cols-2">
              {item.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-700">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-yellow-500 font-semibold text-green-900 hover:bg-yellow-600"
            >
              <Link href="/#contact">
                Contact us about this {item.category.toLowerCase()}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
