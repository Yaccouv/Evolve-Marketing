"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useRouter, usePathname } from "next/navigation"
import { useLoading } from "@/hooks/use-loading"

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const { setLoading } = useLoading()

  const closeMenu = () => setOpen(false)

  const handleNavigation = (href: string) => {
    setLoading(true)
    setOpen(false)
    router.push(href)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && open) {
        setOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [open])

  const links = [
    { path: "", label: "Home" },
    { path: "#", label: "About Us" },
    { path: "#", label: "Products" },
    { path: "#", label: "Gallery" },
    { path: "#", label: "Contact" },
  ]

  return (
    <header className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent">
    <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4">

      {/* Logo */}
      <button
        onClick={() => handleNavigation("/")}
        className="flex items-center gap-2"
      >
        <div className="relative h-12 w-24 overflow-hidden">
          <Image
            src="/images/marketing/logo2.png"
            alt="DMT Acres Logo"
            fill
            className="object-cover"
          />
        </div>
      </button>
  
      {/* Right-aligned nav and buttons */}
      <div className="flex items-center gap-4">

        <nav className="hidden md:flex items-center gap-6">
          {links.map(({ path, label }) => (
            <button
              key={path}
              onClick={() => handleNavigation(path)}
              className={`text-sm font-medium text-white hover:text-green-200 ${
                pathname === path ? "font-semibold underline" : ""
              }`}
            >
              {label}
            </button>
          ))}
        </nav>
  
        <Button
          onClick={() => handleNavigation("#")}
          className="hover:opacity-90" style={{ backgroundColor: "#06402b" }}
        >
          Get In Touch
        </Button>
  
        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
  
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {links.map(({ path, label }) => (
                <button
                  key={path}
                  onClick={() => handleNavigation(path)}
                  className={`text-lg font-medium text-left hover:text-green-700 ${
                    pathname === path ? "text-green-800 font-semibold" : ""
                  }`}
                >
                  {label}
                </button>
              ))}
              <Button
                onClick={() => handleNavigation("/contact")}
                className="mt-4 bg-green-700 hover:bg-green-800" 
              >
                Get In Touch
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>
  
  )
}
