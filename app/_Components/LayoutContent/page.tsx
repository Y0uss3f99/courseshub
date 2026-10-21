"use client"

import { usePathname } from "next/navigation"
import Navbar from "../Navbar/page"
import Footer from "../footer/page"

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isCourseDetails = /^\/courses\/[^/]+$/.test(pathname)

  return (
    <>
      {!isCourseDetails && <Navbar />}

      {children}

      {!isCourseDetails && <Footer />}
    </>
  )
}