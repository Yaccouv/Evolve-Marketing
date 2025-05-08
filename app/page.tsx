"use client"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Leaf, MapPin, Phone, Mail } from "lucide-react"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative h-[600px] w-full">
  {/* Background image with dark overlay */}
  <div className="absolute inset-0">
    <Image
      src="/images/marketing/banner.jpeg"
      alt="Hero background"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-black/60" />
  </div>
      {/* <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10 text-green-600" />
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          className="relative h-[600px] w-full z-0 text-green-600"
        >
          {['/images/banner.jpg', '/images/cattle3.jpg', '/images/banana3.jpg'].map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-[600px] w-full text-green-600">
                <Image
                  src={`${src}?height=600&width=1200`}
                  alt={`Slide ${idx + 1}`}
                  fill
                  className="object-cover"
                  priority={idx === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper> */}

        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Evolve Marketing
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-200 md:text-xl">
              Our Operations Aims for Advanced Integrated Marketing Communications
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Button asChild size="lg" className="hover:opacity-90" style={{ backgroundColor: "#06402b" }}>
          <Link href="#">Read More About US</Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-white text-white hover:text-green-800 hover:bg-white"
        >
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
  <div className="container space-y-12">
    {/* <div className="text-center space-y-4">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h2>
      <p className="mx-auto max-w-[700px] text-gray-600">
        Founded in 2019 and officially registered in April 2024, DMT Acres is committed to food security,
        environmental sustainability, and economic empowerment.
      </p>
    </div> */}

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card className="bg-white border shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out border-[#06402b]">
  <CardHeader className="pb-2">
    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-[#06402b]">
      <Leaf className="h-5 w-5 text-[#06402b]" />
     Our Mission
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-gray-700">
    To project ethics beyond what
    the industry standardize.
    </p>
  </CardContent>
</Card>


      <Card className="bg-white border shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out border-[#06402b]">
  <CardHeader className="pb-2">
    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-[#06402b]">
      <Leaf className="h-5 w-5 text-[#06402b]" />
      Our Vision
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-gray-700">
      By transcending to a business leader status.
    </p>
  </CardContent>
</Card>


<Card className="bg-white border shadow-lg rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out border-[#06402b]">
  <CardHeader className="pb-2">
    <CardTitle className="flex items-center gap-2 text-xl font-semibold text-[#06402b]">
      <Leaf className="h-5 w-5 text-[#06402b]" />
      Our Vision
    </CardTitle>
  </CardHeader>
  <CardContent>
    <p className="text-gray-700">
      By transcending to a business leader status.
    </p>
  </CardContent>
</Card>

    </div>

    <div className="flex justify-center pt-8">
    <Button
  asChild
  variant="outline"
  className="gap-2 border-[#06402b] text-[#06402b] hover:bg-[#06402b] hover:text-white"
>
  <Link href="#" className="flex items-center">
    View More
    <ArrowRight className="h-4 w-4 text-[#06402b]" />
  </Link>
</Button>

    </div>
  </div>
</section>


      {/* Products & Services Preview */}
      <section className="py-16">
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Other Areas of Focus</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              Pop Culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/marketing/anime.jpeg?height=200&width=400"
                  alt="Poultry Farming"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Animation</CardTitle>
                <CardDescription>Animation issignificant on mattershaving to do withpopular culture. ﻿It isone of the moststreamed forms ofmedia, as it hasprovided us withentertainment as wellas creating lucrativeendeavors.</CardDescription>
              </CardHeader>
              {/* <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Certified seeds & fertilizers</li>
                  <li>Pesticides & herbicides</li>
                  <li>Farm tools & equipment</li>
                </ul>
              </CardContent> */}
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/marketing/music.jpeg?height=200&width=400"
                  alt="Poultry Farming"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Music</CardTitle>
                <CardDescription>Not a day go bywithout listening to ofcourse music isthere when we aresad,when we areextremely hyped andto those making it, itis a rare form ofexpression some sayit's therapeutic.</CardDescription>
              </CardHeader>
              {/* <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Live Chickens</li>
                  <li>Dressed Chicken</li>
                  <li>Day-old to months-old chicks</li>
                  <li>Fresh farm eggs</li>
                </ul>
              </CardContent> */}
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/marketing/game.jpeg?height=200&width=400"
                  alt="Crop Production"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Games</CardTitle>
                <CardDescription>Games ﻿just adds alittle spice to thewhole secret recipeof popular culture,growing up playinggames was almostanyone's hobby. Andit sure did broughtexcellent excitement.</CardDescription>
              </CardHeader>
              {/* <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Maize</li>
                  <li>Cowpeas</li>
                  <li>Cassava</li>
                  <li>Bananas</li>
                  <li>Plantains</li>
                  <li>Sugarcane</li>
                  <li>Tomatoes and Garlic</li>
                </ul>
              </CardContent> */}
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="#">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/organic7.jpg?height=200&width=400"
                  alt="Organic Manure"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Organic Fertilizer</CardTitle>
                <CardDescription>Eco-friendly and cost-effective fertilizer production</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Nutrient-rich organic fertilizer</li>
                  <li>Soil health enhancement</li>
                  <li>Training and consultancy</li>
                  <li>Sustainable farming inputs</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products#manure">Learn More</Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <div className="relative h-48 w-full overflow-hidden rounded-t-lg">
                <Image
                  src="/images/cattle.jpg?height=200&width=400"
                  alt="Livestock Farming"
                  fill
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>Livestock Farming</CardTitle>
                <CardDescription>Resilient and profitable livestock rearing</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Goats and Cattle</li>
                  <li>Local and improved breeds</li>
                  <li>Grazing & zero-grazing systems</li>
                  <li>Manure integration into crop farming</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/products#livestock">Learn More</Link>
                </Button>
              </CardFooter>
            </Card> */}
          </div>

          <div className="flex justify-center pt-8">
          <Button asChild size="lg" className="hover:opacity-90" style={{ backgroundColor: "#06402b" }}>
              <Link href="#">
                View All Products
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-800 text-white" style={{ backgroundColor: "#06402b" }}>
        <div className="container space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Executive Summary</h2>
            {/* <p className="mx-auto max-w-[700px] text-gray-200">
              Our unique approach to farming sets us apart and ensures the highest quality products.
            </p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-700/50 p-6 rounded-lg" style={{ backgroundColor: "#0a5a3d" }}>
              <h3 className="text-xl font-semibold mb-4">The services</h3>
              <li>
              Evolve Marketing for advanced integrated marketing
              communications offers cutting edge experience in Advertising,
              public relations, copywriting, proofreading.</li>
              ﻿
              <li>Graphic designing and Branding Personal Branding, Corporate
              Branding as well as Vehicle Branding.
              </li>
            </div>

            <div className="bg-green-700/50 p-6 rounded-lg" style={{ backgroundColor: "#0a5a3d" }}>
              <h3 className="text-xl font-semibold mb-4">The Leadership</h3>
              <li>
              Our philosophy on organizational leadership leans towards what
              defines our company by using what we call the evolving effect the
              possibility of being able to bounce back in the face of business
              adversities and always prevailing to secure your position to your
              targeted markets subtly imparting the upcoming marketing
              generations.
              </li>
              ﻿
            </div>

            <div className="bg-green-700/50 p-6 rounded-lg" style={{ backgroundColor: "#0a5a3d" }}>
              <h3 className="text-xl font-semibold mb-4">The Overall Industry</h3>
              <li>
              Marketing have been an exciting career path since the times it was
              introduced to universities for further professional modifications.
              The industry has evolved in numerous ways with it's operations
              ranging from medium to large scale
              </li>
            </div>

            <div className="bg-green-700/50 p-6 rounded-lg" style={{ backgroundColor: "#0a5a3d" }}>
              <h3 className="text-xl font-semibold mb-4">The Competitors</h3>
              <li>
              To call a spade a spade every individual offering the same services
              as you is a competitor, pricing and value delivered in return and the
              overall branding are key factors to any sort of competition
              businesses find themselves. ﻿To outsmart competition our top
              priority is to provide customer satisfaction .
              </li>
            </div>

            <div className="bg-green-700/50 p-6 rounded-lg" style={{ backgroundColor: "#0a5a3d" }}>
              <h3 className="text-xl font-semibold mb-4">The Financial Status</h3>
              <li>
              Evolve Marketing yearns to transform it's day to day operations by
              becoming registered to companies under the Public listed
              companies.
              </li>
            </div>

            <div className="bg-green-700/50 p-6 rounded-lg" style={{ backgroundColor: "#0a5a3d" }}>
              <h3 className="text-xl font-semibold mb-4">Future Plans</h3>
              <li>
              By 2027 the agency will have diversified to other areas of interest
              and exponential growth.
              </li>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview
      <section className="py-16">
        <div className="container">
          <div className="rounded-lg bg-green-50 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Get In Touch</h2>
                <p className="text-gray-600">
                  We welcome partnerships, investment opportunities, and collaborations to further our vision of
                  agricultural growth and food security.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-green-700" />
                    <span>0999498162</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-green-700" />
                    <span>dmtacresmw@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-green-700" />
                    <span >
                      Ntcheu and Kasungu, Malawi
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Button asChild size="lg" className="gap-2 bg-green-700 hover:bg-green-800">
                  <Link href="/contact">
                    Contact Us Today
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
