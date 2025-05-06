"use client"

import { useEffect, useState } from "react"
import { useLoading } from "@/hooks/use-loading"
import Image from "next/image"

export default function FullscreenLoader() {
  const { setLoading } = useLoading()
  const [progress, setProgress] = useState(0)

  // Increment progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        return prev >= 100 ? 100 : prev + 5
      })
    }, 70)

    return () => clearInterval(progressInterval)
  }, [])

  // When progress completes, end loading (deferred)
  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => setLoading(false), 0)
      return () => clearTimeout(timeout)
    }
  }, [progress, setLoading])

  return (
    <div className="fixed top-0 left-0 z-[1000] h-screen w-screen bg-white flex flex-col items-center justify-center">
      <div className="relative h-12 w-24 overflow-hidden">
        <Image src="/images/marketing/logo2.png" alt="DMT Acres Logo" fill className="object-cover" />
      </div>
      <div className="w-32 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-700"
          style={{ width: `${progress}%`, backgroundColor: "#06402b" }}
        />
      </div>
    </div>
  )
}
