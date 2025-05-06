import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Contact Form Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl font-bold tracking-tighter">Contact Us</h1>
                <p className="text-gray-600 mt-4">
                  We welcome partnerships, investment opportunities, and collaborations to further our vision of
                  agricultural growth and food security.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">0999498162</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">dmtacresmw@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-600">
                      Ntcheu and Kasungu, Malawi
                    </p>
                  </div>
                </div>

              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Follow Us</h3>
                <div className="flex items-center gap-4">
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors"
                  >
                    <Facebook className="h-6 w-6 text-green-700" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="#"
                    className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-200 transition-colors"
                  >
                    <Instagram className="h-6 w-6 text-green-700" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="Enter the subject" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Enter your message" rows={5} />
                  </div>

                  <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 pb-16">
        <div className="container mx-auto grid md:grid-cols-2 gap-6">
          {/* Ntcheu Map */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d987426.5782745759!2d34.02811482427677!3d-14.817675509407396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18df5ab5ed31bb31%3A0xc2b8cd5e219a3196!2sNtcheu!5e0!3m2!1sen!2smw!4v1744808222057!5m2!1sen!2smw"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-2 text-center text-sm text-gray-700">Ntcheu, Malawi</p>
          </div>

          {/* Kasungu Map */}
          <div className="rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d995236.6678125869!2d32.807290799618336!3d-12.994655756789696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x191eea674df268a3%3A0xbdc96c7ed00b6b69!2sKasungu!5e0!3m2!1sen!2smw!4v1744808260088!5m2!1sen!2smw"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p className="mt-2 text-center text-sm text-gray-700">Kasungu, Malawi</p>
          </div>
        </div>
      </section>
    </div>
  )
}