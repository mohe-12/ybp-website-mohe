"use client"

import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [isScroll, setIsScroll] = useState(false)
  const sideMenuRef = useRef<HTMLDivElement>(null)

  // Toggle scroll style
  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

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

  // Smooth scroll and close menu
  const handleNavLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    closeMenu()
  }

  return (
    <header
      className={`bg-green-800 text-white shadow-lg fixed top-0 left-0 right-0 z-50 ${
        isScroll ? "py-2" : "py-4"
      } transition-all duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo and Company Info */}
          <div className="flex items-center space-x-3">
            <div className="rounded-full bg-white p-1">
              <Image
                src="/images/logo.webp"
                alt="Yetebaberut Beherawi Petroleum Logo"
                className="rounded-full"
                width={50}
                height={50}
              />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight font-sans">
                Yetebaberut Beherawi Petroleum
              </h1>
              <h2 className="text-sm font-sans">የተባበሩት ብሔራዊ ፔትሮሊየም (የብፔ)</h2>
              <p className="text-green-200 text-xs font-sans">Bale Robe Branch</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {["home", "about", "services", "product", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="hover:text-yellow-400 transition-colors capitalize"
                onClick={(e) => handleNavLinkClick(e, section)}
              >
                {section}
              </a>
            ))}

           
          </nav>

          {/* Mobile menu icon */}
          <button onClick={openMenu} className="md:hidden" aria-label="Open Menu">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        ref={sideMenuRef}
        className="fixed top-0 right-0 h-full w-64 bg-green-700 text-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out md:hidden flex flex-col p-4 z-[100]"
      >
        {/* Close icon */}
        <div className="flex justify-end mb-8">
          <button onClick={closeMenu} aria-label="Close Menu">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar links */}
        <nav className="flex flex-col space-y-4 text-lg">
          {["home", "about", "services", "product", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="hover:text-yellow-400 transition-colors capitalize"
              onClick={(e) => handleNavLinkClick(e, section)}
            >
              {section}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavLinkClick(e, "contact")}
            className="mt-6 px-6 py-2 border border-white rounded-full text-sm flex items-center justify-center gap-2"
          >
            Contact
            <Image
              src="/images/right-arrow-white.png"
              className=""
              alt="arrow icon"
              width={12}
              height={12}
            />
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
