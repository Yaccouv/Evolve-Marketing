"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { LoadingProvider, useLoading } from "@/hooks/use-loading"
import FullscreenLoader from "@/components/ui/fullscreen-loader"

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LoadingProvider>
      <LayoutWithLoader>{children}</LayoutWithLoader>
    </LoadingProvider>
  )
}

function LayoutWithLoader({ children }: { children: React.ReactNode }) {
  const { loading } = useLoading()

  return (
    <>
      {loading && <FullscreenLoader />}
      <SiteHeader />
      <main>{children}</main>
    </>
  )
}
