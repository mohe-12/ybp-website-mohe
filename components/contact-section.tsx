"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
  const [emailDraftHref, setEmailDraftHref] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const subject = "Website contact inquiry"
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      "",
      formData.get("message"),
    ].join("\n")

    setEmailDraftHref(
      `mailto:sales@ybppetroleum.et?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    )
  }

  return (
    <section id="contact" className="py-20 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-8">Visit Our Location</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Address</h3>
                  <p className="text-green-100">
                    Bale Robe City
                    <br />
                    Oromia Region, Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Operating Hours</h3>
                  <p className="text-green-100">
                    Monday - Sunday: 12:00 PM - 6:00 AM (Local Time)
                    <br />
                    Emergency Service: 24/7
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-green-100">
                    +251 91 420 3741
                    <br />
                    Emergency: +251 91 420 3741
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-yellow-400 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-green-100">
                    info@ybppetroleum.et
                    <br />
                    sales@ybppetroleum.et
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
            <Card className="bg-white text-gray-800">
              <CardContent className="p-6">
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    Prepare Email
                  </Button>
                  {emailDraftHref && (
                    <p role="status" className="text-sm text-green-800">
                      Your message is ready.{" "}
                      <a className="font-semibold underline" href={emailDraftHref}>
                        Open your email app to send it
                      </a>
                      .
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
