"use client"

import React, { useRef, useEffect, useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"


const sections = ["home", "about", "services", "product", "contact"]

const Header = () => {
  const sideMenuRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState("home")

  // Scroll listener to update active section
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

  // Smooth scroll and close menu
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(id)
    closeMenu()
  }

  // Open sidebar
  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(0)"
    }
  }

  // Close sidebar
  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(100%)"
    }
  }

  return (
    <header className="bg-green-800 text-white shadow-lg fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo and Info */}
          <div className="flex items-center space-x-2 shrink-0">
            <div className="rounded-full bg-white p-1">
              <Image
                src="/images/logo.webp"
                alt="YBP Logo"
                className="rounded-full"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight font-Oswald">
                Yetebaberut Beherawi Petroleum
              </h1>
              <h2 className="text-sm font-sans">የተባበሩት ብሔራዊ ፔትሮሊየም (የብፔ)</h2>
              <p className="text-green-200 text-xs font-sans">Bale Robe Branch</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6 items-center font-Oswald">
            {sections.map((section) => (
              <a
                key={section}
                href={`#${section}`}
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

          {/* Right: Contact Me Button (desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            <a
              href="#contact"
              className="rounded-md font-semibold bg-yellow-500 px-4 py-2 hover:bg-yellow-600 text-green-800 text-sm"
            >
              Contact me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={openMenu} aria-label="Open Menu">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 h-full w-64 bg-green-700 text-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col p-4 z-[100]"
      >
        <div className="flex justify-end mb-8">
          <button onClick={closeMenu} aria-label="Close Menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col space-y-4 text-lg">
          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
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

          <a
            href="#contact"
            className="mt-6 rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700"
          >
            Contact me
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
