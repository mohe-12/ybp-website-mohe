"use client"
import React, { useEffect, useState } from "react"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

const sections = ["home", "about", "services", "product", "contact"]

const Header = () => {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      let current = "home"
      for (const id of sections) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          current = id
        }
      }
      setActiveSection(current)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    if (pathname !== "/") {
      setIsMenuOpen(false)
      return
    }

    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(id)
    setIsMenuOpen(false)
  }

  return (
    <header className="bg-green-700 text-white shadow-lg fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center space-x-2 shrink-0">
            <Image src="/images/logo.jpg" alt="YBP Logo" width={70} height={50} />
            <div className="leading-snug">
              <h1 className="text-xl font-semibold tracking-tight font-sans">
                Yetebaberut Beherawi Petroleum
              </h1>
              <h2 className="text-sm font-medium text-gray-100 font-sans">
                የተባበሩት ብሔራዊ ፔትሮሊየም (የብፔ)
              </h2>
              <p className="text-green-200 text-xs italic">Bale Robe Branch</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6 items-center font-medium tracking-wide">
            {sections.map((section) => (
              <a
                key={section}
                href={pathname === "/" ? `#${section}` : `/#${section}`}
                className={`capitalize transition-all duration-200 pb-1 border-b-2 ${
                  activeSection === section
                    ? "border-yellow-400 text-yellow-400"
                    : "border-transparent hover:border-yellow-300 hover:text-yellow-300"
                }`}
                onClick={(e) => handleNavLinkClick(e, section)}
              >
                {section}
              </a>
            ))}
          </nav>

          {/* Desktop Contact Us */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href={pathname === "/" ? "#contact" : "/#contact"}
              className="rounded-md font-semibold bg-yellow-500 px-4 py-2 hover:bg-yellow-600 text-green-800 text-sm"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} aria-label="Open Menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-green-700 text-white shadow-lg transform transition-transform duration-300 ease-in-out md:hidden flex flex-col p-4 z-[100] ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close Menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col space-y-4 text-lg">
          {sections.map((section) => (
            <a
              key={section}
              href={pathname === "/" ? `#${section}` : `/#${section}`}
              className={`capitalize transition-all duration-200 pb-1 ${
                activeSection === section
                  ? "border-yellow-400 text-yellow-400"
                  : "border-transparent hover:border-yellow-300 hover:text-yellow-300"
              }`}
              onClick={(e) => handleNavLinkClick(e, section)}
            >
              {section}
            </a>
          ))}
          <a
            href={pathname === "/" ? "#contact" : "/#contact"}
            className="mt-6 rounded-md bg-yellow-500 px-4 py-2 hover:bg-yellow-600 text-green-800 text-center"
          >
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
