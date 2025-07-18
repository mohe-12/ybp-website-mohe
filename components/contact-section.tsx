import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactSection() {
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
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
