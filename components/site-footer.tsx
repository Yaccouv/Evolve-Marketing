import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-neutral-900 text-white">

      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Evolve Marketing</h3>
            <p className="text-gray-300">
            Our Operations Aims for Advanced Integrated Marketing Communications
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-300 hover:text-white">
                Home
              </Link>
            </nav>
          </div>

          {/* <div className="space-y-4">
            <h3 className="text-lg font-semibold">Products</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/products#poultry" className="text-gray-300 hover:text-white">
                Poultry Farming
              </Link>
              <Link href="/products#crops" className="text-gray-300 hover:text-white">
                Crop Production
              </Link>
              <Link href="/products#manure" className="text-gray-300 hover:text-white">
                Organic Fertilizer
              </Link>
              <Link href="/products#training" className="text-gray-300 hover:text-white">
                Training & Consultancy
              </Link>
            </nav>
          </div> */}

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">+265 996744149 / +265 897694631</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">NyirendaKhumbo905@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">
                  Blantyre, Malawi
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-800">
          <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} Evolve Market. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}