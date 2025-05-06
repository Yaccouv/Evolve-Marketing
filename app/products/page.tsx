import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ProductsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative h-[400px] w-full">
          <Image src="/images/maize3.jpg?height=400&width=1200" alt="DMT Acres Products" fill className="object-cover" />
        </div>
        <div className="container absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Products & Services</h1>
          <p className="mx-auto max-w-[700px] mt-4 text-lg text-gray-200">
            Discover our range of high-quality agricultural products and services
          </p>
        </div>
      </section>

      {/* Poultry Section */}
      <section id="poultry" className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-green-800">Poultry Farming</h2>
              <p className="text-gray-600">
                Our poultry farming operation focuses primarily on chicken farming, ensuring high-quality, nutritious
                poultry products for local markets. Our approach emphasizes proper animal husbandry, biosecurity and
                ethical farming practices.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Our Poultry Products:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Live Chickens:</span> Healthy and well-raised poultry for sale which
                      includes Kroilers and local breeds.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Dressed Chicken:</span> Fresh and hygienically processed chicken
                      meat.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Day-old to Months Chicks:</span> Quality chicks for rearing.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Egg Production:</span> Fresh farm eggs for consumption and
                      businesses.
                    </div>
                  </li>
                </ul>
              </div>
              <Button asChild className="gap-2 bg-green-700 hover:bg-green-800">
                <Link href="/contact">
                  Inquire About Our Poultry Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/chicken3.jpg?height=400&width=600"
                alt="DMT Acres Poultry"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Crops Section */}
      <section id="crops" className="py-16 bg-green-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image src="/images/maize3.jpg?height=400&width=600" alt="DMT Acres Crops" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-green-800">Crop Production</h2>
              <p className="text-gray-600">
                We cultivate a variety of staple and high-value crops using sustainable farming techniques to maximize
                yield while preserving soil health. Our crops are grown with minimal chemical inputs, focusing on
                natural and organic methods.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Our Crop Products:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Maize:</span> High-quality maize grown using sustainable practices.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Cowpeas:</span> Nutritious legumes that also help in nitrogen
                      fixation.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Cassava:</span> Drought-resistant staple crop with multiple uses.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Seasonal Produce:</span> Tomatoes, garlic, Bananas, Plantains, Sugarcane and other seasonal
                      vegetables.
                    </div>
                  </li>
                </ul>
              </div>
              <Button asChild className="gap-2 bg-green-700 hover:bg-green-800">
                <Link href="/contact">
                  Inquire About Our Crop Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Organic Manure Section */}
      <section id="manure" className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-green-800">Organic Fertilizer</h2>
              <p className="text-gray-600">
                As part of our commitment to environmental conservation, we produce organic fertilizer to enhance soil
                fertility and reduce reliance on chemical fertilizers. Our organic fertilizer is derived from our poultry
                operations, creating a sustainable cycle within our farm.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Benefits of Our Organic Fertilizer:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Nutrient-Rich:</span> Contains essential nutrients for plant growth.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Soil Health:</span> Improves soil structure and microbial activity.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Eco-Friendly:</span> Reduces reliance on chemical fertilizers.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Cost-Effective:</span> Provides a sustainable alternative to
                      expensive synthetic inputs.
                    </div>
                  </li>
                </ul>
              </div>
              <Button asChild className="gap-2 bg-green-700 hover:bg-green-800">
                <Link href="/contact">
                  Inquire About Our Organic Fertilizer
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/organic6.jpg?height=400&width=600"
                alt="DMT Acres Organic Fertilizer"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Training & Consultancy */}
      <section id="training" className="py-16 bg-green-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/cattle1.jpg?height=400&width=600"
                alt="DMT Acres Training"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-green-800">Training & Consultancy</h2>
              <p className="text-gray-600">
                We offer training and consultancy services in sustainable farming practices, with a special focus on
                organic fertilizer production. Our goal is to empower local farmers with knowledge and skills to improve
                their agricultural practices.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Our Training Services:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Organic Fertilizer Production:</span> Techniques for creating
                      high-quality organic fertilizers.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Sustainable Farming:</span> Methods for environmentally friendly
                      agriculture.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Poultry Management:</span> Best practices for poultry farming.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Integrated Farming:</span> Creating symbiotic relationships between
                      different farming activities.
                    </div>
                  </li>
                </ul>
              </div>
              <Button asChild className="gap-2 bg-green-700 hover:bg-green-800">
                <Link href="/contact">
                  Inquire About Our Training Services
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

        {/* Agro Dealing Section */}
        <section id="agro-dealing" className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-green-800">Agro Dealing</h2>
              <p className="text-gray-600">
                We supply reliable, high-quality agricultural inputs to support farmers at every stage of the production cycle. Our goal is to empower sustainable and efficient farming through trusted products and expert advice.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Our Agro Products & Services:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Seeds:</span> Certified, high-yield varieties for different crops
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Fertilizers:</span> Organic and inorganic options for soil nutrition.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Crop Protection:</span> Safe pesticides and herbicides for pest and disease control.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Farming Tools:</span> Essential equipment for small to medium-scale farmers.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Advisory Support:</span> Guidance on input use, soil care, and sustainable practices
                    </div>
                  </li>
                </ul>
              </div>
              <Button asChild className="gap-2 bg-green-700 hover:bg-green-800">
                <Link href="/contact">
                  Inquire About Our Agro Inputs
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/banana1.jpg?height=400&width=600"
                alt="DMT Acres Agro Dealing"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Livestock Farming */}
      <section id="livestock" className="py-16 bg-green-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="/images/cattle.jpg?height=400&width=600"
                alt="Livestock Farming at DMT Acres"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter text-green-800">Livestock Farming</h2>
              <p className="text-gray-600">
                At DMT Acres, we practice integrated livestock farming with a focus on sustainability and resilience.
                Our approach combines traditional and modern practices to rear healthy animals while enhancing
                soil fertility through manure recycling.
              </p>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold">Our Livestock Farming Focus:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Goats & Cattle:</span> Rearing of hardy local and improved breeds for meat and manure production.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Sustainable Feeding:</span> Use of locally available feed and fodder crops to reduce cost.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Zero & Open Grazing:</span> Livestock are managed through controlled and free-range systems.
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium">Soil Fertility Enhancement:</span> Integration of manure into crop production for regenerative farming.
                    </div>
                  </li>
                </ul>
              </div>
              <Button asChild className="gap-2 bg-green-700 hover:bg-green-800">
                <Link href="/products#livestock">
                  Explore Livestock Products
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Target Markets */}
      <section className="py-16">
        <div className="container">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter">Our Target Markets</h2>
            <p className="mx-auto max-w-[700px] text-gray-600">
              DMT Acres serves a diverse range of customers across various sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle>Local Markets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl">🏪</span>
                </div>
                <CardDescription>Providing fresh produce to local markets and supermarkets</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle>Agro-Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl">🏭</span>
                </div>
                <CardDescription>Supplying raw materials to agro-processing industries</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle>Hospitality</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl">🍽️</span>
                </div>
                <CardDescription>Serving hotels and restaurants with quality produce</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle>NGOs & Government</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl">🤝</span>
                </div>
                <CardDescription>Supporting food security programs and initiatives</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader className="pb-2">
                <CardTitle>Individual Consumers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-20 w-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="text-3xl">👨‍👩‍👧‍👦</span>
                </div>
                <CardDescription>Providing nutritious food directly to families</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
