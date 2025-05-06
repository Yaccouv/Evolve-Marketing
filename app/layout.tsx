import "./globals.css"
import type { Metadata } from "next"
import ClientLayout from "@/components/client-layout"
import { SiteFooter } from "@/components/site-footer" // Import the SiteFooter component

export const metadata: Metadata = {
  title: "Evolve Marketing",
  description:
    " Our Operations Aims for Advanced Integrated Marketing Communications",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          <div className="flex flex-col min-h-screen">
            {/* This is where the main content will go */}
            <main className="flex-1">{children}</main>
            {/* Add the footer here */}
            <SiteFooter />
          </div>
        </ClientLayout>
      </body>
    </html>
  )
}
